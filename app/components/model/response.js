import React from 'react';

const Scanresponse = ({ data }) => {
  console.log('this is the data', data);

  return (
    <div className='min-h-[80%] w-[90%] bg-white overflow-y-auto px-10 py-5 rounded-sm'>
      <h2 className="text-2xl font-bold mb-4 ">Vulnerabilities</h2>

      {/* Iterate over each vulnerability type */}
      {Object.entries(data.vulnerabilities).map(([vulnerabilityType, vulnerabilities]) => (
        <div className="ml-20 flex " key={vulnerabilityType}>
          {vulnerabilities.length > 0 && (
            <div >
              <h3 className="text-xl bg-slate-400 px-2 rounded-sm font-semibold mb-2">{`${vulnerabilityType} Vulnerabilities`}</h3>
              <ul className="list-disc pl-4">
                {/* Render vulnerabilities for the current type */}
                {vulnerabilities.map((vulnerability, index) => (
                  <li key={index} className="flex flex-col mb-2 space-y-2">
                    <p><a href={vulnerability.url} target="_blank" rel="noopener noreferrer">{vulnerability.url}</a></p>
                    {/* <p>Status Code: {vulnerability.status_code}</p>
                    <p>Reason: {vulnerability.payload}</p> */}
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
