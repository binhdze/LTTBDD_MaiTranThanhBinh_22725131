import { useRouter } from 'expo-router';
import { Button, FlatList, Text, View } from 'react-native';
import { addToCart } from '../db/cart.repo';
import { getProducts } from '../db/product.repo';

export default function ProductScreen() {
  const router = useRouter();
  const products = getProducts();

  return (
    <View>
      <Button title="Xem Giỏ hàng" onPress={() => router.push('/cart')} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.product_id}
        renderItem={({ item }) => (
          <View style={{ padding: 8 }}>
            <Text>{item.name} - {item.price}đ ({item.stock} tồn)</Text>
            <Button title="Thêm vào giỏ" onPress={() => addToCart(item.product_id)} />
          </View>
        )}
      />
    </View>
  );
}
