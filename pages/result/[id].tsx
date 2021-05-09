import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const index = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log('id: ' + id);

    return(
        <div className="Landing_back">
            <div className='ssho-logo'>
                <img className="sshologo"
                     src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/sshologo.png'
                     alt="logo of s-sho"/>
            </div>
            <div className="result_title">
                <p>당신은...</p>
                <h3>시간의 방과 정장입은 소년</h3>
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
                    <p><span className="result">[시간의 방과 정장입은 소년]</span> 카드를 고르셨네요.</p>
                    <p className="description_specific"> 다소 내향적이지만, 틀에 짜여진 사회에서 주어진 임무를 완수하기 위해 끊임없이 노력하는 당신과 잘 어울리는 카드입니다.
                        주변에서는 당신을 융통성 없는 사람이라고 평가할 수도 있겠어요.
                        하지만, 그만큼 자기주관이 뚜렷 하고 책임감이 강한 당신은 계획적이고 논리적으로 세상을 바라보는 힘을 가졌네요.
                        일정과 계획을 꼼꼼하게 세 우고, 단정한 옷차림으로 주어진 업무를 수행해 나가는, 마치 시간의 방에서 시계를 보고 있는 정장입은 소년처럼요.
                    </p>

                    <img className="istj_graph"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/istj.png'} alt="istj"/>

                    <p className="description_specific">합리적인 사고방식 덕분에, 패션에 있어서도 과시하려고 하기 보다는 가격을 우선적으로 검증해보는 편이에요.
                        다른 사람의 시선을 크게 신경 쓰는 편이 아니라, 과시하기 위해 가격대가 높은 잘 알려진 브랜드나 비싼 제품을 선택하는 경우는 드물어요.
                        정장입은 소년에게는 단지, TPO에 딱 맞는 단정한 옷이 필요할 뿐이거든요. 유행을 쫓아 옷을 구매하는 경우도 거의 없어요.
                        다만, 실용적이고 품질이 좋은 옷을 찾는 데에 신경을 쏟을 확 률이 높아요.
                        오래 입을 수 있는 기본적인 디자인을 선호하고, 마감처리가 잘 되어 있는 옷을 좋아하네요.
                        자기 주관이 뚜렷한 성격 탓에, 무엇이 되었든 마음에 드는 스타일을 발견하면 그 스타일을 고수할지도 모르겠어요.
                        하지만 변화와 다른 가능성에 대해 개방적인 태도를 취하는 것도 가끔은 필요해요. 아래에 스타일 카드를 추천해 줄게요.
                        나만의 새로운 스타일을 찾아보세요.
                    </p>
                    <h4>당신의 스타일</h4>
                    <img className="istj_style"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/istj_style.jpg'}
                         alt="istj"/>
                    <h5>오피스룩</h5>
                    <h4>추천 스타일</h4>
                    <img className="istj_style"
                         src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/istj_rec_style.jpg'}
                         alt="istj"/>
                    <h5 className="rec_style">스포티룩</h5>
                    <p className="rec_description">스포티룩으로 몸과 마음을 편안히 가져보는 것은 어떨까요?</p>
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
