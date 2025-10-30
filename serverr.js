import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Booking from "./models/Booking.js";  // Import model

dotenv.config();

const app = express();
app.use(express.json());


mongoose
  .connect("mongodb+srv://kulalharshitha2005:Harshitha%4021@cluster0.vtu6f.mongodb.net/synergia")
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));


app.post("/api/bookings", async (req, res) => {
  try {
    const { name, email, event, ticketType } = req.body;

    if (!name || !email || !event) {
      return res.status(400).json({ message: "Name, email, and event are required" });
    }

    const newBooking = new Booking({ name, email, event, ticketType });
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: savedBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/bookings/:id", async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({
      message: "Booking updated successfully",
      updatedBooking,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.delete("/api/bookings/:id", async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);

    if (!deletedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/api/bookings/search", async (req, res) => {
  try {
    const { name, event } = req.query;

    const filter = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (event) filter.event = { $regex: event, $options: "i" };

    const bookings = await Booking.find(filter);

    res.status(200).json({
      count: bookings.length,
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/api/bookings/filter", async (req, res) => {
  try {
    const { event } = req.query;
    const results = await Booking.find({ event });
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
