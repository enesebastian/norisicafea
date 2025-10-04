import type { Product } from "./types";
import type { Category } from "./types";

export const CATEGORIES: Category[] = [
   { name:"Beer", description:"330ml sticla"},
   { name:"Vin", description:"330ml pahar / 700ml sticla"},
   { name:"Coffee, Tea & Drinks", description:""},
   { name:"Sweets", description:""},
   { name:"Snacks", description:""},




]

export const PRODUCTS: Product[] = [
  { id: "1", name: "Summer Ale", description: "", price: 13, category: "Beer" },
  { id: "2", name: "Irish Red Alea", description: "", price: 2.9, category: "Beer" },
  { id: "3", name: "Dark light Ale", description: "", price: 2.9, category: "Beer" },
  { id: "4", name: "German Pilsner", description: "", price: 2.9, category: "Beer" },
  { id: "5", name: "Belgian Light", description: "", price: 2.9, category: "Beer" },
  { id: "6", name: "Blonde Ale", description: "", price: 2.9, category: "Beer" },
  { id: "7", name: "Domeniile Amira - Emosia", description: "Busuioaca de bohotin rose sec", price: 15, category: "Vin" },
  { id: "8", name: "Domeniile Amira - Mystery", description: "Aligote alb sec", price: 15, category: "Vin" },
  { id: "9", name: "Domeniile Averesti - Nativus", description: "Alb demisec ", price: 15, category: "Vin" },
  { id: "10", name: "Domeniile Purcari - Rara Neagra - Saperavi", description: "Rosu sec", price: 15, category: "Vin" },
  { id: "11", name: "Espresso", description: "", price: 9, category: "Coffee, Tea & Drinks" },
  { id: "12", name: "Cappucin", description: "", price: 10, category: "Coffee, Tea & Drinks" },
  { id: "13", name: "Latte", description: "", price: 10, category: "Coffee, Tea & Drinks" },
  { id: "14", name: "Flat white", description: "", price: 15, category: "Coffee, Tea & Drinks" },
  { id: "15", name: "Apa minerala/plata", description: "330ml sticla", price: 8, category: "Coffee, Tea & Drinks" },
];
