import React  from 'react';

import Header from './header';
import Navigation from './navigation';
import Work from './work/work';

class HomePage extends React.Component {

  render() {
    return (
      <div id="home-page">
        <header>
          <Header theme='dark'/>
          <Header theme='light'/>
        </header>
        <section id="work"><Work/></section>
          <section id="about"></section>
          <section id="exhibition"></section>
        <footer>

        </footer>
      </div>
    )
  }
}

export default HomePage;
