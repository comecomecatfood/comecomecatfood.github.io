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

  set_notice = function(ev) {
    var dashboard_element = document.getElementById('dashboard');
    if($(this).find('notice').attr('enable') === 'true') {
      var notice_element = document.createElement('a');
      notice_element.textContent = $(this).attr('title') + $(this).find('notice').attr('title');
      notice_element.href = '/events/' + $(this).find('notice').attr('dir');
      dashboard_element.appendChild(notice_element);
    }
  };

  $(function(){
    $.ajax({
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

    $.ajax({
      async: false,
      url: "./notice.xml",
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
          var ev = $(xml).find('events').toArray();
          $(ev).each(set_notice);
        };
      })(this)
    });

  })
}).call(this);
