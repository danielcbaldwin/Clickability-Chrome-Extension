var queryName = 'showHelp';
var query = window.location.search.substring(1);
var vars = query.split('&');
var sanitized = [];
var addParam = true;
for (var i = 0; i < vars.length; i++) {
	var pair = vars[i].split('=');
	if (pair[0] != queryName) {
		if(pair[1] != undefined || pair[1] != null) {
			sanitized.push(pair[0]+'='+pair[1]);   
		} else {
			sanitized.push(pair[0]);
		}
	} else {
		addParam = false;
	}
}

if(sanitized.length > 0) {
	 query = sanitized.join('&');   
} else {
	query = '';   
}

if(query.length > 0) {
	if(addParam == true) {
		query = '?'+query+'&'+queryName+'=y';
	} else {
		query = '?'+query;
	}
} else {
	if(addParam == true) {
		query = '?'+queryName+'=y';
	} else {
		query = '';
	}
}

window.location.search = query;
