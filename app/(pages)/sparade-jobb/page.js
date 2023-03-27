'use client'
import { useState, useEffect } from 'react'

function SavedJobs() {
  let [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('savedIds'));
    setSavedIds(data);
  }, []);

  // check if savedIds is null and insert a placeholder job
  if (savedIds === null) {
    savedIds = [{ headline: "Inga sparade annonser" }];
  }

  return (
    <div className='text-card shadow saved-jobs'>
      <h1>Sparade jobb</h1>
      <br />
      <br />
      {savedIds.map((job) => (
        <div key={job.id}>
          <h2>{job.headline}</h2>
          <p>{job.employerName}</p>
		  <br />
      <hr />
	  	<br />
        </div>
      ))}
    </div>
  );
}


export default SavedJobs
