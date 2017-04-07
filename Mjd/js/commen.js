window.itcast = {};
// 轻触事件方法

/**
 * params 
 * 绑定事件的对象
 * 事件响应函数
 * 
 */
itcast.tap = function(dom,callback) {
    /**
     * 1.没有滑动过
     * 2.比click响应快 且在150ms内
     */
    // 默认没有滑动过
    var isMove = false;
    //定义开始时间
    var startTime = 0;
    if (!dom || callback != "object") return false;
    dom.addEventListener("touchstart",function(){
        startTime = Date.now();
    });
    dom.addEventListener("touchmove",function(){
        isMove = true;
    });
    dom.addEventListener("touchend",function(){
        // 计算响应时间
        var time = Date.now()-startTime;
        // 确定是否是tap事件
        if (!isMove && time < 150) {
            callback && callback(e);
        }
        // 
        isMove = false;
        startTime = 0;
    });
};