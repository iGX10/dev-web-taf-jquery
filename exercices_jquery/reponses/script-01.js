//  chemin relatif : reponses/script-01.js
// 

// ---------------------- question 1 ---------------------- 

// je selection tous les élément div dans le div parent identifié avec "ce"
// puis, d'après la liste retourner, je selection le premier objet avec la fonction "eq()"
// et ensuite, je modifie l'attribut "color" de cet objet avec la fonction "css()"

$('#ce div').eq(0).css('color', 'red')

// ---------------------- question 2 ---------------------- 

// après avoir selectionner la première balise "div" dans la balise div parent
// je fait une copie de l'objet avec la fonction "clone()"

var div1 = $('#ce div').eq(0).clone()

// puis, j'ajoute la copie à la balise parent avec la fonction "append()" 

$('#ce').append(div1)

// ---------------------- question 3 ---------------------- 

// après que je selectionne la dernière balise div de la balise parent

var last_div = $('#ce div').eq(-1)

// je la déplace au début de la balise parent avec la fonction "prepend()"  

$('#ce').prepend(last_div)

// ---------------------- question 4 ---------------------- 

// je crée un contenu html dont une balise div identifié par "count"

var new_div = $('<div id="count"></div>')

// puis, j'ajoute cette balise à la fin de la balise parent

$('#ce').append(new_div)

// ensuite, je modifie le contenu text de cette balise 
// en mettant la taille de la liste des balises "div" qui se trouve
// dans la balise parent.

new_div.text("div count : " + $('#ce div').length)

// ---------------------- question 5 ---------------------- 

// je selectionne l'ensemble des balises "div" dans la balise parent

var divs = $('#ce div')

// puis, je parcoure la liste retourner

divs.each(function(i, e) {

	// pour chaque élément de cette liste, je change son contenu en
	// un indice + le contenu qu'il avait déjâ
	
	var div_content = i + " : " + $(e).text()
	$(e).text(div_content) 
})

