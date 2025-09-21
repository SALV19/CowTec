const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboardController');
const ChartsController = require('../controllers/chartsController');

// Home route - Dashboard as main page
router.get('/', DashboardController.getDashboardData);

// Dashboard route (same as home for now)
router.get('/dashboard', DashboardController.getDashboardData);

// Charts page
router.get('/charts', ChartsController.getChartsPage);

// Test route for atomic design components
router.get('/atomic-test', (req, res) => {
  res.render('atomic-test', { 
    title: 'Atomic Design Test'
  });
});

// API-like routes for AJAX calls (but using controllers with models)
router.get('/data/kpis', DashboardController.getKPIData);
router.get('/data/kpis/updated', DashboardController.getUpdatedKPIData);
router.get('/data/chart/:chartType', DashboardController.getChartData);
router.get('/data/charts/:type', ChartsController.getChartData);
router.get('/data/charts', ChartsController.getAvailableCharts);

module.exports = router;