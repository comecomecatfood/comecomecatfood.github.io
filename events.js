(function() {
set_param = function(param) {
  param.find('items').find('item').each(set_items);
};

set_items = function(index, element) {
  var dir = $(this).attr('dir');
  var item_element = document.createElement('div');
  item_element.className = 'item';
  var a_element = document.createElement('a');
  a_element.href = "/" + $(this).attr('dir');
  var img_element = document.createElement('img');
  img_element.className = 'item_img';
  img_element.src = "/" + $(this).attr('dir') + '/0.JPG';
  a_element.appendChild(img_element);
  item_element.appendChild(a_element);
  var items_list_element = document.getElementById('items');
  items_list_element.appendChild(item_element);
  $.ajax({
    async: false,
    url: "/" + $(this).attr('dir') + '/data.xml',
    type: "GET",
    dataType: "xml",
    timeout: 1000,
    error: (function(_this) {
      return function() {
        return console.log("xml error");
      };
    })(this),
    success: (function(_this) {
      return function(xml) {
        console.log(xml);
      };
    })(this)
  });

}


$(function(){
  return $.ajax({
    async: false,
    url: "./data.xml",
    type: "GET",
    dataType: "xml",
    timeout: 1000,
    error: (function(_this) {
      return function() {
        return console.log("xml error");
      };
    })(this),
    success: (function(_this) {
      return function(xml) {
        set_param($(xml).find('data'));
      };
    })(this)
  });
})
}).call(this);
