!function(a){function b(a){function b(a,b){var e=b.length;d.push(function(){return"seq"==a?b[0].apply(this,c(arguments)):a+"("+(1==e&&"function"==typeof b[0]?b[0].apply(this,c(arguments)):b)+")"})}function c(a){return Array.prototype.slice.call(a)}var d=[];void 0!==a&&d.push(a);var e=function(){var a=this,b=c(arguments);return d.map(function(c){return c.apply(a,b)}).join(" ")};return["translate","rotate","scale","matrix","skewX","skewY","seq"].forEach(function(a){e[a]=function(){return b(a,c(arguments)),e}}),e}"undefined"!=typeof d3&&d3.svg&&(d3.svg.transform=b),"undefined"!=typeof module&&module.exports?module.exports=b:a.d3Transform=b}(this);