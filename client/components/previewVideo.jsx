import React from 'react';

export default function PreviewVideo(props) {

  let previewVideoUrl = props.previewVideoData.previewVideoUrl;
  let previewVideoImgUrl = props.previewVideoData.previewVideoImgUrl;

  return (
    <a href={previewVideoUrl}>
      <button className="sidebar-preview-video sidebar-cursor-pointer">
        <img src={previewVideoImgUrl} alt="Preview video image for this class."></img>
        <span className="sidebar-preview-video-overlay-gradient"></span>
        <svg xmlns="http://www.w3.org/2000/svg">
          <g>
            <title>Layer 1</title>
            <ellipse ry="10" rx="10" id="svg_1" cy="219.5" cx="317" stroke="#000" fill="#fff"/>
            <ellipse stroke="#000" strokeWidth="0" ry="32" rx="31.50001" id="svg_2" cy="96" cx="170.37736" fill="#ffffff"/>
            <path transform="rotate(90 172.951 96)" stroke="#000" id="svg_9" d="m161.10466,107.73892l11.84616,-23.47785l11.84616,23.47785l-23.69232,0z" fill="#000000"/>
          </g>
        </svg>
        <span className="sidebar-preview-video-overlay-text sidebar-tight-letters">Preview this course</span>
      </button>
    </a>
  )
}