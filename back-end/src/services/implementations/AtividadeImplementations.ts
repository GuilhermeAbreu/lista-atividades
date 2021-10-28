export interface AtividadeInterface {
    id: number;
    descricao: string;
    concluido: boolean;
    data_criacao: Date;
    data_conclusao: Date | null;
}

export interface AtividadeCreateInterface {
    descricao: string;
    concluido: boolean;
    data_criacao: Date;
    data_conclusao: Date | null;
}

export interface AtividadeUpdateInterface {
    descricao: string;
    concluido: boolean;
    data_conclusao: Date | null;
}