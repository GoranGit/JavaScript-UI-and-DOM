/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

 function solve () {

  return function (element, contents) {
    var DOMelement,
        docFragment = document.createDocumentFragment();
    if(!(element&&contents))
    {
      throw  Error("missling params!");
    }
    if(typeof element === 'string') {
       DOMelement = document.getElementById(element);
    }else{
      DOMelement = element;
    }
     if(!DOMelement){
         throw  Error("No such element!");
     }
    if(!Array.isArray(contents)){
      throw  Error("content not an array!");
    }
    var l;
    for(var i=0,l = contents.length;i<l;i+=1){
      if(!(typeof contents[i] ==='string' || typeof contents[i]==='number')){
        throw  Error("Some  of contents are not of type string or number!");
      }
      else{
        var div = document.createElement('div');
        div.innerHTML = contents[i];
        docFragment.appendChild(div);
      }
    }
      DOMelement.innerHTML = '';
    DOMelement.appendChild(docFragment);

  };
};
module.exports  = solve;