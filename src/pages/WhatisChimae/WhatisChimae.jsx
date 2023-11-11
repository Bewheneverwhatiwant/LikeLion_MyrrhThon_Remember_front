import React from "react";
import Nav from "../../component/Nav/Nav";
import Header from "../../component/Header/Header";

//화면 Main(메인화면) 컴포넌트를 만든다
const WhatisChimae = () => {

    return (
        <div>
            <Header />
            <br/><br/>
            <div className="iphone-frame" style={{overflow:"scroll"}}>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>치매란 무엇일까요?</h2>
                <p>치매는 후천적으로 기억, 언어, 판단력 등의 여러 영역의 인지 기능이 감소하여 일상생활을 제대로 수행하지 못하는 임상 증후군을 의미합니다.</p>
                <p>치매에는 알츠하이머병이라 불리는 노인성 치매, 중풍 등으로 인해 생기는 혈관성 치매가 있습니다. 이 밖에도 다양한 원인에 의한 치매가 있습니다.</p>
                </div>
                <br/>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>치매는 왜 생기는 걸까요?</h2>
                <p>전반적인 뇌 기능의 손상을 일으킬 수 있는 모든 질환이 치매의 원인이 될 수 있습니다.</p>
                <p>흔히 알고 있는 알츠하이머병은 원인 미상의 신경퇴행성 질환으로, 전체 치매의 50~60%를 차지합니다.</p>
                <p>뇌의 혈액순환장애에 의한 혈관성 치매가 20~30%를 차지합니다.</p>
                <p>나머지는 기타 원인에 의한 치매입니다. </p>
                <p>알츠하이머병은 두뇌의 수많은 신경세포가 서서히 쇠퇴하면서 뇌 조직이 소실되고 뇌가 위축되는 질환입니다.</p>
                <p>이 질환의 원인은 명확하게 밝혀지지 않았습니다. 뇌세포의 유전적 질환이 아닌지에 대한 연구가 지속적으로 이루어지고 있습니다.</p>
                <p>다만 유전적 이상이 없는 상태에서 발병하는 알츠하이머병이 80% 이상을 차지하고 있습니다.</p>
                <p>아직 명확하게 알려진 부분이 없습니다. </p>
                <div className="sizedbox"></div>
                <p>혈관성 치매는 뇌 안에서 혈액순환이 잘 이루어지지 않아 서서히 신경세포가 죽거나,</p>
                <p>갑자기 큰 뇌혈관이 막히거나 뇌혈관이 터지면서 뇌세포가 죽으면서 발생하는 치매를 의미합니다. </p>
                <div className="sizedbox"></div>
                </div><br/>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}} >
                <h2>건망증인지, 치매인지 모르겠어요. 구분할 수 있는 증상이 있나요?</h2>
                <p>치매와 건망증은 다릅니다. 건망증은 일반적으로 기억력의 저하를 호소하지만,</p>
                <p>지남력이나 판단력 등은 정상이어서 일상적인 생활에 지장을 주지 않습니다.</p>
                <p>건망증 환자는 기억력 장애에 대한 주관적인 호소를 하며 지나친 걱정을 하기도 하지만,</p>
                <p>잊어버렸던 내용을 곧 기억해 낸다거나 힌트를 들으면 금방 기억해 냅니다.</p>
                <p> 치매는 기억력 감퇴뿐 아니라 언어 능력, 시공간 파악 능력, 인격 등</p>
                <p> 다양한 정신 능력에 장애가 발생함으로써 지적인 기능의 지속적 감퇴가 초래됩니다. </p>
                <div className="sizedbox"></div>
                <p>① 기억력 저하</p>
                <p>건망증이라면 어떤 사실을 기억하지 못하더라도 힌트를 주면 금방 기억을 되살릴 수 있습니다.</p>
                <p>하지만 치매 환자는 힌트를 주어도 기억하지 못하는 경우가 많습니다.</p>
                <p>② 언어 장애</p>
                <p>가장 흔한 증상은 물건의 이름이 금방 떠오르지 않아 머뭇거리는 현상인 '명칭 실어증'입니다.</p>
                <p>③ 시공간 파악 능력 저하</p>
                <p>길을 잃고 헤매는 증상이 나타날 수 있습니다.</p>
                <p>초기에는 낯선 곳에서 길을 잃는 경우가 나타납니다.</p>
                <p>점차 증상이 진행되면, 자기 집을 못 찾는다거나 집 안에서 화장실이나 안방 등을 혼동하는 경우가 나타납니다. </p>
                <p>④ 계산 능력의 저하</p>
                <p>거스름돈과 같은 잔돈을 주고받는 데 자꾸 실수가 생깁니다. 이전에 잘하던 돈 관리를 못 하게 되기도 합니다.</p>
                <p>⑤ 성격 변화와 감정의 변화</p>
                <p>이는 매우 흔하게 나타날 수 있는 증상입니다. 예를 들어,</p>
                <p>과거에 매우 꼼꼼하던 사람이 대충대충 일을 처리한다거나,</p>
                <p>전에는 매우 의욕적이던 사람이 매사에 무관심해지기도 합니다.</p>
                <p>감정의 변화도 많이 관찰됩니다. 특히 우울증이 동반되는 경우가 많습니다.</p>
                <p>수면 장애가 생길 수도 있습니다.</p>
                <p>잠을 지나치게 많이 자거나, 반대로 불면증에 시달리기도 합니다.</p>
                <div className="sizedbox"></div>
                </div><br/>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}} >
                <h2>치매는 어떻게 진단받을 수 있나요?</h2>
                <p>치매의 진단은 먼저 환자와 보호자를 통해 간단한 병력을 청취하고,</p>
                <p>간단한 선별 검사를 시행하여 인지 능력을 평가합니다.</p>
                <p>이를 통해 치매가 의심되면 정밀 검사를 시행하여 인지 능력이 실제로 저하되어 있는지를 진단합니다.</p>
                <p>여기서 말하는 정밀 검사는 환자의 인지 능력을 같은 연령, 학력, 성별의 정상군과 비교하여</p>
                <p>얼마나 저하되어 있는지를 신경심리 검사를 통해 확인하는 것을 말합니다.</p>
                <div className="sizedbox"></div>
                <p>정밀 검사에서 환자의 인지 능력이 저하된 것이 확인되면 치매라 진단할 수 있습니다.</p>
                <p>치매의 원인을 찾기 위한 혈액 검사, 뇌영상 검사(MRI 등)를 시행합니다.</p>
                <p>이 검사를 통해 치매의 원인이 확인되면 원인에 맞는 치료를 진행합니다. </p>
                <div className="sizedbox"></div>
                </div><br/>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>치매는 어떻게 치료하나요?</h2>
                <p>① 원인적 접근</p>
                <p>주로 치료 가능한 치매 환자에게 적용할 수 있는 방법입니다.</p>
                <p>뇌출혈, 뇌종양, 정상압 수두증 등으로 인한 치매는 수술을 시행할 수 있습니다.</p>
                <p>뇌경색으로 인한 혈관성 치매는 고혈압, 당뇨, 흡연, 고지혈증 등과 같은 위험 요소를</p>
                <p>사전에 제거하거나 지속적으로 치료함으로써 병의 진행을 지연시키거나 예방할 수 있습니다.</p>
                <p>② 약물 치료</p>
                <p>신경인지 기능활성제인 콜린성약제, NMDA 수용체 차단제 등을 사용할 수 있습니다.</p>
                <p>현재도 다양한 약물에 대한 연구가 진행 중입니다.</p>
                <p>치매로 인해 나타나는 정신 증상을 치료하기 위한 항우울제, 항정신병약물 등을 사용하기도 합니다.</p>
                <p>③ 기타 접근 방법</p>
                <p>치매는 신경인지 기능의 점진적인 감퇴로 인해 일상생활 전반에 대한 수행 능력 장애가 초래되는 질환입니다.</p>
                <p>현재까지 발생 기전이 확실히 규명되지 않았으며, 획기적인 치료제도 개발되지 못하고 있습니다.</p>
                <p>따라서 환자는 기본적 일상생활을 최대한 스스로 유지할 수 있도록 하는</p>
                <p>작업 요법, 인지 기능 강화 요법 등과 같은 다양한 프로그램에 참여함으로써 삶의 질을 향상시킬 수 있습니다. </p>
                <div className="sizedbox"></div>
                </div><br/>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>치매 치료는 경과가 좋은 편인가요?</h2>
                <p>치매의 임상 경과는 원인에 따라 매우 다양한 양상을 보입니다. 이를 일률적으로 기술하기는 무척 어렵습니다.</p>
                <p>일부 치매(예: 영양 결핍, 염증에 의한 치매 등)의 경우는 적절한 치료를 받으면 이전의 상태로 돌아갈 수 있습니다.</p>
                <p>하지만 치매 환자의 대부분을 차지하는 알츠하이머병은</p>
                <p>인지 기능 장애가 서서히 일어나서 점차 증상이 심해지는 경과를 보입니다.</p>
                <p>따라서 호전을 기대하기는 어렵습니다. 악화를 방지하는 것이 치료의 목표가 되어야 합니다. </p>
                <p>알츠하이머 치매는 시간에 따라 악화하는 경향을 보입니다.</p>
                <p>혈관성 치매는 혈관 상태가 잘 유지된다면, 호전을 기대하기는 어렵지만 더 악화되지 않는 것을 기대할 수 있습니다</p>
                <p>일반적으로 치매는 초기에 일상생활에 지장이 없으며 단지 기억력 등의 인지 장애가 먼저 나타납니다.</p>
                <p>하지만 시간이 지나면 일상생활에 지장이 발생하여 직업을 유지하거나 집안일을 하는 데 어려움이 생깁니다.</p>
                <p>질환이 더 진행하면, 다양한 행동 증상(예: 배회, 환각, 화를 냄, 불면)이 나타나기 시작합니다.</p>
                <p>치매 환자 사망의 가장 흔한 직접적 원인은 폐렴, 요로감염증, 욕창성 궤양 등의 감염으로 인한 패혈증입니다.</p>
                <div className="sizedbox"></div>
                </div><br/>
                <div style={{borderRadius: '10px',background: '#ffffff', boxShadow: '0px 0px 3.52351px 3px rgba(86, 86, 86, 0.20) inset', margin:'10px', padding:'10px'}}>
                <h2>특별히 주의해야할 점이 있을까요?</h2>
                <p>치매의 증상 및 종류는 다양합니다.</p>
                <p>현재까지 발생 기전이 확실히 규명되지 않았고, 원인을 치료할 수 있는 치료법도 없는 상태입니다.</p>
                <p>따라서 미리 예방하는 것이 중요합니다.</p>
                <p>일반적으로 권장되는 것은 두뇌 회전을 많이 시킬 수 있는 놀이나 독서입니다.</p>
                <p>건전한 수준의 게임, 바둑, 카드놀이와 같은 종합적인 인지 능력을 요구하는 놀이가 건망증을 예방하는 데 도움이 됩니다.</p>
                <p>신문, 책을 읽거나 글을 쓰는 것이 효과적인 예방법입니다.</p>
                <p>건강한 식습관을 가지고 생선과 야채를 즐겨 먹어야 합니다.</p>
                <p>적절한 운동을 합니다. 꾸준한 걷는 운동은 인지 기능을 유지하는 데 도움이 됩니다.</p>
                <p>지나친 음주와 흡연을 삼가야 합니다.</p>
                <p>술과 담배는 기억력 등의 인지 기능에 나쁜 영향을 미칩니다.</p>
                <p>충분한 수면을 취하는 것이 좋습니다. 수면 부족은 기억력을 떨어뜨릴 수 있습니다.</p>
                <p>메모하는 생활을 습관화하는 것이 좋습니다.</p>
                </div>
            </div>
            <Nav />
        </div>
    );
};

export default WhatisChimae;