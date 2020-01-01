$(document).on('hidden.bs.modal', "", function () {
    var form = $(this).find('form');
    form[0].reset();
});

$(document).on('show.bs.modal', "", function (e) {
    var userId = $(e.relatedTarget).data('user-id');
    var cols = $('.userfield' + userId);

    $('#id' + userId).val($(cols[0]).text());
    $('#ssoId' + userId).val($(cols[2]).text());
    $('#password' + userId).val($(cols[3]).text());
    $('#email' + userId).val($(cols[4]).text());

    $(' .THIS_ROLE_IS_ENABLED').prop('checked', true);
});


$(function () {

    console.log("!!!! js is logged")

    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".nav-link").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            // $(this).closest('li').addClass('active');
            $(this).addClass('active');
            console.log("set active to " + this);

        }
    });
});