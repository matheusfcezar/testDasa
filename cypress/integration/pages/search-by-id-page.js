class SearchById {
    
    get_id (response) {
        return response.body.id.toString()
    }

    status_code(response) {
        expect(response.status.toString()).to.eq("200");
    }

    original_title (response, titulo) {
        expect(response.body.original_title.toString()).to.eq(titulo);
    }

    id (response, id) {
        expect(response.body.id.toString()).to.eq(id);
    }

    original_language (response, idioma) {
        expect(response.body.original_language.toString()).to.eq(idioma);
    }

    release_date (response, estreia) {
        expect(response.body.release_date.toString()).to.eq(estreia);
    }

    erro (response, msg_erro) {
        expect(response.body.status_message.toString()).to.eq(msg_erro);
    }

    contrato(response) {
        cy.fixture("ariel_by_id").then(payload => {
            expect(response).to.deep.equal(payload)
        })
    }
}

export default new SearchById