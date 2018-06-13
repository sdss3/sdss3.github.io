



//banner部分轮播

var mySwiper = new Swiper ('.banner', {
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })        






//京东快报

//方法一

//setInterval(function(){
//    x();
//    setTimeout(function(){
//        e();
//        h();
//    },3000);
//},3500);

//方法二
setInterval(function(){
    x();
    
},3000);


setInterval(function(){
        e();
        h();
},3500);


//向上偏移16像素
function x(){
    $(".news .center .text").css({"transform":"translateY(-16px)","transition":"1s"});
};

//归零
function e(){
    $(".news .center .text").css({"transform":"translateY(0)","transition":"0s"});
};


//把第一个移动到末尾
function h(){
    $(".news .center .text").eq(0).appendTo($(".news .center"));
};







//首页京东秒杀部分的效果（倒计时）

var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 7, 1, 8),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());



//html调用方式
//<span id="hour">00</span> 




//京东直播
var swiper = new Swiper('.jingdongzhibo', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });



//为你推荐
new Vue ({
    el:"#app",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price:"￥21.08", link:"https://item.m.jd.com/product/25732633792.html",link1:"http://www.jd.com/",link2:"https://home.m.jd.com/myjd/similar/list.action?skuId=26559837142"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗船",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE 线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"},
            {name:"【京东超市】e洁 自动收口垃圾袋加厚45c",img:"images/weinituijian/1.jpg",price:"￥21.08",link:""},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗船",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"},
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price:"￥21.08"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"},
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c",img:"images/weinituijian/1.jpg",price:"￥21.08"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗",img:"images/weinituijian/2.jpg",price:"￥38.00"},
            {name:"苹果原装数据线iPhone7 Plus // 6P / 5SE线",img:"images/weinituijian/3.jpg",price:"￥155.00"},
            {name:"真皮多卡位零钱包女士卡夹信用卡头层牛皮驾驶证皮套",img:"images/weinituijian/4.jpg",price:"￥59.00"}
        ]
    }
})



//返回顶部
//
//var footer=document.querySelector(".footer-top");
// $(".footer-top").click(function () {
//        var speed=200;//滑动的速度
//        $('body,html').animate({ scrollTop: 0 }, speed);
//        return false;
// });

//$(".footer-top").click(function smoothscroll(){
//    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//    if (currentScroll>500) {
//         window.requestAnimationFrame(smoothscroll);
//         window.scrollTo (0,currentScroll - (currentScroll/5));
//    }
//});

var gotop = document.querySelector(".footer-top");

function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}

gotop.onclick = function(){
    smoothscroll();
}
var sr=document.querySelector(".search");
window.onscroll=function(){
    //search部分滚动变色
    if(sr!=null){
        if(document.body.scrollTop>115){
            document.querySelector(".search").style.background="red";
            document.querySelector(".search").style.top="0";
        }else{
            document.querySelector(".search").style.background="transparent";
             document.querySelector(".search").style.top="auto";
        }
    }
    
    //回到顶部，隐藏，显示
    if(document.body.scrollTop>1000){
        document.querySelector(".footer-top").style.display="inline-block";
    }else{
        document.querySelector(".footer-top").style.display="none";
    }
}



//分类页的js部分
new Vue({
    el:"#mainsort",
    data:{
        ars:[
            {img:"images/sort/1.jpg",link:"",name:"小米"},
            {img:"images/sort/2.jpg",link:"",name:"华为"},
            {img:"images/sort/3.jpg",link:"",name:"荣耀"},
            {img:"images/sort/4.jpg",link:"",name:"iPhone"},
            {img:"images/sort/5.jpg",link:"",name:"vivo"},
            {img:"images/sort/6.jpg",link:"",name:"OPPO"},
            {img:"images/sort/7.jpg",link:"",name:"魅族"},
            {img:"images/sort/8.jpg",link:"",name:"三星"},
            {img:"images/sort/9.jpg",link:"",name:"一加"},
            {img:"images/sort/10.jpg",link:"",name:"360手机"},
            {img:"images/sort/11.jpg",link:"",name:"锤子手机"},
            {img:"images/sort/12.jpg",link:"",name:"努比亚"},
        ],
        ars1:[
            {img:"images/sort/tuijian-1.jpg",link:"",name:"电风扇"},
            {img:"images/sort/tuijian-2.jpg",link:"",name:"手机"},
            {img:"images/sort/tuijian-3.jpg",link:"",name:"空调"},
            {img:"images/sort/tuijian-4.jpg",link:"",name:"充电宝"},
            {img:"images/sort/tuijian-5.jpg",link:"",name:"蓝牙耳机"},
            {img:"images/sort/tuijian-6.jpg",link:"",name:"蚊帐"},
            {img:"images/sort/tuijian-7.jpg",link:"",name:"凉席"},
            {img:"images/sort/tuijian-8.jpg",link:"",name:"耳机"},
            {img:"images/sort/tuijian-9.jpg",link:"",name:"电饭煲"},
            {img:"images/sort/tuijian-10.jpg",link:"",name:"空调挂机"},
            {img:"images/sort/tuijian-11.jpg",link:"",name:"路由器"},
            {img:"images/sort/tuijian-12.jpg",link:"",name:"空调扇"},
            {img:"images/sort/tuijian-13.jpg",link:"",name:"男鞋"},
            {img:"images/sort/tuijian-14.jpg",link:"",name:"热水器"},
            {img:"images/sort/tuijian-15.jpg",link:"",name:"防晒"},
        ],
        ars2:[
            {img:"images/sort/tuijian-16.jpg",link:"",name:"冰箱"},
            {img:"images/sort/tuijian-17.jpg",link:"",name:"洗衣机"},
            {img:"images/sort/tuijian-18.jpg",link:"",name:"电视"}
        ],
        ars3:[
            {img:"images/sort/tuijian-19.jpg",link:"",name:"华为手机"},
            {img:"images/sort/tuijian-20.jpg",link:"",name:"小米手机"},
            {img:"images/sort/tuijian-21.jpg",link:"",name:"苹果手机"}
        ],
        ars4:[
            {img:"images/sort/shoujishuma/shoujitongxun/1.jpg",link:"",name:"老人机"},
            {img:"images/sort/shoujishuma/shoujitongxun/2.jpg",link:"",name:"手机"},
            {img:"images/sort/shoujishuma/shoujitongxun/3.jpg",link:"",name:"全面屏手机"},
            {img:"images/sort/shoujishuma/shoujitongxun/4.jpg",link:"",name:"游戏手机"},
            {img:"images/sort/shoujishuma/shoujitongxun/5.jpg",link:"",name:"拍照手机"},
            {img:"images/sort/shoujishuma/shoujitongxun/6.jpg",link:"",name:"对讲机"},
            {img:"images/sort/shoujishuma/shoujitongxun/7.jpg",link:"",name:"京东回收"},
            {img:"images/sort/shoujishuma/shoujitongxun/8.jpg",link:"",name:"女性手机"},
            {img:"images/sort/shoujishuma/shoujitongxun/9.jpg",link:"",name:"京东维修"}
            
        ],
        ars5:[
            {img:"images/sort/shoujishuma/yunyingshang/1.jpg",link:"",name:"合约机"},
            {img:"images/sort/shoujishuma/yunyingshang/2.jpg",link:"",name:"选号卡"},
            {img:"images/sort/shoujishuma/yunyingshang/3.jpg",link:"",name:"办套餐"},
            {img:"images/sort/shoujishuma/yunyingshang/4.jpg",link:"",name:"京东网厅"}
        ],
        ars6:[
            {img:"images/sort/shoujishuma/shoujipeijian/1.jpg",link:"",name:"数据线"},
            {img:"images/sort/shoujishuma/shoujipeijian/2.jpg",link:"",name:"手机存储卡"},
            {img:"images/sort/shoujishuma/shoujipeijian/3.jpg",link:"",name:"充电宝"},
            {img:"images/sort/shoujishuma/shoujipeijian/4.jpg",link:"",name:"手机贴膜"},
            {img:"images/sort/shoujishuma/shoujipeijian/5.jpg",link:"",name:"手机耳机"},
            {img:"images/sort/shoujishuma/shoujipeijian/6.jpg",link:"",name:"蓝牙耳机"},
            {img:"images/sort/shoujishuma/shoujipeijian/7.jpg",link:"",name:"手机支架"},
            {img:"images/sort/shoujishuma/shoujipeijian/8.jpg",link:"",name:"手机饰品"},
            {img:"images/sort/shoujishuma/shoujipeijian/9.jpg",link:"",name:"车载配件"},
            {img:"images/sort/shoujishuma/shoujipeijian/10.jpg",link:"",name:"充电器"},
            {img:"images/sort/shoujishuma/shoujipeijian/11.jpg",link:"",name:"手机电池"},
            {img:"images/sort/shoujishuma/shoujipeijian/12.jpg",link:"",name:"创意配件"},
            {img:"images/sort/shoujishuma/shoujipeijian/13.jpg",link:"",name:"拍照配件"},
            {img:"images/sort/shoujishuma/shoujipeijian/14.jpg",link:"",name:"苹果周边"},
            {img:"images/sort/shoujishuma/shoujipeijian/15.jpg",link:"",name:"手机壳/保护套"},
            {img:"images/sort/shoujishuma/shoujipeijian/16.jpg",link:"",name:"无线充电器"},
            {img:"images/sort/shoujishuma/shoujipeijian/17.jpg",link:"",name:"背夹充电宝"},
            {img:"images/sort/shoujishuma/shoujipeijian/18.jpg",link:"",name:"手机转接"}
        ],
        ars7:[
            {img:"images/sort/shoujishuma/sheyingshexiang/1.jpg",link:"",name:"单反相机"},
            {img:"images/sort/shoujishuma/sheyingshexiang/2.jpg",link:"",name:"数码相机"},
            {img:"images/sort/shoujishuma/sheyingshexiang/3.jpg",link:"",name:"运动相机"},
            {img:"images/sort/shoujishuma/sheyingshexiang/4.jpg",link:"",name:"户外器材"}
        ],
        ars8:[
            {img:"images/sort/shoujishuma/yingyinyule/1.jpg",link:"",name:"便携/无线音箱"},
            {img:"images/sort/shoujishuma/yingyinyule/2.jpg",link:"",name:"音箱/音响"},
            {img:"images/sort/shoujishuma/yingyinyule/3.jpg",link:"",name:"MP3/MP4"},
            {img:"images/sort/shoujishuma/yingyinyule/4.jpg",link:"",name:"耳机/耳麦"},
            {img:"images/sort/shoujishuma/yingyinyule/5.jpg",link:"",name:"收音机"},
            {img:"images/sort/shoujishuma/yingyinyule/6.jpg",link:"",name:"麦克风"},
            {img:"images/sort/shoujishuma/yingyinyule/7.jpg",link:"",name:"专业音频"}
        ],
        ars9:[
            {img:"images/sort/shoujishuma/shumapeijian/1.jpg",link:"",name:"存储卡"},
            {img:"images/sort/shoujishuma/shumapeijian/2.jpg",link:"",name:"三脚架/云台"},
            {img:"images/sort/shoujishuma/shumapeijian/3.jpg",link:"",name:"数码支架"},
            {img:"images/sort/shoujishuma/shumapeijian/4.jpg",link:"",name:"读卡器"},
            {img:"images/sort/shoujishuma/shumapeijian/5.jpg",link:"",name:"滤镜"},
            {img:"images/sort/shoujishuma/shumapeijian/6.jpg",link:"",name:"相机清洁/贴膜"},
            {img:"images/sort/shoujishuma/shumapeijian/7.jpg",link:"",name:"镜头附件"},
            {img:"images/sort/shoujishuma/shumapeijian/8.jpg",link:"",name:"相机包"}
        ],
        ars10:[
            {img:"images/sort/shoujishuma/zhinengshebei/1.jpg",link:"",name:"智能手环"},
            {img:"images/sort/shoujishuma/zhinengshebei/2.jpg",link:"",name:"智能手表"},
            {img:"images/sort/shoujishuma/zhinengshebei/3.jpg",link:"",name:"智能家居"},
            {img:"images/sort/shoujishuma/zhinengshebei/4.jpg",link:"",name:"智能机器人"}
        ],
        ars11:[
            {img:"images/sort/shoujishuma/dianzijiaoyu/1.jpg",link:"",name:"学生平板"},
            {img:"images/sort/shoujishuma/dianzijiaoyu/2.jpg",link:"",name:"电纸书"},
            {img:"images/sort/shoujishuma/dianzijiaoyu/3.jpg",link:"",name:"录音笔"},
            {img:"images/sort/shoujishuma/dianzijiaoyu/4.jpg",link:"",name:"早教益智"},
            {img:"images/sort/shoujishuma/dianzijiaoyu/5.jpg",link:"",name:"电子词典"},
            {img:"images/sort/shoujishuma/dianzijiaoyu/6.jpg",link:"",name:"点读机/笔"},
            {img:"images/sort/shoujishuma/dianzijiaoyu/7.jpg",link:"",name:"复读机"}
        ],
        arss:[
            {img:"images/sort/jiayongdianqi/1.jpg",link:"",name:"轻薄本"},
            {img:"images/sort/jiayongdianqi/2.jpg",link:"",name:"游戏本"},
            {img:"images/sort/jiayongdianqi/3.jpg",link:"",name:"机械键盘"},
            {img:"images/sort/jiayongdianqi/4.jpg",link:"",name:"组装电脑"},
            {img:"images/sort/jiayongdianqi/5.jpg",link:"",name:"移动硬盘"},
            {img:"images/sort/jiayongdianqi/6.jpg",link:"",name:"显卡"},
            {img:"images/sort/jiayongdianqi/7.jpg",link:"",name:"游戏台式机"},
            {img:"images/sort/jiayongdianqi/8.jpg",link:"",name:"家用打印机"},
            {img:"images/sort/jiayongdianqi/9.jpg",link:"",name:"吃鸡装备"},
            {img:"images/sort/jiayongdianqi/10.jpg",link:"",name:"曲屏显示器"}
        ],
        arss1:[
            {img:"images/sort/jiayongdianqi/zhengji/1.jpg",link:"",name:"笔记本"},
            {img:"images/sort/jiayongdianqi/zhengji/2.jpg",link:"",name:"平板电脑"},
            {img:"images/sort/jiayongdianqi/zhengji/3.jpg",link:"",name:"一体机"},
            {img:"images/sort/jiayongdianqi/zhengji/4.jpg",link:"",name:"台式机"},
            {img:"images/sort/jiayongdianqi/zhengji/5.jpg",link:"",name:"笔记本配件"},
            {img:"images/sort/jiayongdianqi/zhengji/6.jpg",link:"",name:"游戏台式机"},
            {img:"images/sort/jiayongdianqi/zhengji/7.jpg",link:"",name:"商用台式机"},
            {img:"images/sort/jiayongdianqi/zhengji/8.jpg",link:"",name:"游戏本"},
            {img:"images/sort/jiayongdianqi/zhengji/9.jpg",link:"",name:"平板电脑配件"},
            {img:"images/sort/jiayongdianqi/zhengji/10.jpg",link:"",name:"轻薄本"}
        ],
        arss2:[
            {img:"images/sort/jiayongdianqi/waishe/1.jpg",link:"",name:"鼠标"},
            {img:"images/sort/jiayongdianqi/waishe/2.jpg",link:"",name:"U盘"},
            {img:"images/sort/jiayongdianqi/waishe/3.jpg",link:"",name:"键盘"},
            {img:"images/sort/jiayongdianqi/waishe/4.jpg",link:"",name:"鼠标垫"},
            {img:"images/sort/jiayongdianqi/waishe/5.jpg",link:"",name:"移动硬盘"},
            {img:"images/sort/jiayongdianqi/waishe/6.jpg",link:"",name:"手写板"},
            {img:"images/sort/jiayongdianqi/waishe/7.jpg",link:"",name:"硬盘盒"},
            {img:"images/sort/jiayongdianqi/waishe/8.jpg",link:"",name:"线缆"},
            {img:"images/sort/jiayongdianqi/waishe/9.jpg",link:"",name:"手机U盘"}
        ],
        arss3:[
            {img:"images/sort/jiayongdianqi/diannaopeijian/1.jpg",link:"",name:"显示器"},
            {img:"images/sort/jiayongdianqi/diannaopeijian/2.jpg",link:"",name:"硬盘"},
            {img:"images/sort/jiayongdianqi/diannaopeijian/3.jpg",link:"",name:"电源"},
            {img:"images/sort/jiayongdianqi/diannaopeijian/4.jpg",link:"",name:"内存"},
            {img:"images/sort/jiayongdianqi/diannaopeijian/5.jpg",link:"",name:"CPU"},
            {img:"images/sort/jiayongdianqi/diannaopeijian/6.jpg",link:"",name:"机箱"}
        ],
        arss4:[
            {img:"images/sort/jiayongdianqi/wangluochanpin/1.jpg",link:"",name:"显示器"},
            {img:"images/sort/jiayongdianqi/wangluochanpin/2.jpg",link:"",name:"网卡"},
            {img:"images/sort/jiayongdianqi/wangluochanpin/3.jpg",link:"",name:"网络配件"},
            {img:"images/sort/jiayongdianqi/wangluochanpin/4.jpg",link:"",name:"4G/3G上网"},
        ],
        arss5:[
            {img:"images/sort/jiayongdianqi/bangongshebei/1.jpg",link:"",name:"安防监控"},
            {img:"images/sort/jiayongdianqi/bangongshebei/2.jpg",link:"",name:"多功能一体机"},
            {img:"images/sort/jiayongdianqi/bangongshebei/3.jpg",link:"",name:"打印机"},
            {img:"images/sort/jiayongdianqi/bangongshebei/4.jpg",link:"",name:"投影机"},
            {img:"images/sort/jiayongdianqi/bangongshebei/5.jpg",link:"",name:"验钞机"},
            {img:"images/sort/jiayongdianqi/bangongshebei/6.jpg",link:"",name:"投影配件"},
            {img:"images/sort/jiayongdianqi/bangongshebei/7.jpg",link:"",name:"家用打印机"}
        ]
    }
})




//分类页选显卡事件
var sortNav=document.querySelectorAll(".sort-nav>li");
//console.log(sortNav);
var sortList=document.querySelectorAll(".sort-list>div");
//console.log(sortList);
//sortList.style.display="block";
for(var i=0;i<sortNav.length;i++){
    sortNav[i].index=i;
    sortNav[i].onclick=function(){
         for(var i=0;i<sortList.length;i++){
             sortNav[i].classList.remove("active");
             sortList[i].classList.remove("act");
         }
        sortNav[this.index].classList.add("active");
        sortList[this.index].classList.add("act");
        sortList[this.index].style.backgroundColor="f5f5f5";
        
    }
}

//弹出框部分的代码
var close=document.querySelector(".close");
var ad=document.querySelector(".ad");

if(sessionStorage.ad=="false"){
    ad.style.display="none";
}else{
    ad.style.display="block";
}


close.onclick = function(){
    ad.style.display="none";
    sessionStorage.ad="false";
}

