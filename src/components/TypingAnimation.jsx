import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

const TypingAnimation = () => {
  return (
    <div style={{ color: '#1C38CA', fontWeight: 600, fontSize: '1.5rem' }}>
      <Typed
        strings={["FRONTEND DEVELOPER | DESIGNER"]}
        typeSpeed={50}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default TypingAnimation;
