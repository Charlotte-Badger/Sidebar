import React from 'react';
import { DateTime } from 'luxon';

export default function CourseIncludes(props) {
  let fullLifetimeAccess;
  let accessTypes;
  let assignments;
  let certificateOfCompletion;
  let downloadableResources;

  if (props.sidebarData !== undefined) {
    ({fullLifetimeAccess, accessTypes, assignments, certificateOfCompletion, downloadableResources} = props.sidebarData);
  }

  let courseLength;
  let totalArticles;
  let totalExercises;

  if (props.courseData !== undefined) {
    ({totalArticles, totalExercises, courseLength} = props.courseData);
    courseLength = DateTime.fromISO(courseLength).toSeconds();
    courseLength = Math.round((courseLength / 3600) * 2) / 2;
  }

  return (
    <div className="sidebar-course-includes">
      <b className="sidebar-tight-letters">This course includes:</b>
      {courseLength > 0 &&
        <div className="sidebar-course-includes-item">
          <div className="sidebar-small-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7l7 4z"></path>
            </svg>
          </div>
          <div className="sidebar-course-includes-text">
            {courseLength} hours on-demand video
          </div>
        </div>}
      {totalArticles > 0 &&
        <div className="sidebar-course-includes-item">
          <div className="sidebar-small-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M 14 2 H 6 c -1.1 0 -1.99 0.9 -1.99 2 L 4 20 c 0 1.1 0.89 2 1.99 2 H 18 c 1.1 0 2 -0.9 2 -2 V 8 l -6 -6 Z M 6 20 V 4 h 7 v 5 h 5 v 11 H 6 Z"></path>
            </svg>
          </div>
          <div className="sidebar-course-includes-text">
            {totalArticles} articles
          </div>
        </div>}
      {downloadableResources > 0 &&
        <div className="sidebar-course-includes-item">
        <div className="sidebar-small-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 11.17 8 l -2 -2 H 4 v 12 h 16 V 8 h -8.83 Z M 4 4 h 6 l 2 2 h 8 c 1.1 0 2 0.9 2 2 v 10 c 0 1.1 -0.9 2 -2 2 H 4 c -1.1 0 -2 -0.9 -2 -2 l 0.01 -12 c 0 -1.1 0.89 -2 1.99 -2 Z m 6.55 9 v -3 h 2.9 v 3 H 16 l -4 4 l -4 -4 h 2.55 Z"></path>
          </svg>
        </div>
        <div className="sidebar-course-includes-text">
          {downloadableResources} downloadable resources
        </div>
      </div>}
      {totalExercises > 0 &&
        <div className="sidebar-course-includes-item">
        <div className="sidebar-small-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 8 3 a 2 2 0 0 0 -2 2 v 4 a 2 2 0 0 1 -2 2 H 3 v 2 h 1 a 2 2 0 0 1 2 2 v 4 a 2 2 0 0 0 2 2 h 2 v -2 H 8 v -5 a 2 2 0 0 0 -2 -2 a 2 2 0 0 0 2 -2 V 5 h 2 V 3 H 8 Z m 8 0 a 2 2 0 0 1 2 2 v 4 a 2 2 0 0 0 2 2 h 1 v 2 h -1 a 2 2 0 0 0 -2 2 v 4 a 2 2 0 0 1 -2 2 h -2 v -2 h 2 v -5 a 2 2 0 0 1 2 -2 a 2 2 0 0 1 -2 -2 V 5 h -2 V 3 h 2 Z"></path>
          </svg>
        </div>
        <div className="sidebar-course-includes-text">
        {totalExercises} coding exercises
        </div>
      </div>}
      <div className="sidebar-course-includes-item">
        <div className="sidebar-small-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 18.6 6.62 c -1.44 0 -2.8 0.56 -3.77 1.53 L 12 10.66 L 10.48 12 h 0.01 L 7.8 14.39 c -0.64 0.64 -1.49 0.99 -2.4 0.99 c -1.87 0 -3.39 -1.51 -3.39 -3.38 S 3.53 8.62 5.4 8.62 c 0.91 0 1.76 0.35 2.44 1.03 l 1.13 1 l 1.51 -1.34 L 9.22 8.2 A 5.37 5.37 0 0 0 5.4 6.62 C 2.42 6.62 0 9.04 0 12 s 2.42 5.38 5.4 5.38 c 1.44 0 2.8 -0.56 3.77 -1.53 l 2.83 -2.5 l 0.01 0.01 L 13.52 12 h -0.01 l 2.69 -2.39 c 0.64 -0.64 1.49 -0.99 2.4 -0.99 c 1.87 0 3.39 1.51 3.39 3.38 s -1.52 3.38 -3.39 3.38 c -0.9 0 -1.76 -0.35 -2.44 -1.03 l -1.14 -1.01 l -1.51 1.34 l 1.27 1.12 a 5.386 5.386 0 0 0 3.82 1.57 c 2.98 0 5.4 -2.41 5.4 -5.38 s -2.42 -5.37 -5.4 -5.37 Z"></path>
          </svg>
        </div>
        <div className="sidebar-course-includes-text">
        {fullLifetimeAccess}
        </div>
      </div>
      <div className="sidebar-course-includes-item">
        <div className="sidebar-small-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 17 1.01 L 7 1 c -1.1 0 -2 0.9 -2 2 v 18 c 0 1.1 0.9 2 2 2 h 10 c 1.1 0 2 -0.9 2 -2 V 3 c 0 -1.1 -0.9 -1.99 -2 -1.99 Z M 17 19 H 7 V 5 h 10 v 14 Z"></path>
          </svg>
        </div>
        <div className="sidebar-course-includes-text">
        {accessTypes}
        </div>
      </div>
      {assignments &&
        <div className="sidebar-course-includes-item">
        <div className="sidebar-small-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 19 3 h -4.18 C 14.4 1.84 13.3 1 12 1 s -2.4 0.84 -2.82 2 H 5 c -1.1 0 -2 0.9 -2 2 v 14 c 0 1.1 0.9 2 2 2 h 14 c 1.1 0 2 -0.9 2 -2 V 5 c 0 -1.1 -0.9 -2 -2 -2 Z m -7 0 c 0.55 0 1 0.45 1 1 s -0.45 1 -1 1 s -1 -0.45 -1 -1 s 0.45 -1 1 -1 Z m 2 14 H 7 v -2 h 7 v 2 Z m 3 -4 H 7 v -2 h 10 v 2 Z m 0 -4 H 7 V 7 h 10 v 2 Z"></path>
          </svg>
        </div>
        <div className="sidebar-course-includes-text">
        Assignments
        </div>
      </div>}
      {certificateOfCompletion &&
        <div className="sidebar-course-includes-item">
        <div className="sidebar-small-icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20.39 19.37 L 16.38 18 L 15 22 l -3.08 -6 L 9 22 l -1.38 -4 l -4.01 1.37 l 2.92 -6 A 6.97 6.97 0 0 1 5 9 a 6.999 6.999 0 1 1 14 0 c 0 1.65 -0.57 3.17 -1.53 4.37 l 2.92 6 Z M 7 9 l 2.69 1.34 l -0.19 3 l 2.5 -1.66 l 2.5 1.65 l -0.17 -2.99 L 17 9 l -2.68 -1.35 l 0.18 -2.98 L 12 6.31 L 9.5 4.65 l 0.17 3.01 L 7 9 Z"></path>
          </svg>
        </div>
        <div className="sidebar-course-includes-text">
        Certificate of completion
        </div>
      </div>}
    </div>
  )

}
