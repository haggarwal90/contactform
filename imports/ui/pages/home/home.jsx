import React from 'react';

import './home.style.scss';

class Home extends React.PureComponent {
  render() {
    console.log('****Home page rendered****');
    return (
      <div className="home-page">
        <div className="home-page__title">Contact us</div>
        <div className="home-page__discription">A website with a contact form and an administrative section, accessible only to	logged in users, that will allow them to view the contact form	submissions through a list.</div>
      </div>
    )
  }
}

export default Home;