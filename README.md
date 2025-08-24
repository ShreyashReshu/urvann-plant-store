# 🌱 Urvann Plant Store

A full-stack Mini Plant Store application built with React, Node.js, Express, and MongoDB. This project demonstrates modern web development practices with a focus on user experience, scalability, and clean code architecture.

## ✨ Features

### 🌿 Plant Catalog
- **Grid/List View**: Beautiful responsive grid layout showcasing all plants
- **Rich Plant Information**: Name, price, categories, stock availability, care level, light requirements, watering frequency, and height
- **High-Quality Images**: Placeholder images with fallback support
- **Responsive Design**: Optimized for both desktop and mobile devices

### 🔍 Search & Filter System
- **Smart Search**: Case-insensitive search by plant name or category keywords
- **Advanced Filtering**: Filter by category, price range, and stock availability
- **Real-time Results**: Instant search results with debounced input
- **Filter Management**: Easy filter clearing and active filter indicators

### ➕ Add Plant (Admin Feature)
- **Comprehensive Form**: All plant details with validation
- **Category Management**: Multiple category selection with custom category support
- **Form Validation**: Client-side validation with error handling
- **Image Support**: Optional image URL input with placeholder fallback

### 📱 Responsive Frontend
- **Modern UI**: Clean, intuitive interface with Tailwind CSS
- **Mobile-First**: Responsive design that works on all devices
- **Loading States**: Smooth loading animations and error handling
- **Reusable Components**: Modular component architecture

### 🗄️ Database & Backend
- **MongoDB Integration**: Scalable NoSQL database with Mongoose ODM
- **RESTful API**: Well-structured Express.js backend with proper error handling
- **Data Seeding**: 50+ realistic plants with diverse categories
- **Performance**: Optimized queries with text indexing

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Rate Limiting** - API protection

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd urvann-plant-store
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
MONGODB_URI=mongodb://localhost:27017/urvann-plants
PORT=5000
NODE_ENV=development
```

### 4. Database Setup
```bash
# Start MongoDB (if running locally)
mongod

# Seed the database with sample plants
npm run seed
```

### 5. Run the Application
```bash
# Development mode (runs both backend and frontend)
npm run dev

# Or run separately:
# Backend only
npm start

# Frontend only (in client directory)
cd client && npm start
```

## 🌐 API Endpoints

### Plants
- `GET /api/plants` - Get all plants with search and filters
- `GET /api/plants/:id` - Get plant by ID
- `POST /api/plants` - Add new plant
- `PUT /api/plants/:id` - Update plant
- `DELETE /api/plants/:id` - Delete plant
- `GET /api/plants/categories/list` - Get all categories

### Categories
- `GET /api/categories` - Get all available categories

## 📱 Usage

### Browsing Plants
1. **Home Page**: View all available plants in a responsive grid
2. **Search**: Use the search bar to find plants by name or category
3. **Filters**: Apply category, price, and availability filters
4. **Plant Details**: Click on any plant to view detailed information

### Adding Plants (Admin)
1. **Navigate**: Click "Add Plant" in the header
2. **Fill Form**: Complete the comprehensive plant form
3. **Validation**: Form validates all required fields
4. **Submit**: Add the plant to the catalog

### Responsive Design
- **Desktop**: Full-featured interface with side-by-side layouts
- **Tablet**: Optimized grid layouts and touch-friendly controls
- **Mobile**: Stacked layouts with mobile-optimized navigation

## 🎨 Design Features

### Color Scheme
- **Primary**: Green tones representing nature and growth
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Color-coded category badges and status indicators

### Typography
- **Font**: Inter font family for modern, readable text
- **Hierarchy**: Clear heading levels and consistent spacing
- **Responsiveness**: Scalable text that works on all devices

### Components
- **Cards**: Plant information displayed in clean, hoverable cards
- **Badges**: Color-coded category and status indicators
- **Buttons**: Consistent button styles with hover effects
- **Forms**: User-friendly forms with validation feedback

## 🔧 Customization

### Adding New Categories
1. Update the `availableCategories` array in `AddPlant.js`
2. Add corresponding CSS classes in `index.css`
3. Update the `getCategoryBadgeClass` function in components

### Modifying Plant Fields
1. Update the Plant model in `models/Plant.js`
2. Modify the form in `AddPlant.js`
3. Update the display components as needed

### Styling Changes
1. Modify Tailwind classes in components
2. Update custom CSS in `client/src/index.css`
3. Adjust the Tailwind config in `tailwind.config.js`

## 🚀 Deployment

### Backend Deployment
1. Set `NODE_ENV=production`
2. Configure MongoDB Atlas connection string
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy the `build` folder to platforms like Vercel, Netlify, or AWS S3

### Environment Variables
```env
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=production
PORT=process.env.PORT
```

## 📊 Performance Features

### Frontend Optimization
- **Code Splitting**: React Router for lazy loading
- **Image Optimization**: Fallback images and lazy loading
- **State Management**: Efficient context-based state management
- **Debounced Search**: Optimized search with 300ms delay

### Backend Optimization
- **Database Indexing**: Text search indexes on plant names and categories
- **Rate Limiting**: API protection against abuse
- **Compression**: Response compression for faster loading
- **Error Handling**: Comprehensive error handling and logging

## 🧪 Testing

### Manual Testing
1. **Search Functionality**: Test search with various plant names and categories
2. **Filter System**: Verify all filters work correctly
3. **Form Validation**: Test the add plant form with valid and invalid data
4. **Responsive Design**: Test on various screen sizes and devices

### API Testing
1. **Endpoints**: Test all API endpoints with Postman or similar tools
2. **Error Handling**: Verify proper error responses for invalid requests
3. **Performance**: Test search and filter performance with large datasets

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Your Name** - Full Stack Developer

## 🙏 Acknowledgments

- **Urvann** for the project requirements
- **React Team** for the amazing frontend framework
- **Express.js** for the robust backend framework
- **MongoDB** for the scalable database solution
- **Tailwind CSS** for the utility-first CSS framework

---

**Built with ❤️ for Urvann Software Development Intern Assignment**

*Deadline: 25th August 11:59AM, 2025* 