core = {};

window.onload = function() {
  core.switchCompare();
}

core.switchCompare = function() {
  $('.thumbnail').on('click', function(e) {
    e.preventDefault();
    var src = e.target.src
    var caption = e.target.nextElementSibling.innerHTML

    var img = $('#original-image')[0]
    var oCaption = $('#modified')[0]

    img.src = src
    oCaption.innerHTML = caption
    var id = e.target.id

    var section = $('.' + id)[0]
    $(section).css('display', 'block')
	});
}
