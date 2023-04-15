(async () => {
    const database = require('./db');
    const Questoes = require('./models/questoes');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        // Create
        const resultadoCreate =  Questoes.create({
            idQuestao: '1',
            titulo: 'Teste',
            descricao: 'Teste',
            conteudo: 'Teste',
            semana: 'Teste',
            alternativas: 'Teste',
            antipadrao: 'Teste'
        });
        

        // Read all
        var resultados = await Questoes.findAll();
        console.log(resultados);



        // Update
        // const semana = await Semana.findByPk(1);
        // semana.numeroSemana = 01;

        // await semana.save();

        // Delete
        // Semana.destroy({ where: { id: 1 } });

        // Read one
        // resultados = await Semana.findByPk(1);
        // console.log(resultados);
    } catch (error) {
        console.log(error);
    }
})();