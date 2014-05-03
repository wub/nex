'use strict';

var meta = document.getElementsByTagName('meta'),
		meta_length = meta.length,
		csrf;

for (var i = 0; i < meta_length; i++) {
	if (meta[i].getAttribute('name') == 'csrf-token') {
	 csrf = meta[i].getAttribute('content');
	}
}

var r = new Resumable({
	target: '/chunk',
	headers: { 'X-CSRF-Token': csrf },
	prioritizeFirstAndLastChunk: true, // so we can abandon early
	maxChunkRetries: 50,
	minFileSize: 1,
});

// Unsupported; fallback
if (! r.support) location.href = '/upload'
else console.log(r);

r.assignBrowse(document.getElementById('browseButton'));
r.assignDrop(document.getElementById('dropTarget'));

r.on('fileAdded', function(file, event) {
	console.log(file);
	r.upload();
});

r.on('fileSuccess', function(file, message) {
	console.log(message);
});

r.on('fileError', function(file, message) {
	console.log(file, message);
	console.log('DOOM');
});
