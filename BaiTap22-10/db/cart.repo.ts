import { CartItem } from '../models/types';
import { db } from './db';

export function getCart(): CartItem[] {
  return db.getAllSync<CartItem>('SELECT * FROM cart_items');
}

export function addToCart(product_id: string) {
  const exist = db.getFirstSync('SELECT * FROM cart_items WHERE product_id=?', [product_id]);
  if (exist) {
    db.runSync('UPDATE cart_items SET qty = qty + 1 WHERE product_id=?', [product_id]);
  } else {
    db.runSync('INSERT INTO cart_items(product_id, qty) VALUES(?, ?)', [product_id, 1]);
  }
}

export function updateQty(id: number, qty: number) {
  db.runSync('UPDATE cart_items SET qty=? WHERE id=?', [qty, id]);
}

export function removeItem(id: number) {
  db.runSync('DELETE FROM cart_items WHERE id=?', [id]);
}
