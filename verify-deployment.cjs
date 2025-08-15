#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying deployment readiness...\n');

const checks = [
  {
    name: 'Vercel Configuration',
    files: ['vercel.json', 'api/index.js'],
    required: true
  },
  {
    name: 'Render Configuration', 
    files: ['render.yaml', 'server.production.js'],
    required: true
  },
  {
    name: 'Build Scripts',
    files: ['build.production.cjs', 'vite.config.production.js'],
    required: true
  },
  {
    name: 'Client Files',
    files: ['client/index.html', 'client/src/App.tsx', 'client/src/main.tsx'],
    required: true
  },
  {
    name: 'Configuration Files',
    files: ['package.json', 'tsconfig.json', 'tailwind.config.ts', 'postcss.config.js'],
    required: true
  },
  {
    name: 'Deployment Scripts',
    files: ['deploy-vercel.sh', 'deploy-render.sh'],
    required: false
  },
  {
    name: 'Documentation',
    files: ['DEPLOYMENT-GUIDE.md', 'README.md'],
    required: false
  }
];

let allPassed = true;
let totalChecks = 0;
let passedChecks = 0;

checks.forEach(check => {
  console.log(`📋 Checking ${check.name}...`);
  
  check.files.forEach(file => {
    totalChecks++;
    if (fs.existsSync(file)) {
      console.log(`  ✅ ${file}`);
      passedChecks++;
    } else {
      console.log(`  ${check.required ? '❌' : '⚠️'} ${file} ${check.required ? '(REQUIRED)' : '(OPTIONAL)'}`);
      if (check.required) {
        allPassed = false;
      }
    }
  });
  
  console.log('');
});

// Additional checks
console.log('🔧 Checking package.json dependencies...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredDeps = [
    'react',
    'react-dom',
    'express',
    'wouter',
    '@tanstack/react-query',
    'framer-motion',
    'zod',
    'tailwindcss'
  ];
  
  requiredDeps.forEach(dep => {
    if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
      console.log(`  ✅ ${dep}`);
    } else {
      console.log(`  ❌ ${dep} (missing)`);
      allPassed = false;
    }
  });
} catch (error) {
  console.log(`  ❌ Error reading package.json: ${error.message}`);
  allPassed = false;
}

console.log('\n📊 Summary:');
console.log(`  Total files checked: ${totalChecks}`);
console.log(`  Files present: ${passedChecks}`);
console.log(`  Success rate: ${Math.round((passedChecks / totalChecks) * 100)}%`);

if (allPassed) {
  console.log('\n✅ All required files are present! Ready for deployment.');
  console.log('\n🚀 Deployment Options:');
  console.log('  Vercel: ./deploy-vercel.sh');
  console.log('  Render: ./deploy-render.sh');
  console.log('  Manual: Follow DEPLOYMENT-GUIDE.md');
} else {
  console.log('\n❌ Some required files are missing. Please check the errors above.');
  process.exit(1);
}