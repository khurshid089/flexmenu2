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
                'threshold' : 2,
                'cutoff' : 2,
                'undo' : false,
                'shouldApply' : function() { return true; },
            }, options);
        this.options = s;
        checkFlexObject = $.inArray(this, flexObjects);
        if (checkFlexObject >= 0) {
            flexObjects.splice(checkFlexObject, 1);
        } else {
            flexObjects.push(this);
        }
        return this.each(function (e) {
            var $this = $(this),
                $items = $this.find('li'),
                $firstItem = $items.first(),
                $lastItem = $items.last(),
                numItems = $this.find('li').length,
                firstItemTop = Math.floor($firstItem.offset().top),
                firstItemHeight = Math.floor($firstItem.outerHeight(true)),
                $btn;
            function needsMenu($itemOfInterest) {
                var result = (Math.ceil($itemOfInterest.offset().top) >= (firstItemTop + firstItemHeight)) ? true : false;
                return result;
            }
            if (needsMenu($lastItem) && numItems > s.threshold && !s.undo && $this.is(':visible') && (s.shouldApply()))  {
                $this.append('<span class="more-btn">☰ MORE</span>');
                $this.addClass('overflow');
                $btn = $this.find('span.more-btn');
                $btn.click(function (e){
                    e.preventDefault();
                    $this.toggleClass('open');

                    var $parent = $(e.target).parent('li');
                    $parent.addClass("selected");
                    $parent.siblings('li').removeClass('selected');

                });
                $items.click(function () {
                    $btn.trigger('click');
                });
            } else if (s.undo) {
                $this.find('span.more-btn').remove();
                $this.removeClass('overflow');
            }
        });
    };
}));
// example usage: $('ul').flexMenu();