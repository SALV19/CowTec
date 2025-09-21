// Charts Controller - handles HTTP requests and coordinates with Charts Model
const ChartsModel = require('../models/ChartsModel');

class ChartsController {

  // Get charts page with chart types from model
  static getChartsPage(req, res) {
    try {
      // Get chart types from model
      const chartTypes = ChartsModel.getAvailableChartTypes();

      res.render('charts', { 
        title: 'Interactive Charts',
        charts: chartTypes
      });
    } catch (error) {
      console.error('Error rendering charts page:', error);
      res.status(500).render('error', { 
        title: 'Error',
        message: 'Unable to load charts page',
        error: process.env.NODE_ENV === 'development' ? error : {}
      });
    }
  }

  // Get specific chart configuration from model
  static getChartData(req, res) {
    try {
      const { type } = req.params;
      const chartConfig = ChartsModel.getChartConfig(type);
      
      if (chartConfig) {
        res.json(chartConfig);
      } else {
        res.status(404).json({ 
          error: 'Chart type not found',
          availableTypes: ['bar', 'line', 'pie', 'area']
        });
      }
    } catch (error) {
      console.error('Error getting chart data:', error);
      res.status(500).json({ error: 'Unable to load chart data' });
    }
  }

  // Get all available chart types from model
  static getAvailableCharts(req, res) {
    try {
      const chartTypes = ChartsModel.getChartTypesForAPI();
      res.json(chartTypes);
    } catch (error) {
      console.error('Error getting available charts:', error);
      res.status(500).json({ error: 'Unable to load available charts' });
    }
  }
}

module.exports = ChartsController;