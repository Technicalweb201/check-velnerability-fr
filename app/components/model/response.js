import React from 'react';

const Scanresponse = ({ data }) => {
  console.log('this is the data', data);

  return (
    <div className='min-h-[80%] w-[90%] bg-white overflow-y-auto'>
      <h2 className="text-2xl font-bold mb-4">Vulnerabilities</h2>

      {/* Iterate over each vulnerability type */}
      {Object.entries(data.vulnerabilities).map(([vulnerabilityType, vulnerabilities]) => (
        <div key={vulnerabilityType}>
          {vulnerabilities.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">{`${vulnerabilityType} Vulnerabilities`}</h3>
              <ul className="list-disc pl-4">
                {/* Render vulnerabilities for the current type */}
                {vulnerabilities.map((vulnerability, index) => (
                  <li key={index}>
                    <p><a href={vulnerability.url} target="_blank" rel="noopener noreferrer">{vulnerability.url}</a></p>
                    <p>Status Code: {vulnerability.status_code}</p>
                    <p>Reason: {vulnerability.payload}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Scanresponse;
