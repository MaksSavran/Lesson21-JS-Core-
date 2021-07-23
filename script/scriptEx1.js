$(document).ready(function () {
    $('#greenBlock').slideDown(60000, () => {
        $('h1').text('1');
        $('#greenBlock').slideUp(60000, () => {
            $('h1').text('0');
        });
    });
});
