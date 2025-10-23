import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { initDB } from '../db/db';

export default function Layout() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Sản phẩm' }} />
      <Stack.Screen name="cart" options={{ title: 'Giỏ hàng' }} />
      <Stack.Screen name="invoice" options={{ title: 'Hoá đơn' }} />
    </Stack>
  );
}
