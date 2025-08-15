'use client'
import React, { useEffect, useState, useRef } from 'react';

const ComparativeSolutionsTable = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tableData = [
    {
      feature: "Battery Life",
      seaContainers: "Up to 3 years",
      fishingBoats: "Extended life",
      charterYachts: "Long-lasting",
      icon: "🔋"
    },
    {
      feature: "Weather Resistance",
      seaContainers: "IP67 rating",
      fishingBoats: "IP67 + TPE gasket",
      charterYachts: "IP67 + Iridium Edge",
      icon: "🌊"
    },
    {
      feature: "Connectivity Type",
      seaContainers: "Bluetooth + GSM",
      fishingBoats: "LTE Cat 1",
      charterYachts: "Cellular + Satellite",
      icon: "📡"
    },
    {
      feature: "Theft Prevention",
      seaContainers: "Container monitoring",
      fishingBoats: "Vessel protection",
      charterYachts: "Advanced security",
      icon: "🔒"
    },
    {
      feature: "Global Coverage",
      seaContainers: "Regional tracking",
      fishingBoats: "Coastal areas",
      charterYachts: "Worldwide + polar",
      icon: "🌍"
    },
    {
      feature: "Navigation Mode",
      seaContainers: "Standard GPS",
      fishingBoats: "Static drift tracking",
      charterYachts: "Real-time positioning",
      icon: "🧭"
    },
    {
      feature: "Emergency Features",
      seaContainers: "Basic alerts",
      fishingBoats: "Safety monitoring",
      charterYachts: "Panic button + SOS",
      icon: "🚨"
    },
    {
      feature: "Operational Efficiency",
      seaContainers: "Route tracking",
      fishingBoats: "Fleet management",
      charterYachts: "Full optimization",
      icon: "📈"
    }
  ];

  const getCheckIcon = (value) => {
    if (value.includes("Up to 3 years") || value.includes("Worldwide") || value.includes("Advanced") || value.includes("Full")) {
      return "✅"; // Premium feature
    } else if (value.includes("Extended") || value.includes("IP67") || value.includes("Real-time") || value.includes("Panic")) {
      return "✅"; // Standard feature
    } else {
      return "✅"; // Basic feature
    }
  };

  return (
    <>
      <style jsx>{`
        .table-section {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 50%, #0b1a2e 100%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        
        .section-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 30% 30%, rgba(74, 158, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
          background-size: 300px 300px;
        }
        
        .section-content {
          position: relative;
          z-index: 2;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }
        
        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #e8f4fd;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.3s;
        }
        
        .section-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .table-container {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease-out 0.6s;
        }
        
        .table-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .table-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .comparison-table {
          width: 100%;
          margin: 0;
          border-collapse: collapse;
          font-family: 'Inter', sans-serif;
        }
        
        .table-header {
          background: linear-gradient(135deg, #0b1a2e 0%, #1e3a5f 100%);
          color: #ffffff;
        }
        
        .table-header th {
          padding: 25px 20px;
          font-weight: 600;
          font-size: 1.1rem;
          text-align: center;
          border: none;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          position: relative;
        }
        
        .table-header th:first-child {
          text-align: left;
          padding-left: 30px;
        }
        
        .table-header th::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #4a9eff, #2c5282);
        }
        
        .table-body tr {
          transition: all 0.3s ease;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .table-body tr:nth-child(even) {
          background: #f8fbff;
        }
        
        .table-body tr:nth-child(odd) {
          background: #ffffff;
        }
        
        .table-body tr:hover {
          background: linear-gradient(135deg, #e8f4fd 0%, #f0f9ff 100%);
          transform: scale(1.01);
          box-shadow: 0 5px 15px rgba(74, 158, 255, 0.1);
        }
        
        .table-body td {
          padding: 20px;
          font-size: 1rem;
          color: #2d3748;
          border: none;
          vertical-align: middle;
          position: relative;
        }
        
        .feature-cell {
          font-weight: 600;
          color: #0b1a2e;
          padding-left: 30px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .feature-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #4a9eff, #2c5282);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .value-cell {
          text-align: center;
          position: relative;
          font-weight: 500;
        }
        
        .check-icon {
          font-size: 1.2rem;
          margin-right: 8px;
          vertical-align: middle;
        }
        
        .solution-header {
          position: relative;
          overflow: hidden;
        }
        
        .solution-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .solution-header:hover::before {
          transform: translateX(100%);
        }
        
        .premium-badge {
          display: inline-block;
          background: linear-gradient(135deg, #4a9eff, #2c5282);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-left: 10px;
          text-shadow: none;
        }
        
        @media (max-width: 768px) {
          .table-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .table-wrapper {
            border-radius: 20px;
          }
          
          .table-header th {
            padding: 20px 15px;
            font-size: 1rem;
            min-width: 150px;
          }
          
          .table-header th:first-child {
            min-width: 200px;
            padding-left: 20px;
          }
          
          .table-body td {
            padding: 15px;
            min-width: 150px;
          }
          
          .feature-cell {
            padding-left: 20px;
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
          
          .feature-icon {
            width: 35px;
            height: 35px;
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 576px) {
          .section-title {
            font-size: 1.9rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .table-header th {
            padding: 15px 10px;
            font-size: 0.9rem;
          }
          
          .table-body td {
            padding: 12px 10px;
            font-size: 0.9rem;
          }
        }
        
        /* Custom scrollbar for table */
        .table-wrapper::-webkit-scrollbar {
          height: 8px;
        }
        
        .table-wrapper::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        .table-wrapper::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #4a9eff, #2c5282);
          border-radius: 4px;
        }
        
        .table-wrapper::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2c5282, #4a9eff);
        }
      `}</style>
      
      <section className="table-section" ref={sectionRef}>
        <div className="section-pattern"></div>
        
        <div className="container section-content">
          <div className="section-header">
            <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>
              Solution Comparison
            </h2>
            <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
              Compare our comprehensive tracking solutions across different maritime applications. 
              Each solution is tailored to meet specific industry requirements and challenges.
            </p>
          </div>
          
          <div className={`table-container ${isVisible ? 'visible' : ''}`}>
            <div className="table-wrapper">
              <table className="comparison-table">
                <thead className="table-header">
                  <tr>
                    <th>Features</th>
                    <th className="solution-header">
                      Sea Containers
                      <span className="premium-badge">Smart</span>
                    </th>
                    <th className="solution-header">
                      Fishing Boats
                      <span className="premium-badge">Pro</span>
                    </th>
                    <th className="solution-header">
                      Charter Yachts
                      <span className="premium-badge">Premium</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="feature-cell">
                        <div className="feature-icon">
                          {row.icon}
                        </div>
                        <span>{row.feature}</span>
                      </td>
                      <td className="value-cell">
                        <span className="check-icon">{getCheckIcon(row.seaContainers)}</span>
                        {row.seaContainers}
                      </td>
                      <td className="value-cell">
                        <span className="check-icon">{getCheckIcon(row.fishingBoats)}</span>
                        {row.fishingBoats}
                      </td>
                      <td className="value-cell">
                        <span className="check-icon">{getCheckIcon(row.charterYachts)}</span>
                        {row.charterYachts}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComparativeSolutionsTable;