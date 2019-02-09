import React from 'react';

import { Link } from 'react-router';

import './styles.scss';

function Page404() {
  return (
  <div className="page404">
    <div className="page404__content">
      <h2 className="page404__title">This is not the page<br/> you are looking for</h2>

      <p className="page404__404">404</p>
      <Link to="/" children="Go to Home" />
    </div>
  </div>
)};

export default Page404;
