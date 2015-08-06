/* globals $ Handlebars */

function solve() {

    return function (selector) {

        var template = ' <table class="items-table"> <thead> <tr> <th>#</th>{{#each this.headers}} <th>{{this}}</th>{{/each}} </tr> </thead> <tbody>{{#each this.items}} <tr> <td>{{@index}}</td>{{#each this}} <td>{{this}}</td>{{/each}} </tr>{{/each}} </tbody> </table>';

        // var tmp =  Handlebars.compile(template);

        $(selector).html(template);
    };
};

module.exports = solve;