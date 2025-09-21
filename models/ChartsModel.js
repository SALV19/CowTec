// Charts Data Model - handles all chart configurations and data logic
class ChartsModel {
  
  // Static chart configurations with complete ECharts options
  static getBarChartConfig() {
    return {
      title: { text: 'Monthly Sales Performance' },
      tooltip: {},
      legend: { data: ['Sales', 'Target'] },
      xAxis: { 
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisLabel: { interval: 0, rotate: 45 }
      },
      yAxis: { name: 'Amount ($)' },
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [5000, 20000, 36000, 10000, 15000, 25000],
          itemStyle: { color: '#5470c6' }
        },
        {
          name: 'Target',
          type: 'bar',
          data: [8000, 18000, 30000, 15000, 20000, 28000],
          itemStyle: { color: '#91cc75' }
        }
      ]
    };
  }
  
  static getLineChartConfig() {
    return {
      title: { text: 'Website Traffic Over Time' },
      tooltip: { trigger: 'axis' },
      legend: { data: ['Visitors', 'Page Views', 'Unique Users'] },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { 
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: { type: 'value', name: 'Count' },
      series: [
        {
          name: 'Visitors',
          type: 'line',
          smooth: true,
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          itemStyle: { color: '#5470c6' }
        },
        {
          name: 'Page Views',
          type: 'line',
          smooth: true,
          data: [1820, 1932, 1901, 1934, 2290, 2330, 2320],
          itemStyle: { color: '#91cc75' }
        },
        {
          name: 'Unique Users',
          type: 'line',
          smooth: true,
          data: [620, 732, 701, 734, 990, 1030, 1020],
          itemStyle: { color: '#fac858' }
        }
      ]
    };
  }
  
  static getPieChartConfig() {
    return {
      title: { text: 'Market Share Distribution', left: 'center' },
      tooltip: { 
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: { 
        orient: 'vertical', 
        left: 'left',
        data: ['Search Engine', 'Direct', 'Email', 'Union Ads', 'Video Ads']
      },
      series: [{
        name: 'Market Share',
        type: 'pie',
        radius: '60%',
        center: ['50%', '60%'],
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
        },
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        }
      }]
    };
  }
  
  static getAreaChartConfig() {
    return {
      title: { text: 'Revenue Growth' },
      tooltip: { trigger: 'axis' },
      legend: { data: ['Revenue', 'Expenses', 'Profit'] },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Q1', 'Q2', 'Q3', 'Q4']
      },
      yAxis: { type: 'value', name: 'Amount ($)' },
      series: [
        {
          name: 'Revenue',
          type: 'line',
          areaStyle: { opacity: 0.3 },
          data: [120000, 150000, 180000, 200000],
          itemStyle: { color: '#5470c6' }
        },
        {
          name: 'Expenses',
          type: 'line',
          areaStyle: { opacity: 0.3 },
          data: [80000, 95000, 110000, 125000],
          itemStyle: { color: '#ee6666' }
        },
        {
          name: 'Profit',
          type: 'line',
          areaStyle: { opacity: 0.3 },
          data: [40000, 55000, 70000, 75000],
          itemStyle: { color: '#91cc75' }
        }
      ]
    };
  }
  
  // Get chart configuration by type
  static getChartConfig(type) {
    const chartMethods = {
      'bar': this.getBarChartConfig,
      'line': this.getLineChartConfig,
      'pie': this.getPieChartConfig,
      'area': this.getAreaChartConfig
    };
    
    return chartMethods[type] ? chartMethods[type]() : null;
  }
  
  // Get all available chart types with metadata
  static getAvailableChartTypes() {
    return [
      { 
        id: 'barChart', 
        name: 'Bar Chart', 
        type: 'bar', 
        description: 'Compare categories',
        icon: '📊'
      },
      { 
        id: 'lineChart', 
        name: 'Line Chart', 
        type: 'line', 
        description: 'Show trends over time',
        icon: '📈'
      },
      { 
        id: 'pieChart', 
        name: 'Pie Chart', 
        type: 'pie', 
        description: 'Display proportions',
        icon: '🥧'
      },
      { 
        id: 'areaChart', 
        name: 'Area Chart', 
        type: 'area', 
        description: 'Filled line charts',
        icon: '📉'
      }
    ];
  }
  
  // Get chart types for API responses
  static getChartTypesForAPI() {
    return this.getAvailableChartTypes().map(chart => ({
      type: chart.type,
      title: this.getChartConfig(chart.type)?.title?.text || `${chart.name}`
    }));
  }
}

module.exports = ChartsModel;