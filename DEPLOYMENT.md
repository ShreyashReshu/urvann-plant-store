# 🚀 Deployment Guide

This guide will help you deploy the Urvann Plant Store application to various platforms.

## 🌐 Deployment Options

### 1. Heroku (Recommended for Beginners)

#### Prerequisites
- Heroku account
- Heroku CLI installed
- Git repository

#### Steps
1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```

3. **Add MongoDB Atlas**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free cluster
   - Get your connection string
   - Add it to Heroku config vars

4. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Seed Database**
   ```bash
   heroku run npm run seed
   ```

### 2. Railway

#### Steps
1. **Connect Repository**
   - Go to [Railway](https://railway.app/)
   - Connect your GitHub repository

2. **Set Environment Variables**
   - `NODE_ENV=production`
   - `MONGODB_URI=your_mongodb_connection_string`

3. **Deploy**
   - Railway will automatically deploy on push

### 3. Render

#### Steps
1. **Create Service**
   - Go to [Render](https://render.com/)
   - Create a new Web Service

2. **Configure**
   - Build Command: `npm run build`
   - Start Command: `npm start`

3. **Set Environment Variables**
   - `NODE_ENV=production`
   - `MONGODB_URI=your_mongodb_connection_string`

### 4. Vercel (Frontend Only)

#### Steps
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd client
   vercel
   ```

3. **Configure Backend URL**
   - Set your backend URL in environment variables

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create Cluster**
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free M0 cluster

2. **Database Access**
   - Create a database user
   - Set username and password

3. **Network Access**
   - Allow access from anywhere (0.0.0.0/0)
   - Or restrict to your deployment platform's IP

4. **Connection String**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/urvann-plants?retryWrites=true&w=majority
   ```

### Local MongoDB

1. **Install MongoDB**
   - Download from [MongoDB](https://www.mongodb.com/try/download/community)
   - Or use Docker: `docker run -d -p 27017:27017 mongo`

2. **Start Service**
   ```bash
   mongod
   ```

3. **Connection String**
   ```
   mongodb://localhost:27017/urvann-plants
   ```

## 🔧 Environment Configuration

### Production Environment Variables

```env
NODE_ENV=production
MONGODB_URI=your_mongodb_connection_string
PORT=process.env.PORT
```

### Development Environment Variables

```env
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/urvann-plants
PORT=5000
```

## 📱 Frontend Deployment

### Build Process

1. **Install Dependencies**
   ```bash
   cd client
   npm install
   ```

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Deploy Build Folder**
   - Upload `build/` folder to your hosting service
   - Or use platforms like Vercel, Netlify

### Environment Variables

- `REACT_APP_API_URL`: Your backend API URL
- `REACT_APP_ENV`: Environment (development/production)

## 🚀 Performance Optimization

### Backend
- **Compression**: Already enabled with `compression` middleware
- **Rate Limiting**: API protection enabled
- **Security**: Helmet.js for security headers
- **Caching**: Consider adding Redis for caching

### Frontend
- **Code Splitting**: React Router for lazy loading
- **Image Optimization**: Use WebP format and lazy loading
- **Bundle Analysis**: Use `npm run build --analyze` to analyze bundle size

## 🔒 Security Considerations

1. **Environment Variables**: Never commit `.env` files
2. **CORS**: Configure CORS for your domain
3. **Rate Limiting**: Already implemented
4. **Input Validation**: Server-side validation implemented
5. **HTTPS**: Always use HTTPS in production

## 📊 Monitoring

### Health Check Endpoint
- `GET /api/health` - Returns application status

### Logging
- Consider adding Winston or Morgan for logging
- Monitor application performance
- Set up error tracking (Sentry, LogRocket)

## 🧪 Testing Deployment

1. **Health Check**: Visit `/api/health`
2. **API Endpoints**: Test all endpoints
3. **Frontend**: Verify all pages load correctly
4. **Search & Filters**: Test functionality
5. **Add Plant**: Test admin features
6. **Responsive Design**: Test on mobile devices

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires v16+)
   - Verify all dependencies are installed
   - Check for syntax errors

2. **Database Connection**
   - Verify MongoDB connection string
   - Check network access settings
   - Ensure database user has correct permissions

3. **CORS Issues**
   - Verify CORS configuration
   - Check frontend URL in backend CORS settings

4. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names and values
   - Restart application after changes

### Support
- Check application logs
- Verify environment configuration
- Test locally before deploying
- Use development tools for debugging

---

**Happy Deploying! 🎉** 