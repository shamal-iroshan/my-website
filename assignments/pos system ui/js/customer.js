$('#cusSave').click(function () {
    let cusID = $('#customer-id').val();
    let fName = $('#firstName').val();
    let lName = $('#lastName').val();
    let addres = $('#Address').val();
    let contact = $('#contact').val();

    // console.log(cusID+fName+lName+addres+contact);

    if (cusID == "" || fName == "" || lName == "" || addres == "" || contact == "") {
        alert('please fill all the fields..!');
    } else {
        $('#cusTable').append('<tr><th>' + cusID + '</th>' + '<td>' + fName + '</td>' + '<td>' + lName + '</td>' + '<td>' + addres + '</td>' + '<td>' + contact + '</td></tr>');
    }

});


$('#cusTableBody').on('click', 'tr', function () {
    $('#cusTableBody > tr').click(function () {

        // event.stopImmediatePropagation();

        var id = $($(this).children().get(0)).text();
        var fname = $($(this).children().get(1)).text();
        var lname = $($(this).children().get(2)).text();
        var addres = $($(this).children().get(3)).text();
        var contact = $($(this).children().get(4)).text();

        // console.log(id + fname + lname + addres + contact);

        $('#customer-id:text').val(id);
        $('#firstName:text').val(fname);
        $('#lastName:text').val(lname);
        $('#Address:text').val(addres);
        $('#contact:text').val(contact);
    });
});

$('#cusTableBody > tr').click(function () {

    // event.stopImmediatePropagation();

    var id = $($(this).children().get(0)).text();
    var fname = $($(this).children().get(1)).text();
    var lname = $($(this).children().get(2)).text();
    var addres = $($(this).children().get(3)).text();
    var contact = $($(this).children().get(4)).text();

    // console.log(id + fname + lname + addres + contact);

    $('#customer-id:text').val(id);
    $('#firstName:text').val(fname);
    $('#lastName:text').val(lname);
    $('#Address:text').val(addres);
    $('#contact:text').val(contact);
});



$('#cusClear').click(function () {
    $('#customer-id:text').val("");
    $('#firstName:text').val("");
    $('#lastName:text').val("");
    $('#Address:text').val("");
    $('#contact:text').val("");
});