export interface AtividadeInterface {
    id?: number;
    descricao: string;
    concluido?: boolean;
    data_criacao?: Date;
    data_conclusao?: Date | null;
}