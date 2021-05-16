import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {title, descriptionA, descriptionB, style, recoStyle} from '../../components/result/text/ResultText';
import {styleImg, recoStyleImg} from '../../components/result/image/ResultImage';
import {Logo} from "../../components/common/Logo";
import {url} from "../../config/Url";

const index = () => {

    const router = useRouter();
    const {id} = router.query;
    const mbti: string = Array.isArray(id) ? id[0] : id;

    if(mbti) {
        return (
            <div className="Landing_back">
                <Logo/>
                <div className="result_title">
                    <p>당신은...</p>
                    <h3>{title[mbti]}</h3>
                </div>
                <div className="result_card">
                    <img className="background_card"
                         src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/backgroundimg.png'
                         alt="background"/>
                    <img className="istj_card"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/card/' + mbti.toLowerCase() + '.jpg'}
                         alt="istj"/>
                </div>
                <div className="result_container">
                    <div className="result_description">
                        <p><span className="result">{title[mbti]}</span> 카드를 고르셨네요.</p>
                        <p className="description_specific">{descriptionA[mbti]}</p>
                        <img className="istj_graph"
                             src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/graph/' + mbti.toLowerCase() + '.png'} alt="istj"/>
                        {
                            descriptionB[mbti].map(paragraph => <p className="description_specific">{paragraph}<br/><br/></p>)
                        }
                        <h4>당신의 스타일</h4>
                        <img className="istj_style"
                             src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/style/' + styleImg[mbti] + '.jpg'}
                             alt="istj"/>
                        <h5>{style[mbti]}</h5>
                        <h4>추천 스타일</h4>
                        <img className="istj_style"
                             src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/style/' + recoStyleImg[mbti] + '.jpg'}
                             alt="istj"/>
                        <p className="rec_description">{recoStyle[mbti]}</p>
                    </div>

                </div>
                <div className="button_container">
                    <Link href={url.LANDING}>
                        <img className="button"
                             src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/replay.png'}
                             alt="replay button"/>
                    </Link>
                    <img className="button"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/share.png'}
                         alt="share button"/>
                </div>
            </div>
        )
    } else {
        return(<div></div>)
    }
}

export default index;
