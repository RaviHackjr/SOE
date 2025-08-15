const express = require("express");
const path = require("path");
const { z } = require("zod");

const app = express();

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// In-memory storage
const storage = {
  contactSubmissions: new Map(),
  
  createContactSubmission: async function(submission) {
    const id = Math.random().toString(36).substring(7);
    const contactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  },
  
  getAllContactSubmissions: async function() {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
};

// Schema validation
const insertContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  experience: z.string().min(1),
  interests: z.string().min(1),
});

// API Routes
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);
    console.log("Contact submission received:", submission);
    
    res.status(201).json({
      message: "Thank you for your interest! We'll contact you soon.",
      data: submission
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    res.status(400).json({
      error: "Invalid form data",
      details: error.errors || error.message
    });
  }
});

// Get all contact submissions (for admin)
app.get("/api/contact", async (req, res) => {
  try {
    const submissions = await storage.getAllContactSubmissions();
    res.json(submissions);
  } catch (error) {
    console.error("Get submissions error:", error);
    res.status(500).json({ error: "Failed to retrieve submissions" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    service: "SOE Robotics Club API"
  });
});

// SPA fallback - serve index.html for all non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 SOE Robotics Club server running on port ${port}`);
  console.log(`📱 Health check: http://localhost:${port}/api/health`);
});