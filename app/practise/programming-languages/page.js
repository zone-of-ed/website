import React from 'react';
import PractiseTopicCard from '@/app/practise/Components/PractiseTopicCard';
import FlexContainer from '@/app/Components/layout/FlexContainer';

const ProgrammingLanguages = () => {
  return (
    <FlexContainer>
      <PractiseTopicCard />
      <PractiseTopicCard />
    </FlexContainer>
  );
};

export default ProgrammingLanguages;