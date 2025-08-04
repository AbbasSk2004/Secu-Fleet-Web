import React from 'react';
import Image from 'next/image';

const GrowthSection = () => {
  return (
    <div className="growth-section">
      <div className="growth-content">
        <Image 
          src="/assets/images/works/consulting3resized.jpg"
          alt="Business people"
          width={400}
          height={400}
          style={{ width: '25%', height: '25%', marginLeft: '250px', marginTop: '180px' }}
        />
        <div className="growth-text">
          <h5 className="fw-bold text-primary text-uppercase">Who we are</h5>
          <h1 className="mb-0">Growth with purpose</h1>
          <br /><br /><br />
          <p>
            When setting out to create a winning strategy, the first question SecuFleet asks
            is, &apos;what&apos;s <b>the organization&apos;s purpose</b>?&apos; <br />
            In Sustainable Business Strategy, SecuFleet discusses the importance of starting
            with formulating a framework that satisfy the purposes of the organization.
          </p>
          <br />
          <ul>
            <li className="bullet">
              The purpose formulation framework with SecuFleet creating shared
              value between the triple bottom line &apos;Three Ps&apos;: Planet, People &amp; Profit
            </li>
            <br />
            <li className="bullet">
              Consider Global Events, business doesn&apos;t exist in a vacuum - it&apos;s
              influenced by politics, policies, laws, taxes, labor laws, transportation
              infrastructure and relationships.
            </li>
            <br />
            <li className="bullet">
              Examine Data, Case Studies, and Trends. When crafting your Strategy,
              SecuFleet will guide to examine your financial statements along with
              historical strategies, analyze case studies and economic principles.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrowthSection; 