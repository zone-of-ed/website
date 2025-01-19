import React from 'react';
import Accordion from '@/app/Components/Accordion';
import CodingTopicsList from '@/app/practise/Components/CodingTopicsList';

const Topic = () => {
  return (
    <div className="problems-page">
      <h1>Python</h1>
      <p>Solve Python coding problems online with Practice Python on ZoneOfEd. Write code for over 195 Python coding
        exercises and boost your confidence in programming.</p>
      <Accordion title="Introduction, Output and Math Operators"
                 content="Python programs covering print statements and basic math operations.">
        <CodingTopicsList />
      </Accordion>
    </div>
  );
};

export default Topic;