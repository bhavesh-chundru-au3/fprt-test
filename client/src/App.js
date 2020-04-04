import React,{Fragment} from 'react';
import EventContainer from './containers/EventContainers'
import Search from './containers/Search'


function App() {
  return (
    <Fragment>
    <div className="container mt-5">
      <Search />
      <EventContainer/>
    </div>
    </Fragment>

  );
}

export default App;
