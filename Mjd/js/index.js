window.onload = function() {
        search();
        banner();
        downTime();
    }
    // 顶部搜索
var search = function() {
    /**
     * 1.默认状态是透明的
     * 2.但页面关东的时候,颜色需要逐渐加深
     * 3.但是当超过一定距离的时候颜色不改变
     * 
     */
    // 获取搜索盒子
    var searchBOX = document.querySelector(".jd_search_box");
    // 获取轮播图的高度
    var banner = document.querySelector(".jd_banner");
    var bannerHeight = banner.offsetHeight;

    // 监听事件
    window.onscroll = function() {
        // 获取卷曲出去的高度  基于谷歌的
        var top = document.body.scrollTop;
        var opacity = 0;
        // 进行判断 
        if (top <= bannerHeight) {
            // 颜色改变
            opacity = top / bannerHeight * 0.85;

        } else {
            // 颜色不变
            opacity = 0.85;
        }
        searchBOX.style.background = "rgba(201,21,35," + opacity + ")";
    }
};
// 轮播图
var banner = function() {
    // 需求分析
    /**
     * 1.自动轮播(无缝)
     * 2.下面的点需要对应的发生改变
     * 3.手指在轮播图上滑动的时候 轮播图也需要滑动
     * 4.当滑动不超过一定距离的时候 需要吸附回去
     * 5.当滑动超过一定距离的时候 需要跳到上一张或下一张
     */
    // 获取需要操作的元素

    // 轮播图盒子
    var banner = document.querySelector(".jd_banner");
    // 图片盒子
    var imgBox = banner.querySelector("ul:first-child")
        // 点盒子
    var pointBox = banner.querySelector("ul:last-child")
        // 点盒子中的所有点
    var points = pointBox.querySelectorAll("li");
    // 滚动的宽度
    // var width = banner.offsetWidth;
    var width = 10;



    // 1.自动轮播 (无缝)

    // 自动轮播
    var index = 1;
    var timer = setInterval(function() {
        index++;
        // 移动
        var position = -index * width;
        // 过度效果
        imgBox.style.transition = "all 0.2s";
        imgBox.style.webkitTransition = "all 0.2s";
        // 设置定位
        imgBox.style.transform = "translateX(" + position + "%)";
        imgBox.style.webkitTransform = "translateX(" + position + "%)";

    }, 1000);

    //无缝
    // 监听到过度结束
    imgBox.addEventListener("transitionend", function() {
        // 分为两种情况 向右和向左  进行判断
        if (index >= 9) {
            index = 1;
            //瞬间移到第一张
            var position = -index * width;
            //清除过度
            imgBox.style.transition = "none";
            imgBox.style.webkitTransition = "none";

            //定位
            imgBox.style.transform = "translateX(" + position + "%)";
            imgBox.style.webkitTransform = "translateX(" + position + "%)";

        } else if (index <= 0) {
            index = 8;
            //瞬间移到第一张
            var position = -index * width;
            //清除过度
            imgBox.style.transition = "none";
            imgBox.style.webkitTransition = "none";

            //定位
            imgBox.style.transform = "translateX(" + position + "%)";
            imgBox.style.webkitTransform = "translateX(" + position + "%)";
        }


        // 2.下面的点需要对应的发生改变
        // console.log(index);
        setPoints();
    });


    // 2.下面的点需要对应的发生改变
    function setPoints() {
        // 循环遍历
        for (var i = 0; i < points.length; i++) {
            points[i].classList.remove("now");
        }
        points[index - 1].classList.add('now');
    }

    // 3.手指在轮播图上滑动的时候 轮播图也需要滑动

    //定义变量
    var startX = 0;
    var moveX = 0;
    var distance = 0;
    // 三个事件
    imgBox.addEventListener("touchstart", function(e) {
        //清除定时器
        clearInterval(timer);
        //获取当前点击的位置
        startX = e.touches[0].clientX;
    });
    imgBox.addEventListener("touchmove", function(e) {
        moveX = e.touches[0].clientX;
        distance = moveX - startX;
        /*计算将要去定位的位置*/
        var width = banner.offsetWidth;
        var position = -index * width + distance;
        /*跟随手指来回定位 即时*/
        /*清除过渡*/
        imgBox.style.transition = 'none'; /*代表没有任何过渡属性*/
        imgBox.style.webkitTransition = 'none';
        /*设置定位*/
        imgBox.style.transform = 'translateX(' + position + 'px)';
        imgBox.style.webkitTransform = 'translateX(' + position + 'px)';
    });
    // 4.当滑动不超过一定距离的时候 需要吸附回去
    imgBox.addEventListener("touchend", function(e) {
        // 判断移动的距离
        if (Math.abs(distance) < banner.offsetWidth / 3) {
            // 移动
            var position = -index * width;
            // 过度效果
            imgBox.style.transition = "all 0.2s";
            imgBox.style.webkitTransition = "all 0.2s";
            // 设置定位
            imgBox.style.transform = "translateX(" + position + "%)";
            imgBox.style.webkitTransform = "translateX(" + position + "%)";
        } else {
            //判断滑动的方向 通过distance的正负
            if (distance > 0) {
                // 向右滑  上一张
                index--;
                // 移动
                var position = -index * width;
                // 过度效果
                imgBox.style.transition = "all 0.2s";
                imgBox.style.webkitTransition = "all 0.2s";
                // 设置定位
                imgBox.style.transform = "translateX(" + position + "%)";
                imgBox.style.webkitTransform = "translateX(" + position + "%)";
            } else {
                // 向左滑  下一张
                index++;
                // 移动
                var position = -index * width;
                // 过度效果
                imgBox.style.transition = "all 0.2s";
                imgBox.style.webkitTransition = "all 0.2s";
                // 设置定位
                imgBox.style.transform = "translateX(" + position + "%)";
                imgBox.style.webkitTransform = "translateX(" + position + "%)";
            }
        }
        // 恢复定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            // 移动
            var position = -index * width;
            // 过度效果
            imgBox.style.transition = "all 0.2s";
            imgBox.style.webkitTransition = "all 0.2s";
            // 设置定位
            imgBox.style.transform = "translateX(" + position + "%)";
            imgBox.style.webkitTransform = "translateX(" + position + "%)";

        }, 1000);
    });


};



// 倒计时
var downTime = function() {
    //获取元素 
    var skTime = document.querySelector(".sk_time");
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



};