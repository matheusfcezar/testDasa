class SearchByMovie {
    
    get_id (response) {
        return response.body.results[0].id.toString()
    }

    status_code(response) {
        expect(response.status.toString()).to.eq("200");
    }

    original_title (response, titulo) {
        expect(response.body.results[0].original_title.toString()).to.eq(titulo);
    }
    
    id (response, id) {
        expect(response.body.results[0].id.toString()).to.eq(id);
    }

    
    original_language (response, idioma) {
        expect(response.body.results[0].original_language.toString()).to.eq(idioma);
    }

    release_date (response, estreia) {
        expect(response.body.results[0].release_date.toString()).to.eq(estreia);
    }
  
}

export default new SearchByMovie
