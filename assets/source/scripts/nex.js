$(function() {

    var menu = (function() {
        var
            $list = $('#menu > ul > li'),
            $items = $list.children('span'),
            current = -1;

        function init() {
            $items.on('click', open);
            $list.on('click', function(event) {
                event.stopPropagation();
            });
        }

        function open(event) {
            if (current !== -1)
                $list.eq(current).removeClass('menu-open');

            var
                $item = $(event.currentTarget).parent('li'),
                idx = $item.index();

            if (current === idx) {
                $item.removeClass('menu-open');
                current = -1;
            }
            else {
                $item.addClass('menu-open');
                current = idx;
                $('body').off('click').on('click', close);
            }

            return false;
        }

        function close() {
            $list.eq(current).removeClass('menu-open');
            current = -1;
        }

        return { init : init };
    })();

    menu.init();
});
