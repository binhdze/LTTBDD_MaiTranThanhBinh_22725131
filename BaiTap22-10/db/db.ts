import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('shopping.db');

export function initDB() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS products(
      product_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      price REAL NOT NULL CHECK(price>=0),
      stock INTEGER NOT NULL CHECK(stock>=0)
    );
  `);
  db.execSync(`
    CREATE TABLE IF NOT EXISTS cart_items(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id TEXT NOT NULL,
      qty INTEGER NOT NULL CHECK(qty>0),
      UNIQUE(product_id),
      FOREIGN KEY(product_id) REFERENCES products(product_id)
    );
  `);

  const rows = db.getAllSync('SELECT * FROM products') as { product_id: string; name: string; price: number; stock: number }[];
  if (!rows.length) {
    const samples = [
      ['p1', 'Sữa Vinamilk 1L', 32000, 20],
      ['p2', 'Bánh quy AFC', 15000, 50],
      ['p3', 'Mì Omachi', 7000, 100],
    ];
    samples.forEach(p =>
      db.runSync('INSERT INTO products VALUES (?, ?, ?, ?)', p)
    );
  }
}

export { db };

