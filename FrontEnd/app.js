// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListView from '.components/ListView';
import DetailsView from '.components/DetailsView';
import AddEditView from '.components/AddEditView';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route exact path="/tasks/:id" component={DetailsView} />
          <Route exact path="/add" component={AddEditView} />
          <Route exact path="/edit/:id" component={AddEditView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
