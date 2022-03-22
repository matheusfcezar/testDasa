import * as GetAPI from '../requests/api.request'
import searchByMovie from '../pages/search-by-movie-page'
import searchById from '../pages/search-by-id-page'

// @search_by_movie
Given(/^que eu quero realizar uma requisição para consultar um "([^"]*)"$/, function(filme) {
    GetAPI.GetMovie(filme, Cypress.env('token')).should((response) => {
        this.response_movie = response
    })
});

Then(/^devo validar o filme encontrado no SearchByMovie: "([^"]*)"$/, function(titulo) {
    this.id = searchByMovie.get_id(this.response_movie)
	searchByMovie.original_title(this.response_movie, titulo);
});

And(/^o id do filme encontrado no SearchByMovie: "([^"]*)"$/, function(id) {
	searchByMovie.id(this.response_movie, id);
});

And(/^o idioma do filme encontrado no SearchByMovie: "([^"]*)"$/, function(idioma) {
	searchByMovie.original_language(this.response_movie, idioma);
});

And(/^a data de estreia do filme encontrado no SearchByMovie: "([^"]*)"$/, function(estreia) {
	searchByMovie.release_date(this.response_movie, estreia);
});

// @search_by_previous_id
Given(/^que eu quero realizar uma requisição para consultar um filme pelo id do cenário anterior$/, function() {
	GetAPI.GetMovieById(this.id, Cypress.env('token')).should((response) => {
        this.response_by_id = response
    })
});

Then(/^devo validar o filme encontrado no SearchById: "([^"]*)"$/, function(titulo) {
	searchById.original_title(this.response_by_id, titulo);
});

And(/^o id do filme encontrado no SearchById: "([^"]*)"$/, function(id) {
	searchById.id(this.response_by_id, id);
});

And(/^o idioma do filme encontrado no SearchById: "([^"]*)"$/, function(idioma) {
	searchById.original_language(this.response_by_id, idioma);
});

And(/^a data de estreia do filme encontrado no SearchById: "([^"]*)"$/, function(estreia) {
	searchById.release_date(this.response_by_id, estreia);
});

// @search_by_id
Given(/^que eu quero realizar uma requisição para consultar um filme pelo "([^"]*)"$/, function(id) {
	GetAPI.GetMovieById(id, Cypress.env('token')).should((response) => {
        this.response_by_id = response
    })
});

// @invalid_token
Given(/^que eu quero realizar uma requisição para consultar um filme pelo "([^"]*)" com token invalido$/, function(id) {
	GetAPI.GetMovieById(id, 'token-invalido').should((response) => {
        this.response_by_id = response
    })
});

Then(/^devo validar a mensagem de erro "([^"]*)"$/, function(msg_erro) {
   searchById.erro(this.response_by_id, msg_erro);
});

// @validar_contrato
Then(/^devo validar contrato de resposta$/, function() {
    searchById.contrato(this.response_by_id.body)
});

