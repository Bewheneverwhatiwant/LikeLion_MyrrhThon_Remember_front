import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import { useState } from 'react';
import './ModifyMyDiary.scss';
import { useNavigate } from 'react-router-dom';

//화면 Main(메인화면) 컴포넌트를 만든다
const WriteMyDiary = () => {
    const [inputText, setInputText] = useState(''); // 초기값 설정(이름)
    const navigate = useNavigate(); // useNavigate 훅을 사용

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleCompleteButtonClick = () => {
        alert('나만의 일기가 수정되었습니다!');
        // 입력 완료 버튼 클릭 시 main 화면으로 이동
        navigate('/clickedmydiary');
    };

    return (
        <div className="iphone-frame">
            <Header />
            <div className="content write-my-diary-column">
                <div className="for-chimae-font">
                    <h2>나만 볼 수 있는 일기장이에요.</h2>
                    <h2>여기서 일기를 수정할 수 있어요.</h2>
                </div>
                <div>

                    <textarea
                        className="my-diary-input"
                        type="text"
                        value={inputText}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="sizedbox"></div>
                <button className="write-my-diary-button" onClick={handleCompleteButtonClick}>
                    수정 완료
                </button>
            </div>
            <Nav />
        </div>
    );
};

export default WriteMyDiary;