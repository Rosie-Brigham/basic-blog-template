core = {};

window.onload = function() {
  core.switchCompare();
}

core.switchCompare = function() {
  $('.thumbnail').on('click', function(e) {
    e.preventDefault();
    console.log('fired')
    if ($('.onShow').length > 0 ) {
      $('.onShow').removeClass('onShow')
    }

    var src = $(this).find('img')[0].src
    var caption = $(this).find('figcaption')[0].innerHTML

    var img = $('#original-image')[0]
    var oCaption = $('#modified')[0]

    img.src = src
    oCaption.innerHTML = caption
    var id = $(this).parent()[0].id

    var section = $('.' + id)[0]
    $(section).toggleClass('onShow')
	});
}
