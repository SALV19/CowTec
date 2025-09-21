const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/dashboardController');

// Home route - Dashboard as main page
router.get('/', DashboardController.getDashboardData);

// Dashboard route (same as home for now)
router.get('/dashboard', DashboardController.getDashboardData);

// API-like routes for AJAX calls (but using controllers with models)
router.get('/data/kpis/updated', DashboardController.getUpdatedKPIData);

module.exports = router;