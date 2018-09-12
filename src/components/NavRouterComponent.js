'use strict';

import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

// 推荐模块
import HomeNavComponent from '../components/HomeNavComponent'

// 底部模块
import BottomComponent from '../components/BootomComponent'

import ToTopComponent from  '../components/ToTopComponent'

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
              <NavBtn activeOnlyWhenExact={true} to="/discover" label="发现音乐" />
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
                  <div className={'login-phone'}><span></span>手机号登陆</div>
                  <div className={'login-wechat'}><span></span>微信登陆</div>
                  <div className={'login-qq'}><span></span>QQ登陆</div>
                  <div className={'login-sina'}><span></span>新浪微博登陆</div>
                  <div className={'login-wangyi'}><span></span>网易邮箱账号登陆</div>
                </div>
              </div>
            </div>
          </div>

          {/*这里是二级nav*/}
          <div>
            <Route exact path="/discover" component={HomeNavComponent} />
            <Route path="/about" component={Mine} />
            <Route path="/topics" component={Friend} />
          </div>

          {/*这里是底部信息*/}
          <BottomComponent />

          {/*点击可以返回屏幕最上方*/}
          <ToTopComponent />
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

const Home = ({ match }) => (
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

const Mine = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Friend = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

// NavRouterComponent.displayName = 'NavRouterComponent';

// Uncomment properties you need
NavRouterComponent.propTypes = {};
NavRouterComponent.defaultProps = {};

export default NavRouterComponent;
