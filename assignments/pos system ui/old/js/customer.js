$('#cusSave').click(function() {
    let cusID = $('#customer-id').val();
    let fName = $('#firstName').val();
    let lName = $('#lastName').val();
    let addres = $('#Address').val();
    let contact = $('#contact').val();

    // console.log(cusID+fName+lName+addres+contact);

    $('#cusTable').append('<tr><th>'+cusID+'</th>' + '<td>'+fName+'</td>' + '<td>'+lName+'</td>' + '<td>'+addres+'</td>' + '<td>'+contact+'</tr></td>');



});


$('tbody > tr').click(function () {
    var id = $($(this).children().get(0)).text();
    var fname = $($(this).children().get(1)).text();
    var lname = $($(this).children().get(2)).text();
    var addres = $($(this).children().get(3)).text();
    var contact = $($(this).children().get(4)).text();

    console.log(id,fname,lname,addres,contact);

    $('#customer-id').text('ff');
    $('#firstName').text(fname);
    $('#lastName').text(lname);
    $('#Address').text(addres);
    $('#contact').text(contact);
});