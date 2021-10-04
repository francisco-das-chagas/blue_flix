const express = require('express');
const router = express.Router();


const filmes = [
  {
    id: Date.now(),
    nome:'Vingadores Ultimato',
    url: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg',
    genero: 'Ação',
    nota: '10'
  },
]

router.get('/', (req, res) => {
  res.send(filmes);
})

router.get('/:id', (req, res) => {
  const idParam = req.params.id;
  const index = filmes.findIndex(filme => filme.id == idParam);
  const filme = filmes[index];
  res.send(filme);
})

router.put('/:id', (req, res) => {
  const filmeEdit = req.body;
  const id = req.params.id;
  let filmePreCadastrado = filmes.find((filme) => filme.id == id);


  filmePreCadastrado.nome = filmeEdit.nome;
  filmePreCadastrado.url = filmeEdit.url;
  filmePreCadastrado.genero = filmeEdit.genero;
  filmePreCadastrado.nota = filmeEdit.nota;

  res.send({
    message: `Filme ${filmePreCadastrado.id} atualizado com sucesso`,
    data: filmePreCadastrado
  })
})

// ADICIONAR

router.post('/add', (req, res) => {
  const filme = req.body;
  filme.id = Date.now();
  filmes.push(filme);
  res.status(201).send({
    message: 'Filme cadastrado com sucesso',
    data: filme
  });
})


// DELETAR

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = filmes.findIndex((filme) => filme.id == id);
  filmes.splice(index, 1);
  
  res.send({
    message: `Filme excluido com sucesso`,
  })
})

module.exports = router;
