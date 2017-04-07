
window.onload = function () {
    search();
    banner();
    skTime();
}


// 搜索栏部分

function search () {
    /**
     * 需求分析 
     * 1.默认透明度为0 
     * 1.滚动 透明度逐渐变大
     * 3.卷曲高度超过banner的高度时  透明度保持0.85不变
     * 
     */

    // 获取元素
    //获取search
    var search = document.querySelector(".jd-search");
    //获取banner
    var banner = document.querySelector(".jd-banner");
    //获取banner高度
    var height = banner.offsetHeight;
    
   

    //监听事件 滚动
    window.onscroll = function () {
        console.log("aaa")
       //获取卷曲出去的高度
        var top = document.body.scrollTop;
         //透明度
        var opacity = 0;
        //判断卷曲出去的高度
    if (top <= height) {
         //透明度
        opacity = top/height*0.85;
       
    }else {
        opacity = 0.85;
    }
     search.style.background = "rgba(201,35,21,"+opacity+")";
    };
   
}

// 轮播图部分

function banner () {
    /**
     * 需求分析:
     * 1.无缝自动滚动
     * 2.点样式改变
     * 3.滑动
     * 4.当滑动在一定的范围内 会吸附回去
     * 5.滑动超过移动的范围 会变化上一张或者下一张图片
     */

    //获取元素
    //获取banner
    var banner = document.querySelector(".jd-banner");
    //获取ul (移动的元素)
    var imgBox = banner.querySelector("ul:first-child")
    //获取 点盒子
    var pointBox = banner.querySelector("ul:last-child");
    //获取所有的点
    var points = pointBox.querySelectorAll("li");

    

    //过度
    var setTransition = function () {
        imgBox.style.transition = "all 0.2s";
        imgBox.style.webkitTransition = "all 0.2s";
    };
    //清除过度
    var removeTransition = function () {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    };
    
    //设定移动
    var setPosition = function () {
        imgBox.style.transform = "translateX("+-index*10+"%)"
        imgBox.style.webkitTransform = "translateX("+-index*10+"%)"
    }
    // 点样式改变
     function setPoint () {
        for (var i = 0; i < points.length; i++) {
            //排他 移除样式
            points[i].classList.remove("now");
        }
        points[index-1].classList.add("now");
    }
    //需求1  无缝滚动

    //自己滚动
    var index = 1;
    var timer = setInterval(function() {
        index++;
        setTransition();
        setPosition();
    },1000);

    //无缝滚动
    //过度结束监听事件
    imgBox.addEventListener("transitionend",function() {
        //判断索引
        if (index >= 9) {
            index = 1;
           
        }else if (index <= 0) {
            index = 8;
        }
         //快速移动 清除过度
            removeTransition();
            //移动
            setPosition();

            //dian样式
            setPoint();
    })

    // 3.滑动
    var startX = 0;
    var moveX = 0;
    var distance = 0;
    var width = 0;
    imgBox.addEventListener("touchstart",function(e) {
        clearInterval(timer);
        //当前点击的位置
        startX = e.touches[0].clientX;
    })
    imgBox.addEventListener("touchmove",function(e) {
       
        
        moveX = e.touches[0].clientX;
        
        //移动距离
        distance = moveX - startX;
         width = banner.offsetWidth;
        var position = -index * width + distance;
        //清除过度
        removeTransition();
        //移动
        imgBox.style.transform = "translateX("+position+"px)"
        imgBox.style.webkitTransform = "translateX("+position+"px)"
    })
    imgBox.addEventListener("touchend",function(e) {
        //判断移动的距离范围
        if (Math.abs(distance) > width/3) {
            if (distance >= 0) {
                index--;
            }else {
                index++;
            }
        }
        setTransition();
        setPosition();

        clearInterval(timer);
         timer = setInterval(function() {
        index++;
        setTransition();
        setPosition();
    },1000);
    })

}

// 倒计时
function skTime () {
     //获取元素 
    var skTime = document.querySelector(".sk-box-time");
    var spans = skTime.querySelectorAll("span");

    //倒计时时间  转换成秒
    var time = 3*60*60;

    //计时器 自动倒计时
    var timer = setInterval(function(){
        time--;

        //显示  转化格式
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = time%60;

        spans[0].innerHTML = Math.floor(h/10);
        spans[1].innerHTML = h%10;
        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = m%10;
        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = s%10;

        // 计时器停止
        if (time==0) {
            clearInterval(timer);
        }

    },1000)

}