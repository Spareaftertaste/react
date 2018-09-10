'use strict';

import React from 'react';

require('styles//Bootom.css');

let BottomComponent = (props) => (
  <div className={'flex bottom'}>
    <div className={'bottom-left'}>
      <div className={'bottom-left-link'}>
        <a href="https://music.163.com/about" target="_blank">关于网易</a><span>|</span>
        <a href="https://help.mail.163.com/service.html" target="_blank">客户服务</a><span>|</span>
        <a href="https://music.163.com/html/web2/service.html" target="_blank">服务条款</a><span>|</span>
        <a href="https://sitemap.163.com/" target="_blank">网站导航</a><span>|</span>
        <a href="">意见反馈</a>
      </div>
      <div>
        网易公司版权所有©1997-2018 <span className={'blank'}>2</span> 杭州乐读科技有限公司运营：
        <a href="http://p1.music.126.net/MkOOdJqWZdBx05Ias2W3UA==/109951163298654917.png" target="_blank">浙网文[2018]3506-263号</a>
      </div>
      <div>
        违法和不良信息举报电话：0571-89853516 <span className={'blank'}>2</span> 举报邮箱：
        <span>cloudmusicservice@163.com</span>
      </div>
    </div>
    <div className={'bottom-right flex'}>
      <a className={'right-cash'}>视频奖励</a>
      <a className={'right-reward'}>赞赏</a>
      <a className={'right-media'}>自媒体</a>
      <a className={'right-topic'}>音乐专栏</a>
      <a className={'right-musician'}>独立音乐人</a>
    </div>
  </div>
);

BottomComponent.displayName = 'BottomComponent';

// Uncomment properties you need
// BootomComponent.propTypes = {};
// BootomComponent.defaultProps = {};

export default BottomComponent;
