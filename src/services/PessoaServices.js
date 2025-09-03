const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor(){
    super('Pessoa');
  }

  async pegaPessoasEscopoTodos () {
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros');
    return listaPessoas;
  }
}

module.exports = PessoaServices;