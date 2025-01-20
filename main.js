(function() {
set_character = function(character) {
  var dir = $(this).find('dir').attr('value');
  var name = $(this).find('name').attr('value');
  var figure_element = document.createElement('figure');
  var a_element = document.createElement('a');
  a_element.href = dir;
  figure_element.appendChild(a_element);
  var img_element = document.createElement('img');
  img_element.src = dir + '/0.JPG'
  var figcaption_element = document.createElement('figcaption');
  var h3_element = document.createElement('h3');
  h3_element.innerHTML = name;
  h3_element.className = 'character_name';
  figcaption_element.appendChild(h3_element);
  a_element.appendChild(img_element);
  a_element.appendChild(figcaption_element);
  var main_element = document.getElementById('main');
  main_element.appendChild(figure_element);
};

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
        var sc = $(xml).find('selfmade_character').toArray().reverse();
        $(sc).each(set_character);
      };
    })(this)
  });
})
}).call(this);
