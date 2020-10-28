/*Se crean variables a utilizar en el problema*/
var frase = prompt("Escriba una palabra o frase. El programa le dirá si es palíndromo o no.");

/*Comparamos frase*/
function palindromo(frase){
	/*
	*toLowerCase devuelve los valores de la cadena en minúsculas
	*replace devuelve una nueva cadena con todas las coincidencias
	*/
	frase = frase.toLowerCase().replace(/\s/g,"");

	/*
	*split para hacer la frase a array
	*reverse para invertir los elementos del array
	*toString devuelve la cadena
	*/
	fraseReves = frase.split("").reverse().toString();

	/*Estructura for*/
	for (var i = 0; i<((fraseReves.length) - 1); i++) {
		fraseReves=fraseReves.replace(",","");
	};
	/*Comparación de ambas palabras/frases*/
	if (frase==fraseReves) {
		alert("Es palíndromo");
	}else{
		alert("No es palíndromo");
	}
}
/*Se manda a llamar la función*/
palindromo(frase);