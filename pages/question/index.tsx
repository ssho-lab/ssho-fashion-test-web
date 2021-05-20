import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {questions} from '../../components/question/text/QuestionText'
import {Logo} from "../../components/common/Logo";
import {Background} from "../../components/common/Background";
import {url} from "../../config/Url";

const index = () => {
    const router = useRouter();

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionAnswers, setQuestionAnswers] = useState<boolean[]>([]);

    const handleButtonClick = (isCorrect) => {

        setQuestionAnswers([...questionAnswers, isCorrect]);

        const nextQuestion = currentQuestion + 1;

        (nextQuestion < questions.length) ? setCurrentQuestion(nextQuestion) : handleResult();
    }

    const handleResult = () => {
        const mbti = checkQuestions();
        router.push(url.RESULT + '/' + mbti);
    }

    const checkQuestions = () => {

        let score_E = 0
        let score_S = 0
        let score_F = 0
        let score_P = 0

        questionAnswers.forEach((answer, i) => {
            if (i >= 0 && i < 3 && answer) {
                score_E++;
            } else if (i >= 3 && i < 6 && answer) {
                score_S++;
            } else if (i >= 6 && i < 9 && answer) {
                score_F++;
            } else if (i >= 9 && i < 12 && answer) {
                score_P++;
            }
        });

        return getMbti(score_E, score_S, score_F, score_P);
    }

    const getMbti = (score_E, score_S, score_F, score_P) => {
        let mbti: string = ''

        if (score_E < 2) {
            mbti = mbti.concat('I');
        } else {
            mbti = mbti.concat('E');
        }

        if (score_S < 2) {
            mbti = mbti.concat('N');
        } else {
            mbti = mbti.concat('S');
        }

        if (score_F < 2) {
            mbti = mbti.concat('T');
        } else {
            mbti = mbti.concat('F');
        }

        if (score_P < 2) {
            mbti = mbti.concat('J');
        } else {
            mbti = mbti.concat('P');
        }

        return mbti;
    }

    return (
        <div className="Landing_back">
            <Logo/>
            <Background/>
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
                        {questions[currentQuestion].answerOptions.map((answerOption, key) => (
                            <button
                                onClick={() => handleButtonClick(answerOption.isCorrect)}
                                key={key}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
