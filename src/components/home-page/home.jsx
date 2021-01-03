import React  from 'react';

import Header from './header';
import Navigation from '../navigation';
import Work from './work/work';

class HomePage extends React.Component {

  render() {
    return (
      <div id="home-page">
        <header><Header theme='dark'/></header>
        <Work />

      </div>
    )
  }
}

export default HomePage;
