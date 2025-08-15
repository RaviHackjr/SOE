const express = require("express");
const { z } = require("zod");

const app = express();

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// In-memory storage for the serverless function
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

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);
    
    res.status(201).json({ 
      message: "Application submitted successfully",
      id: submission.id 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        message: "Invalid form data",
        errors: error.errors 
      });
    } else {
      console.error("Contact submission error:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  }
});

// Get all contact submissions (for admin use)
app.get("/api/contact", async (req, res) => {
  try {
    const submissions = await storage.getAllContactSubmissions();
    res.json(submissions);
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    res.status(500).json({ 
      message: "Internal server error" 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Export for Vercel
module.exports = app;