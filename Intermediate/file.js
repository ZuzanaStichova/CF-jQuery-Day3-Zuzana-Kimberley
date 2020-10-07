var dataProduct = JSON.parse(data);
console.table(dataProduct);



$(document).ready(function()
{
    $('img[src*=notebook]').parents(".prod-info-main").css('background-color','red');
    $('img[src*=tablet]').parent().parent().parent().parent().css('background-color','blue');
    $('img[src*=phone]').parent().parent().parent().parent().css('background-color','green');

    for (let i = 0 ; i < dataProduct.length ; i++) {
        $('.btn-info:eq('+i+')').after(`<p id=${i}>${dataProduct[i].quantity}</p>`);
    } 

    $('.btn-danger').on('click',function()
    {
        var x = $(this).siblings('p').attr('id');
        console.log(x);
        var qtty = Number(dataProduct[x].quantity) - 1;
        console.log("input is " + dataProduct[x].quantity);
        $(`#${x}`).text(qtty);
        dataProduct[x].quantity = qtty;
        console.log("final is " + dataProduct[x].quantity);
    })
})