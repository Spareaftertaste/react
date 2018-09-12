'use strict';

import React from 'react';




require('styles//Content.css');







class ContentComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      datas: null,
      week: null
    };
    this.getData=this.getData.bind(this);
  }
  getData(){
    fetch('/data/c-singer.json')
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          datas:data
        });
      })
      .catch((e) => { });
    this.setState({
      week:  [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
    })

  }

  componentWillMount() {
    this.getData();
    // this.setState({ datas: require('../data/c-singer.json')})
  }

  componentWillUnmount = () => {
    this.setState = (state,callback)=>{
      return;
    };
  };

  render() {
    const datas = this.state.datas;
    const week = this.state.week;
    if(!datas){
      return(
        <div>求豆麻袋</div>
      )
    }else{
      const cSinger = datas[0];
      const cDj = datas[1];
      const rmtj = datas[2];
      const gxtj = datas[3];
      return (
        <div className={'content-content'}>
          <div className={'content-left'}>
            {/*这里是热门推荐*/}
            <div className={'rmtj'}>
              <div className={'rmtj-title'}>
                <div className={'sort-list'}>
                  <a href="https://music.163.com/#/discover/playlist/" target="_blank" className={'title-rmtj'}>热门推荐</a>
                  <a href="https://music.163.com/#/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" target="_blank" className={'sort'}>华语</a><span>|</span>
                  <a href="https://music.163.com/#/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" target="_blank" className={'sort'}>流行</a><span>|</span>
                  <a href="https://music.163.com/#/discover/playlist/?cat=%E6%91%87%E6%BB%9A" target="_blank" className={'sort'}>摇滚</a><span>|</span>
                  <a href="https://music.163.com/#/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" target="_blank" className={'sort'}>民谣</a><span>|</span>
                  <a href="https://music.163.com/#/discover/playlist/?cat=%E7%94%B5%E5%AD%90" target="_blank" className={'sort'}>电子</a>
                </div>
                <div className={'right flex'}>
                  <a href="https://music.163.com/#/discover/playlist/" target="_blank" className={'more'}>更多</a>
                  <span></span>
                </div>
              </div>
              <div className={'rmtj-list'}>
                {rmtj.data.map(function (e) {
                const src = e.img;
                return(
                  <div className={'rmtj-content flex'}>
                      <a  style={{background:'url('+src+')'+' no-repeat', backgroundSize:'1.4rem'+' 1.4rem'}}>
                        <div className={'rmtj-bottom'}>
                          <div>
                            <span className={'rmtj-content-num'}></span>
                            <span className={'name'} key={e.nb}>{e.nb}</span>
                          </div>
                          <div className={'rmtj-paly'}></div>
                        </div>
                      </a>
                    <div className={'right'}>
                      <div className={'babel'} key={e.babel}>{e.babel}</div>
                    </div>
                  </div>
                )
              })}
              </div>
            </div>

            {/*下面是个性化推荐*/}
            <div className={'gxtj'}>
              <div className={'rmtj-title'}>
                <div className={'sort-list'}>
                  <div className={'title-rmtj'}>个性推荐</div>
                </div>
                <div className={'right flex'}>
                </div>
              </div>
              <div className={'gxtj-list'}>
                <div className={'gxtj-date'}>
                  <a href="">
                    <span className={'week'}>{week[parseInt(new Date().getDay())]}</span>
                    <span className={'day'}>{new Date().getDate()}</span>
                  </a>
                  <div className={'gxtj-1'}>每日歌曲推荐</div>
                  <div className={'gxtj-2'}>根据你的口味生成，</div>
                  <div className={'gxtj-2'}>每天6：00更新</div>
                </div>
                {gxtj.data.map(function (e) {
                  const src = e.img;
                  return(
                    <div className={'rmtj-content flex'}>
                      <a  style={{background:'url('+src+')'+' no-repeat', backgroundSize:'1.4rem'+' 1.4rem'}}>
                        <div className={'rmtj-bottom'}>
                          <div>
                            <span className={'rmtj-content-num'}></span>
                            <span className={'name'} key={e.nb}>{e.nb}</span>
                          </div>
                          <div className={'rmtj-paly'}></div>
                        </div>
                      </a>
                      <div className={'right'}>
                        <div className={'babel'} key={e.babel}>{e.babel}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/*没错，这里是广告*/}
            <div className={'ad'}>
              <span className={'ad-logo'}></span>
            </div>
          </div>
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
              {cSinger.data.map(function (e) {
                const src = e.img;
                return(
                  <div className={'c-singer flex'}>
                    <div className={'left'}>
                      <div  style={{background:'url('+src+')'+' no-repeat', backgroundSize:'.62rem'+' .62rem'}}></div>
                    </div>
                    <div className={'right'}>
                      <div className={'name'} key={e.name}>{e.name}</div>
                      <div className={'babel'} key={e.babel}>{e.babel}</div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className={'btn-1'}>
              <a href="https://music.163.com/nmusician/web/index" target="_blank" >申请成为网易红人</a>
            </button>
            {/*热门主播*/}
            <div className={'c-dj'}>
              <div className={'c-dj-title'}>热门主播</div>
              <div></div>
              <div className={'c-dj-list'}>
                {cDj.data.map(function (e) {
                  const src = e.img;
                  return(
                    <div className={'c-dj flex'}>
                      <div className={'left'}>
                        <div  style={{background:'url('+src+')'+' no-repeat', backgroundSize:'.4rem'+' .4rem'}}></div>
                      </div>
                      <div className={'right'}>
                        <div className={'name'} key={e.name}>{e.name}<span></span></div>
                        <div className={'babel'} key={e.babel}>{e.babel}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

ContentComponent.displayName = 'ContentComponent';

// Uncomment properties you need
// ContentComponent.propTypes = {};
// ContentComponent.defaultProps = {
//   datas:[]
// };

export default ContentComponent;
