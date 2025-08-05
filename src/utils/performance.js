// Performance monitoring utility
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = [];
  }

  // Start timing a specific operation
  startTimer(operation) {
    this.metrics[operation] = {
      startTime: performance.now(),
      endTime: null,
      duration: null
    };
  }

  // End timing and calculate duration
  endTimer(operation) {
    if (this.metrics[operation]) {
      this.metrics[operation].endTime = performance.now();
      this.metrics[operation].duration = 
        this.metrics[operation].endTime - this.metrics[operation].startTime;
      
      // Log performance metric
      console.log(`⏱️ ${operation}: ${this.metrics[operation].duration.toFixed(2)}ms`);
      
      // Report to analytics if available
      this.reportMetric(operation, this.metrics[operation].duration);
    }
  }

  // Measure image loading performance
  measureImageLoad(imageUrl) {
    return new Promise((resolve) => {
      const img = new Image();
      const startTime = performance.now();
      
      img.onload = () => {
        const duration = performance.now() - startTime;
        console.log(`🖼️ Image loaded: ${imageUrl} in ${duration.toFixed(2)}ms`);
        this.reportMetric('image_load', duration);
        resolve(duration);
      };
      
      img.onerror = () => {
        const duration = performance.now() - startTime;
        console.warn(`❌ Image failed to load: ${imageUrl} after ${duration.toFixed(2)}ms`);
        this.reportMetric('image_error', duration);
        resolve(duration);
      };
      
      img.src = imageUrl;
    });
  }

  // Measure API call performance
  async measureApiCall(apiCall, operation = 'api_call') {
    this.startTimer(operation);
    try {
      const result = await apiCall();
      this.endTimer(operation);
      return result;
    } catch (error) {
      this.endTimer(operation);
      throw error;
    }
  }

  // Monitor Core Web Vitals
  monitorCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(`🎯 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
        this.reportMetric('lcp', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log(`⚡ FID: ${entry.processingStart - entry.startTime}ms`);
          this.reportMetric('fid', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log(`📐 CLS: ${clsValue.toFixed(4)}`);
        this.reportMetric('cls', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Monitor memory usage
  monitorMemory() {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        const usedMB = (memory.usedJSHeapSize / 1048576).toFixed(2);
        const totalMB = (memory.totalJSHeapSize / 1048576).toFixed(2);
        const limitMB = (memory.jsHeapSizeLimit / 1048576).toFixed(2);
        
        console.log(`💾 Memory: ${usedMB}MB / ${totalMB}MB (${limitMB}MB limit)`);
        
        // Warn if memory usage is high
        if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.8) {
          console.warn('⚠️ High memory usage detected!');
        }
      }, 10000); // Check every 10 seconds
    }
  }

  // Report metrics to analytics
  reportMetric(name, value) {
    // You can integrate with Google Analytics, Sentry, or other analytics services here
    if (window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value
      });
    }
    
    // Store in localStorage for debugging
    const metrics = JSON.parse(localStorage.getItem('performance_metrics') || '{}');
    metrics[name] = {
      value,
      timestamp: Date.now()
    };
    localStorage.setItem('performance_metrics', JSON.stringify(metrics));
  }

  // Get performance summary
  getSummary() {
    const summary = {};
    Object.keys(this.metrics).forEach(key => {
      if (this.metrics[key].duration !== null) {
        summary[key] = this.metrics[key].duration;
      }
    });
    return summary;
  }

  // Clear metrics
  clear() {
    this.metrics = {};
  }
}

// Create global instance
const performanceMonitor = new PerformanceMonitor();

// Auto-start monitoring
if (typeof window !== 'undefined') {
  performanceMonitor.monitorCoreWebVitals();
  performanceMonitor.monitorMemory();
}

export default performanceMonitor; 