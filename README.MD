🎟️ Synergia Event Booking API (MongoDB Version)
📋 Overview

This project is an extended version of the Synergia Event Booking API built using Node.js, Express, and MongoDB (Mongoose).
It provides a RESTful API for managing event bookings, including CRUD operations and advanced querying (search & filter).

🚀 Features

Connects Node.js + Express app to MongoDB using Mongoose

Performs CRUD operations for bookings

Supports filtering and searching

Uses environment variables for secure database connection

Returns proper HTTP status codes and JSON responses

🏗️ Technologies Used

Node.js

Express.js

MongoDB (Atlas)

Mongoose

dotenv (for environment configuration)

Postman (for API testing)

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/HARSHITHA2005268/synergia-mongo-api.git
cd synergia-mongo-api

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

In the project root folder, create a .env file and add your MongoDB connection string:

MONGO_URI = mongodb+srv://kulalharshitha2005:<password>@cluster0.vtu6f.mongodb.net/synergia
PORT = 3000


⚠️ Replace <password> with your actual MongoDB password.
Do not upload .env to GitHub.

4️⃣ Run the server
node serverr.js


If successful:

✅ MongoDB connected successfully
🚀 Server running on port 3000

🧩 API Endpoints
No	Method	Endpoint	Description
1.	GET	/api/bookings	Get all bookings
2.	POST	/api/bookings	Create a new booking
3.	GET	/api/bookings/:id	Get booking by ID
4.	PUT	/api/bookings/:id	Update booking by ID
5.	DELETE	/api/bookings/:id	Delete booking by ID
6.	GET	/api/bookings/search?email=xyz@example.com	Search bookings by email
7.	GET	/api/bookings/filter?event=Synergia	Filter bookings by event name
🧠 Example POST Request

URL: http://localhost:3000/api/bookings
Body (JSON):

{
  "name": "Harshitha",
  "email": "harshitha@example.com",
  "event": "Tech Fest 2025",
  "ticketType": "VIP"
}


Response:

{
  "message": "Booking created successfully",
  "booking": {
    "_id": "6722f0e82a7b46e612f51b2c",
    "name": "Harshitha",
    "email": "harshitha@example.com",
    "event": "Tech Fest 2025",
    "ticketType": "VIP",
    "createdAt": "2025-10-30T16:22:06.035Z"
  }
}

📸 Output Screenshots

All output screenshots (Postman + MongoDB) are available inside the screenshots folder

