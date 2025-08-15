#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting production build...');

try {
  // Clean dist directory
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
    console.log('✅ Cleaned dist directory');
  }

  // Create necessary directories
  fs.mkdirSync('dist', { recursive: true });
  fs.mkdirSync('dist/public', { recursive: true });

  // Build the client
  console.log('📦 Building client...');
  execSync('npx vite build --config vite.config.production.js', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  // Copy production server
  fs.copyFileSync('server.production.cjs', 'dist/server.production.js');
  console.log('✅ Copied production server');
  
  // Create package.json for production
  const prodPackage = {
    "name": "soe-robotics-club-production",
    "version": "1.0.0",
    "type": "commonjs",
    "main": "server.production.js",
    "scripts": {
      "start": "node server.production.js"
    },
    "dependencies": {
      "express": "^4.21.2",
      "zod": "^3.24.2"
    }
  };
  
  fs.writeFileSync('dist/package.json', JSON.stringify(prodPackage, null, 2));
  console.log('✅ Created production package.json');
  
  console.log('✨ Production build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}