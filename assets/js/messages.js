jQuery(document).ready(function($) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            //document.getElementById("amthucModalMessage").innerHTML = myArr[0]["title"];
            $('#amthucModalMessage .modal-body').innerHTML = 'test SELA';
        }
    };
    //xmlhttp.open("GET", 'assets/messages.json', true);
    //xmlhttp.send();
});