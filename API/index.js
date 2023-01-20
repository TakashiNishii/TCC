(async () => {
    const database = require('./db');
    const Semana = require('./models/semana');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        // Create
        // const resultadoCreate = await Semana.create({
        //     numeroSemana: 1,
        //     conteudo: 'Estilo;Semântica'
        // });

        // Read all
        var resultados = await Semana.findAll();
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