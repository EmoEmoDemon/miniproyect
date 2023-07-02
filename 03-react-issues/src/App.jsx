import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import IssueList from './IssueList';

ReactDOM.render(<IssueList />, document.getElementById('root'));
const App = () => {
  return (
    <div>
      <IssueList />
    </div>
  );
};

export default App;
