const PortraitButton = (style) => {
  return (
    <svg {...style} className="button">
      <path
        d="M12,0C5.37,0,0,5.37,0,12c0,3.79,1.76,7.17,4.5,9.37c0,0,0.01,0,0.01,0.01C6.57,23.02,9.17,24,12,24
	c2.83,0,5.43-0.98,7.49-2.63c0,0,0.01,0,0.01-0.01c2.74-2.2,4.5-5.58,4.5-9.37C24,5.37,18.63,0,12,0z M12,21.95
	c-1.02,0-2-0.16-2.93-0.45c-1.79-0.56-3.35-1.63-4.54-3.04c0.79-2.57,2.88-4.58,5.5-5.26c-1.59-0.74-2.7-2.36-2.7-4.23
	C7.33,6.39,9.43,4.3,12,4.3s4.67,2.09,4.67,4.67c0,1.87-1.1,3.49-2.7,4.23c2.62,0.68,4.7,2.69,5.5,5.26
	c-1.19,1.41-2.75,2.48-4.54,3.04C14,21.79,13.02,21.95,12,21.95z"
      />
    </svg>
  );
};

export default PortraitButton;
