// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

/* โจทย์ ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า
คำตอบ : สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น
*/

// ถ้าจะเข้าไปหาค่าข้างในต้องประกาศตัวแปรไว้ก่อนตัวนึง และใช้การ loop
// console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${สินค้าที่มีจำนวนต่ำสุด} ซึ่งมี ${จำนวนของสินค้า} ชิ้น`);

let productMinQuantity = inventory[0].quantity;
let productMinName;

for (let i = 0; i < inventory.length; i++){
  if (inventory[i].quantity < productMinQuantity){
    productMinQuantity = inventory[i].quantity;
    productMinName = inventory[i].name;
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${productMinName} ซึ่งมี ${productMinQuantity} ชิ้น`);