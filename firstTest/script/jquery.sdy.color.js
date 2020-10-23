
; (function ($) {
    $.fn.extend({
        "color": function (value) {
            // if (value == undefined) {
            //     return this.css("color");
            // } else {
            //     return this.css("color", value);
            // }

            // css() 方法内部已经有判断 value 是否为 undefined 的机制，所以才可以根据传递参数的不同而返回不同的值。因此，可以借助 css() 方法的这个特性来处理该问题
            return this.css("color", value);
        }
    });
})(jQuery);