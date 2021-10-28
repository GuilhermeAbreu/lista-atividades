import * as yup from 'yup';
import { AtividadeCreateInterface, AtividadeUpdateInterface } from '../implementations/AtividadeImplementations';

class AtividadeSchema{

    static atividadeCreateSchema = yup.object().shape({
        descricao: yup.string().required( 'Description is mandatory').min(3, "Description must have at least '${min}' characters"),
        concluido: yup.boolean().optional().default(false),
        data_criacao: yup.date().optional().default(new Date()),
        data_conclusao: yup.date().optional()
    })

    static atividadeUpdateSchema = yup.object().shape({
        descricao: yup.string().required( 'Description is mandatory').min(3, "Description must have at least '${min}' characters"),
        concluido: yup.boolean().optional().default(false),
        data_conclusao: yup.date().optional().default(null).nullable(),
    })

    static async validationBodyCreate(atividade: AtividadeCreateInterface) {
        return await this.atividadeCreateSchema.validate(atividade);
    }

    static async validationBodyUpdate(atividade: AtividadeUpdateInterface){
        return await this.atividadeUpdateSchema.validate(atividade);
    }

}

export { AtividadeSchema };

