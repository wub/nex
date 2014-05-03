var uamodal = document.getElementById('modal-account'),
    overlay = document.getElementById('modal-overlay'),
    account = document.getElementById('account');

uamodal.addEventListener('click', function(e) { e.stopPropagation(); });
account.addEventListener('click', function( ) { overlay.hidden = false; document.body.style.overflow = 'hidden' });
overlay.addEventListener('click', function( ) { overlay.hidden = true;  document.body.style.overflow = 'auto'   });
