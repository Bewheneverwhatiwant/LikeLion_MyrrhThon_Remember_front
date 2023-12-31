import React, { useState, useEffect } from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";
import './SeeMyFamily.scss';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/icon_profile.svg';

//화면 Main(메인화면) 컴포넌트를 만든다
const SeeMyFamily = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용
    const handleWriteFamilyDiaryClick_invite = () => {
        navigate('/invitebyid');
    };

    //1) '홍길동' 자리에 대입
    const [patientName, setPatientName] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        const storedPatientName = localStorage.getItem('patientName');

        // Update state only if data is present in localStorage
        if (storedPatientName) {
            setPatientName(storedPatientName);

        }
    }, []);

    return (
        <div className="iphone-frame" style={{ overflowY: 'scroll' }}>
            <Header />
            <div className="content my-diary-column">
                <div className="for-chimae-font">
                    <h2>내가 초대한 우리 가족이에요.</h2>
                    <h2>가족을 초대하면 가족일기장 기능을 사용할 수 있어요.</h2>
                </div>
                <div className="my-diary-column">
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                {patientName}(나)
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                어머니 아들
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                유리훈이 엄마
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                삼촌
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                훈이
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                유리
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <div className="diary-div">
                        <div className="mypage-row">
                            <div className="just-row">
                                <div className="row-sizedbox"></div>
                                <img src={profile} alt="이미지" />
                                <div className="row-sizedbox"></div>
                                lny021102
                            </div>
                        </div>
                    </div>
                    <div className="line"> </div>
                    <button className="invite-button" onClick={handleWriteFamilyDiaryClick_invite}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 12C14.3261 12 15.5979 12.5268 16.5355 13.4645C17.4732 14.4021 18 15.6739 18 17V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20C16.7348 20 16.4804 19.8946 16.2929 19.7071C16.1054 19.5196 16 19.2652 16 19V17C16 16.2044 15.6839 15.4413 15.1213 14.8787C14.5587 14.3161 13.7956 14 13 14H5C4.20435 14 3.44129 14.3161 2.87868 14.8787C2.31607 15.4413 2 16.2044 2 17V19C2 19.2652 1.89464 19.5196 1.70711 19.7071C1.51957 19.8946 1.26522 20 1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V17C0 15.6739 0.526784 14.4021 1.46447 13.4645C2.40215 12.5268 3.67392 12 5 12H13ZM17 6C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10H18V11C18 11.2652 17.8946 11.5196 17.7071 11.7071C17.5196 11.8946 17.2652 12 17 12C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11V10H15C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.1054 9.51957 14 9.26522 14 9C14 8.73478 14.1054 8.48043 14.2929 8.29289C14.4804 8.10536 14.7348 8 15 8H16V7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6ZM9 0C10.3261 0 11.5979 0.526784 12.5355 1.46447C13.4732 2.40215 14 3.67392 14 5C14 6.32608 13.4732 7.59785 12.5355 8.53553C11.5979 9.47322 10.3261 10 9 10C7.67392 10 6.40215 9.47322 5.46447 8.53553C4.52678 7.59785 4 6.32608 4 5C4 3.67392 4.52678 2.40215 5.46447 1.46447C6.40215 0.526784 7.67392 0 9 0ZM9 2C8.60603 2 8.21593 2.0776 7.85195 2.22836C7.48797 2.37913 7.15726 2.6001 6.87868 2.87868C6.6001 3.15726 6.37913 3.48797 6.22836 3.85195C6.0776 4.21593 6 4.60603 6 5C6 5.39397 6.0776 5.78407 6.22836 6.14805C6.37913 6.51203 6.6001 6.84274 6.87868 7.12132C7.15726 7.3999 7.48797 7.62087 7.85195 7.77164C8.21593 7.9224 8.60603 8 9 8C9.79565 8 10.5587 7.68393 11.1213 7.12132C11.6839 6.55871 12 5.79565 12 5C12 4.20435 11.6839 3.44129 11.1213 2.87868C10.5587 2.31607 9.79565 2 9 2Z" fill="white"/>
                    </svg>
                    </button>
                </div>
            </div>

            <Nav />
        </div>
    );
};

export default SeeMyFamily;