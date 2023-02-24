import React, { Component } from 'react';
import './kurlyComponent.scss'

class KurlyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            아이디: '',
            비밀번호:'',
            비밀번호확인:'',
            이름:'',
            이메일:'',
            휴대폰:'',
            주소:'',
            성별:'선택안함',
            생년:'',
            생월:'',
            생일:'',
            생년월일:'',
            추가입력사항:'',
            약관동의:[],
        }
    }
    onChangeId = (value) => {
        this.setState({아이디:value});
    }
    onChangePw = (value) => {
        this.setState({비밀번호:value});
    }
    onChangePwr = (value) => {
        this.setState({비밀번호확인:value});
    }
    onChangeName = (value) => {
        this.setState({이름:value});
    }
    onChangeEmail = (value) => {
        this.setState({이메일:value});
    }
    onChangePhone = (value) => {
        this.setState({휴대폰:value});
    }
    onChangeAddr = (value) => {
        this.setState({주소:value});
    }
    onChangeGender = (value) => {
        this.setState({성별:value});
    }
    onChangeYY = (value) => {
        this.setState({생년:value});
    }
    onChangeMM = (value) => {
        this.setState({생월:value});
    }
    onChangeDD = (value) => {
        this.setState({생일:value});
    }
    onChangeCC = (value) => {
        this.setState({추가입력사항:value});
    }
    onChangeCheckEvent = (checked, value) => {
        if (checked) {
            this.setState({약관동의:[...this.state.약관동의, value]})
        }else{

        }
    }
    onChangeCheckEventAll = (checked, value) => {
        let imsi = [
            `이용약관동의 (필수)`,
            `개인정보 수집∙이용 동의 (필수)`,
            `개인정보 수집∙이용 동의 (선택)`,
            `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`,
            `SMS`,
            `이메일`,
            `본인은 만 14세 이상입니다. (필수)`,
        ];
        if(checked){
            this.setState({약관동의: imsi})
        }else{
            this.setState({약관동의: []})
        }
    }
    
    render() {
        return (
            <div id='kurly'>
                <div className="title">
                    <h1><img src="../../img/Logo.svg" alt="logo" /></h1>
                </div>
                <div className="content">
                    <h2>회원가입</h2>
                    <h4><span><i>* </i> 필수입력사항</span></h4>
                    <form action="#">
                        <ul>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>아이디 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className='inputText' id='inputId' placeholder='아이디를 입력해주세요' onChange={(e) => {this.onChangeId(e.target.value)}} value={this.state.아이디}/>
                                        <button className="w120-btn">중복확인</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className='inputText' id='inputPw' placeholder='비밀번호를 입력해주세요' onChange={(e) => {this.onChangePw(e.target.value)}} value={this.state.비밀번호}/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호 확인 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className='inputText' id='inputPwR' placeholder='비밀번호를 한번더 입력해주세요' onChange={(e) => {this.onChangePwr(e.target.value)}} value={this.state.비밀번호확인}/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이름 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className='inputText' id='inputName' placeholder='이름을 입력해주세요' onChange={(e) => {this.onChangeName(e.target.value)}} value={this.state.이름}/>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이메일 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className='inputText' id='inputEmail' placeholder='예:marketkurly@kurly.com' onChange={(e) => {this.onChangeEmail(e.target.value)}} value={this.state.이메일}/>
                                        <button className="w120-btn">중복확인</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>휴대폰 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className='inputText' id='inputPhone' placeholder='숫자만 입력해주세요' onChange={(e) => {this.onChangePhone(e.target.value)}} value={this.state.휴대폰}/>
                                        <button className="w120-btn">인증번호 받기</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>주소 <i>*</i></span>
                                    </div>
                                    <div className="input-box input-box1">
                                        <button type='button' className="inputText addr" id='inputAddr'>
                                            <img src="../../img/ico_search.svg" alt="" />
                                            주소 검색
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>성별</span>
                                    </div>
                                    <div className="input-box">
                                           <div className='slabel'>
                                               <label className='slabel'>
                                                    <input type="radio" checked={this.state.성별.includes(`남자`)}  onChange={(e) => {this.onChangeGender(e.target.value)}} value={`남자`}/>
                                                    <span>남자</span>
                                               </label>
                                                <label className='slabel'>
                                                    <input type="radio" checked={this.state.성별.includes(`여자`)}  onChange={(e) => {this.onChangeGender(e.target.value)}} value={`여자`}/>
                                                    <span>여자</span>
                                                </label>
                                                <label className='slabel'>
                                                    <input type="radio" checked={this.state.성별.includes(`선택안함`)}  onChange={(e) => {this.onChangeGender(e.target.value)}} value={`선택안함`}/>
                                                    <span>선택안함</span>
                                                </label>
                                                <div></div>
                                           </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>생년월일</span>
                                    </div>
                                    <div className="input-box">
                                       <ul className="date-box">
                                            <li><input type="text" id="year" placeholder='YYYY' onChange={(e) => {this.onChangeYY(e.target.value)}} value={this.state.생년}/></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="month" placeholder='MM' onChange={(e) => {this.onChangeMM(e.target.value)}} value={this.state.생월}/></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="date" placeholder='DD' onChange={(e) => {this.onChangeDD(e.target.value)}} value={this.state.생일}/></li>
                                       </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>추가입력사항</span>
                                    </div>
                                    <div className="input-box radio-box">
                                       <label className='slabel'>
                                            <input type="radio" checked={this.state.추가입력사항.includes(`친구초대 추천인 아이디`)} onChange={(e) => {this.onChangeCC(e.target.value)}} value={`친구초대 추천인 아이디`}/>
                                            <span>친구초대 추천인 아이디</span>
                                            <input type="radio" checked={this.state.추가입력사항.includes(`참여 이벤트명`)} onChange={(e) => {this.onChangeCC(e.target.value)}} value={`참여 이벤트명`}/>
                                            <span>참여 이벤트명</span>
                                            <div></div>
                                       </label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <hr />
                            </li>
                            <li className='service'>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이용약관동의 <i>*</i></span>
                                    </div>
                                    <div className="input-box agreement">
                                        <dl>
                                            <dt>
                                                <label>
                                                    <input type="checkbox" value={`전체 동의합니다.`} onChange={(e) => this.onChangeCheckEventAll(e.target.checked, e.target.value)} checked={this.state.약관동의.length >= 7 ? true : false}/>
                                                    <span>전체 동의합니다.</span>
                                                </label>
                                                <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                            </dt>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`이용약관동의 (필수)`} checked={this.state.약관동의.includes(`이용약관동의 (필수)`) }  onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>이용약관동의 <i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (필수)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (필수)`) }  onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>개인정보 수집∙이용 동의 <i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (선택)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (선택)`) }  onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>개인정보 수집∙이용 동의 <i>(선택)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`} checked={this.state.약관동의.includes(`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`) }  onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 <i>(선택)</i></span>
                                                </label>
                                                <div className="sub-checkbox">
                                                    <div>
                                                        <label>
                                                            <input type="checkbox" value={`SMS`} checked={this.state.약관동의.includes(`SMS`) }  onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                            <span>SMS</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" value={`이메일`} checked={this.state.약관동의.includes(`이메일`) }  onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                            <span>이메일</span>
                                                        </label>
                                                    </div>
                                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                                </div>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`본인은 만 14세 이상입니다. (필수)`} checked={this.state.약관동의.includes(`본인은 만 14세 이상입니다. (필수)`) }  onChange={(e) => this.onChangeCheckEvent(e.target.checked, e.target.value)}/>
                                                    <span>본인은 만 14세 이상입니다. <i>(필수)</i></span>
                                                </label>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="button-box">
                            <button type='submit'>가입하기</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default KurlyComponent;