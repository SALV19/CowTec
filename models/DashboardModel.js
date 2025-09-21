// Dashboard Data Model - handles all dashboard-related data logic
class DashboardModel {
  
  // Static data for KPIs
  static getKPIData() {
    return {
      totalSales: 87543,
      activeUsers: 2341,
      totalOrders: 1567,
      revenueGrowth: 23.4
    };
  }
  
  // Static data for sales trend chart
  static getSalesTrendData() {
    return {
      title: 'Sales Trend (Last 6 Months)',
      xAxis: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      series: [
        {
          name: 'Revenue',
          data: [12000, 19000, 30000, 50000, 70000, 90000]
        },
        {
          name: 'Profit',
          data: [2000, 3000, 7000, 12000, 18000, 25000]
        }
      ]
    };
  }
  
  // Static data for traffic sources chart
  static getTrafficSourcesData() {
    return {
      title: 'Traffic Sources',
      data: [
        { value: 1048, name: 'Organic Search' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Social Media' },
        { value: 484, name: 'Email' },
        { value: 300, name: 'Paid Ads' }
      ]
    };
  }
  
  // Static data for regional performance chart
  static getRegionalPerformanceData() {
    return {
      title: 'Regional Performance',
      regions: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'],
      data: [320, 280, 450, 120, 80, 60]
    };
  }
  
  // Static data for product categories chart
  static getProductCategoriesData() {
    return {
      title: 'Product Categories',
      categories: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'],
      series: [
        {
          name: 'Sales',
          data: [320, 302, 301, 334, 390]
        },
        {
          name: 'Returns',
          data: [120, 132, 101, 134, 90]
        }
      ]
    };
  }
  
  // Get all dashboard data combined
  static getAllDashboardData() {
    return {
      kpis: this.getKPIData(),
      salesTrend: this.getSalesTrendData(),
      trafficSources: this.getTrafficSourcesData(),
      regionalPerformance: this.getRegionalPerformanceData(),
      productCategories: this.getProductCategoriesData()
    };
  }
  
  // Simulate real-time KPI updates (for demo purposes)
  static getUpdatedKPIData() {
    const baseData = this.getKPIData();
    return {
      totalSales: baseData.totalSales + Math.floor(Math.random() * 5000) - 2500,
      activeUsers: baseData.activeUsers + Math.floor(Math.random() * 200) - 100,
      totalOrders: baseData.totalOrders + Math.floor(Math.random() * 50) - 25,
      revenueGrowth: baseData.revenueGrowth + (Math.random() * 2 - 1)
    };
  }
}

module.exports = DashboardModel;