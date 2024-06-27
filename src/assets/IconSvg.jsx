
import React from 'react';

export const BackArrowIcon = ({ onClick, className = "", width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className={`bi bi-arrow-left-circle ${className}`}
    viewBox="0 0 16 16"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  >
    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
  </svg>
);

export const ChairIcon = ({ className = "", width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className={`bi bi-chair ${className}`}
    viewBox="0 0 16 16"
  >
    <path d="M12.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-1.5-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0zM5 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" />
    <path d="M13 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 .5 6v5A1.5 1.5 0 0 0 2 12.5h11a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 13 4.5H2z" />
  </svg>
);