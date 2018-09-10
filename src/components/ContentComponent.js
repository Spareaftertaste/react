'use strict';

import React from 'react';




require('styles//Content.css');



let singerData = require('../data/c-singer.json');



class ContentComponent extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className={'content-content'}>
        <div className={'content-left'}>23</div>
        <div className={'content-right'}>
          {/*首先是个人信息*/}
          <div className={'my-info'}>
            <span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
            <div>用户登陆</div>
          </div>

          {/*然后是入驻歌手*/}
          <div>
            {window.console.log(singerData)}
          </div>
          <div className={'c-singer'}>
            {/*{singerData.map(function (e) {*/}
            {/*return(*/}
            {/*<div key={e}>*/}
            {/*{e}*/}
            {/*</div>*/}
            {/*)*/}
            {/*})}*/}
          </div>

          {/*热门主播*/}
          <div className={'c-dj'}></div>
        </div>
      </div>
    );
  }
}

ContentComponent.displayName = 'ContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
// ContentComponent.defaultProps = {};

export default ContentComponent;
