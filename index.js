/*!
 * Fast Js
 * Copyright(c) 2017 mlk1.com
 * Copyright(c) 2017 ISSAM ABBAS
 * MIT Licensed
 */

(function () {
  var redirect = function (url) {
    window.location = url;
  };
  var cl = function (data) {
    console.log(data);
  };
  var ce = function (data) {
    console.error(data);
  };
  var inArray = function (arr, data) {
    return arr.indexOf(data) > -1;
  };
})();
