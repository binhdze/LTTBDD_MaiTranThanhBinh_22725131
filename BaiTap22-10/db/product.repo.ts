import { Product } from '../models/types';
import { db } from './db';

export function getProducts(): Product[] {
  const res = db.getAllSync<Product>('SELECT * FROM products');
  return res;
}
