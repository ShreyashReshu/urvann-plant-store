# 🚀 Quick Start Guide

Get the Urvann Plant Store running in under 5 minutes!

## ⚡ Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - Local installation or MongoDB Atlas account
- **Git** - [Download here](https://git-scm.com/)

## 🎯 Quick Setup

### 1. Clone & Install
```bash
# Clone the repository
git clone <your-repo-url>
cd urvann-plant-store

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 2. Database Setup

#### Option A: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free account and cluster
3. Get connection string
4. Create `.env` file in root directory:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/urvann-plants
PORT=5000
NODE_ENV=development
```

#### Option B: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service: `mongod`
3. Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/urvann-plants
PORT=5000
NODE_ENV=development
```

### 3. Seed Database
```bash
npm run seed
```

### 4. Start Application
```bash
# Start both backend and frontend
npm run dev

# Or start separately:
# Backend: npm start
# Frontend: cd client && npm start
```

### 5. Open Browser
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🎉 You're Done!

The application should now be running with:
- ✅ 50+ sample plants
- ✅ Search and filter functionality
- ✅ Add plant admin feature
- ✅ Responsive design
- ✅ Full-stack functionality

## 🔧 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 5000
npx kill-port 5000
```

**MongoDB connection failed:**
- Check if MongoDB is running
- Verify connection string in `.env`
- Check network access (for Atlas)

**Frontend build errors:**
```bash
cd client
rm -rf node_modules package-lock.json
npm install
```

**Backend errors:**
```bash
# Check MongoDB connection
npm run seed
```

## 📱 Test the App

1. **Browse Plants**: Visit homepage to see all plants
2. **Search**: Try searching for "money plant" or "succulent"
3. **Filters**: Use category and price filters
4. **Add Plant**: Click "Add Plant" to test admin feature
5. **Responsive**: Resize browser to test mobile design

## 🚀 Next Steps

- **Deploy**: Follow `DEPLOYMENT.md` for production deployment
- **Customize**: Modify plant data, categories, or styling
- **Extend**: Add user authentication, shopping cart, or payment
- **Optimize**: Implement caching, image optimization, or PWA features

---

**Need help? Check the main README.md for detailed documentation! 📚** 