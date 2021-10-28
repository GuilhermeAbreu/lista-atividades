import { AtividadeCreateInterface, AtividadeUpdateInterface } from "../services/implementations/AtividadeImplementations";
import AtividadeEntity from "./entities/AtividadeEntity";

class AtividadeModel{

    static async create(valuesAtividade: AtividadeCreateInterface){
        return await AtividadeEntity.create(valuesAtividade);
    }

    static async findAll(){
        return await AtividadeEntity.findAll();
    }

    static async update(valuesAtividadeForUpdate: AtividadeUpdateInterface, id : number){
        
        const atividade : AtividadeEntity | null = await AtividadeEntity.findByPk(id);

        if(atividade instanceof AtividadeEntity){
            // @ts-ignore
            atividade.descricao = valuesAtividadeForUpdate.descricao;
            // @ts-ignore
            atividade.concluido = valuesAtividadeForUpdate.concluido;
            // @ts-ignore
            atividade.data_conclusao = valuesAtividadeForUpdate.data_conclusao;
            
                // @ts-ignore
                return await atividade.save();
            
        }else{
            throw new Error("Atividade não encontrada");
        }

        
    }

    static async delete(id: number){

        const atividade : AtividadeEntity | null = await AtividadeEntity.findByPk(id);

        if(atividade instanceof AtividadeEntity){
            return await AtividadeEntity.destroy({
                where: {
                    id
                }
            });
        }else{
            throw new Error("Atividade not found");
        }
        
    }

}

export { AtividadeModel };

