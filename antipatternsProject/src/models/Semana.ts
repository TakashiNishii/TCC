//Aqui teremos o numeroSemana e conteudoSemana
export class Semana {
    id: number;
    numeroSemana: number;
    conteudo: string;

    constructor(id: number, numeroSemana: number, conteudoSemana: string) {
        this.id = id;
        this.numeroSemana = numeroSemana;
        this.conteudo = conteudoSemana;
    }
}
