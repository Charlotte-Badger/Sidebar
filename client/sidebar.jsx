import React, { useState, useEffect } from 'react';
import PreviewVideo from './components/previewVideo.jsx';
import PriceInfo from './components/priceInfo.jsx';
import CourseIncludes from './components/courseIncludes.jsx';
import ForBusiness from './components/forBusiness.jsx';
import PurchaseButtons from './components/purchaseButtons.jsx';

const host = process.env.PUBLIC_HOST || 'localhost';
const port = process.env.PORT || 3004;
const courseContentURL = process.env.COURSE_CONTENT_URL || 'localhost:9800';

export const Sidebar = () => {

  // Will match only numbers
  const regex = /\d+/;

  // First, attempts to get the course ID from the URL's pathname. Will match the
  // first number (though only will display something to /course/<number> because
  // also needs the server to be willing to send a file.)
  // If that doesn't work, attempts to match a search in the url (so format e.g.
  // localhost:3004/?courseId=27). Will take the first number it finds after the ?

  let currentCourse;
  if (window.location.pathname.match(regex) === null) {
    if (window.location.search.match(regex) === null) {
      currentCourse = 1;
    }
    else {
      currentCourse = window.location.search.match(regex)[0];
    }
  } else {
    currentCourse = window.location.pathname.match(regex)[0];
  }

  const [ courseId, setCourseId ] = useState(currentCourse);
  const [ priceData, setPriceData ] = useState();
  const [ previewVideoData, setPreviewVideoData ] = useState();
  const [ sidebarData, setSidebarData ] = useState();
  const [ courseData, setCourseData ] = useState();
  const [ couponMenuOpen, setCouponMenuOpen ] = useState(false);
  const [ offset, setOffset ] = useState(0);

  const sidebarURL = `${host}:${port}`;
  const endpoints = {
    "price": {
      url: sidebarURL,
      fn: setPriceData
    },
    "previewVideo": {
      url: sidebarURL,
      fn: setPreviewVideoData
    },
    "sidebar": {
      url: sidebarURL,
      fn: setSidebarData
    },
    "course/item": {
      url: courseContentURL,
      fn: setCourseData
    }
  }

  useEffect(() => {
    for (let key in endpoints) {
      fetch(`http://${endpoints[key].url}/${key}?courseId=${courseId}`)
      .then(response => response.json())
      .then(data => {
          endpoints[key].fn(data);
      })
      .catch(error => console.warn("Error: " + error.message));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [offset]);

  const handleScroll = () => {
    setOffset(document.documentElement.scrollTop);
  }

  let applyCoupon = !couponMenuOpen ?
    <div className="sidebar-coupon sidebar-cursor-pointer sidebar-tight-letters" onClick={() => setCouponMenuOpen(true)}>
      Apply Coupon
    </div> :
    <form onSubmit={(e) => e.preventDefault()}>
      <input className="sidebar-coupon-input" placeholder="Enter Coupon" type="text"></input>
      <button type="submit" className="sidebar-coupon-submit-button sidebar-tight-letters">Apply</button>
    </form>;

  let previewVideoElement = <div></div>;
  let positionClass;
  let paddingClass;
  let marginClass;

  if (offset > 420 && offset < document.documentElement.getBoundingClientRect().height - 1300) {
    positionClass = "sidebar-sticky-position";
    previewVideoElement = <div></div>;
    paddingClass = "sidebar-add-padding-top";
    marginClass = "sidebar-sticky-margin";
  } else {
    marginClass = "sidebar-default-margin";
    paddingClass = "";
    if (previewVideoData) {
      previewVideoElement = <PreviewVideo previewVideoData={previewVideoData}/>
    }
    if (offset < 420) {
      positionClass = "sidebar-default-position";
    } else {
      positionClass = "sidebar-final-position";
    }
  }

  return (
    <div className={`sidebar-container ${positionClass}`}>
      <div className={`sidebar-container-content ${paddingClass}`}>
        {previewVideoElement}
        <div className={`sidebar-main-content ${marginClass}`}>
          <PriceInfo priceData={priceData}/>
          <PurchaseButtons />
          <CourseIncludes sidebarData={sidebarData} courseData={courseData}/>
          {applyCoupon}
        </div>
        <ForBusiness />
      </div>
    </div>
  )
}
