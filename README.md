ตัวอย่าง** facebook.com   เป็น http://localhost:4200/Zqli9t
1.database=Mongodb<br>
back-end=node js lib express.js<br>
front-end=angular<br>
deployment = Docker สำหรับ บน cloud vm เพราะ management vm ได้ทุกอย่าง <br>
แต่ถ้า server เป็น offline ก็จะใช้ตัว pm2 เป็นตัวจัดการ เพราะมันทำงานงายด้วยเขียนใน ecosystem file ของ pm2<br>

2.ให้สร้าง Web services สำหรับแอปพลิเคชัน E-Commerce เจ้านึง โดยออกแบบสถาปัตยกรรมของระบบ ให้อยู่ในรูปแบบของ microservices โดยมีฟังก์ชั่นการทำงาน ดังนี้
2.1Authentication<br>
		2.1.1สามารถสมัครสมาชิกได้<br>
		2.1.2มีระบบ Login<br>
2.2User management<br>
		2.2.1เรียกดู Profile ของตัวเอง<br>
		2.2.2เรียกดู Order history ของตัวเอง<br>
		2.2.3Product management<br>
		2.2.4เรียกดู Product ทั้งหมดที่มีในระบบ<br>
2.3สามารถดูข้อมูลของแต่ละ Product ได้<br>
		2.3.1Order management<br>
		2.3.2สร้างรายการคำสั่งซื้อได้<br>
		2.3.3ยกเลิกคำสั่งซื้อ<br>
		2.3.4ดูรายละเอียดคำสั่งซื้อ<br>
เฉลย<br>
**https://github.com/guygunts/examples<br>
