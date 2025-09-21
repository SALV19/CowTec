// Dashboard Controller - handles HTTP requests and coordinates with Dashboard Model
const DashboardModel = require('../models/DashboardModel');

class DashboardController {
  
  // Method to get dashboard page with data from model
  static getDashboardData(req, res) {
    try {
      // Get data from the model
      const dashboardData = DashboardModel.getAllDashboardData();
      
      res.render('dashboard', { 
        title: 'Analytics Dashboard',
        data: dashboardData
      });
    } catch (error) {
      console.error('Error rendering dashboard:', error);
      res.status(500).render('error', { 
        title: 'Error',
        message: 'Unable to load dashboard data',
        error: process.env.NODE_ENV === 'development' ? error : {}
      });
    }
  }

  // Method to get KPI data as JSON (for AJAX calls)
  static getKPIData(req, res) {
    try {
      const kpiData = DashboardModel.getKPIData();
      res.json(kpiData);
    } catch (error) {
      console.error('Error getting KPI data:', error);
      res.status(500).json({ error: 'Unable to load KPI data' });
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

  // Method to get specific dashboard chart data as JSON
  static getChartData(req, res) {
    try {
      const { chartType } = req.params;
      const chartData = DashboardModel.getChartData(chartType);
      
      if (chartData) {
        res.json(chartData);
      } else {
        res.status(404).json({ 
          error: 'Chart data not found',
          availableCharts: ['salesTrend', 'trafficSources', 'regionalPerformance', 'productCategories']
        });
      }
    } catch (error) {
      console.error('Error getting chart data:', error);
      res.status(500).json({ error: 'Unable to load chart data' });
    }
  }
}

module.exports = DashboardController;