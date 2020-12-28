import React  from 'react';
import Header from './header/header';

class HomePage extends React.Component {

  render() {
    return (
      <div id="home-page">
        <header>
          <Header theme='dark'/>
          <Header theme='light'/>
        </header>
      </div>
    )
  }
}

export default HomePage;
