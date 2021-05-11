import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {title, descriptionA, descriptionB, style, recoStyle} from '../../components/result/text/ResultText'

const index = () => {

    const router = useRouter();
    const { id } = router.query;
    const mbti: string = Array.isArray(id) ? id[0] : id;

    return(
        <div className="Landing_back">
            <div className='ssho-logo'>
                <img className="sshologo"
                     src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/sshologo.png'
                     alt="logo of s-sho"/>
            </div>
            <div className="result_title">
                <p>당신은...</p>
                <h3>{title[mbti]}</h3>
            </div>
            <div className="result_card">
                <img className="background_card"
                     src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/backgroundimg.png'
                     alt="background"/>
                <img className="istj_card" src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/istj.jpg'}
                     alt="istj"/>
            </div>
            <div className="result_container">
                <div className="result_description">
                    <p><span className="result">{title[mbti]}</span> 카드를 고르셨네요.</p>
                    <p className="description_specific">{descriptionA[mbti]}</p>
                    <img className="istj_graph"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/istj.png'} alt="istj"/>
                    <p className="description_specific">{descriptionB[mbti]}</p>
                    <h4>당신의 스타일</h4>
                    <img className="istj_style"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/istj_style.jpg'}
                         alt="istj"/>
                    <h5>{style[mbti]}</h5>
                    <h4>추천 스타일</h4>
                    <img className="istj_style"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/istj_rec_style.jpg'}
                         alt="istj"/>
                    <h5 className="rec_style">{recoStyle[mbti]}</h5>
                    {/*<p className="rec_description">스포티룩으로 몸과 마음을 편안히 가져보는 것은 어떨까요?</p>*/}
                </div>

            </div>
            <div className="button_container">
                <Link href='/landing'><img className="button"
                                           src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/replay.png'}
                                           alt="replay button"/></Link>
                <img className="button" src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/share.png'}
                     alt="share button"/>
            </div>
        </div>
    )
}

export default index;
