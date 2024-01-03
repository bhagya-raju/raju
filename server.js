import express from "express";
import mongoose from "mongoose";
import client from "./client.js";
import user from "./user.js";
import report from "./report.js"
import cors from "cors";
import { Buffer } from 'buffer';
import multer from "multer";
import fs from "fs"; // Import the 'fs' module to read the image file

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
      imagepath, // Assuming imagepath is a local file path
    } = req.body;

    // Read the image file and convert it to base64
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
      imagepath: imageBase64, // Store the image as base64
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



// app.post("/register",upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).send('No file uploaded.');
//     }

//     const { fullname, email, mobile, gender, dob, role,position,address, secretkey } = req.body;
//     const fileBuffer = req.file.buffer;
//     const image = fileBuffer.toString('base64');

//     // Check if the user already exists
//     const existingUser = await devuser.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already registered" });
//     }

//     // Create a new user
//     const newUser = new devuser({
//       fullname,
//       email,
//       mobile,
//       gender,
//       dob,
//       role,
//       position,
//       address,
//       secretkey,
//       image
//     });

//     await newUser.save();

//     console.log("New User Registered");

//     // Respond with success message
//     return res.status(201).json({ message: "New User Registered" });
//   } catch (err) {
//     console.error("Error during registration:", err.message);
//     return res.status(500).json({ error: "Server Error" });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const exist = await devuser.findOne({ email });
//     console.log(exist);
//     if (!exist) {
//       return res.status(400).send("User Not Exist");
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const isPasswordCorrect = await bcrypt.compare(password, exist.password);

//     if (!isPasswordCorrect) {
//       console.log(hashedPassword);
//       console.log(exist.password);
//       return res.status(400).send("Invalid Credentials");
//     }
//     const payload = {
//       user: {
//         id: exist.id,
//       },
//     };

//     Jwt.sign(payload, "raju", { expiresIn: 360000000 }, (err, token) => {
//       if (err) throw err;
//       return res.json({ token });
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error");
//   }
// });

// app.get("/allprofiles", middleware, async (req, res) => {
//   try {
//     let allprofiles = await devuser.find();

//     return res.json(allprofiles);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error");
//   }
// });

// app.get("/tmlead", middleware, async (req, res) => {
//   try {
//     let tmlead = await devuser.find({ role: "Team Lead" });

//     return res.json(tmlead);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error");
//   }
// });

// app.get("/myprofile/:id", middleware, async (req, res) => {
//   try {
//     const userId = req.params.id;
//     let myprofile = await devuser.findById(userId);
//     return res.json(myprofile);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error");
//   }
// });

// app.get("/profile",middleware, async (req, res) => {
//   try {
//     let myprofile = await devuser.findById(req.user.id);
//     return res.json(myprofile);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error");
//   }
// });

// app.get("/tltm", middleware, async (req, res) => {
//   try {
//     let allprofiles = await devuser.find({ assignedto: req.user.id });
//     return res.json(allprofiles);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error");
//   }
// });

// app.post("/addreview", middleware, async (req, res) => {
//   try {
//     const {
//       goalsAndObjectives,
//       achievementsAndResponsibilities,
//       significantMilestones,
//       lessonsLearned,
//       teamDynamicsChanges,
//       teamImprovements,
//     } = req.body;
//     const exist = await devuser.findById(req.user.id);

//     if (exist && exist.active === false) {
//       exist.active = true;
//       await exist.save();
//       console.log("User activated successfully");
//     }

//     const lead = await devuser.findById(exist.assignedto);
//     const addReview = new Review({
//       reviewproviderid: exist.assignedto,
//       reviewprovidername: lead.fullname,
//       taskworker: req.user.id,
//       goalsAndObjectives: goalsAndObjectives,
//       achievementsAndResponsibilities: achievementsAndResponsibilities,
//       significantMilestones: significantMilestones,
//       lessonsLearned: lessonsLearned,
//       teamDynamicsChanges: teamDynamicsChanges,
//       teamImprovements: teamImprovements,
//     });

//     await addReview.save();
//     console.log("Review added successfully");

//     return res.status(200).send("Review added successfully");
//   } catch (err) {
//     console.error("Error adding review:", err);
//     return res.status(500).send("Server Error: " + err.message);
//   }
// });

// app.post("/feedback", middleware, async (req, res) => {
//   try {
//     const { id } = req.body;
//     let allreviews = await Review.find();
//     const getreview = await allreviews.filter(
//       (review) => review.taskworker == id
//     );
//     return res.status(200).json(getreview);
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send("Server Error");
//   }
// });

// app.put("/signup", async (req, res) => {
//   try {
//     const { email, secretkey, password } = req.body;
    
//     let myprofile = await devuser.findOne({ email });

//     if (myprofile.secretkey == secretkey) {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const updatedprofile = await devuser.findByIdAndUpdate(
//         myprofile._id,
//         { password: hashedPassword },
//         { new: true }
//       );

//       console.log("Password updated");
//       res.json(updatedprofile);
//     } else {
//       res.status(404).send("Profile not found or secret key is incorrect");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });



// app.put("/tlassign", async (req, res) => {
//   try {
//     const { secretkey, assignedto } = req.body;
//     let myprofile = await devuser.findById(secretkey);
//     const updatedprofile = await devuser.findByIdAndUpdate(
//       secretkey,
//       { assignedto: assignedto },
//       { new: true }
//     );
//     res.json(updatedprofile);
//     console.log("Team Lead Assigned");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.put("/updatereview", async (req, res) => {
//   try {
//     const { secretkey } = req.body;
//     const updatedprofile = await devuser.findByIdAndUpdate(
//       secretkey,
//       { review: true, reviewed: false },
//       { new: true }
//     );
//     res.json(updatedprofile);
//     console.log("Review Started");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.put("/reviewstatus", middleware, async (req, res) => {
//   try {
//     const reviewStatus = await devuser.findByIdAndUpdate(
//       req.user.id,
//       { active: true },
//       { new: true }
//     );

//     await reviewStatus.save();
//     console.log("Review Status Updated successfully");

//     return res.status(200).send("Review Status Updated successfully");
//   } catch (err) {
//     console.error("Error adding review:", err);
//     return res.status(500).send("Server Error: " + err.message);
//   }
// });

// app.put("/updatefeedback", async (req, res) => {
//   try {
//     const { id, comments, rating } = req.body;

//     // Assuming Review is a mongoose model
//     const updatedProfile = await Review.findOneAndUpdate(
//       { taskworker: id },
//       { comments: comments, rating: rating, status: true },
//       { new: true }
//     );

//     await devuser.findByIdAndUpdate(id, { reviewed: true }, { new: true });

//     if (!updatedProfile) {
//       return res.status(404).json({ error: "Profile not found" });
//     }

//     console.log("Review Updated:", updatedProfile);
//     res.json(updatedProfile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.listen(5000, () => console.log("Server running..."));
