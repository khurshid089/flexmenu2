(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var flexObjects = [];
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
                $this.append('<span class="more-btn">&#9776; MORE</span>');
                $this.addClass('overflow');
                $btn = $this.find('span.more-btn');
                $btn.click(function (e){
                    e.preventDefault();
                    $this.toggleClass('open');
                    console.log('open')
                });
            } else if ( s.undo ) {
                $this.find('span.more-btn').remove();
                $this.removeClass('overflow');
            }
        });
    };
}));