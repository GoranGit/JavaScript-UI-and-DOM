/* globals $ */

/* 

 Create a function that takes an id or DOM element and:


 */

function solve() {
    return function (selector) {

        var element;
        if (typeof selector === 'string') {
            element = document.getElementById(selector);
        } else   if (selector instanceof HTMLElement) {
            element = selector;
        } else {
            throw Error();
        }
        if (!element) {
            throw  Error();
        }

        var childNodes = element.childNodes;

        for (var i = 0, l = childNodes.length; i < l; i += 1) {
            if (childNodes[i].className === 'button') {
                childNodes[i].innerHTML = 'hide';
            }
        }
        var collection = element.getElementsByClassName('button');
        var lastBtn = collection[collection.length - 1];
        element.addEventListener('click' ,function (ev) {
            var btn = ev.target;
            var next = ev.target.nextElementSibling;
            var content;

            while (next) {
                if (next.className === 'button') {
                    break;
                }
                if (next.className === 'content') {
                    content = next;
                    break;
                }
                next = next.nextElementSibling;

            }

            if (ev.target !== lastBtn) {
                if (content!==undefined) {
                    if (content.style.display === 'none') {
                        content.style.display = '';
                        btn.innerHTML = 'hide';
                    } else {
                        content.style.display = 'none';
                        btn.innerHTML = 'show';
                    }
                }
            }
        },false);


    };
};

module.exports = solve;