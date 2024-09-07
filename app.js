//Uma função para pesquisar os dados
function pesquisar(){
//Obtém a seção HTML onde os resultados serão exibidos
    let sectionn = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

//se campoPesquisa for uma string sem nada :
// 2 FORMAS DE COLOCAR = if (campoPesquisa == "" ) {section.inner = "<p>textos</p>"}
if (!campoPesquisa) {
    sectionn.innerHTML = "<p>Busca vazia.</p>"
    return 
}

campoPesquisa = campoPesquisa.toLowerCase()

//Inicializa uma string vazia para armazenar os resultados.
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//Itera sobre cada dado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    
    // Se no dado titulo includes o campo de pesquisa entao, faça...
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        
        //cria um novo elemento.
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
        `;
    }
    
}
// 2 FORMAS DE COLOCAR = if (resultados == "" ) { resultados = "<p>texto</p>"}
if (!resultados) {
    resultados = "<p>Nada foi encontrado, tente alguém do bando ou um ex-mugiwara.</p>"
}

sectionn.innerHTML = resultados;
}
