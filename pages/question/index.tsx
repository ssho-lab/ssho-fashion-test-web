import React, {useState} from 'react';
import {useRouter} from 'next/router';

const index = () => {
    const router = useRouter();

    const questions = [
        {
            questionText: '평화로운 주말 오후, 편안한 파자마를 입고 있는 당신. 주말 오후를 이렇게 보낼 수는 없다고 생각하던 차에 친구에게 만나자는 연락이 왔다.',
            answerOptions: [
                {answerText: '외출복으로 갈아입으며 밖에 나갈 준비를 한다.', isCorrect: true},
                {answerText: '집에서 쉬고 싶다. 파자마를 입은 채로 침대에 눕는다.', isCorrect: false},
            ],
        },
        {
            questionText: '계절이 바뀌어 옷장을 정리한 당신, 정리하고 나니 입을 옷이 없다. 작년엔 뭘 입고 산 거지? 당장 쇼핑을 해야 한다.',
            answerOptions: [
                {answerText: '밖에서 옷을 구매할 겸 약속을 잡는다.', isCorrect: true},
                {answerText: '집에서 인터넷으로 주문한다.', isCorrect: false},
            ],
        },
        {
            questionText: '친한 친구가 나의 패션 스타일을 지적하며, 기분을 상하게 했다. 서운한 점을 전하고 싶은 당신, 어떻게 할까?',
            answerOptions: [
                {answerText: '직접 만나서 바로 하고 싶었던 이야기를 전한다.', isCorrect: true},
                {answerText: '어떻게 말할지 생각을 하고 서운했던 점을 메시지로 전한다', isCorrect: false},
            ],
        },
        {
            questionText: '봄이 되어 오랜만에 옷장을 뒤져보았다. 당신의 옷장에 가까운 모습은?',
            answerOptions: [
                {answerText: '이렇게 입으면 중간은 간다. 무난한 무채색 위주의 아이템들', isCorrect: true},
                {answerText: '나만의 색 나만의 패턴! 나만 소화할 수 있는 유니크한 아이템들', isCorrect: false},
            ],
        },
        {
            questionText: '친구가 자켓 두 벌 중 하나를 골라 달라고 카톡을 보내왔다. 옷을 골라주려는 당신, 어떻게 답할까?',
            answerOptions: [
                {answerText: '1번 옷은 갈색 가죽이 괜찮은데, 두껍다. 2번은 얇고 편해 보이는데? 2번 추천!', isCorrect: true},
                {answerText: '요즘 날씨 따뜻한데, 1번은 너무 덥지 않을까? 2번이 더 잘 어울릴 것 같아. 2번 추천!', isCorrect: false},
            ],
        },
        {
            questionText: '여유로운 일정, 옷을 사러 가고 있는데, 눈 앞에 갈림길이 나타났다.',
            answerOptions: [
                {answerText: '안전하게 원래 가던 길로 간다.', isCorrect: true},
                {answerText: '오늘따라 새로운 길로 가보고 싶다.', isCorrect: false},
            ],
        },
        {
            questionText: '친구가 열심히 돈을 모아서 사고 싶었던 옷을 샀다고 한다. 다음 중 당신이 먼저 건넬 말은?',
            answerOptions: [
                {answerText: '와 돈 모으느라 힘들었겠다. 축하해!', isCorrect: true},
                {answerText: '무슨 옷이길래 그래? 어떤 옷 샀어?', isCorrect: false},
            ],
        },
        {
            questionText: '친구와 쇼핑 중, 마음에 드는 옷을 몸에 대보며 "어때?"라고 말했다. 친구가 세상에서 가장 이상하다고 했을 때 당신의 반응은?',
            answerOptions: [
                {answerText: '조금 상처받았다. 친구가 그렇게 말한 이유를 생각한다.', isCorrect: true},
                {answerText: '그렇게 이상한가? 생각하고 옷이 이상한 이유를 물어본다.', isCorrect: false},
            ],
        },
        {
            questionText: '친구가 입고 온 비싼 브랜드 옷이 당신이 보기에 정말 안 어울린다. 이때 당신의 행동은?',
            answerOptions: [
                {answerText: '비싼 옷을 산 친구를 위해 아무 말도 해주지 않는다.', isCorrect: true},
                {answerText: '옷이 어울리지 않는다고 이유를 들어 말해준다.', isCorrect: false},
            ],
        },
        {
            questionText: '할 일이 쏟아지고 있다. 어떻게 처리할까?',
            answerOptions: [
                {answerText: '눈 앞에 닥치는 일부터 처리한다. 마감기한 전에 끝내는 것이 목표다.', isCorrect: true},
                {answerText: '우선순위를 결정하고 일정에 맞게 처리한다. 계획적으로 일정을 통제하는 것이 좋다.', isCorrect: false},

            ],
        },
        {
            questionText: 'SNS를 하던 중 광고에서 정말 마음에 드는 스타일의 옷을 발견했다. 당신의 쇼핑 스타일은?',
            answerOptions: [
                {answerText: '데스티니... 쇼핑몰에 들어가 가격만 확인하고 바로 결제한다', isCorrect: true},
                {answerText: '쇼핑몰에서 후기를 정독 하고 비슷한 디자인의 더 합리적인 아이템을 찾아본다.', isCorrect: false},

            ],
        },
        {
            questionText: '다음 주면 개강이다. 새로운 마음으로 옷을 장만해 보려는 당신, 어떤 소비를 할까?',
            answerOptions: [
                {answerText: '지금 있는 돈으로 입고 싶은 옷을 산다.', isCorrect: true},
                {answerText: '다른 곳에 지출할 돈을 계산한 뒤 남는 금액으로 옷을 산다.', isCorrect: false},

            ],
        },

    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [score_E, setScore_E] = useState(0);
    const [score_S, setScore_S] = useState(0);
    const [score_F, setScore_F] = useState(0);
    const [score_P, setScore_P] = useState(0);
    const [questionAnswers, setQuestionAnswers] = useState([]);

    const handleButtonClick = (isCorrect) => {

        setQuestionAnswers([...questionAnswers, isCorrect]);

        const nextQuestion = currentQuestion + 1;

        (nextQuestion < questions.length) ? setCurrentQuestion(nextQuestion) : handleResult();
    }

    const handleResult = () => {
        console.log(questions.length)
        check_arr();
        check_all();
        check_E();
        check_S();
        check_F();
        check_P();

        router.push('/result/1');
    }

    const check_arr = () => {
        for (let i = 0; i < questions.length - 1; i++) {
            console.log(questionAnswers[i]);
        }
    }

    const check_all = () => {
        for (let i = 0; i < questions.length - 1; i++) {
            if (questionAnswers[i]) {
                setScore(score => score + 1);
            }

        }
    }

    const check_E = () => {
        setShowScore(true);
        for (let i = 0; i < 3; i++) {
            if (questionAnswers[i]) {
                setScore_E(score_E => score_E + 1);
            }
        }
    };

    const check_S = () => {
        setShowScore(true);
        for (let i = 3; i < 6; i++) {
            if (questionAnswers[i]) {
                setScore_S(score_S => score_S + 1);
            }
        }
    };

    const check_F = () => {
        setShowScore(true);
        for (let i = 6; i < 9; i++) {
            if (questionAnswers[i]) {
                setScore_F(score_F => score_F + 1);
            }
        }
    };

    const check_P = () => {
        setShowScore(true);
        for (let i = 9; i < 12; i++) {
            if (questionAnswers[i]) {
                setScore_P(score_P => score_P + 1);
            }
        }
    };

    return (
        <div className="Landing_back">
            <div className='ssho-logo'>
                <img className="sshologo"
                     src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/sshologo.png'
                     alt="logo of s-sho"/>
            </div>
            <div>
                <img className="background_image"
                     src='https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/backgroundimg.png'
                     alt="background"/>
            </div>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questionAnswers.length} <br/>
                    You scored {score_E} in E <br/>
                    You scored {score_S} in S <br/>
                    You scored {score_F} in F <br/>
                    You scored {score_P} in P <br/>
                </div>
            ) : (
                <>
                    <div className="question-wrap">
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>{currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>
                                <img className="card-o"
                                     src={'https://ssho-static.s3.ap-northeast-2.amazonaws.com/fashion-test/card-opacity.png'}
                                     alt="card with a black background"/>
                                <div className="question-content">{questions[currentQuestion].questionText}</div>
                            </div>
                        </div>
                        <div className="answer-wrap">
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button
                                        onClick={() => handleButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default index;
