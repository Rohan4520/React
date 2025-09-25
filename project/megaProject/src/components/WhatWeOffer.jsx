import React from "react";
import "./WhatWeOffer.css";
import { companyOffers } from "../utils/companyOffers.js";


function WhatWeOffer() {
  return (
    <div className="offer-page">
      <h1>What We Offer</h1>
      <p>
        Discover top laptops from leading brands with exclusive deals, premium services, and guaranteed support. Choose your favorite brand and enjoy unbeatable offers!
      </p>

      <div className="offer-container">
        {companyOffers.map((company, index) => (
          <div key={index} className="company-card">
            <div className="ss">
            <h2>{company.company}</h2>
            <img src={company.image} alt=""  width={'120px'}/>
            </div>

            <ul>
              {company.offers.map((offer, i) => (
                <li key={i}>
                  {offer.text} {offer.badge && <span className="badge">{offer.badge}</span>}
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeOffer;

