//  chemin relatif : reponses/script-02.js

// dans un premier temp, je selectionne le premier élément dont la classe est "box"
// j'ajoute à cet élément un event handler afin de
$('#ce .box').eq(0).on('click', function(evt) {
	$('#ce .box').each(function(i, e) {
		if(i!=0) $(e).toggle(1000+i*200)
	})
})






