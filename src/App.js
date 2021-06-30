import react from 'react';
import Main from './components/main'
import Form from './components/form'
import Listing from './components/listing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Main/>
       <Switch>
		      <Route exact path="/newForm" component={Form}/>
				<Route exact path="/listForm" component={Listing}/>
	    </Switch>
    </Router>,
    </div>
  );
}

export default App;
