var $ = function (selector) {

  var selectorArray = selector.split(/(?=\.)|(?=#)/);
  var elements = [];
  var arrays = [];
  var tags, classes, ids;

  // Put HTML elements into sets based on type of selector
  for (var i = 0; i < selectorArray.length; i++) {
    if (selectorArray[i].charAt(0) === "#") {
      ids = [document.getElementById (selectorArray[i].slice(1))];
    } else if (selectorArray[i].charAt(0) === ".") {
      classes = [].slice.call(document.getElementsByClassName (selectorArray[i].slice(1)));
    } else {
      tags = [].slice.call(document.getElementsByTagName (selectorArray[i]));
    }
  };

  // Choose sets containing HTMl elements
  [tags, classes, ids].forEach(function(array) {
    if (array && array.length > 0) 
      arrays.push(array);
  });

  // Find Sets Intersection
  elements = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
      return a.indexOf(v) !== -1;
    });
  });

  return elements;
}
