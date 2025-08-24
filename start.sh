#!/bin/bash

echo "Starting Urvann Plant Store..."
echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "Installing client dependencies..."
cd client
npm install
cd ..

echo ""
echo "Starting the application..."
npm run dev 