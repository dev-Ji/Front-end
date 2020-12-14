$(document).ready(function(){

    var naverLogin = new naver.LoginWithNaverId(
        {
            clientId: "oBCoRiqPF9dVqSJIGSzQ",
            callbackUrl: "http://127.0.0.1:5500/myweb/callback.html",
            isPopup: true, /* 팝업을 통한 연동처리 여부, true 면 팝업 */
            loginButton: {color: "white", type: 3, height: 47} /* 로그인 버튼의 타입을 지정 */
        }		
    );
    
    naverLogin.init();

    
})
