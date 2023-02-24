import React, { Component } from 'react';
import PostCode from './Postcode';
import './kurlyComponent.scss';

class KurlyComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            아이디: '',
            비밀번호:'',
            비밀번호확인:'',
            이름: '',
            이메일:'',
            휴대폰:'',
            주소:'',
            주소1: '',
            주소2: '',
            성별:'선택안함',
            생년:'',
            생월: '',
            생일:'',
            생년월일:'',
            추가입력사항:'',
            약관동의: [],
            isAddressOn:false,
            isAddressInputShow:false,
            isRegExpId:'',
            
            showId:false,
            isClassId:'',

            showPw:false,
            isClassPw1:'',
            isClassPw2:'',
            isClassPw3:'',

            showPwRe:false,
            isClassPwRe:'',

            showEmail:false,
            isClassEmail:'',
        }
    }
    onMouseDown = (e) => {
        this.setState({showId:true});
    }
    onFocusPw = (e) => {
        this.setState({showPw:true});
    }
    onFocusPwRe = (e) => {
        this.setState({showPwRe:true});
    }
    onFocusEmail = (e) => {
        this.setState({showEmail:true});
    }
    
    onChangeId = (value)=>{
        this.setState({아이디:value});
        //6자이상 16자 이하
        //영문과 숫자조합
        const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{6,16}$/;
        if(value === ''){
            this.setState({isRegExpId:''});
        }else{
            if(regexp.test(value)){//정규표현식 검증
                this.setState({isClassId: true});
            }else{
                this.setState({isClassId: false});
            }
        }
    }
    onChangePw=(value)=>{
        this.setState({비밀번호:value})

        const regExp1 = /.{10,}/;
        const regExp2 = /((?=.*[A-Za-z])+((?=.*[0-9])+|(!@#$%&-_)+)+)[^\s][A-Za-z0-9!@#$%-_]{10,}/;//+는 1개이상이라는뜻
        const regExp3 = /(.)\1\1/;//.은 뭔지모르지만이라는뜻?
        if(value === ''){
            this.setState({isClassPw1:''})
        }else{
            if(regExp1.test(value)){
                this.setState({isClassPw1:true})
            }else{
                this.setState({isClassPw1:false})
            }
        }
        if(value === ''){
            this.setState({isClassPw2:''})
        }else{
            if(regExp2.test(value)){
                this.setState({isClassPw2:true})
            }else{
                this.setState({isClassPw2:false})
            }
        }
        if(value === ''){
            this.setState({isClassPw3:''})
        }else{
            if(regExp3.test(value) === false){
                this.setState({isClassPw3:true})
            }else{
                this.setState({isClassPw3:false})
            }
        }
    }
    onChangePwRe=(value)=>{
        this.setState({비밀번호확인:value})
        if(value === ''){
            this.setState({isClassPwRe:''});
        }else{
            if(this.state.비밀번호 === value){// state에 저장된 비밀번호의 값이 onChangePwRe의 value랑 일치하는지
                this.setState({isClassPwRe:true})
            }else{
                this.setState({isClassPwRe:false})
            }
        }
    }
    onChangeName=(value)=>{
        this.setState({이름:value})
    }
    onChangeEmail=(value)=>{
        this.setState({이메일:value})
        const regExp4 = /^[A-Za-z0-9._-]+@[A-Za-z0-9-_]+\.[A-Za-z]{2,3}$/;//+는 1개이상이라는뜻
        if(value === ''){
            this.setState({isClassEmail:''})
        }else{
            if(regExp4.test(value)){
                this.setState({isClassEmail:true})
            }else{
                this.setState({isClassEmail:false})
            }
        }
    }
    onChangePhone=(value)=>{
        this.setState({휴대폰:value})
    }
    onChangeAdd=(value)=>{
        this.setState({주소:value})
    }
    onChangeGender=(value)=>{
        this.setState({성별:value})
    }
    onChangeYear=(value)=>{
        this.setState({생년:value})
    }
    onChangeMonth=(value)=>{
        this.setState({생월:value})
    }
    onChangeDate=(value)=>{
        this.setState({생일:value})
    }
    onChangeChoocheon=(value)=>{
        this.setState({추가입력사항:value})
    }
    
    onChangeAddress1=(value)=>{
        this.setState({주소1:value});
        this.setState({isAddressInputShow:true})
        this.setState({isAddressOn:false});
    }
    onChangeAddress2=(value)=>{
        this.setState({주소2:value});
    }
    onChangeCheckEvent=(checked, value)=>{
        let result = '';
        if(checked){
            if(value==='SNS' && this.state.약관동의.includes('이메일')){
               this.setState({약관동의: [...this.state.약관동의, 'SNS','무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)']}) 
            }
           else if(value==='이메일' && this.state.약관동의.includes('SNS')){
                this.setState({약관동의: [...this.state.약관동의, '이메일','무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)']})
            }
           else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SNS') && !this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의, '이메일', value ]})
            } 
             else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && !this.state.약관동의.includes('SNS') && this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의, 'SNS', value ]})
            } 
           else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && this.state.약관동의.includes('SNS') && this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의,  value ]})
            }
            else if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)' && !this.state.약관동의.includes('SNS') && !this.state.약관동의.includes('이메일')){
                this.setState({약관동의: [...this.state.약관동의,'이메일','SNS',  value ]})
            } 
            else{
                this.setState({약관동의:[...this.state.약관동의, value]})
            }
            
        }else{
            if(value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)'){
                result=this.state.약관동의.filter((item) => item!==value);
                result=result.filter((item) => item!=='SNS')
                result=result.filter((item) => item!=='이메일')
                
            }else if(value==='SNS'){
                result=this.state.약관동의.filter((item) => item!==value);
                result=result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)')
            } else if(value==='이메일'){
                result=this.state.약관동의.filter((item) => item!==value);
                result=result.filter((item) => item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)')
            }else{
                result=this.state.약관동의.filter((item) => item!==value);
            } 
            this.setState({약관동의: result});
        }
    }
    onClickAddress = (e) => {
        e.preventDefault();
        this.setState({isAddressOn:true});
    }
     onChangeCheckEventAll=(checked, value)=>{
        let imsi=[
            `이용약관동의 (필수)`,
            `개인정보 수집∙이용 동의 (필수)`,
            `개인정보 수집∙이용 동의 (선택)`,
            `무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`,
            `SNS`,
            `이메일`,
            `본인은 만 14세 이상입니다. (필수)`
        ];

        if(checked){
            this.setState({약관동의: imsi})
        }else{
            this.setState({약관동의: []})
        }
    } 
    OnSubmitEvent=(e)=>{
        e.preventDefault();
        
        this.setState({생년월일: `${this.state.생년}-${this.state.생월}-${this.state.생일}`})
        this.setState({주소: `${this.state.주소1} ${this.state.주소2}`})
    }
    render() {
        return (
            <div id="kurly">
                <div className="title">
                    <h1><img src="../../img/logo.svg" alt="" /></h1> 
                </div>
                <div className="content">
                    <h2>회원가입</h2>
                    <h4><span><i>*</i>필수입력사항</span></h4>
                    <form action="#" onSubmit={this.OnSubmitEvent}>
                        <ul>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>아이디 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputId" placeholder='아이디를 입력해주세요' onChange={(e)=>this.onChangeId(e.target.value)} value={this.state.아이디} onFocus={(e) => this.onMouseDown(e)}/>
                                        <button className="w120-btn">중복확인</button>
                                        {
                                            this.state.showId && (
                                                <>
                                                    <p className={(this.state.isClassId === '' ? '' : (this.state.isClassId === true ? 'green' : 'red'))}>6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputPw" placeholder='비밀번호를 입력해주세요' value={this.state.비밀번호} onChange={(e)=> this.onChangePw(e.target.value)} onFocus={(e) => this.onFocusPw(e)}/>
                                        {
                                            this.state.showPw &&(
                                                <>
                                                    <p className={(this.state.isClassPw1 === '' ? '' :(this.state.isClassPw1 === true ? 'green' : 'red'))}>최소 10자 이상 입력</p>
                                                    <p className={(this.state.isClassPw2 === '' ? '' :(this.state.isClassPw2 === true ? 'green' : 'red'))}>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</p>
                                                    <p className={(this.state.isClassPw3 === '' ? '' :(this.state.isClassPw3 === true ? 'green' : 'red'))}>동일한 숫자 3개 이상 연속 사용 불가</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>비밀번호확인 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputPw1" placeholder='비밀번호를 한번더 입력해주세요' value={this.state.비밀번호확인} onChange={(e)=> this.onChangePwRe(e.target.value)} onFocus={(e) => this.onFocusPwRe(e)}/>
                                        {
                                            this.state.showPwRe &&(
                                                <>
                                                    <p className={(this.state.isClassPwRe === '' ? '' :(this.state.isClassPwRe === true ? 'green' : 'red'))}>동일한 비밀번호를 입력</p>
                                                </>
                                            )
                                        }
                                       
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이름 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputName" placeholder='이름을 입력해주세요' value={this.state.이름} onChange={(e)=> this.onChangeName(e.target.value)} />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>이메일 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputEmail" placeholder='예: marketkurly@kurly.com' value={this.state.이메일} onChange={(e)=> this.onChangeEmail(e.target.value)} onFocus={(e) => this.onFocusEmail(e)}/>
                                        <button className="w120-btn">중복확인</button>
                                        {
                                            this.state.showEmail && (
                                                <>
                                                    <p className={(this.state.isClassEmail === '' ? '' :(this.state.isClassEmail === true ? 'green' : 'red'))}>이메일을 입력해 주세요.</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>휴대폰 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        <input type="text" className="inputText" id="inputPhone" placeholder='숫자만 입력해주세요' value={this.state.휴대폰} onChange={(e)=> this.onChangePhone(e.target.value)} />
                                        <button className="w120-btn">인증번호받기</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>주소 <i>*</i></span>
                                    </div>
                                    <div className="input-box">
                                        {
                                            this.state.isAddressInputShow && (
                                                <>
                                                    <input 
                                                        type='text' 
                                                        className='inputText' 
                                                        id='inputZip' 
                                                        placeholder='우편번호'  
                                                        // onChange={(e)=>this.onChangeZip(e.target.value)}
                                                        value={this.state.우편번호}
                                                    />
                                                    <input type="text" className='inputText' id="inputAddress1" placeholder='주소입력1'  value={this.state.주소1} onChange={(e)=>this.onChangeAddress1(e.target.value)} />
                                                    <input style={{margin:'5px 0'}} type="text" className='inputText' id="inputAddress2" placeholder='나머지 주소'  value={this.state.주소2} onChange={(e) => this.onChangeAddress2(e.target.value)}/>
                                                </>
                                            )
                                        }
                                        <button onClick={this.onClickAddress}
                                        type="button"
                                        className='inputText addr'
                                        id="inputAddr"
                                        >
                                            <img src="../../img/ico_search.svg" alt="검색" />
                                            <span>
                                                {
                                                    this.state.isAddressInputShow === true ? `주소재검색` : `주소검색`
                                                }
                                            </span>
                                        </button>
                                        <div id="postcode">
                                            {
                                                this.state.isAddressOn && ( <PostCode  onChangeAddress1={this.onChangeAddress1} />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>성별</span>
                                    </div>
                                    <div className="input-box radio-box">
                                          <label>
                                            <input type="radio" checked={this.state.성별.includes( `남자`)}  onChange={(e)=>this.onChangeGender(e.target.value)} value={`남자`}  />
                                            <span>남자</span>
                                          </label>
                                          <label>
                                            <input type="radio" checked={this.state.성별.includes( `여자`)} onChange={(e)=>this.onChangeGender(e.target.value)} value={`여자`}/>
                                            <span>여자</span>
                                          </label>
                                          <label>
                                            <input type="radio" checked={this.state.성별.includes( `선택안함`)} onChange={(e)=>this.onChangeGender(e.target.value)} value={`선택안함`} />
                                            <span>선택안함</span>
                                          </label>
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
                                            <li><input type="text" id="year" placeholder='YYYY' value={this.state.생년} onChange={(e)=> this.onChangeYear(e.target.value)} /></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="month" placeholder='MM' value={this.state.생월} onChange={(e)=> this.onChangeMonth(e.target.value)} /></li>
                                            <li><span>/</span></li>
                                            <li><input type="text" id="date" placeholder='DD' value={this.state.생일} onChange={(e)=> this.onChangeDate(e.target.value)} /></li>
                                         </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="gap">
                                    <div className="label-box">
                                        <span>추가입력 사항</span>
                                    </div>
                                    <div className="input-box radio-box">
                                          <label>
                                            <input type="radio" checked={this.state.추가입력사항.includes(`추천인 아이디`)} value={`추천인 아이디`} onChange={(e) => this.onChangeChoocheon(e.target.value)} />
                                            <span>추천인 아이디</span>
                                          </label>
                                          <label>
                                            <input type="radio" checked={this.state.추가입력사항.includes(`참여 이벤트명`)} value={`참여 이벤트명`} onChange={(e) => this.onChangeChoocheon(e.target.value)} />
                                            <span>참여 이벤트명</span>
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
                                        <span>이용약관동의<i>*</i></span>
                                    </div>
                                    <div className="input-box check-box">
                                          <dl>
                                            <dt>
                                                <label>
                                                    <input type="checkbox" value={`전체 동의합니다.`}  onChange={(e)=>this.onChangeCheckEventAll(e.target.checked, e.target.value)} checked={this.state.약관동의.length >=7 ? true:false}/>
                                                    <span>전체 동의합니다.</span>
                                                </label>
                                                <p className='gapAgree'>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                                            </dt>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`이용약관동의 (필수)`} checked={this.state.약관동의.includes(`이용약관동의 (필수)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
                                                    <span>이용약관동의 <i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (필수)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (필수)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)}  />
                                                    <span>개인정보 수집∙이용 동의<i>(필수)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`개인정보 수집∙이용 동의 (선택)`} checked={this.state.약관동의.includes(`개인정보 수집∙이용 동의 (선택)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)}  />
                                                    <span>개인정보 수집∙이용 동의 <i>(선택)</i></span>
                                                </label>
                                                <span>
                                                    <a href="#!">이용약관보기 <i>&gt;</i></a>
                                                </span>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`} checked={this.state.약관동의.includes(`무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)}  />
                                                    <span>무료배송, 할인쿠폰 등 혜택/정보 수신 동의 <i>(선택)</i></span>
                                                </label>
                                                <div className="sub-checkbox">
                                                    <div>
                                                        <label>
                                                            <input type="checkbox" value={`SNS`} checked={this.state.약관동의.includes(`SNS`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
                                                            <span>SNS</span>
                                                        </label>
                                                        <label>
                                                            <input type="checkbox" value={`이메일`} checked={this.state.약관동의.includes(`이메일`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
                                                            <span>이메일</span>
                                                        </label>
                                                    </div>
                                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                                                </div>
                                            </dd>
                                            <dd>
                                                <label>
                                                    <input type="checkbox" value={`본인은 만 14세 이상입니다. (필수)`} checked={this.state.약관동의.includes(`본인은 만 14세 이상입니다. (필수)`)} onChange={(e) =>this.onChangeCheckEvent(e.target.checked, e.target.value)} />
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