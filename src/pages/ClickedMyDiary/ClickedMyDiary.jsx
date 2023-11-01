import React from "react";
import Nav from "../../component/Nav/Nav";

//화면 Main(메인화면) 컴포넌트를 만든다
const Main = () => {

    return (
        <div>
            <p>여기는 개인일기장, 즉 보호자 or 환자의 일기장을 클릭했을 때 보여주는 페이지입니다.</p>
            <Nav />
        </div>
    );
};

export default Main;