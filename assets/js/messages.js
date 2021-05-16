jQuery(document).ready(function($) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            if (typeof data[0] !== 'undefined') {
                if ($.cookie('modal_shown') == null) {
                    $('#amthucModalMessage .modal-title').text(data[0]["title"]);
                    $('#amthucModalMessage .modal-body').text(data[0]["body"]);
                    $.cookie('modal_shown', 'yes', {expires: 1, path: '/'});
                    $('#amthucModalMessage').modal('show');
                }
            }
        }
    };
    xmlhttp.open("GET", '/assets/messages.json', true);
    xmlhttp.send();
});