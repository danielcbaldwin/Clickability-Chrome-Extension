var queryName = 'debug';
var query = window.location.search.substring(1);
var vars = query.split('&');
var sanitized = [];
for (var i = 0; i < vars.length; i++) {
	var pair = vars[i].split('=');
	if (pair[0] != queryName) {
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

if(query.length > 0) {
	query = '?'+query+'&'+queryName+'=full';
} else {
	query = '?'+queryName+'=full';
}

window.location.search = query;
