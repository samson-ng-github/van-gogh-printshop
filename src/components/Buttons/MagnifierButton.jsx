export const MagnifierButton = ({ onclick }) => {
  return (
    <svg className="button searchBarButton" onClick={onclick}>
      <g>
        <path
          d="M9.86,5.04c-1.24,0-2.47,0.47-3.41,1.41C5.54,7.36,5.04,8.58,5.04,9.86c0,1.29,0.5,2.5,1.41,3.41
		c1.88,1.88,4.94,1.88,6.82,0c0.91-0.91,1.41-2.12,1.41-3.41c0-1.29-0.5-2.5-1.41-3.41C12.33,5.51,11.1,5.04,9.86,5.04z"
        />
        <path
          d="M12,0C5.37,0,0,5.37,0,12c0,6.63,5.37,12,12,12c6.63,0,12-5.37,12-12C24,5.37,18.63,0,12,0z M18.68,18.68
		c-0.24,0.24-0.56,0.36-0.88,0.36c-0.32,0-0.63-0.12-0.88-0.36l-3.48-3.48c-1.08,0.72-2.33,1.09-3.58,1.09
		c-1.65,0-3.29-0.63-4.54-1.88c-2.5-2.5-2.5-6.58,0-9.09c2.5-2.5,6.58-2.5,9.08,0c2.2,2.2,2.47,5.63,0.79,8.12l3.48,3.48
		C19.16,17.41,19.16,18.2,18.68,18.68z"
        />
      </g>
    </svg>
  );
};

export default MagnifierButton;
