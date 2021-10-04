const urlApi = 'http://localhost:3000/filmes';
const lista = document.getElementById('lista');
let edicao = false;
let idEdicao = 0;


const getFilmes = async () => {
  const response = await fetch(urlApi);
  const data = await response.json();
  console.log(data);
  
  data.map((filme) => {
    lista.insertAdjacentHTML(
      "beforeend",
      `
    <div>
      <div class="card">
          <img class= "card-img"src="${filme.url}"</div>
          <div class="card-header">${filme.nome}
          <div class="spans">
            <span class="genre">${filme.genero}</span>
            <span class="nota">${filme.nota}</span>
          </div>
          </div>
          <div class="buttons">
            <button class="edit" type="button" onclick"putFilme(${filme.id})">Editar</button>
            <button class="delete" type="button" onclick"deleteFilme(${filme.id})">Excluir</button>
          </div>
      </div>
    </div>
    `
    );
  })
}
getFilmes();



const submitForm = async (evento) => {
  evento.preventDefault();

  let nome = document.getElementById('nome');
  let url = document.getElementById('url');
  let genero = document.getElementById('genero');
  let nota = document.getElementById('nota');
  

  const filme = {
    nome: nome.value,
    url: url.value,
    genero: genero.value,
    nota: nota.value
  }


  if (!edicao) {
    const request = new Request(`${urlApi}/add`, {
      method: 'POST',
      body: JSON.stringify(filme),
      headers: new Headers({
        'Content-Type' : 'application/json'
      })
    })

    const response = await fetch(request);
    const result = await response.json();

    if (result) {
      getFilmes();
    }

  } else {
    const request = new Request(`${urlApi}/${idEdicao}`, {
      method: 'PUT',
      body: JSON.stringify(filme),
      headers: new Headers({
        'Content-Type' : 'application/json'
      })
    })

    const response = await fetch(request);
    const result = await response.json();

    if (result) {
      getFilmes();
    }
  }
  

  nome.value = '';
  url.value = '';
  genero.value = '';
  nota.value = '';

  lista.innerHTML = '';
}

const getFilmeById = async (id) => {
  const response = await fetch(`${urlApi}/${id}`);
  return filme = response.json();

}



const putFilme = async (id) => {
  edicao = true;
  idEdicao = id;

  const filme = await getFilmeById(id);

  let nomeEl = document.getElementById('nome');
  let urlEl = document.getElementById('url');
  let generoEl = document.getElementById('genero');
  let notaEl = document.getElementById('nota');

  nomeEl.value = filme.nome;
  urlEl.value = filme.url;
  generoEl.value = filme.genero;
  notaEl.value = filme.nota;
}

const deleteFilme = async (id) => {
  const request = new Request(`${urlApi}/${id}`, {
    method: 'DELETE',
  })
  const response = await fetch(request);
  const data = await response.json();
  console.log(data.message);

  lista.innerHTML = '';
  getFilmes()
  }