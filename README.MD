# 🎯 Synergia Event Booking API (MongoDB Version)

## 📖 Project Description
This is my Synergia Event Booking API built using **Node.js**, **Express.js**, and **MongoDB**.  
The project allows me to perform CRUD operations for event bookings, connect to a cloud MongoDB database, and handle event-related data efficiently.

---

## ⚙️ Objectives
- Connect my Node.js and Express API to MongoDB using Mongoose  
- Perform full CRUD operations on the database  
- Implement search and filtering features  
- Follow proper REST API standards  

---

## 🧠 Technologies Used
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- dotenv  
- Postman  

---

## 🧩 Schema Design
**Booking Model:**
```json
{
  "name": "String",
  "email": "String",
  "event": "String",
  "createdAt": "Date"
}
🚀 API Endpoints
Method	Endpoint	Description
POST	/api/bookings	Create a new booking
GET	/api/bookings	Get all bookings
GET	/api/bookings/:id	Get booking by ID
PUT	/api/bookings/:id	Update booking details
DELETE	/api/bookings/:id	Delete booking by ID
GET	/api/bookings/search?name=value	Search bookings by name
GET	/api/bookings/search?event=value	Search bookings by event name

⚙️ Installation & Setup
1️⃣ Clone my repository

git clone https://github.com/HARSHITHA2005268/synergia-mongo-api.git
cd synergia-mongo-api
2️⃣ Install dependencies

npm install
3️⃣ Create a .env file
Add my MongoDB URI and port number inside it:

ini

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/synergia
PORT=3000
4️⃣ Run my server

node server.js
🧾 Example Request & Response
POST /api/bookings

json
Copy code
{
  "name": "Harshitha",
  "email": "harshitha@example.com",
  "event": "Tech Fest 2025"
}
Response:

json
Copy code
{
  "message": "Booking created successfully",
  "booking": {
    "_id": "690390ae2c4d43a427306170",
    "name": "Harshitha",
    "email": "harshitha@example.com",
    "event": "Tech Fest 2025",
    "createdAt": "2025-10-30T16:22:06.035+00:00"
  }
}
📸 Output Screenshots
All my output screenshots are placed inside the screenshots/ folder for reference.
They include:

Database connection success

CRUD operation results from Postman

MongoDB data entries

👩‍💻 Author
Name: Harshitha Kulal
Project: Synergia Event Booking API (MongoDB Version)
Frameworks Used: Node.js, Express.js, MongoDB
Tools Used: Postman, Visual Studio Code

💡 Additional Notes
My project demonstrates how to integrate MongoDB with an Express API.

It also includes search, filter, and full CRUD support.

This API can be extended for real-world event management systems.

