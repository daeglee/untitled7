import React from 'react';
import { Route, Link } from 'react-router-dom';
import EditChartLists from './EditChartLists';
import Home from './Home';


const App = () => {
  return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
        <hr />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={EditChartLists} />
      </div>
  );
};

export default App;
