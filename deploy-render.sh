#!/bin/bash

echo "🚀 Preparing SOE Robotics Club for Render deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
node build.production.cjs

# Test the production server locally (optional)
echo "🧪 Testing production build..."
timeout 10s node dist/server.production.js &
PID=$!

sleep 3

if curl -f http://localhost:10000/api/health > /dev/null 2>&1; then
    echo "✅ Production server test passed!"
else
    echo "⚠️ Production server test failed, but deployment files are ready."
fi

kill $PID 2>/dev/null || true

echo "📋 Render Deployment Instructions:"
echo "1. Push your code to GitHub"
echo "2. Go to https://render.com"
echo "3. Create a new Web Service"
echo "4. Connect your GitHub repository"
echo "5. Render will automatically use the render.yaml configuration"
echo "6. Click 'Create Web Service'"
echo ""
echo "✅ All deployment files are ready for Render!"