const dataSource = require('../models')

class Services {
    constructor(nomeDoModel) {
        if (!dataSource[nomeDoModel]) {
            throw new Error(`O modelo '${nomeDoModel}' não foi encontrado em 'dataSource'.`);
        }
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        console.log('pegar registros')
        return dataSource[this.model].findAll()
    }
}

module.exports = Services