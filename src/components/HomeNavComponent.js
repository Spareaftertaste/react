'use strict';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CarouselComponent from 'components/CarouselComponent';
require('styles//HomeNav.css');

const Img=[
  require('../images/1.jpg'),
  require('../images/2.jpg'),
  require('../images/3.jpg'),
  require('../images/4.jpg'),
  require('../images/5.jpg'),
  require('../images/6.jpg'),
];

const HomeNavComponent = ({ match }) => (
  <Router>
    <div>
      <div className={'second-nav flex'}>
        <NavBtn activeOnlyWhenExact={true} to={`${match.url}`} label="推荐" />
        <NavBtn to={`${match.url}/toplist`} label="排行榜" />
        <NavBtn to={`${match.url}/playlist`} label="歌单" />
        <NavBtn to={`${match.url}/djradio`} label="主播电台" />
        <NavBtn to={`${match.url}/artist`} label="歌手" />
        <NavBtn to={`${match.url}/album`} label="新碟上架" />
        <span className={'blank'}>2333333333</span>
      </div>
      <div className={'content'}>
        <Route path={`${match.url}/:Id`} component={Topic} />
        <Route
          exact
          path={match.url}
          render={() => <CarouselComponent
            images={Img}
            speed={1}
            delay={4}
            autoPlay={true}
            autoParse={true}
          />}
        />
      </div>

    </div>
  </Router>
);

// 二级navbtn单独拆出来，用户选中时样式相应的改变
const NavBtn = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? 'active s-navbtn' : 's-navbtn'}>
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.Id}</h3>
  </div>
);

// HomeNavComponent.displayName = 'HomeNav';

// Uncomment properties you need
HomeNavComponent.propTypes = {

};
HomeNavComponent.defaultProps = {

};

export default HomeNavComponent;
