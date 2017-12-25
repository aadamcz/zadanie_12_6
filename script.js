var url = "https://restcountries.eu/rest/v2/name/{name}";
var countriesList = $("#countries");

$("#search").click(searchCountries);

function searchCountries() {
	var countryName = $("#country-name").val();

	if (!countryName.length) countryName = "Poland";

	$.ajax ({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp){
	countriesList.empty();
<<<<<<< HEAD
	resp.forEach(function(item){
		$('<li>').text(item.name).appendTo(countriesList);
	})
}
=======
}
>>>>>>> dd9238137d1ddafcb62b22c27c686f33a287b654
