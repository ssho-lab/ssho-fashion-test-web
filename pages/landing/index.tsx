import React from 'react';
import Link from "next/link";

const index = () => (
    <div className="Landing_back">
        <div className='ssho-logo'>
            <img className="sshologo" src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/sshologo.png' alt="logo of s-sho"/>
        </div>
        <div>
            <img className="background_image" src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/backgroundimg.png' alt="background"/>
        </div>
        <div className="main_content_landing">
            <img className="title" src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/invalid-name.png' alt="패션 성향 테스트"/>
            <p className="normal_font">스와이프로 나만의 패션 성향 알아보기</p>
            <img className="card" src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/4.png' alt="card with a black background"/>
            <div>
                <Link href ='/question'><img className="button_image" src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/start.png' alt="start button"/></Link>
            </div>
        </div>
    </div>
)

export default index;
