// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";

// เริ่มเขียนโค้ดตรงนี้

/* โจทย์ 
ให้เขียนฟังก์ชันชื่อ calculateTotalPrice ที่รับ products และ promotionCode เป็น Argument  
โดยที่ฟังก์ชันจะ Return ผลลัพธ์ออกมาเป็น มูลค่ารวมของจำนวนสินค้าทั้งหมดในตะกร้าสินค้า
โดยที่จะต้องสามารถคำนวนมูลค่าพร้อมโค้ดส่วนลดได้ตามเงื่อนไขต่อไปนี้
*/

// function calculateTotalPrice(products, promotionCode){}
// ทำ loop เพื่อเข้าไปหาข้อมูลสินค้าก่อน แล้ว ทำ if เพื่อทำเงื่อนไขโจทย์
// เงื่อนไขส่วนลด "SALE20" ==> ส่วนลด 20เปอ , "SALE50" ==> ส่วนลด 50เปอ , ไม่มี ==> ไม่ได้ส่วนลด
// return มูลค่าพร้อมส่วนลด = (ราคารวมทั้งหมด - ส่วนลด)
// ราคาสินค้าในตะกร้า = 85
// SALE20 ==> 68 และ SALE50 ==> 42.5

function calculateTotalPrice(products, promotionCode){
  let totalPrice = 0;

   for (let i = 0; i < products.length; i++){
    totalPrice += products[i].price * products[i].quantity;
  }
  // เมื่อวนครบแล้วจะได้ราคาทั้งตะกร้า ละมาทำ if else เพื่อทำส่วนลดต่อ
  if (promotionCode === "SALE20"){
    totalPrice = totalPrice * 0.8;
  }
  else if (promotionCode === "SALE50"){
    totalPrice = totalPrice * 0.5;
  }
  else {
    totalPrice = totalPrice;
  }
  return totalPrice;

}
console.log(calculateTotalPrice(products, promotionCode));