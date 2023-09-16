import React from 'react';
import useScrollFadeIn from '..//hooks/useScrollFadeIn';
import choi from '../assets/member/choi.jpg'
import chae from '../assets/member/chae.jpg'
import kimPiano from '../assets/member/kim_piano.jpg'
import kimVocal from '../assets/member/kim_vocal.jpg'
import lim from '../assets/member/lim.jpg'
import instagramLogo from '../assets/logo/instagram.png'

const Information = () => {
    const animatedItem = [useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0), useScrollFadeIn('up', 1, 0)];
    return (
        <div className="content information">
            <h2 {...animatedItem[0]} className="title">
                멤버 소개
            </h2>
            {/* <div {...animatedItem[1]}>
                <img src={photo} />
            </div> */}
            <div {...animatedItem[2]} className="info">
                <dl className="floor">
                    <dt><img src={choi} /></dt>
                    <dd>
                        <div className='member'>최서우<span>#기타 #노익장 #90년생이 온다</span></div>
                        <a href='https://www.instagram.com/seociopass/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={chae} /></dt>
                    <dd>
                        <div className='member'>채수연<span>#보컬 #베이스 #베이스신동</span></div><a href='https://www.instagram.com/ga_suyeon/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={kimPiano} /></dt>
                    <dd>
                        <div className='member'>김현정<span>#피아노 #노예...</span></div><a href='https://www.instagram.com/ella.kim95/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={kimVocal} /></dt>
                    <dd>
                        <div className='member'>김민주<span>#보컬 #피아노 #프로직장인</span></div><a href='https://www.instagram.com/calm_pillar._.mj/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt><img src={lim} /></dt>
                    <dd>
                        <div className='member'>임우찬<span>#피아노 #힙합 #만29세</span></div><a href='https://www.instagram.com/channy__channy/' target="_blank"><img src={instagramLogo} /></a>
                    </dd>
                </dl>
                {/* <dl className="floor">
                    <dt>4층</dt>
                    <dd>
                        연회장<span>250석, 오픈시간 - 13:00 ~ 15:30</span>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt>3층</dt>
                    <dd>
                        로비<span>접수대 & 포토테이블 & 축의대</span>
                    </dd>
                </dl>
                <dl className="floor">
                    <dt>2층</dt>
                    <dd>카페 / 보조신부대기실</dd>
                </dl>
                <dl className="floor">
                    <dt>1층</dt>
                    <dd>
                        연회장 (2부진행) / 포토박스 <span>230석, 오픈시간 - 14:00 ~ 15:30</span>
                    </dd>
                </dl>
                <dl>
                    <dt>B1층</dt>
                    <dd>ATM</dd>
                </dl>
                <div className="ref" align="left" vertical-align="middle">
                    <div className="route">
                        <div className="guest">하객 동선 :</div>
                        <div>1층(포토박스) → 3층(축의대) → 5층(예식장) → 1층(연회장)</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Information;
