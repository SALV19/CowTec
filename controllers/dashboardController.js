// Dashboard Controller - handles HTTP requests and coordinates with Dashboard Model
const DashboardModel = require('../models/DashboardModel');

class DashboardController {
  
  // Method to get dashboard page with data from model
  static getDashboardData(req, res) {
    try {
      // Get data from the model
      const dashboardData = DashboardModel.getAllDashboardData();
      
      res.render('pages/dashboard-atomic', { 
        title: 'Analytics Dashboard',
        data: dashboardData
      });
    } catch (error) {
      console.error('Error rendering dashboard:', error);
      res.status(500).render('pages/error', { 
        title: 'Error',
        message: 'Unable to load dashboard data',
        error: process.env.NODE_ENV === 'development' ? error : {}
      });
    }
  }

  // Method to get updated KPI data with variations
  static getUpdatedKPIData(req, res) {
    try {
      const updatedKpiData = DashboardModel.getUpdatedKPIData();
      res.json(updatedKpiData);
    } catch (error) {
      console.error('Error getting updated KPI data:', error);
      res.status(500).json({ error: 'Unable to load updated KPI data' });
    }
  }
}

module.exports = DashboardController;