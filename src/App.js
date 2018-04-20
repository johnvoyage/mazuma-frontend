import React, { Component } from 'react';
import TopMenu from './Components/TopMenu/TopMenu';
import MainSegmentOne from './Components/MainSegment/MainSegmentOne';
import MainSegmentTwo from './Components/MainSegment/MainSegmentTwo';


class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <MainSegmentOne />
        <MainSegmentTwo />

      </div>
    );
  }
}

export default App;
