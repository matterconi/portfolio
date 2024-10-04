import { useRef } from 'react';

const HeroPadding = ({ paddingRef }) => {
  return (
    <div 
      ref={paddingRef} 
      className="absolute bottom-0 w-full h-[25vh] bg-transparent"
    ></div>
  );
};

export default HeroPadding;
