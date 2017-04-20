var color1 = new Waypoint({
element: document.getElementById('color1'),
handler: function() {
$('meta[name=theme-color]').remove();
$('head').append( '<meta name="theme-color" content="#362143">' );
}
});

var color2 = new Waypoint({
element: document.getElementById('color2'),
handler: function() {
$('meta[name=theme-color]').remove();
$('head').append( '<meta name="theme-color" content="#DB649C">' );
}
});

var color3 = new Waypoint({
element: document.getElementById('color3'),
handler: function() {
$('meta[name=theme-color]').remove();
$('head').append( '<meta name="theme-color" content="#754792">' );
}
});

var color4 = new Waypoint({
element: document.getElementById('color4'),
handler: function() {
$('meta[name=theme-color]').remove();
$('head').append( '<meta name="theme-color" content="#FF9800">' );
}
});

var color5 = new Waypoint({
element: document.getElementById('color5'),
handler: function() {
$('meta[name=theme-color]').remove();
$('head').append( '<meta name="theme-color" content="#1976D2">' );
}
});

var color6 = new Waypoint({
element: document.getElementById('color6'),
handler: function() {
$('meta[name=theme-color]').remove();
$('head').append( '<meta name="theme-color" content="#8BC34A">' );
}
});

var color7 = new Waypoint({
element: document.getElementById('color7'),
handler: function() {
$('meta[name=theme-color]').remove();
$('head').append( '<meta name="theme-color" content="#00BCD4">' );
}
});
