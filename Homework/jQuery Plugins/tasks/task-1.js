function solve() {
    return function (selector) {

        var $element = $(selector);
        if ($element.size() === 0) {
            throw Error();
        }


        var ddList = $("<div>").attr('class', 'dropdown-list');
        var $currentDiv = $("<div>").attr('class', 'current')
            .attr('data-value', '')
            .html("Option1");
        var $optionContainer = $("<div>")
            .attr('class', 'options-container')
            .css('position', 'absolute')
            .css('display', 'none');
        var $children = $element.children('option');
        var i = 0;
        var $next = $($children[0]);
        while ($next.size() !== 0) {
            var $item = $('<div>').
                attr('class', 'dropdown-item')
                .attr('data-value', $next.attr('value'))
                .attr('data-index', i.toString())
                .html($next.html());

            $optionContainer.append($item);
            i += 1;
            $next = $next.next();
        }

        $element.css('display', 'none');

        ddList.append($element)
            .append($currentDiv)
            .append($optionContainer);
        $('body').append(ddList);
        $currentDiv.on('click', function () {
            $this = $(this);
            if ($optionContainer.css('display') === 'none') {
                $this.html('Select value');
                $optionContainer.css('display', 'block');
            } else {
                $optionContainer.css('display', 'none');
                $this.html('Option 1');
            }
        });
        $optionContainer.on('click', '.dropdown-item', function () {
            var $this = $(this);
            $currentDiv.html($this.html());
            $('select').val($this.attr('data-value'));
            $optionContainer.attr('data-value',$this.attr('data-value'));
            $optionContainer.css('display','none');
        });


    };
}

module.exports = solve;