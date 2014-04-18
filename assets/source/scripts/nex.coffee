# ==========================================================
#
#   NEX
#   Let's
#
#    -- Table of Contents --
#    1. Appcache
#
#

# Check if a new cache is available on page load.
appcache = window.applicationCache

window.addEventListener 'load', ->
    appcache.addEventListener 'updateready', ->
        if appcache.status == appcache.UPDATEREADY
            console.log 'New version available.'
    , false
, false
