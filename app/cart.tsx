import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native';
import { removeItem, updateQty } from '../db/cart.repo';
import { db } from '../db/db';
import { CartItem } from '../models/types';

type CartDetail = CartItem & {
  name: string;
  price: number;
  stock: number;
};

export default function CartScreen() {
  const router = useRouter();
  const [cart, setCart] = useState<CartDetail[]>([]);

  const loadCart = () => {
    const rows = db.getAllSync<CartDetail>(`
      SELECT c.id, c.product_id, c.qty, p.name, p.price, p.stock
      FROM cart_items c JOIN products p ON c.product_id = p.product_id
    `);
    setCart(rows);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handleQtyChange = (item: CartDetail, newQty: number) => {
    if (newQty <= 0) {
      Alert.alert('Lỗi', 'Số lượng phải lớn hơn 0');
      return;
    }
    if (newQty > item.stock) {
      Alert.alert('Lỗi', `Không đủ tồn kho (${item.stock})`);
      return;
    }
    updateQty(item.id, newQty);
    loadCart();
  };

  const handleRemove = (id: number) => {
    removeItem(id);
    loadCart();
  };

  const total = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🛒 Giỏ hàng</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 8,
              marginBottom: 8,
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 10,
            }}
          >
            <Text>{item.name}</Text>
            <Text>Giá: {item.price.toLocaleString()}đ</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
              <Button title="-" onPress={() => handleQtyChange(item, item.qty - 1)} />
              <TextInput
                style={{
                  width: 40,
                  textAlign: 'center',
                  marginHorizontal: 8,
                  borderBottomWidth: 1,
                }}
                value={String(item.qty)}
                keyboardType="numeric"
                onChangeText={(t) => {
                  const val = parseInt(t) || 1;
                  handleQtyChange(item, val);
                }}
              />
              <Button title="+" onPress={() => handleQtyChange(item, item.qty + 1)} />
              <View style={{ marginLeft: 12 }}>
                <Button title="Xóa" color="red" onPress={() => handleRemove(item.id)} />
              </View>
            </View>
          </View>
        )}
      />

      <Text style={{ fontSize: 16, marginVertical: 8 }}>
        Tạm tính: {total.toLocaleString()}đ
      </Text>

      <Button
        title="Xem Hoá đơn"
        onPress={() => router.push('/invoice')}
        disabled={cart.length === 0}
      />
    </View>
  );
}
