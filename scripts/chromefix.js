jQuery.noConflict();
jQuery(function() {
	jQuery('div#header ul.tabs li span a').removeAttr('onfocus').removeAttr('onclick').click(function() {
		alert($(this).attr('href'));
	});
});