var clearCacheName = 'click-clear';
var query = window.location.search.substring(1);
var vars = query.split('&');
var sanitized = [];
for (var i = 0; i < vars.length; i++) {
	var pair = vars[i].split('=');
	if (pair[0] != clearCacheName) {
		if(pair[1] != undefined || pair[1] != null) {
			sanitized.push(pair[0]+'='+pair[1]);   
		} else {
			sanitized.push(pair[0]);
		}
	}
}

if(sanitized.length > 0) {
	 query = sanitized.join('&');   
} else {
	query = '';   
}
	
var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
var string_length = 16;
var randomstring = '';
for (var i=0; i<string_length; i++) {
	var rnum = Math.floor(Math.random() * chars.length);
	randomstring += chars.substring(rnum,rnum+1);
}

if(query.length > 0) {
	query = '?'+query+'&'+clearCacheName+'='+randomstring;
} else {
	query = '?'+clearCacheName+'='+randomstring;
}

window.location.search = query;
