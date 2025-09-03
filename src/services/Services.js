const dataSource = require('../database/models');

class Services {
  constructor(nomeDoModel) {
    if (!dataSource[nomeDoModel]) {
      throw new Error(`O modelo '${nomeDoModel}' não foi encontrado em 'dataSource'.`);
    }
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    console.log('pegar registros');
    return dataSource[this.model].findAll();
  }

  async pegaRegistrosPorEscopo(escopo){
    const Model = dataSource[this.model];
    console.log('Atributos conhecidos pelo Sequelize para o modelo:', Object.keys(Model.getAttributes()));
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: { id: id }
    });
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;