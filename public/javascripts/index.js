$(function() {
    var uuid = guid();

    $.post( "register/" + uuid, {userid: uuid})
     .error(function(){
        alert('There was an error please reload the page!');
     });

    $.post( "/draw/phpazar/" )
     .done(function (data) {
        $( "#phpazarCard p" ).text(data.title);
     })
     .error(function () {
        alert('There was an error please reload the page!');
     });

     applyOnClickEvents();
});

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function applyOnClickEvents() {
    $( ".card" ).each(function( index ) {
        $( this ).off("click").click(function () {
            $.post( "play/" + $( this ).id, { cardid: $( this ).id } )
             .done(function () {
                $( this ).remove();
                $.get( "/draw/answer/1" )
                 .done(function (data) {
                    $("body").append("<div id='" + data[0].id + "' class='card'><p>" + data[0].title + "</p></div>")
                    applyOnClickEvents();
                 })
                 .error(function () {
                    alert('There was an error please reload the page!');
                 });

             })
             .error(function () {
                alert('There was an error please reload the page!');
             });
        });
    });
}