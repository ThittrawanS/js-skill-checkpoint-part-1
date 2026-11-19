// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

/* โจทย์- ให้เขียน function ดังต่อไปนี้
ให้เขียนฟังก์ชัน checkPasswordStrength ซึ่งรับ userPassword เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้
1) จำนวนตัวอักษรใน userPassword ==> ผลลัพธ์
2) น้อยกว่า 6 ==> "Weak"
3) ตั้งแต่ 6 ถึง 10 ==> "Medium"
4) มากกว่า 10 ==> "Strong"
*/

// น้อยว่า 6 ==> "Weak" / if (..... < 6) จะ return "Weak"
// ตั้งแต่ 6 ถึง 10 ==> "Medium" / if (..... >= 6 && ..... <= 10) จะ return "Medium"
// มากกว่า 10 ==> "Strong" / if (..... > 10) จะ return "Strong"

function checkPasswordStrength(userPassword){
    if (userPassword.length < 6){
      return "Weak";
    }
    else if (userPassword.length >= 6 && userPassword.length <= 10){
        return "Medium";
    }
    else if (userPassword.length > 10){
        return "Strong";
    }
  }
   userPassword = "Win";
   console.log(checkPasswordStrength(userPassword));
   userPassword = "Thittrawan";
   console.log(checkPasswordStrength(userPassword));
   userPassword = "winTeamTeal";
   console.log(checkPasswordStrength(userPassword));

