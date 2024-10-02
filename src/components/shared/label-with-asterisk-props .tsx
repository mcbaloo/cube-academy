import React from 'react';

type LabelWithAsteriskProps = {
  text?: string; 
};

const LabelWithAsterisk: React.FC<LabelWithAsteriskProps> = ({ text }) => {
  return (
    <label className="text-black">
      {text && `${text}`} 
      <span className="text-red-500"> *</span> 
    </label>
  );
};

export default LabelWithAsterisk;
