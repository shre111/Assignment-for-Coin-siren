import React from 'react';

function Skills({ skills }) {
  return (
    <>
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1 text-sm text-gray-700 rounded-md border border-gray-200">
          {skill}
        </span>
      ))}
    </>
  );
}

export default Skills;
