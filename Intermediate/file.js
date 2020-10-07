var dataProduct = JSON.parse(data);
console.table(dataProduct);



$(document).ready(function()
{
    $('img[src*=notebook]').parent().parent().parent().parent().css('background-color','red');
    $('img[src*=tablet]').parent().parent().parent().parent().css('background-color','blue');
    $('img[src*=phone]').parent().parent().parent().parent().css('background-color','green');

})