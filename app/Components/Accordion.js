'use client';
import React, { useState } from 'react';
import FlexContainer from '@/app/Components/layout/FlexContainer';

const Accordion = ({ title, content, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div className="accordion-heading" onClick={() => {
        setIsActive(!isActive);
      }}>
        <FlexContainer gap="32px" justifyContent="space-between">
          <div className="accordion-heading-wrapper">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
          <img src="/images/chevron-down.svg" alt="chevron-down"
               style={{ transform: isActive ? 'rotate(180deg)' : '' }} />
        </FlexContainer>

      </div>
      {isActive && <div className="accordion-body">
        {children}
      </div>}

    </div>
  );
};

export default Accordion;