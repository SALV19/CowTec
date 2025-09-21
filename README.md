# 📊 ECharts Node.js Dashboard App

**A complete full-stack web application built with Node.js, EJS templating, Apache ECharts for data visualization, implementing proper MVC architecture with Atomic Design component system.**

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey.svg)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-3.x-blue.svg)](https://ejs.co/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-purple.svg)](https://getbootstrap.com/)
[![ECharts](https://img.shields.io/badge/ECharts-5.4.3-red.svg)](https://echarts.apache.org/)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the application
npm start

# 3. Open your browser
http://localhost:3000
```

---

## 📋 Table of Contents

- [🏗️ **Architecture Overview**](#️-architecture-overview)
- [📂 **Project Structure**](#-project-structure)
- [🎯 **MVC Implementation**](#-mvc-implementation)
- [🧩 **Atomic Design System**](#-atomic-design-system)
- [🔧 **Configuration & Setup**](#-configuration--setup)
- [📊 **Features & Functionality**](#-features--functionality)
- [🛠️ **Development Guide**](#️-development-guide)
- [📚 **API Documentation**](#-api-documentation)
- [🎨 **Customization Guide**](#-customization-guide)
- [🧪 **Testing**](#-testing)
- [🚀 **Deployment**](#-deployment)

---

## 🏗️ Architecture Overview

This application implements a **clean, scalable architecture** combining two powerful design patterns:

### **🎯 MVC (Model-View-Controller) Pattern**
```
HTTP Request → Router → Controller → Model → Data → Model → Controller → View → HTTP Response
```

### **🧩 Atomic Design Pattern**
```
Atoms → Molecules → Organisms → Templates → Pages
```

### **🔄 Data Flow**
```
1. Browser Request → Express Router
2. Router → Controller (HTTP handling)
3. Controller → Model (Business logic & data)
4. Model → Static Data / Future Database
5. Data → Model → Controller → View (Atomic Components)
6. View → Rendered HTML → Browser Response
```

---

## 📂 Project Structure

```
cowtec/
├── 📱 app.js                      # Main Express application
├── 📦 package.json               # Dependencies & scripts
├── 🔧 .env                       # Environment variables
├── 
├── 📁 models/                    # 🎯 MVC: Data Layer
│   ├── DashboardModel.js         # Dashboard business logic & data
│   └── ChartsModel.js            # Charts configuration & data
├── 
├── 📁 controllers/               # 🎯 MVC: Logic Layer  
│   ├── dashboardController.js    # Dashboard HTTP handling
│   └── chartsController.js       # Charts HTTP handling
├── 
├── 📁 routes/                    # 🎯 MVC: URL Routing
│   └── index.js                  # Route definitions
├── 
├── 📁 views/                     # 🎯 MVC: Presentation Layer
│   ├── 🧩 components/           # 🧩 Atomic Design Components
│   │   ├── atoms/               # Basic UI elements
│   │   │   ├── button.ejs       # Reusable buttons
│   │   │   ├── icon.ejs         # Font Awesome icons
│   │   │   ├── chart-container.ejs # Chart containers
│   │   │   ├── kpi-value.ejs    # KPI value display
│   │   │   └── ...              # Other atoms
│   │   ├── molecules/           # Component combinations
│   │   │   ├── kpi-card.ejs     # KPI cards with icons
│   │   │   ├── chart-card.ejs   # Charts with headers
│   │   │   ├── page-header.ejs  # Page titles & breadcrumbs
│   │   │   └── ...              # Other molecules
│   │   ├── organisms/           # Complex UI sections
│   │   │   ├── navigation.ejs   # Site navigation
│   │   │   ├── kpi-section.ejs  # KPI dashboard grid
│   │   │   ├── charts-grid.ejs  # Charts layout grid
│   │   │   └── ...              # Other organisms
│   │   └── README.md            # Component documentation
│   ├── templates/               # Page layouts
│   │   └── base.ejs             # Base HTML template
│   ├── partials/                # Legacy EJS partials (still used)
│   │   ├── header.ejs           # Common header
│   │   └── footer.ejs           # Common footer
│   ├── dashboard.ejs            # 🏠 Dashboard page (main)
│   ├── charts.ejs               # 📊 Charts showcase page
│   ├── dashboard-atomic.ejs     # 🧩 Atomic version (ready to use)
│   ├── charts-atomic.ejs        # 🧩 Atomic version (ready to use)
│   ├── atomic-test.ejs          # 🧪 Component testing page
│   ├── 404.ejs                  # 404 error page
│   └── error.ejs                # General error page
├── 
├── 📁 public/                    # Static assets
│   ├── css/
│   │   └── style.css            # Custom styles
│   ├── js/
│   │   └── main.js              # Custom JavaScript
│   └── images/                  # Static images
├── 
└── 📁 node_modules/             # Dependencies (auto-generated)
```

---

## 🎯 MVC Implementation

Our **MVC architecture** ensures clean separation of concerns and maintainability:

### **📊 Models (Data Layer)**
> **Location**: `models/`  
> **Responsibility**: Business logic, data management, static data storage

#### **DashboardModel.js** 
```javascript
// Handles all dashboard-related data and logic
class DashboardModel {
  static getKPIData()           // Get KPI metrics
  static getAllDashboardData()  // Get complete dashboard data
  static getUpdatedKPIData()    // Get KPI variations (demo)
  static getChartData(type)     // Get specific chart data
}
```

#### **ChartsModel.js**
```javascript
// Handles chart configurations and metadata
class ChartsModel {
  static getChartConfig(type)       // Get ECharts configuration
  static getAvailableChartTypes()   // Get chart type metadata  
  static getChartTypesForAPI()      // Get API-formatted data
}
```

### **🎮 Controllers (Logic Layer)**
> **Location**: `controllers/`  
> **Responsibility**: HTTP request handling, coordinate between Models & Views

#### **DashboardController.js**
```javascript
// Handles HTTP requests for dashboard functionality
class DashboardController {
  static getDashboardData(req, res)    // Render dashboard page
  static getKPIData(req, res)          // API: Get KPI data
  static getUpdatedKPIData(req, res)   // API: Get updated KPIs
  static getChartData(req, res)        // API: Get chart data
}
```

#### **ChartsController.js**  
```javascript
// Handles HTTP requests for charts functionality
class ChartsController {
  static getChartsPage(req, res)       // Render charts page
  static getChartData(req, res)        // API: Get chart config
  static getAvailableCharts(req, res)  // API: Get available charts
}
```

### **🌐 Routes (URL Mapping)**
> **Location**: `routes/index.js`  
> **Responsibility**: Map URLs to Controller methods

```javascript
// Page routes
router.get('/', DashboardController.getDashboardData);           // Home page
router.get('/charts', ChartsController.getChartsPage);           // Charts page

// API routes  
router.get('/data/kpis', DashboardController.getKPIData);        // KPI data
router.get('/data/charts/:type', ChartsController.getChartData); // Chart configs
```

### **🎨 Views (Presentation Layer)**
> **Location**: `views/`  
> **Responsibility**: HTML rendering, user interface, Atomic Design components

---

## 🧩 Atomic Design System

Our **Atomic Design** implementation creates reusable, composable UI components:

### **⚛️ Atoms** (Basic Elements)
> **Location**: `views/components/atoms/`  
> **Philosophy**: Smallest functional units that can't be broken down further

```ejs
<!-- Example: Button Atom -->
<%- include('components/atoms/button', { 
  text: 'Save Changes',
  variant: 'primary',
  icon: 'save',
  size: 'lg'
}) %>

<!-- Example: Icon Atom -->
<%- include('components/atoms/icon', { 
  name: 'chart-bar',
  additionalClasses: 'fa-2x text-primary'
}) %>
```

**Available Atoms:**
- `button.ejs` - Configurable buttons with variants, sizes, icons
- `icon.ejs` - Font Awesome icons with customizable styling
- `chart-container.ejs` - ECharts containers with placeholder support
- `kpi-value.ejs` - Formatted value display with prefix/suffix
- `badge.ejs` - Status badges with variants and icons
- `card-header.ejs` / `card-body.ejs` - Card components
- `nav-link.ejs` - Navigation links with active states
- `list-group-item.ejs` - Interactive list items

### **🔗 Molecules** (Component Combinations)  
> **Location**: `views/components/molecules/`  
> **Philosophy**: Groups of atoms functioning together as a unit

```ejs
<!-- Example: KPI Card Molecule -->
<%- include('components/molecules/kpi-card', { 
  title: 'Total Revenue',
  value: '87,543',
  prefix: '$',
  icon: 'dollar-sign',
  bgColor: 'success',
  change: '+12.3%',
  changeType: 'increase'
}) %>

<!-- Example: Chart Card Molecule -->
<%- include('components/molecules/chart-card', { 
  title: 'Sales Performance',
  icon: 'chart-line',
  chartId: 'sales-chart',
  height: '400px'
}) %>
```

**Available Molecules:**
- `kpi-card.ejs` - Complete KPI display with icon, value, change indicator
- `chart-card.ejs` - Chart container with header and optional controls
- `page-header.ejs` - Page titles with subtitles, icons, breadcrumbs
- `chart-controls.ejs` - Chart action buttons (refresh, download, theme)
- `chart-nav-item.ejs` - Sidebar navigation for chart types

### **🏢 Organisms** (Complex Sections)
> **Location**: `views/components/organisms/`  
> **Philosophy**: Groups of molecules/atoms forming distinct interface sections

```ejs
<!-- Example: KPI Dashboard Section -->
<%- include('components/organisms/kpi-section', { 
  kpis: [
    { title: 'Sales', value: '$87,543', icon: 'dollar-sign', bgColor: 'primary' },
    { title: 'Users', value: '2,341', icon: 'users', bgColor: 'success' }
  ]
}) %>

<!-- Example: Charts Grid -->
<%- include('components/organisms/charts-grid', { 
  charts: [
    { title: 'Revenue', chartId: 'revenue-chart', columnSize: 8 },
    { title: 'Traffic', chartId: 'traffic-chart', columnSize: 4 }
  ]
}) %>
```

**Available Organisms:**
- `navigation.ejs` - Complete site navigation with branding
- `kpi-section.ejs` - Responsive grid of KPI cards
- `charts-grid.ejs` - Flexible grid layout for charts
- `chart-sidebar.ejs` - Navigation sidebar for chart types
- `footer.ejs` - Site footer with links and branding

### **📄 Templates** (Page Layouts)
> **Location**: `views/templates/`  
> **Philosophy**: Page-level layouts combining organisms

```ejs
<!-- Example: Base Template -->
<%- include('templates/base', { 
  title: 'Dashboard',
  content: `
    <%- include('organisms/kpi-section', { kpis: kpiData }) %>
    <%- include('organisms/charts-grid', { charts: chartData }) %>
  `
}) %>
```

---

## 🔧 Configuration & Setup

### **Prerequisites**
```bash
# Required
Node.js >= 14.0.0
npm >= 6.0.0

# Recommended  
Node.js >= 18.0.0 (latest LTS)
```

### **Installation**
```bash
# 1. Clone the repository (if applicable)
git clone <repository-url>
cd cowtec

# 2. Install dependencies
npm install

# 3. Environment setup (optional)
cp .env.example .env
# Edit .env with your settings

# 4. Start development server
npm run dev    # With auto-restart (recommended)
# or
npm start      # Production mode
```

### **Environment Variables**
```bash
# .env file
PORT=3000                    # Server port (default: 3000)
NODE_ENV=development         # Environment mode
```

### **Available Scripts**
```json
{
  "start": "node app.js",           // Production server
  "dev": "nodemon app.js",          // Development with auto-restart
  "test": "npm run test:unit",      // Run tests (when implemented)
  "lint": "eslint .",               // Code linting (when configured)
}
```

---

## 📊 Features & Functionality

### **🏠 Dashboard Page** (`/`)
- **Real-time KPI Cards**: Sales, Users, Orders, Growth metrics
- **Interactive Charts**: Sales trends, traffic sources, regional performance
- **Auto-updating Data**: KPIs refresh every 30 seconds with variations
- **Responsive Design**: Mobile-friendly Bootstrap 5 layout
- **Live Chart Updates**: ECharts with smooth animations

### **📈 Charts Page** (`/charts`)
- **Interactive Chart Gallery**: Multiple chart types (bar, line, pie, area)
- **Chart Type Selector**: Sidebar navigation for easy switching
- **Chart Controls**: Refresh data, download PNG, toggle themes
- **Real-time Loading**: Dynamic chart configuration from API
- **Theme Support**: Light/dark chart themes

### **🔧 Component Testing** (`/atomic-test`)
- **Atomic Design Playground**: Test individual components
- **Component Examples**: Buttons, KPI cards, chart containers
- **Development Aid**: Helps developers test components in isolation

---

## 🛠️ Development Guide

### **Adding New Components**

#### **Creating a New Atom**
```bash
# 1. Create the atom file
touch views/components/atoms/my-atom.ejs
```

```ejs
<!-- views/components/atoms/my-atom.ejs -->
<div class="my-atom <%= typeof additionalClasses !== 'undefined' && additionalClasses ? ' ' + additionalClasses : '' %>">
  <%= content %>
</div>
```

```ejs
<!-- Usage example -->
<%- include('components/atoms/my-atom', { 
  content: 'Hello World',
  additionalClasses: 'text-center'
}) %>
```

#### **Creating a New Molecule**
```ejs
<!-- views/components/molecules/my-molecule.ejs -->
<div class="my-molecule">
  <%- include('../atoms/my-atom', { content: title }) %>
  <div class="body">
    <%= description %>
  </div>
</div>
```

#### **Creating a New Model**
```javascript
// models/MyModel.js
class MyModel {
  static getData() {
    return {
      // Your static data here
    };
  }
  
  static processData(data) {
    // Your business logic here
    return processedData;
  }
}

module.exports = MyModel;
```

#### **Creating a New Controller**
```javascript
// controllers/myController.js
const MyModel = require('../models/MyModel');

class MyController {
  static getMyPage(req, res) {
    try {
      const data = MyModel.getData();
      res.render('my-page', { 
        title: 'My Page',
        data: data
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).render('error', { 
        title: 'Error',
        message: 'Something went wrong'
      });
    }
  }
  
  static getMyAPI(req, res) {
    try {
      const data = MyModel.getData();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Unable to load data' });
    }
  }
}

module.exports = MyController;
```

#### **Adding New Routes**
```javascript
// routes/index.js
const MyController = require('../controllers/myController');

// Add to existing routes
router.get('/my-page', MyController.getMyPage);
router.get('/api/my-data', MyController.getMyAPI);
```

### **Best Practices**

#### **Component Design**
- **Single Responsibility**: Each component should have one clear purpose
- **Parameter Validation**: Always check for `typeof param !== 'undefined'`
- **Fallback Values**: Provide sensible defaults: `param || 'default'`
- **Documentation**: Comment what parameters each component expects

#### **Model Design**
- **Static Methods**: Use static methods for data operations
- **Business Logic**: Keep all data logic in models, not controllers
- **Error Handling**: Provide meaningful error messages
- **Data Validation**: Validate data structure and types

#### **Controller Design**  
- **Thin Controllers**: Controllers should only handle HTTP and coordinate
- **Error Handling**: Wrap in try-catch and provide user-friendly errors
- **Response Format**: Consistent JSON structure for APIs
- **Status Codes**: Use appropriate HTTP status codes

---

## 📚 API Documentation

### **Dashboard APIs**

#### **GET `/data/kpis`**
Get current KPI data
```json
{
  "totalSales": 87543,
  "activeUsers": 2341,
  "totalOrders": 1567,
  "revenueGrowth": 23.4
}
```

#### **GET `/data/kpis/updated`**  
Get KPI data with random variations (for demo)
```json
{
  "totalSales": 89043,
  "activeUsers": 2385,
  "totalOrders": 1584,
  "revenueGrowth": 24.1
}
```

### **Charts APIs**

#### **GET `/data/charts/:type`**
Get chart configuration for specific type
```bash
# Available types: bar, line, pie, area
curl http://localhost:3000/data/charts/bar
```

```json
{
  "title": { "text": "Monthly Sales Performance" },
  "tooltip": {},
  "legend": { "data": ["Sales", "Target"] },
  "xAxis": { "data": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  "yAxis": { "name": "Amount ($)" },
  "series": [
    {
      "name": "Sales",
      "type": "bar", 
      "data": [5000, 20000, 36000, 10000, 15000, 25000]
    }
  ]
}
```

#### **GET `/data/charts`**
Get all available chart types
```json
[
  {
    "id": "bar-chart",
    "type": "bar",
    "name": "Bar Chart",
    "description": "Compare categories with bars"
  }
]
```

---

## 🎨 Customization Guide

### **Styling & Themes**

#### **Custom CSS**
```css
/* public/css/style.css */
.custom-kpi-card {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.custom-chart-container {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
}
```

#### **Chart Themes**
```javascript
// Modify chart themes in views or public/js/main.js
const customTheme = {
  color: ['#5470c6', '#91cc75', '#fac858', '#ee6666'],
  backgroundColor: '#ffffff',
  textStyle: {
    fontFamily: 'Inter, system-ui, sans-serif'
  }
};

echarts.registerTheme('custom', customTheme);
const chart = echarts.init(container, 'custom');
```

### **Data Customization**

#### **Adding New KPIs**
```javascript
// models/DashboardModel.js
static dashboardData = {
  kpis: {
    // Existing KPIs...
    customerSatisfaction: 94.5,
    conversionRate: 3.2,
    averageOrderValue: 156.78
  }
}
```

#### **Adding New Chart Types**
```javascript
// models/ChartsModel.js
static chartConfigs = {
  // Existing charts...
  scatter: {
    title: { text: 'Customer Analysis' },
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [{
      type: 'scatter',
      data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2]]
    }]
  }
}
```

---

## 🧪 Testing

### **Manual Testing Checklist**

#### **MVC Architecture**
- [ ] Dashboard page loads without errors (`/`)
- [ ] Charts page loads without errors (`/charts`)  
- [ ] API endpoints return valid JSON (`/data/kpis`, `/data/charts/bar`)
- [ ] Navigation between pages works
- [ ] KPI auto-refresh works (wait 30 seconds)

#### **Atomic Design Components**
- [ ] Atomic test page loads (`/atomic-test`)
- [ ] Button atoms render with different variants
- [ ] KPI card molecules display correctly
- [ ] Chart containers show placeholders
- [ ] Icons display properly

#### **Charts Functionality**
- [ ] Chart sidebar navigation works
- [ ] Charts load when clicking navigation
- [ ] Chart controls work (refresh, download, theme)
- [ ] Charts are responsive on mobile

#### **Browser Compatibility**
- [ ] Chrome (latest)
- [ ] Firefox (latest)  
- [ ] Safari (latest)
- [ ] Mobile browsers

### **Performance Testing**
```bash
# Check page load times
curl -w "@curl-format.txt" -s -o /dev/null http://localhost:3000

# Check API response times
curl -w "%{time_total}\n" -s -o /dev/null http://localhost:3000/data/kpis
```

### **Error Testing**
- [ ] Invalid routes show 404 page
- [ ] API errors return proper status codes
- [ ] Component errors show fallback content
- [ ] JavaScript errors don't crash the page

---

## 🚀 Deployment

### **Production Setup**

#### **Environment Configuration**
```bash
# .env.production
NODE_ENV=production
PORT=3000
```

#### **Process Manager (PM2)**
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start app.js --name "echarts-app"

# Monitor
pm2 monit

# Auto-restart on boot
pm2 startup
pm2 save
```

#### **Docker Deployment**
```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t echarts-app .
docker run -p 3000:3000 echarts-app
```

#### **Nginx Configuration**
```nginx
# /etc/nginx/sites-available/echarts-app
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### **Performance Optimization**

#### **Static Assets**
- ✅ CDN for Bootstrap, Font Awesome, ECharts
- ✅ Gzip compression (configure in nginx/apache)
- ✅ Caching headers for public assets
- ✅ Minified CSS/JS (implement build process)

#### **Application**
- ✅ Express.js static file serving
- ✅ EJS template caching in production  
- ✅ Efficient data structures in models
- ✅ Minimal DOM manipulation

---

## 📖 Additional Resources

### **Architecture References**
- [MVC Pattern Explained](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)

### **Technology Documentation**
- [EJS Templating](https://ejs.co/)
- [Apache ECharts](https://echarts.apache.org/en/index.html)
- [Bootstrap 5](https://getbootstrap.com/docs/5.1/)
- [Font Awesome](https://fontawesome.com/docs)

### **Development Tools**
- [Nodemon](https://nodemon.io/) - Auto-restart development server
- [PM2](https://pm2.keymetrics.io/) - Production process manager
- [ESLint](https://eslint.org/) - Code linting and formatting

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Follow the architecture patterns**: Use MVC + Atomic Design
4. **Test your changes**: Verify MVC flow and component functionality
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 💡 Support & Questions

- **Documentation Issues**: Check the component README in `views/components/README.md`
- **Architecture Questions**: Review the MVC flow and Atomic Design patterns above
- **Technical Issues**: Check the console for errors and verify API endpoints
- **Performance**: Monitor with browser dev tools and server logs

---

**🎉 Happy coding with clean architecture and reusable components!**