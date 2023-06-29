import React, { useState, useEffect } from 'react';
import './styles.css';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(data => setIssues(data));
  }, []);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="title">I S S U E S</h1>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Buscar issues"
      />
      <ul>
        {filteredIssues.map(issue => (
          <li key={issue.id}>
            <div className="issue-details">
              <div className="issue-title">
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                  #{issue.number}: {issue.title}
                </a>
                <p>Opened by: {issue.user.login}</p>
              </div>
              <div className="issue-labels">
                {issue.labels.map(label => (
                  <span key={label.id} className="label">{label.name}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;