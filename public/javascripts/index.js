$(function() {
    $( ".card" ).each(function( index ) {
        $( this ).click(function () {
            console.log('test: ' + $( this ).text());
        });
        // console.log( index + ": " + $( this ).text() );
    });
});