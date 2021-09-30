let form = document.querySelector(".form");
let filmes = [];

form.addEventListener("submit", (event) => {
  // console.log(event);
  event.preventDefault();
  const inputNome = document.querySelector("#nome-filme").value;
  const inputImagem = document.querySelector("#url-imagem").value;
  const inputgenero = document.querySelector("#genero").value;
  const inputNota = document.querySelector("#nota").value;  
  
  const filme = {
    nome: inputNome,
    url: inputImagem,
    genero: inputgenero,
    nota: inputNota,
  };
  filmes.push(filme)

  const adicionarFilme = document.querySelector(".card");

  adicionarFilme.innerHTML = "";
  filmes.map((filme, index) => {
    adicionarFilme.insertAdjacentHTML(
      'beforeend',
      `<div class="card-area">
        <div class="card-header">
          <img src="${filme.url}" /> </div>
          <div class="card-body">
          <div class="card-info">
          <h3>${filme.nome}</h3>
          <span class="tag tag-red">${filme.genero}</span>
          <span class="note">${filme.nota}</span>
        </div>
      </div>
    `
    );
  })
})






















// let adicionarFilme = document.querySelector(".container-labels");
// let filmes = [];
// adicionarFilme.addEventListener("#send", (event) => {
//   event.preventDefault();
//   const inputNomeFilme = document.querySelector("#nome-filme").value;
//   const inputUrlImg = document.querySelector("#url-imagem").value;
//   const inputGenero = document.querySelector("#genero").value;
//   const inputNota = document.querySelector("#nota").value;

//   const filme = {
//     nome: inputNomeFilme,
//     url: inputUrlImg,
//     genero: inputGenero,
//     nota: inputNota,
//   };
//   filmes.push(filme);

//   const card = document.querySelector(".card");
//   filmes.map((filme, index) => {
//     card.insertAdjacentElement(
//       "beforeend",
//       `
//       <p>${filme.nome.value}</p>
//       <p>${filme.url}</p>
//       <p>${filme.genero}</p>
//       <p>${filme.nota}</p>
//     `
//     );

//   });
// });

