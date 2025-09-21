// Main JavaScript file for ECharts Node.js App

// Global variables
let charts = {};
let currentTheme = 'light';

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    console.log('ECharts Node.js App initialized');
    
    // Add fade-in animation to main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Add responsive behavior to all charts
    window.addEventListener('resize', handleWindowResize);
}

function handleWindowResize() {
    // Resize all active charts
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
}

// Utility function to create chart with loading state
function createChart(containerId, option, theme = 'light') {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Chart container with ID '${containerId}' not found`);
        return null;
    }
    
    // Show loading state
    showLoading(containerId);
    
    // Dispose existing chart if it exists
    if (charts[containerId]) {
        charts[containerId].dispose();
    }
    
    // Create new chart
    const chart = echarts.init(container, theme);
    charts[containerId] = chart;
    
    // Set option with animation
    chart.setOption(option, true);
    
    // Hide loading state
    hideLoading(containerId);
    
    return chart;
}

function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="chart-loading">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
    }
}

function hideLoading(containerId) {
    // Loading will be hidden when chart is rendered
}

// API helper functions
async function fetchChartData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching chart data:', error);
        throw error;
    }
}

async function saveChartData(data) {
    try {
        const response = await fetch('/api/chart-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error saving chart data:', error);
        throw error;
    }
}

// Chart theme management
function toggleAllChartsTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Re-initialize all charts with new theme
    Object.keys(charts).forEach(chartId => {
        const chart = charts[chartId];
        if (chart) {
            const option = chart.getOption();
            chart.dispose();
            charts[chartId] = echarts.init(document.getElementById(chartId), currentTheme);
            charts[chartId].setOption(option);
        }
    });
    
    console.log(`Switched to ${currentTheme} theme`);
}

// Export chart as image
function exportChart(chartId, filename = 'chart') {
    const chart = charts[chartId];
    if (!chart) {
        console.error(`Chart with ID '${chartId}' not found`);
        return;
    }
    
    const url = chart.getDataURL({
        pixelRatio: 2,
        backgroundColor: currentTheme === 'dark' ? '#1e1e1e' : '#fff'
    });
    
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Error handling for charts
function handleChartError(error, containerId) {
    console.error('Chart error:', error);
    
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <h6>Error loading chart</h6>
                <p class="mb-0">${error.message || 'An unexpected error occurred'}</p>
                <button class="btn btn-sm btn-outline-danger mt-2" onclick="location.reload()">
                    Retry
                </button>
            </div>
        `;
    }
}

// Responsive chart options
function getResponsiveOption(baseOption) {
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 768) {
        // Mobile adjustments
        return {
            ...baseOption,
            title: {
                ...baseOption.title,
                textStyle: { fontSize: 14 }
            },
            legend: {
                ...baseOption.legend,
                orient: 'horizontal',
                bottom: 0,
                textStyle: { fontSize: 12 }
            },
            grid: {
                ...baseOption.grid,
                left: '10%',
                right: '10%',
                top: '15%',
                bottom: '20%'
            }
        };
    }
    
    return baseOption;
}

// Performance monitoring
function logChartPerformance(chartId, startTime) {
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Chart '${chartId}' rendered in ${duration.toFixed(2)}ms`);
}

// Common chart configurations
const CHART_THEMES = {
    light: {
        backgroundColor: '#ffffff',
        textStyle: { color: '#333333' }
    },
    dark: {
        backgroundColor: '#1e1e1e',
        textStyle: { color: '#ffffff' }
    }
};

const CHART_COLORS = [
    '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de',
    '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc', '#abc'
];

// Export functions for global use
window.EChartsApp = {
    createChart,
    fetchChartData,
    saveChartData,
    toggleAllChartsTheme,
    exportChart,
    handleChartError,
    getResponsiveOption,
    CHART_THEMES,
    CHART_COLORS
};