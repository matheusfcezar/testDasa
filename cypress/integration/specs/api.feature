# language: pt

@automation_challenge
Funcionalidade: Validar API de busca de filmes
    Eu como usuário
    Quero buscar filmes 
    
@search_by_movie
Esquema do Cenário: Consultar filme no serviço Search Movie
    Dado que eu quero realizar uma requisição para consultar um "<filme>"
    Então devo validar o filme encontrado no SearchByMovie: "<filme>"
    E o id do filme encontrado no SearchByMovie: "<id>"
    E o idioma do filme encontrado no SearchByMovie: "<idioma>"
    E a data de estreia do filme encontrado no SearchByMovie: "<estreia>"
    Exemplos:
        | filme                 | id      | idioma | estreia    |
        | O Auto da Compadecida | 40096   | pt     | 2000-09-15 |
        | Avengers: Endgame     | 299534  | en     | 2019-04-24 |

@search_by_previous_id
Esquema do Cenário: Consultar filme no serviço Search Movie pelo ID do cenário anterior
    Dado que eu quero realizar uma requisição para consultar um filme pelo id do cenário anterior
    Então devo validar o filme encontrado no SearchById: "<filme>"
    E o id do filme encontrado no SearchById: "<id>"
    E o idioma do filme encontrado no SearchById: "<idioma>"
    E a data de estreia do filme encontrado no SearchById: "<estreia>"
    Exemplos:
        | filme             | id      | idioma | estreia    |
        | Avengers: Endgame | 299534  | en     | 2019-04-24 |

@search_by_id
Esquema do Cenário: Consultar filme no serviço Search Movie pelo ID 
    Dado que eu quero realizar uma requisição para consultar um filme pelo "<id>"
    Então devo validar o filme encontrado no SearchById: "<filme>"
    E o id do filme encontrado no SearchById: "<id>"
    E o idioma do filme encontrado no SearchById: "<idioma>"
    E a data de estreia do filme encontrado no SearchById: "<estreia>"
    Exemplos:
        | filme             | id      | idioma | estreia    |
        | Moulin Rouge!     | 824     | en     | 2001-05-24 |
        | Y tu mamá también | 1391    | es     | 2001-06-08 |
    

@invalid_token
Esquema do Cenário: Consultar filme no serviço Search Movie pelo ID com token invalido
    Dado que eu quero realizar uma requisição para consultar um filme pelo "<id>" com token invalido
    Então devo validar a mensagem de erro "Invalid API key: You must be granted a valid key."
    Exemplos:
        | id  | 
        | 275 |

@validar_contrato
Esquema do Cenário: Validar contrato no serviço Search Movie pelo ID
    Dado que eu quero realizar uma requisição para consultar um filme pelo "<id>"
    Então devo validar contrato de resposta
    Exemplos:
        | id  |
        | 2   |
