import { AllowNull, AutoIncrement, Column, Default, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import DataBase from "../../services/DataBaseServices";
import { AtividadeInterface } from "../../services/implementations/AtividadeImplementations";

@Table({tableName: 'atividade'})
class AtividadeEntity extends Model implements AtividadeInterface{
    
    @PrimaryKey
    @AllowNull(false)
    @Unique
    @AutoIncrement
    @Column
    id!: number;

    @AllowNull(false)
    @Column
    descricao!: string;

    @AllowNull(false)
    @Default(false)
    @Column
    concluido!: boolean;

    @AllowNull(false)
    @Default(new Date())
    @Column
    data_criacao!: Date;

    @AllowNull(true)
    @Default(null)
    @Column
    data_conclusao!: Date;

}

DataBase.addModels([AtividadeEntity])

export default AtividadeEntity;