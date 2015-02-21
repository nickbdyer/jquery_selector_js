var $ = function (selector) {

  var selectorArray = selector.split(/(?=\.)|(?=#)/);
  var elements = [];
  var arrays = [];
  var tags, classes, ids;

  for (var i = 0; i < selectorArray.length; i++) {
    if (selectorArray[i].charAt(0) === "#") {
      ids = [document.getElementById (selectorArray[i].slice(1))];
    } else if (selectorArray[i].charAt(0) === ".") {
      classes = [].slice.call(document.getElementsByClassName (selectorArray[i].slice(1)));
    } else {
      tags = [].slice.call(document.getElementsByTagName (selectorArray[i]));
    }
  };

  [tags, classes, ids].forEach(function(array) {
    if (array && array.length > 0) 
      arrays.push(array);
  });

  elements = arrays.shift().filter(function(v) {
    return arrays.every(function(a) {
      return a.indexOf(v) !== -1;
    });
  });

  return elements;
}
