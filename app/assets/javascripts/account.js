var $overlay = $('#modal-overlay');
var $modal   = $('#modal-account');
var $account = $('#account');

$account.on('click', initAccountModal);
$modal.on('click', function(e) { e.stopPropagation(); });

function initAccountModal() {
	$overlay.removeAttr('hidden');
	$overlay.on('click', closeAccountModal);
}

function closeAccountModal() {
	$overlay.attr('hidden', true);
}
