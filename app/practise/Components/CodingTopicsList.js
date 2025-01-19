import React from 'react';

const CodingTopicsList = () => {
  return (
    <table className="coding-topics-list">
      <tbody>
      <tr className="topics-list-header">
        <th>Problems</th>
        <th>Status</th>
        <th>Try</th>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>Input</td>
        <td>not completed</td>
        <td className="solve-it-btn"><a href="">Solve It</a></td>
      </tr>
      <tr>
        <td>Input</td>
        <td>not completed</td>
        <td className="solve-it-btn"><a href="">Solve It</a></td>
      </tr>
      </tbody>
    </table>
  );
};

export default CodingTopicsList;