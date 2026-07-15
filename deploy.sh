#!/bin/bash

echo "🚀 Starting Deployment"

cd /home/ubuntu/St-Augusta-Public-School || exit

echo "📥 Pulling latest code..."
git pull origin main

echo "📦 Installing packages..."
npm install

echo "🏗 Building project..."
npm run build

echo "♻ Restarting PM2..."
pm2 restart St-Augusta-Public-School

pm2 save

echo "✅ Deployment Complete"
