if (jQuery === undefined && grp !== undefined)
    var jQuery = grp.jQuery;

var django = django || {};
django.jQuery = jQuery;

var yl = yl || {};
yl.jQuery = django.jQuery;

// this file also prevents django.jQuery.noConflict
// there's got to be a better way ...
