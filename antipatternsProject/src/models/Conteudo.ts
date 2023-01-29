export class Conteudo {
    // id, sigla, descricao, conteudo
    id: number;
    sigla: string;
    descricao: string;
    conteudo: string;

    constructor(id: number, sigla: string, descricao: string, conteudo: string) {
        this.id = id;
        this.sigla = sigla;
        this.descricao = descricao;
        this.conteudo = conteudo;
    }
}