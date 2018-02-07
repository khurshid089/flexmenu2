module.exports = flexMenu();
function flexMenu() {
    if (!(this instanceof flexMenu)) return new flexMenu();
}

(function (factory) {
    if(typeof window === "undefined"){
        return false;
    }
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var flexObjects = [];
    function uniqId() {
        return Math.round(new Date().getTime() + (Math.random() * 100));
    }
    $(document).ready(function () {
        $('ul.flex').attr('flexId', uniqId );
        var $el = $('ul.flex li');
        $el.on('click', function () {
            if ($(this).parent().hasClass('overflow')){
                $(this).parent().toggleClass('open');
            }
            $(this).find('a').addClass('active');
            $(this).addClass('selected');
            $(this).siblings('li').removeClass('selected');
            $(this).siblings().children('a').removeClass('active');
        });
    });
    $('head').append('<style type="text/css">ul.flex{margin:0;padding:0}ul.flex li{display:inline-block;margin-right:5px}ul.flex.overflow{position:relative;padding:2px;width:100%}ul.flex.overflow.open{max-height:100%}ul.flex.overflow.open>li{visibility:visible;display:block;margin:3px 0;cursor:pointer;width:100%}ul.flex.overflow.open>li:first-of-type{margin:2px}ul.flex.overflow.open>li a:not(.active){padding-right:0}ul.flex.overflow li{visibility:hidden;display:none}ul.flex.overflow li.selected{visibility:visible;color:#666;padding:0;border-radius:20px;text-decoration:none;display:inline-block;background:#fff;white-space:nowrap;width:auto;}ul.flex.overflow li a{text-align:left;cursor:pointer}ul.flex li a.active{color:red}ul.flex.overflow li a.active{text-align:center;background:0 0}ul.flex.overflow .more-btn{float:right;color:#666;font-weight:700;position:absolute;top:8px;right:10px;cursor:pointer;z-index:100}ul.flex.overflow>li{clear:both;float:none}</style>');
    function adjustFlexMenu() {
        if ($(window).width() !== windowWidth ) {
            $(flexObjects).each(function () {
                $(this).flexMenu({
                    'undo' : true
                }).flexMenu(this.options);
            });
            windowWidth = $(window).width();
            windowHeight = $(window).height();
        }
    }
    $(window).resize(function () {
        adjustFlexMenu();
    });
    $.fn.flexMenu = function (options) {
        var checkFlexObject,
            s = $.extend({
                'threshold' : 2, // example if threshold is 5 and there are only 5 list items the dropdown won't trigger.
                'undo' : false,
                'linkText' : '&#9776; MORE',
                'linkTitle' : 'Open/Close Menu',
                'shouldApply' : function() { return true; }
            }, options);
        this.options = s;
        checkFlexObject = $.inArray(this, flexObjects);
        if (checkFlexObject >= 0) {
            flexObjects.splice(checkFlexObject, 1);
        } else {
            flexObjects.push(this);
        }
        return this.each(function () {
            var $this = $(this),
                $items = $this.find('li'),
                $firstItem = $items.first(),
                $lastItem = $items.last(),
                numItems = $this.find('li').length,
                firstItemTop = Math.floor($firstItem.offset().top),
                firstItemHeight = Math.floor($firstItem.outerHeight(true)),
                $btn;
            function needsMenu($itemOfInterest) {
                return (Math.ceil($itemOfInterest.offset().top) >= (firstItemTop + firstItemHeight)) ? true : false;
            }
            if ( needsMenu($lastItem) && numItems > s.threshold && !s.undo && (s.shouldApply()) )  {
                $this.append('<span class="more-btn" title="' + s.linkTitle + '">' + s.linkText + '</span>');
                $this.addClass('overflow');
                $btn = $this.find('span.more-btn');
                $btn.click(function (e){
                    e.preventDefault();
                    $this.toggleClass('open');
                });
            } else if ( s.undo ) {
                $this.find('span.more-btn').remove();
                $this.removeClass('overflow');
            }
        });
    };
}));
