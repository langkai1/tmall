window.onload=function () {
    document.onmousewheel=function (e) {
        if(e.deltaY>0){
            var head=document.querySelector("header");
            head.style.height="59px";
            head.style.transition= "all 300ms ease 0ms";
            var ss=document.querySelector(".ss");
            ss.style.bottom="115px";
            ss.style.width="289px";
            ss.style.left="38px";
            ss.style.transition= "all 300ms ease 0ms";
            var tii=document.querySelector(".tii");
            tii.style.transform="scale(0,0)"
            tii.style.top="-83px"
            tii.style.transition= "all 300ms ease 0ms";
            var sou=document.querySelector(".sou")
            sou.style.top="14px"
            sou.style.transition= "all 300ms ease 0ms";
            var deng=document.querySelector(".deng")
            deng.style.top="-70px"
            deng.style.transition= "all 300ms ease 0ms";
        }else if(e.deltaY<0){
            var head=document.querySelector("header");
            head.style.height="90px";
            var ss=document.querySelector(".ss");
            ss.style.bottom="80px";
            ss.style.width="355px";
            ss.style.left="9px";
            var tii=document.querySelector(".tii");
            tii.style.transform="scale(1,1)"
            tii.style.top="-50px"
            var sou=document.querySelector(".sou")
            sou.style.top="7px"
            var deng=document.querySelector(".deng")
            deng.style.top="-79px"
        }

    }
    window.onresize=function () {

    var  Width= document.documentElement.clientWidth;
    var Height = document.documentElement.clientHeight;
    console.log(Width,Height)
    }
}