const express = require('express');
const router = express.Router();
const ChartData = require('../models/ChartData');

// Get sample chart data
router.get('/chart-data/:type', async (req, res) => {
  try {
    const { type } = req.params;
    
    // Sample data for different chart types
    const sampleData = {
      bar: {
        title: { text: 'Monthly Sales' },
        tooltip: {},
        legend: { data: ['Sales'] },
        xAxis: { data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      line: {
        title: { text: 'Website Traffic' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['Visitors', 'Page Views'] },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { 
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [
          {
            name: 'Visitors',
            type: 'line',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          },
          {
            name: 'Page Views',
            type: 'line',
            data: [1820, 1932, 1901, 1934, 2290, 2330, 2320]
          }
        ]
      },
      pie: {
        title: { text: 'Market Share', left: 'center' },
        tooltip: { trigger: 'item' },
        legend: { orient: 'vertical', left: 'left' },
        series: [{
          name: 'Market Share',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      }
    };

    if (sampleData[type]) {
      res.json(sampleData[type]);
    } else {
      res.status(404).json({ error: 'Chart type not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Save chart data
router.post('/chart-data', async (req, res) => {
  try {
    const chartData = new ChartData(req.body);
    await chartData.save();
    res.status(201).json(chartData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all chart data
router.get('/chart-data', async (req, res) => {
  try {
    const chartData = await ChartData.find();
    res.json(chartData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;