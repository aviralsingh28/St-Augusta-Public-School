#!/bin/bash

set -e

echo "🚀 Starting deployment..."

echo "📥 Pulling latest code..."
git pull

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js project..."
npm run build

echo "🔄 Restarting application..."

if pm2 list | grep -q "st-augusta"; then
    pm2 restart st-augusta
else
    pm2 start npm --name "st-augusta-school" -- start
fi

pm2 save

echo "✅ Deployment completed successfully 🚀"