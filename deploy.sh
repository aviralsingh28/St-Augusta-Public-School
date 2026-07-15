#!/bin/bash

echo "🚀 Starting Deployment"

echo "📥 Pulling latest code..."
git pull origin main

echo "📦 Installing packages..."
npm install

echo "🏗 Building project..."
npm run build

echo "♻ Restarting PM2..."
pm2 restart St-Augusta-Public-School

echo "✅ Deployment Complete"
