function header(){
  var html = '';
  html += '<div class="header">';
  html += '<div class="header_title"></div>';
  html += '<div class="header_menu_bar">';
  html += '<ul>';
  html += '</li>';
  html += '<li class="header_menu_list">';
  html += '<a class="header_menu_button" href="http://comecomecatfood.blog.fc2.com">Blog</a>';
  html += '</li>';
  html += '<li class="header_menu_list">';
  html += '<a class="header_menu_button" href="http://form1.fc2.com/form/?id=946206">Mail</a>';
  html += '</li>';
  html += '<li class="header_menu_list">';
  html += '<a class="header_menu_button" href="http://twitter.com/wakoyou">Twitter</a>';
  html += '</li>';
  html += '<li class="header_menu_list" id="gallery_list">';
  html += '<a class="header_menu_button" id="gallery_button" href="/">Gallery</a>';
  html += '</li>';
  html += '<li class="header_menu_list" id="review_list">';
  html += '<a class="header_menu_button"id="review_button" href="/review">Review</a>';
  html += '</li>';
  html += '</ul>';
  html += '</div>';
  html += '</div>';
  document.write(html);
}

function footer(){
  var html = '<div class="footer"><p>Copyright ©Come Come Cat Food All Rights Reserved</p></div>'
  document.write(html);
}
