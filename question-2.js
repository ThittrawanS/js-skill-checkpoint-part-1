// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

/* - ให้เขียนโปรแกรมดังนี้   
    1) ให้แก้ไขจำนวนสินค้า “Apple” จาก `100` เป็น `200`    
    2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา `20` บาท และมีจำนวน `300` ชิ้นในสต็อก    
    3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
    ** ผลลัพธ์ของโปรแกรมควรจะแสดงออกมาทางหน้าจอ Console แบบนี้ **
    ** มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก 13500 บาท **
*/

//1
inventory[0].quantity = 200;
//console.log(inventory);

//2
inventory.push({ name: "Orange", price: 20, quantity: 300 });
//console.log(inventory);

//3
let totalProductPrice = 0; // ผลรวม คือ ราคา คูณ จำนวนสินค้า
for (let i = 0; i < inventory.length; i++) {
    totalProductPrice += inventory[i].price * inventory[i].quantity;
}
// เช็ค (35*200) = 7000 // (10*50) = 500 // (20*300) = 6000 // 7000 + 500 + 6000 = 13500
//console.log(totalProductPrice);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalProductPrice} บาท`);