core = {};

window.onload = function() {
  core.switchCompare();
}

core.switchCompare = function() {
  $('.thumbnail').on('click', function(e) {
    e.preventDefault();
    var src = e.target.src

    var img = $('#original-image')[0]
    img.src = src
	});
}
