1.database=Mongodb
back-end=node js lib express.js
front-end=angular
deployment = Docker สำหรับ บน cloud vm เพราะ management vm ได้ทุกอย่าง 
แต่ถ้า server เป็น offline ก็จะใช้ตัว pm2 เป็นตัวจัดการ เพราะมันทำงานงายด้วยเขียนใน ecosystem file ของ pm2
2.ให้สร้าง Web services สำหรับแอปพลิเคชัน E-Commerce เจ้านึง โดยออกแบบสถาปัตยกรรมของระบบ ให้อยู่ในรูปแบบของ microservices โดยมีฟังก์ชั่นการทำงาน ดังนี้
2.1Authentication
		2.1.1สามารถสมัครสมาชิกได้
		2.1.2มีระบบ Login
2.2User management
		2.2.1เรียกดู Profile ของตัวเอง
		2.2.2เรียกดู Order history ของตัวเอง
		2.2.3Product management
		2.2.4เรียกดู Product ทั้งหมดที่มีในระบบ
2.3สามารถดูข้อมูลของแต่ละ Product ได้
		2.3.1Order management
		2.3.2สร้างรายการคำสั่งซื้อได้
		2.3.3ยกเลิกคำสั่งซื้อ
		2.3.4ดูรายละเอียดคำสั่งซื้อ
เฉลย
**https://github.com/guygunts/examples
