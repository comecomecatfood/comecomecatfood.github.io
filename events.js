(function() {
set_param = function(param) {
  param.find('items').find('item').each(set_items);

  var title_elem = document.getElementById('title');
  title_elem.innerHTML = param.find('title').attr('value');
};

set_items = function(index, element) {
  var dir = $(this).attr('dir');
  var item_element = document.createElement('div');
  item_element.className = 'item';
  var a_element = document.createElement('a');
  a_element.href = "/" + $(this).attr('dir');
  a_element.className = 'item_link';
  var img_element = document.createElement('img');
  img_element.className = 'item_img';
  img_element.src = "/" + $(this).attr('dir') + '/0.JPG';
  a_element.appendChild(img_element);
  item_element.appendChild(a_element);

  // 説明の追加
  var description_element = document.createElement('div');
  description_element.className = 'item_description';
  var name_elem = document.createElement('div')
  name_elem.className = 'item_name';
  description_element.appendChild(name_elem)
  var title_elem = document.createElement('div')
  description_element.appendChild(title_elem)
  var spec_elem = document.createElement('div')
  description_element.appendChild(spec_elem)
  var value_elem = document.createElement('div')
  description_element.appendChild(value_elem)
  item_element.appendChild(description_element);

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
        name_elem.innerHTML = $(xml).find('name').attr('value');
        var spec = '仕様:';
        for (var i = 0; i < $(xml).find('specification').length; i++) {
          if (i !== 0){
            spec = spec + '、';
          }
          spec = spec + $($(xml).find('specification')[i]).attr('value');
        }
        spec_elem.innerHTML = spec;
        title_elem.innerHTML = '作品:' + $(xml).find('title').attr('value');
        value_elem.innerHTML = '価格:' + $(xml).find('value').attr('value');
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
