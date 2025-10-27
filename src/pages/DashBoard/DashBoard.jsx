import React, { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import Style from "./DashBoard.module.css";
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Sales metrics data
  const salesMetrics = [
    {
      id: 1,
      title: "Total Revenue",
      value: "$12.4M",
      change: "+42%",
      icon: "💰",
    },
    { id: 2, title: "Orders", value: "6,000", change: "+28%", icon: "📦" },
    { id: 3, title: "Customers", value: "25,000", change: "+35%", icon: "👥" },
    {
      id: 4,
      title: "Conversion Rate",
      value: "8.2%",
      change: "+12%",
      icon: "📊",
    },
  ];

  // Monthly sales data for line chart
  const monthlySales = [
    { month: "Jan", sales: 850, revenue: 850000 },
    { month: "Feb", sales: 920, revenue: 920000 },
    { month: "Mar", sales: 780, revenue: 780000 },
    { month: "Apr", sales: 1100, revenue: 1100000 },
    { month: "May", sales: 1250, revenue: 1250000 },
    { month: "Jun", sales: 1400, revenue: 1400000 },
    { month: "Jul", sales: 1600, revenue: 1600000 },
    { month: "Aug", sales: 1550, revenue: 1550000 },
    { month: "Sep", sales: 1800, revenue: 1800000 },
    { month: "Oct", sales: 1950, revenue: 1950000 },
    { month: "Nov", sales: 2100, revenue: 2100000 },
    { month: "Dec", sales: 2400, revenue: 2400000 },
  ];

  // Customer distribution for pie chart
  const customerDistribution = [
    { category: "New Customers", value: 45, color: "#4cd964" },
    { category: "Returning", value: 35, color: "#007aff" },
    { category: "VIP", value: 15, color: "#ff9500" },
    { category: "Inactive", value: 5, color: "#ff3b30" },
  ];

  // Recent activity feed
  const recentActivities = [
    {
      id: 1,
      user: "Sarah Johnson",
      action: "placed a new order",
      item: "Summer Dress",
      time: "2 mins ago",
      icon: "🛒",
    },
    {
      id: 2,
      user: "Mike Chen",
      action: "completed payment",
      item: "$129.99",
      time: "5 mins ago",
      icon: "💳",
    },
    {
      id: 3,
      user: "System",
      action: "inventory updated",
      item: "Black Jeans",
      time: "12 mins ago",
      icon: "📦",
    },
    {
      id: 4,
      user: "Emily Davis",
      action: "wrote a review",
      item: "5 stars",
      time: "25 mins ago",
      icon: "⭐",
    },
    {
      id: 5,
      user: "David Wilson",
      action: "created account",
      item: "New customer",
      time: "1 hour ago",
      icon: "👤",
    },
  ];

  // Top selling products
  const topProducts = [
    {
      id: 1,
      name: "Classic White Tee",
      sales: 342,
      revenue: "$10,256",
      trend: "up",
    },
    {
      id: 2,
      name: "Denim Jacket",
      sales: 287,
      revenue: "$37,310",
      trend: "up",
    },
    {
      id: 3,
      name: "Summer Dress",
      sales: 234,
      revenue: "$20,934",
      trend: "up",
    },
    {
      id: 4,
      name: "Casual Sneakers",
      sales: 198,
      revenue: "$23,760",
      trend: "down",
    },
    {
      id: 5,
      name: "Wool Sweater",
      sales: 176,
      revenue: "$31,680",
      trend: "up",
    },
  ];

  // Yearly sales comparison
  const yearlySales = [
    { year: "2021", sales: 8.2 },
    { year: "2022", sales: 9.8 },
    { year: "2023", sales: 11.2 },
    { year: "2024", sales: 12.4 },
  ];

  // Sales targets progress
  const salesTargets = [
    { category: "Q1 Revenue", current: 2.8, target: 3.0, progress: 93 },
    { category: "Q2 Revenue", current: 3.1, target: 3.2, progress: 97 },
    { category: "New Customers", current: 6200, target: 7000, progress: 89 },
    { category: "Product Launch", current: 4, target: 5, progress: 80 },
  ];

  // Calculate pie chart segments
  const calculatePieSegments = (data) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercent = 0;

    return data.map((item) => {
      const percent = (item.value / total) * 100;
      const segment = {
        ...item,
        percent,
        start: cumulativePercent,
        end: cumulativePercent + percent,
      };
      cumulativePercent += percent;
      return segment;
    });
  };

  const pieData = calculatePieSegments(customerDistribution);

  // Find max values for chart scaling
  const maxSales = Math.max(...monthlySales.map((m) => m.sales));
  const maxRevenue = Math.max(...monthlySales.map((m) => m.revenue));

  const getStatusClass = (status) => {
    switch (status) {
      case "Delivered":
        return Style.statusDelivered;
      case "Shipped":
        return Style.statusShipped;
      case "Processing":
        return Style.statusProcessing;
      case "Low":
        return Style.statusLow;
      case "Critical":
        return Style.statusCritical;
      case "Medium":
        return Style.statusMedium;
      default:
        return "";
    }
  };

  return (
    <div
      data-aos="fade-up"
      className={Style.dashboardContainer}
      style={{
        background: theme === "light" ? "#ebebebff" : "#474747ff",
        color: theme === "light" ? "#474747ff" : "#ebebebff",
      }}
    >
      {/* Header */}
      <header data-aos="fade-up" className={Style.dashboardHeader}>
        <div className={Style.headerContent}>
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening with your store today.</p>
        </div>
        <div className={Style.headerActions}>
          <button
            type="button"
            onClick={() => navigate("/Error")}
            className={Style.primaryBtn}
          >
            + New Product
          </button>
          <button
            type="button"
            onClick={() => navigate("/Error")}
            className={Style.secondaryBtn}
          >
            Export Report
          </button>
        </div>
      </header>

      {/* Section 1: Key Metrics */}
      <section data-aos="fade-up" className={Style.metricsSection}>
        <h2>Key Performance Indicators</h2>
        <div className={Style.metricsGrid}>
          {salesMetrics.map((metric) => (
            <div
              data-aos="fade-up"
              key={metric.id}
              className={Style.metricCard}
              style={{
                background: theme === "light" ? "#ffffff" : "#2d2d2d",
                border:
                  theme === "light" ? "1px solid #e0e0e0" : "1px solid #404040",
              }}
            >
              <div className={Style.metricHeader}>
                <span className={Style.metricIcon}>{metric.icon}</span>
                <span
                  className={`${Style.metricChange} ${
                    parseFloat(metric.change) >= 0
                      ? Style.positive
                      : Style.negative
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <h3 className={Style.metricValue}>{metric.value}</h3>
              <p className={Style.metricTitle}>{metric.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Charts Section */}
      <section data-aos="fade-up" className={Style.chartsSection}>
        <div className={Style.chartsGrid}>
          {/* Mountain Chart - Monthly Sales */}
          <div
            data-aos="fade-up"
            className={Style.chartCard}
            style={{
              background: theme === "light" ? "#ffffff" : "#2d2d2d",
              border:
                theme === "light" ? "1px solid #e0e0e0" : "1px solid #404040",
            }}
          >
            <div className={Style.cardHeader}>
              <h3>Monthly Sales Trend</h3>
              <span className={Style.chartSubtitle}>Last 12 months</span>
            </div>
            {/* Mountain Chart */}
            <div data-aos="fade-up" className={Style.chartContainer}>
              <svg viewBox="0 0 100 100" className={Style.mountainChart}>
                <defs>
                  <linearGradient
                    id="mountainGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <polygon
                  points={`0,100 ${monthlySales
                    .map((month, index) => {
                      const x = (index / (monthlySales.length - 1)) * 100;
                      const y = 100 - (month.sales / maxSales) * 100;
                      return `${x},${y}`;
                    })
                    .join(" ")} 100,100`}
                  fill="url(#mountainGradient)"
                  className={Style.mountainArea}
                />
                <polyline
                  points={monthlySales
                    .map((month, index) => {
                      const x = (index / (monthlySales.length - 1)) * 100;
                      const y = 100 - (month.sales / maxSales) * 100;
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="#667eea"
                  strokeWidth="0.5"
                  className={Style.mountainLine}
                />
              </svg>
              <div data-aos="fade-up" className={Style.chartLabels}>
                {monthlySales.map((month, index) => (
                  <span key={month.month} className={Style.chartLabel}>
                    {month.month}
                  </span>
                ))}
              </div>
            </div>
            <div className={Style.chartStats}>
              <div className={Style.chartStat}>
                <span className={Style.statLabel}>Peak Sales</span>
                <span className={Style.statValue}>2,400 units</span>
              </div>
              <div className={Style.chartStat}>
                <span className={Style.statLabel}>Avg. Monthly</span>
                <span className={Style.statValue}>1,450 units</span>
              </div>
            </div>
          </div>

          {/* Pie Chart - Customer Distribution */}
          <div
            data-aos="fade-up"
            className={Style.chartCard}
            style={{
              background: theme === "light" ? "#ffffff" : "#2d2d2d",
              border:
                theme === "light" ? "1px solid #e0e0e0" : "1px solid #404040",
            }}
          >
            <div className={Style.cardHeader}>
              <h3>Customer Distribution</h3>
              <span className={Style.chartSubtitle}>By category</span>
            </div>
            {/* Pie Chart */}
            <div data-aos="fade-up" className={Style.pieChartContainer}>
              <svg viewBox="0 0 100 100" className={Style.pieChart}>
                {pieData.map((segment, index) => {
                  const startAngle = (segment.start / 100) * 360;
                  const endAngle = (segment.end / 100) * 360;

                  const startRad = (startAngle - 90) * (Math.PI / 180);
                  const endRad = (endAngle - 90) * (Math.PI / 180);

                  const x1 = 50 + 40 * Math.cos(startRad);
                  const y1 = 50 + 40 * Math.sin(startRad);
                  const x2 = 50 + 40 * Math.cos(endRad);
                  const y2 = 50 + 40 * Math.sin(endRad);

                  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

                  const pathData = [
                    `M 50 50`,
                    `L ${x1} ${y1}`,
                    `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                    `Z`,
                  ].join(" ");

                  return (
                    <path
                      key={index}
                      d={pathData}
                      fill={segment.color}
                      className={Style.pieSegment}
                    />
                  );
                })}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill={theme === "light" ? "#ffffff" : "#2d2d2d"}
                />
              </svg>
              <div data-aos="fade-up" className={Style.pieLegend}>
                {pieData.map((segment, index) => (
                  <div key={index} className={Style.legendItem}>
                    <div
                      className={Style.legendColor}
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className={Style.legendText}>
                      {segment.category} ({segment.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Recent Activity & Top Products */}
      <section data-aos="fade-up" className={Style.dataSection}>
        <div data-aos="fade-up" className={Style.dataGrid}>
          {/* Recent Activity Feed */}
          <div
            data-aos="fade-up"
            className={Style.dataCard}
            style={{
              background: theme === "light" ? "#ffffff" : "#2d2d2d",
              border:
                theme === "light" ? "1px solid #e0e0e0" : "1px solid #404040",
            }}
          >
            <div className={Style.cardHeader}>
              <h3>Recent Activity</h3>
              <Link to="/Error" className={Style.viewAllLink}>
                View All
              </Link>
            </div>
            <div className={Style.activityList}>
              {recentActivities.map((activity) => (
                <div
                  data-aos="fade-up"
                  style={{
                    background: theme === "light" ? "#ebebebff" : "#474747ff",
                    color: theme === "light" ? "#474747ff" : "#ebebebff",
                  }}
                  key={activity.id}
                  className={Style.activityItem}
                >
                  <div className={Style.activityIcon}>{activity.icon}</div>
                  <div className={Style.activityContent}>
                    <p className={Style.activityText}>
                      <strong>{activity.user}</strong> {activity.action}{" "}
                      <span className={Style.activityItem}>
                        {activity.item}
                      </span>
                    </p>
                    <span className={Style.activityTime}>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Selling Products */}
          <div
            data-aos="fade-up"
            className={Style.dataCard}
            style={{
              background: theme === "light" ? "#ffffff" : "#2d2d2d",
              border:
                theme === "light" ? "1px solid #e0e0e0" : "1px solid #404040",
            }}
          >
            <div className={Style.cardHeader}>
              <h3>Top Selling Products</h3>
              <Link to="/Error" className={Style.viewAllLink}>
                View All
              </Link>
            </div>
            <div className={Style.productsList}>
              {topProducts.map((product) => (
                <div
                  data-aos="fade-up"
                  style={{
                    background: theme === "light" ? "#ebebebff" : "#474747ff",
                    color: theme === "light" ? "#474747ff" : "#ebebebff",
                  }}
                  key={product.id}
                  className={Style.productItem}
                >
                  <div className={Style.productInfo}>
                    <h4>{product.name}</h4>
                    <div className={Style.productStats}>
                      <span>{product.sales} sold</span>
                      <span>{product.revenue}</span>
                    </div>
                  </div>
                  <span
                    className={`${Style.trendIndicator} ${
                      product.trend === "up" ? Style.trendUp : Style.trendDown
                    }`}
                  >
                    {product.trend === "up" ? "↗" : "↘"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Sales Targets Progress */}
      <section data-aos="fade-up" className={Style.targetsSection}>
        <h2>Sales Targets Progress</h2>
        <div data-aos="fade-up" className={Style.targetsGrid}>
          <div
            data-aos="fade-up"
            className={Style.targetsCard}
            style={{
              background: theme === "light" ? "#ffffff" : "#2d2d2d",
              border:
                theme === "light" ? "1px solid #e0e0e0" : "1px solid #404040",
            }}
          >
            <div className={Style.cardHeader}>
              <h3>Quarterly Targets</h3>
              <span className={Style.targetsSubtitle}>Current progress</span>
            </div>
            {/* Progress Bars */}
            <div data-aos="fade-up" className={Style.progressSection}>
              {salesTargets.map((target, index) => (
                <div key={index} className={Style.progressItem}>
                  <div className={Style.progressHeader}>
                    <span className={Style.progressCategory}>{target.category}</span>
                    <span className={Style.progressValue}>
                      {typeof target.current === 'number' && target.current > 1000 
                        ? `$${target.current}M` 
                        : target.current}
                      /{typeof target.target === 'number' && target.target > 1000 
                        ? `$${target.target}M` 
                        : target.target}
                    </span>
                  </div>
                  <div className={Style.progressBarContainer}>
                    <div 
                      className={Style.progressBar}
                      style={{
                        width: `${target.progress}%`,
                        background: `linear-gradient(90deg, #667eea, #764ba2)`
                      }}
                    />
                  </div>
                  <span className={Style.progressPercent}>{target.progress}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Yearly Sales Comparison */}
          <div
            data-aos="fade-up"
            className={Style.yearlyCard}
            style={{
              background: theme === "light" ? "#ffffff" : "#2d2d2d",
              border:
                theme === "light" ? "1px solid #e0e0e0" : "1px solid #404040",
            }}
          >
            <div className={Style.cardHeader}>
              <h3>Revenue Growth (2021-2024)</h3>
              <span className={Style.growthBadge}>+42% Overall Growth</span>
            </div>
            {/* Bar Chart */}
            <div data-aos="fade-up" className={Style.barChartContainer}>
              <div className={Style.barChart}>
                {yearlySales.map((year, index) => {
                  const maxBarValue = Math.max(...yearlySales.map((y) => y.sales));
                  return (
                    <div key={index} className={Style.barGroup}>
                      <div className={Style.barWrapper}>
                        <div
                          className={Style.bar}
                          style={{
                            height: `${(year.sales / maxBarValue) * 100}%`,
                            background: `linear-gradient(to top, #667eea, #764ba2)`,
                          }}
                        />
                      </div>
                      <span className={Style.barLabel}>{year.year}</span>
                      <span className={Style.barValue}>${year.sales}M</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Quick Actions */}
      <section data-aos="fade-up" className={Style.actionsSection}>
        <h2>Quick Actions</h2>
        <div data-aos="fade-up" className={Style.actionsGrid}>
          <button
            data-aos="fade-up"
            type="button"
            onClick={() => navigate("/Error")}
            className={Style.actionBtn}
          >
            <span className={Style.actionIcon}>📦</span>
            <span>Manage Inventory</span>
          </button>
          <button
            data-aos="fade-up"
            type="button"
            onClick={() => navigate("/Error")}
            className={Style.actionBtn}
          >
            <span className={Style.actionIcon}>👥</span>
            <span>Customer Management</span>
          </button>
          <button
            data-aos="fade-up"
            type="button"
            onClick={() => navigate("/Error")}
            className={Style.actionBtn}
          >
            <span className={Style.actionIcon}>📊</span>
            <span>Sales Reports</span>
          </button>
          <button
            data-aos="fade-up"
            type="button"
            onClick={() => navigate("/Error")}
            className={Style.actionBtn}
          >
            <span className={Style.actionIcon}>🎯</span>
            <span>Marketing Campaign</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;