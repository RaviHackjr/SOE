#!/bin/bash

echo "🚀 Deploying SOE Robotics Club to Vercel..."

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Checking Vercel authentication..."
vercel whoami || vercel login

# Deploy to production
echo "🌐 Deploying to production..."
vercel --prod

echo "✅ Deployment completed! Check your Vercel dashboard for the live URL."