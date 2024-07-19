(function() {
set_param = function(param) {
  var number_of_picture = param.find('number_of_picture').attr('value');
  var thumbnail_list_element = document.getElementById('thumbnail-list');
  for (var i = 1; i <= number_of_picture - 1; i++){
    var a_element = document.createElement('a');
    a_element.href = i + '.JPG';
    a_element.dataset.lightbox = 'image-1';
    var img_element = document.createElement('img');
    img_element.className = 'thumbnail';
    img_element.src = i + '.JPG';
    a_element.appendChild(img_element);
    thumbnail_list_element.appendChild(a_element);
  }

  var name = param.find('name').attr('value');
  var name_elemant = document.getElementById('name_jp');
  name_elemant.innerHTML = name;

  var name_en = param.find('name_en').attr('value');
  var name_en_elemant = document.getElementById('name_en');
  name_en_elemant.innerHTML = name_en;

  var title = param.find('title').attr('value');
  var title_element = document.getElementById('title');
  title_element.innerHTML = title;

  param.find('events').find('event').each(set_event);

  param.find('specifications').find('specification').each(set_specification);

  var value = param.find('value').attr('value');
  var value_element = document.getElementById('value');
  value_element.innerHTML = value;
};

var event_list_element = document.getElementById('event_list');
set_event = function(index, element) {
  var value = $(this).attr('value');
  var p_element = document.createElement('p');
  p_element.innerHTML = value;
  event_list_element.appendChild(p_element);
}

var specification_list_element = document.getElementById('specification_list');
set_specification = function(index, element) {
  var value = $(this).attr('value');
  var p_element = document.createElement('p');
  p_element.innerHTML = value;
  specification_list_element.appendChild(p_element);
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
