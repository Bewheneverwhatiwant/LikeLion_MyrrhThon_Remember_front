import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './Splash.scss';

function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        // 3초 후 메인 화면으로 전환
        const timeout = setTimeout(() => {
            navigate('/chooseposition'); // '/' 경로로 메인 화면으로 이동
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div className="splash-margin">
            <div className="splash-text">
                <h1>REMEMBER</h1>
                <p>우리 가족을 기억해</p>
                <p>소중한 나를 기억해</p>
            </div>
        </div>
    );
}

export default Splash;
