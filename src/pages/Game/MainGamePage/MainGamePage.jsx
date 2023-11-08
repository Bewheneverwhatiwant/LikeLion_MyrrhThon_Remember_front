import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from "../../../component/Nav/Nav";
import Header from "../../../component/Header/Header";
import './MainGamePage.scss';

//화면 Main(메인화면) 컴포넌트를 만든다
const MainGamePage = () => {

    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const handleButtonClick = (index) => {
        setSelected(index);

        // 버튼 클릭 시 페이지로 이동
        if (index === 0) {
            navigate('/chimaeyebang');
        } else if (index === 1) {
            navigate('/chimaejindan');
        } else if (index === 2) {
            navigate('/chimaechiryo');
        }
    };

    return (
        <div className="iphone-frame" style={{overflowY:'scroll'}}>
            <Header />
            <br/>
            <div className="main-game-page-text-column content">

                <div className="for-chimae-font">
                    <h2>즐거운 게임과 함께,</h2>
                    <h2>치매를 예방하고, 진단하고, 치료해요!</h2>
                </div>
                <div>
                    <button style={{fontSize:"18px", display: "flex", marginLeft: "0px", alignItems: "center"}}
                        className={`main-game-page-button ${selected === 0 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(0)}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 75 70" fill="none">
                    <path d="M65.625 19.6875H65.376C65.1544 19.0618 64.7843 18.4909 64.2932 18.0174C63.8022 17.544 63.2029 17.1801 62.54 16.9531L39.1025 9.02344C38.0671 8.67335 36.9329 8.67335 35.8975 9.02344L12.46 16.9777C11.7971 17.2047 11.1978 17.5686 10.7068 18.042C10.2157 18.5155 9.84557 19.0864 9.62402 19.7121H9.375C6.89316 19.7121 4.51258 20.6306 2.75518 22.2662C0.997781 23.9018 0.00698018 26.1211 0 28.4375L0 35C0 37.3206 0.987721 39.5462 2.74587 41.1872C4.50403 42.8281 6.8886 43.75 9.375 43.75H10.8779C12.7939 47.6984 16.5205 51.1656 21.9229 53.9656C28.0752 57.1594 34.6729 58.6141 36.5479 58.9695C37.1757 59.0935 37.8243 59.0935 38.4521 58.9695C40.3271 58.6031 46.9189 57.1594 53.0771 53.9656C58.4795 51.1656 62.2061 47.6984 64.1221 43.75H65.625C68.1114 43.75 70.496 42.8281 72.2541 41.1872C74.0123 39.5462 75 37.3206 75 35V28.4375C75 26.1169 74.0123 23.8913 72.2541 22.2503C70.496 20.6094 68.1114 19.6875 65.625 19.6875ZM9.375 39.375C8.1318 39.375 6.93951 38.9141 6.06044 38.0936C5.18136 37.2731 4.6875 36.1603 4.6875 35V28.4375C4.6875 27.2772 5.18136 26.1644 6.06044 25.3439C6.93951 24.5234 8.1318 24.0625 9.375 24.0625V37.2285C9.37633 37.9464 9.4282 38.6635 9.53027 39.375H9.375ZM49.2188 39.375H25.7812C25.1596 39.375 24.5635 39.1445 24.124 38.7343C23.6844 38.3241 23.4375 37.7677 23.4375 37.1875C23.4375 36.6073 23.6844 36.0509 24.124 35.6407C24.5635 35.2305 25.1596 35 25.7812 35H49.2188C49.8404 35 50.4365 35.2305 50.876 35.6407C51.3156 36.0509 51.5625 36.6073 51.5625 37.1875C51.5625 37.7677 51.3156 38.3241 50.876 38.7343C50.4365 39.1445 49.8404 39.375 49.2188 39.375ZM49.2188 30.625H25.7812C25.1596 30.625 24.5635 30.3945 24.124 29.9843C23.6844 29.5741 23.4375 29.0177 23.4375 28.4375C23.4375 27.8573 23.6844 27.3009 24.124 26.8907C24.5635 26.4805 25.1596 26.25 25.7812 26.25H49.2188C49.8404 26.25 50.4365 26.4805 50.876 26.8907C51.3156 27.3009 51.5625 27.8573 51.5625 28.4375C51.5625 29.0177 51.3156 29.5741 50.876 29.9843C50.4365 30.3945 49.8404 30.625 49.2188 30.625ZM70.3125 35C70.3125 36.1603 69.8186 37.2731 68.9396 38.0936C68.0605 38.9141 66.8682 39.375 65.625 39.375H65.4697C65.5718 38.6635 65.6237 37.9464 65.625 37.2285V24.0625C66.8682 24.0625 68.0605 24.5234 68.9396 25.3439C69.8186 26.1644 70.3125 27.2772 70.3125 28.4375V35Z" fill="#BFB3F9"/>
                    </svg>&nbsp;&nbsp;<b>치매를 예방할 수 있는 게임</b>
                    </button>
                    <div className="sizedbox"></div>
                    <button style={{fontSize:"18px", display: "flex", marginLeft: "0px", alignItems: "center"}}
                        className={`main-game-page-button ${selected === 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="56" height="72" viewBox="0 0 56 72" fill="none">
                    <path d="M14 61.2H42V54H14V61.2ZM14 50.4H42V43.2H14V50.4ZM28 37.08C31.85 33.48 35.1458 30.2844 37.8875 27.4932C40.6292 24.702 42 21.7776 42 18.72C42 16.56 41.2417 14.7 39.725 13.14C38.2083 11.58 36.4 10.8 34.3 10.8C33.075 10.8 31.8932 11.0556 30.7545 11.5668C29.6158 12.078 28.6977 12.7824 28 13.68C27.3 12.78 26.3807 12.0756 25.242 11.5668C24.1033 11.058 22.9227 10.8024 21.7 10.8C19.6 10.8 17.7917 11.58 16.275 13.14C14.7583 14.7 14 16.56 14 18.72C14 21.78 15.3265 24.66 17.9795 27.36C20.6325 30.06 23.9727 33.3 28 37.08ZM49 72H7C5.075 72 3.4265 71.2944 2.05451 69.8832C0.682505 68.472 -0.00232739 66.7776 5.94228e-06 64.8V7.20001C5.94228e-06 5.22001 0.686005 3.52441 2.058 2.11321C3.43 0.702006 5.07734 -0.00239389 7 6.11206e-06H49C50.925 6.11206e-06 52.5735 0.705606 53.9455 2.11681C55.3175 3.52801 56.0023 5.2224 56 7.20001V64.8C56 66.78 55.314 68.4756 53.942 69.8868C52.57 71.298 50.9227 72.0024 49 72Z" fill="#735AF3" fill-opacity="0.46"/>
                    </svg>
                    &nbsp;&nbsp;<b>치매를 진단할 수 있는 게임</b>
                    </button>
                    <div className="sizedbox"></div>
                    <button style={{fontSize:"18px", display: "flex", marginLeft: "0px", alignItems: "center"}}
                        className={`main-game-page-button ${selected === 2 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    ><svg xmlns="http://www.w3.org/2000/svg" width="69" height="67" viewBox="0 0 69 67" fill="none">
                    <path d="M24.3277 7.70285L20.0991 11.8879L15.1879 7.02442L19.2726 2.98175L16.2627 0L0 16.0953L3.00993 19.0743L7.09464 15.0316L12.0087 19.8951L7.78013 24.0801L44.3394 60.2631L59.5696 60.6093L66.0267 67L69 66.6817L61.2199 58.9817L60.8701 43.9082L24.3277 7.70285ZM24.3277 12.4714L42.9007 30.8533L31.1995 42.4341L26.4716 37.7604L32.3392 31.9533L29.8567 29.4964L23.9892 35.3036L19.6168 30.9761L25.4843 25.169L23.0019 22.7121L17.1343 28.5193L12.6378 24.069L24.3277 12.4714Z" fill="#BFB3F9"/>
                    </svg>&nbsp;<b>치매를 치료할 수 있는 게임</b>
                    </button>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default MainGamePage;