/// <reference types="cypress" />

function GetMovie(movie, token) { 
    return cy.request({
        method: 'GET',
        url: '/3/search/movie',
        qs: { query: movie },
        failOnStatusCode: false,
        auth: {
            'bearer': token
            // 'bearer': true_false_token? Cypress.env('token'): 'token_invalid'
          }
    })
}

function GetMovieById(id, token) { 
    return cy.request({
        method: 'GET',
        url: `/3/movie/${id}`,
        failOnStatusCode: false,
        auth: {
            'bearer': token
            // 'bearer': true_false_token? Cypress.env('token'): 'token_invalid'
          }
    })
}

export { GetMovie, GetMovieById };