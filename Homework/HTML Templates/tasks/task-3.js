/* globals Handlebars $ */

function solve(){
  return function(){
    $.fn.listview = function(data){
      var $templateId = this.attr('data-template');
      var $template = $('#'+$templateId).html();
      var tmp = handlebars.compile($template);

      for(var i= 0,l=data.length;i<l;i+=1){
        this.append(tmp(data[i]));
      }
      return this;
    };
  };
}

module.exports = solve;