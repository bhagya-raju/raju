import express from "express";
import mongoose from "mongoose";
import client from "./client.js";
import user from "./user.js";
import report from "./report.js"
import cors from "cors";
import { Buffer } from 'buffer';
import multer from "multer";
import fs from "fs"; 

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

mongoose
  .connect(
    "mongodb+srv://bhagyarajupentakota:raju123@cluster0.mi8zmku.mongodb.net/"
  )
  .then(() => console.log("DB connected...."));

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.post('/clients', async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    const newClient = new client({
      name,
      email,
      mobile,
    });

    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    const newUser = new user({
      name,
      email,
      mobile,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/report', async (req, res) => {
  try {
    const {
      client,
      camname,
      location,
      violationType,
      tags,
      assigned,
      status,
      live,
      comments,
      imagepath, 
    } = req.body;

  
    let imageBase64 = '';
    if (imagepath) {
      const imageBuffer = fs.readFileSync(imagepath);
      imageBase64 = imageBuffer.toString('base64');
    }

    const newReport = new report({
      client,
      camname,
      location,
      violationType,
      tags,
      assigned,
      status,
      imagepath: imageBase64,
      live,
      comments,
    });

    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/allreports", async (req, res) => {
  try {
    let allreports = await report.find();

    return res.json(allreports);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});


app.put('/report/:id', upload.single('image'), async (req, res) => {
  try {
    const { tags, status, assigned } = req.body;

    const updatedReport = await report.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          tags,
          status,
          assigned,
        },
      },
      { new: true }
    );

    res.json(updatedReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/report/:id/comment', async (req, res) => {
  try {
    const { user, message } = req.body;

    const updatedReport = await report.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            user,
            message,
            time: new Date(),
          },
        },
      },
      { new: true }
    );

    res.json(updatedReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(5000, () => console.log("Server running..."));
