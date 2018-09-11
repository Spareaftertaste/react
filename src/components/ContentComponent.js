'use strict';

import React from 'react';




require('styles//Content.css');







class ContentComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      datas:[]
    };
    this.getData=this.getData.bind(this);
  }
  getData(){
    fetch('/data/c-singer.json')
      .then((res) => { console.log(res);return res.json(); })
      .then((data) => { console.log(data);this.setState({ datas:data});})
      .catch((e) => { });

  }

  componentWillMount() {
    this.getData();
  }


  render() {
    const singerData = this.state.datas[0];
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
          <div className={'c-singer-title'}>
            <div className={'left'}>入驻歌手</div>
            <a href="https://music.163.com/#/discover/artist/signed/" target="_blank" className={'right'}>查看全部></a>
          </div>
          <div className={'c-singer-list'}>
            {singerData.data.map(function (e) {
              const src = e.img;
              return(
                <div className={'c-singer flex'}>
                  <div className={'left'}>
                    <div  style={{background:'url('+src+')'+' no-repeat', backgroundSize:'.62rem'+' .62rem'}}>0</div>
                  </div>
                  <div className={'right'}>
                    <div className={'name'} key={e.name}>{e.name}</div>
                    <div className={'babel'} key={e.babel}>{e.babel}</div>
                  </div>
                </div>
              )
             })
            }
          </div>
          <button className={'btn-1'}>
            <a href="">申请成为网易红人</a>
          </button>
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
ContentComponent.defaultProps = {};

export default ContentComponent;
