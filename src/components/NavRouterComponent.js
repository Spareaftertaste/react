'use strict';

import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


require('styles//NavRouter.css');


class NavRouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            {/*这里是一级nav*/}
            <div  className={'first-nav flex'}>
              <div className={'logo'}>
                <div></div>
              </div>
              <NavBtn activeOnlyWhenExact={true} to="/" label="发现音乐" />
              <NavBtn to="/about" label="我的音乐" />
              <NavBtn to="/topics" label="朋友" />
              <div className={'fnavbtn'}>
                <a href="https://music.163.com/store/product" target="_blank">商城</a>
              </div>
              <div className={'fnavbtn'}>
                <a href="https://music.163.com/nmusician/web/index" target="_blank">音乐人</a>
              </div>
              <div className={'fnavbtn'}>
                <a href="https://music.163.com/#/download" target="_blank">下载客户端</a>
                <span className={'fnavbtn-hot'}></span>
              </div>
              <div className={'fnavbtn-search absolute-center'}>
                <input type="text" placeholder={'音乐/视频/电台/用户'} />
                <span className={'search-logo'}></span>
              </div>
              <div className={'fnavbtn-submit absolute-center'}>
                <a href="https://music.163.com/#/login?targetUrl=%2Fuservideo" target="_blank">视频投稿</a>
              </div>
              <div className={'fnavbtn-login absolute-center'}>
                <a href="#">
                  登陆<span></span>
                </a>
                <div className={'login-list'}>
                  <div className={'login-phone'}>手机号登陆</div>
                  <div className={'login-wechat'}>微信登陆</div>
                  <div className={'login-qq'}>QQ登陆</div>
                  <div className={'login-sina'}>新浪微博登陆</div>
                  <div className={'login-wangyi'}>网易账号登陆</div>
                </div>
              </div>

            </div>
          </div>
          {/*这里是二级nav*/}
          <div className={'second-nav'}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Mine} />
            <Route path="/topics" component={Friend} />
          </div>
        </div>
      </Router>
    );
  }
}

// navbtn单独拆出来，用户选中时样式相应的改变
const NavBtn = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? 'active fnavbtn' : 'fnavbtn'}>
        {match ? (<span className="nav-triangle"></span>) : ''}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Mine = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Friend = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

// NavRouterComponent.displayName = 'NavRouterComponent';

// Uncomment properties you need
// NavRouterComponent.propTypes = {};
// NavRouterComponent.defaultProps = {};

export default NavRouterComponent;
