import React from 'react';
// import { CopyToClipboard } from 'react-copy-to-clipboard';

const Information = () => {
    // const copy = () => {
    //     alert('청첩장 주소가 복사됐습니다');
    // };

    const addSchedule = () => {
        const userAgent = navigator.userAgent;
        const startDate = new Date(2023, 9, 21, 18, 0); // 2023년 10월 21일 오후 6시
        const endDate = new Date(startDate.getTime() + (60 * 60 * 3000)); // 일정 종료 시간 (1시간 뒤)

        if (userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) {
            let calendarURL = 'calshow://';

            // 일정 정보 추가
            calendarURL += 'event?startDate=' + encodeURIComponent(startDate.toISOString());
            calendarURL += '&endDate=' + encodeURIComponent(endDate.toISOString());
            calendarURL += '&title=' + encodeURIComponent('공고사');
            calendarURL += '&notes=' + encodeURIComponent('공고사 2번째 이야기');

            // Apple Calendar 열기
            window.open(calendarURL, '_system');
        } else if (userAgent.match(/Android/i)) {
            const intent = window.plugins.webintent;
            intent.startActivity({
                action: intent.ACTION_EDIT,
                type: 'vnd.android.cursor.item/event',
                title: '공고사',
                description: '공고사 2번째 이야기',
                beginTime: startDate.getTime(),
                endTime: endDate.getTime(),
                eventLocation: '리엠아트센터'
            },
                function () { },
                function () {
                    console.log('Failed to open calendar');
                });
        } else {
            // 다른 플랫폼을 사용 중인 경우
            console.log("사용자의 플랫폼을 감지할 수 없습니다.");
        }
    }

    return (
        <div className="content footer">
            <div className="buttons">
                <button className="btn btn-primary btn-jittery" onClick={addSchedule}>
                    공고사와 함께하기 클릭!
                </button>
            </div>
            <div className="copyright">
                Copyright 2022. <span>Sunkyungihwan</span>. All rights reserved.
            </div>
        </div>
    );
};

export default Information;
