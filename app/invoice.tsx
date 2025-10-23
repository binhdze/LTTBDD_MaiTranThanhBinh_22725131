import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { db } from '../db/db';

type InvoiceItem = {
  name: string;
  price: number;
  qty: number;
  total: number;
};

export default function InvoiceScreen() {
  const router = useRouter();
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [sum, setSum] = useState(0);
  const VAT_RATE = 0.1; // tuỳ chọn

  const loadInvoice = () => {
    const rows = db.getAllSync<InvoiceItem>(`
      SELECT p.name, p.price, c.qty, (p.price * c.qty) AS total
      FROM cart_items c JOIN products p ON c.product_id = p.product_id
    `);
    setItems(rows);
    const total = rows.reduce((acc, i) => acc + i.total, 0);
    setSum(total);
  };

  useEffect(() => {
    loadInvoice();
  }, []);

  const vat = sum * VAT_RATE;
  const grand = sum + vat;

  const clearCart = () => {
    db.runSync('DELETE FROM cart_items');
    router.replace('/');
  };

  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>🧾 Hoá đơn</Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#eee',
              paddingVertical: 6,
            }}
          >
            <Text>{item.name}</Text>
            <Text>
              {item.qty} × {item.price.toLocaleString()}đ ={' '}
              {item.total.toLocaleString()}đ
            </Text>
          </View>
        )}
      />

      <View style={{ marginTop: 12 }}>
        <Text>Tổng: {sum.toLocaleString()}đ</Text>
        <Text>VAT (10%): {vat.toLocaleString()}đ</Text>
        <Text style={{ fontWeight: 'bold' }}>
          Thành tiền: {grand.toLocaleString()}đ
        </Text>
        <Text>Ngày: {new Date().toLocaleString()}</Text>
      </View>

      <View style={{ marginTop: 16 }}>
        <Button title="Thanh toán" onPress={clearCart} />
      </View>
    </View>
  );
}
