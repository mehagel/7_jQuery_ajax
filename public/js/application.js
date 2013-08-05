$(document).ready(function(){
  $('#get_color').click(function(e){
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '/color',
      dataType: 'json'
    }).done(function(data){
      $('#color_me li').eq(data.cell).css("background-color",data.color);
    });
  });
});
