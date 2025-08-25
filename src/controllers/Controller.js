class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos(req, res) {
        try {
            console.log('PEGA TODOS')
           const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
           return res.status(200).json(listaDeRegistros);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = Controller;