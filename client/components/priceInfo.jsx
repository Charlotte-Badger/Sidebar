import React from 'react';

export default function PriceInfo(props) {

  let basePrice;
  let discountPercentage;
  let discountedPrice;
  let saleOngoing;

  if (props.priceData !== undefined) {
     ({basePrice, discountPercentage, discountedPrice, saleOngoing} = props.priceData);
  }

  let priceInfo;

  if (saleOngoing) {
    priceInfo =
      <div>
        <div className="sidebar-price-info">
          <div className="sidebar-big-price sidebar-tight-letters">
            ${discountedPrice}
          </div>
          <div className="sidebar-discount-info">
            $<s>{basePrice}</s> {discountPercentage}% off!
          </div>
        </div>
        <div className="sidebar-discount-red-text">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="16px" width="16px" fill="#b32929">
            <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 000-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
          </svg>
          <div><span> 4 hours </span> left at this price!</div>
        </div>
      </div>;
  } else {
    priceInfo = <div className="sidebar-big-price sidebar-tight-letters">${basePrice}</div>;
  }

  return (
    priceInfo
  )

}
