// 메뉴 토글 버튼 작동시키기
$(function(){
    $("#menubtn").click(function(){
        $(".navmenu").slideToggle();
    });
});


//메인창 사진 바뀔때 text와 버튼 바꾸기
$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();
      
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
      $("#fronttext").html("<h5>다미에 그라파이트 자이언트 컬렉션</h5><p>오직 온라인 스토어에서만 먼저 공개하는 아이템을 확인하세요</p>");
      $("#button1").html("컬렉션보기");
      $("#button2").html("스토리보기");
    })
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
        $("#fronttext").html("<h5>2020 LV 모노그램 앙프렝뜨 스토리</h5><p>양각 디테일이 돋보이는 유연한 모노그램 앙프렝뜨 가죽 소재의 디자인</p>");
        $("#button1").html("앙프렝뜨 백 쇼핑하기");
        $("#button2").html("액세서리 스타일링");
    })
  
});


//navbar 상단 fix
window.onscroll = function(){navsticky()};

var navmenu = document.getElementById('stickymenu');
var sticky = navmenu.offsetTop;

function navsticky(){  
    if(window.pageYOffset >= sticky){ //윈도우에서 스크롤된 값이 sticky 보다 클때
        navmenu.classList.add("sticky"); //class에 sticky가 추가됨
    }else{
        navmenu.classList.remove("sticky");
    }
  }

  $(document).ready( function() {

	$("#login").click(function(){
        document.getElementById('id01').style.display="block";
    });

    $("#login2").click(function(){
        document.getElementById('id01').style.display="block";
    });

    // $('#socallogin').click(function(){
    //     $("html").load("social_login.html");
    // });

});
