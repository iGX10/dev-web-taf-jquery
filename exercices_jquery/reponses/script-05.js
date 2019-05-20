//  Chemin relatif : reponses/script-05.js

var sum = 0;

// question 1

var rows = $('#ce table tbody tr').has('td').not(':last')


rows.each(function(i, tr_e) {
    var prix = parseInt( $(tr_e).children('.r').eq(0).text() )
    var quantite = parseInt( $(tr_e).children('.r').eq(1).text() )
    $(tr_e).children('.r').eq(-1).text(prix*quantite)
    
    sum += parseInt($(tr_e).children('.r').eq(-1).text())
})

// question 2

var last_row = $('#ce table tbody tr').last().children('.r').eq(1)

last_row.text(sum)







