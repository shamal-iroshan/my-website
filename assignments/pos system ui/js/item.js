//      item-id
//      Name
//      qty
//      price
//      itmSave
//      itmClear
//      itmTable
//      itmtblBody


$('#itmClear').click(function () {
    $('#item-id:text').val("");
    $('#Name:text').val("");
    $('#qty:text').val("");
    $('#price:text').val("");
});

$('#itmSave').click(function () {
    let itmID = $('#item-id').val();
    let name = $('#Name').val();
    let qty = $('#qty').val();
    let price = $('#price').val();

    price += '.00';

    if (itmID == "" || name == "" || qty == "" || price == "") {
        alert('please fill all the fields..!');
    } else {
        $('#itmTable').append('<tr><th>' + itmID + '</th>' + '<td>' + name + '</td>' + '<td>' + price + '</td>' + '<td>' + qty + '</td></tr>');
    }
});

$('#itmtblBody').on('click', 'tr', function () {
    $('#itmtblBody > tr').click(function () {

        // event.stopImmediatePropagation();

        var id = $($(this).children().get(0)).text();
        var name = $($(this).children().get(1)).text();
        var qty = $($(this).children().get(3)).text();
        var price = $($(this).children().get(2)).text();

        // console.log(id + fname + lname + addres + contact);

        $('#item-id:text').val(id);
        $('#Name:text').val(name);
        $('#qty:text').val(qty);
        $('#price:text').val(price);
    });
});

$('#itmtblBody > tr').click(function () {

    // event.stopImmediatePropagation();

    var id = $($(this).children().get(0)).text();
    var name = $($(this).children().get(1)).text();
    var qty = $($(this).children().get(3)).text();
    var price = $($(this).children().get(2)).text();

    // console.log(id + fname + lname + addres + contact);

    $('#item-id:text').val(id);
    $('#Name:text').val(name);
    $('#qty:text').val(qty);
    $('#price:text').val(price);
});