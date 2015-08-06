/* globals $ */

/*
 Create a function that takes a selector and:
 * Finds all elements with class `button` or `content` within the provided element
 * Change the content of all `.button` elements with "hide"
 * When a `.button` is clicked:
 * Find the topmost `.content` element, that is before another `.button` and:
 * If the `.content` is visible:
 * Hide the `.content`
 * Change the content of the `.button` to "show"
 * If the `.content` is hidden:
 * Show the `.content`
 * Change the content of the `.button` to "hide"
 * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
 * Throws if:
 * The provided ID is not a **jQuery object** or a `string`

 */
function solve() {
    return function (selector) {
        if (selector === undefined) {
            throw  Error();
        }
        if((typeof selector !== 'string')){
            throw Error;
        }
        var $element = $(selector);

        if ($element.size() !== 0) {
            var $elementsWithClassButton = $element.find(".button").html('hide');

            var $lastBtn = $elementsWithClassButton.last();
            $element.on('click', '.button', function () {
                $this = $(this);
                var $nextElement = $this.next();
                if (!($this.is($lastBtn))) {
                    var $content;
                    while ($nextElement.size() !== 0) {
                        if ($nextElement.hasClass('button')) {
                            break;
                        }
                        if ($nextElement.hasClass('content')) {
                            $content = $nextElement;
                            break;
                        }
                        $nextElement = $nextElement.next();
                    }
                    if ($content) {
                        if ($content.css('display') === 'none') {
                            $content.css('display', '');
                            $this.html('hide');
                        } else {
                            $content.css('display', 'none');
                            $this.html('show');
                        }
                    }
                }


            })
        }else{
            throw Error();
        }

    };
};

module.exports = solve;