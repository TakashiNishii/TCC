//Aqui teremos as questões
export class Questoes {
    id: number;
    idQuestao: string;
    titulo: string;
    descricao: string;
    conteudo: string;
    semana: string;
    alternativas: string;
    antipadrao: string;
    linguagem: string;

    constructor(id: number, idQuestao: string, titulo: string, descricao: string, conteudo: string, semana: string, alternativas: string, antipadrao: string, linguagem: string) {
        this.id = id;
        this.idQuestao = idQuestao;
        this.titulo = titulo;
        this.descricao = descricao;
        this.conteudo = conteudo;
        this.semana = semana;
        this.alternativas = alternativas;
        this.antipadrao = antipadrao;
        this.linguagem = linguagem;
    }
}