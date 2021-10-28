import configurationBd from '../../config/ConfigurationBd.json'
import { EnvironmentTypeEnum } from '../services/EnvironmentTypeServices'

const environmentType = process.env.environmentType as keyof typeof EnvironmentTypeEnum || 'dev'


export const ConfigurationSystem = {
    environmentType : EnvironmentTypeEnum[environmentType],
    portApi: Number(process.env.PORT) || 3000,
}

const configBdSelect = configurationBd[ConfigurationSystem.environmentType as keyof typeof configurationBd]

export const ConfigurationBd = {
    HOST: String(configBdSelect.host) || "localhost",
    PORT: Number(configBdSelect.port) || 5432,
    DIALECT: String(configBdSelect.dialect) || "postgres",
    DATABASE: String(configBdSelect.database) || "helpClient",
    USER: String(configBdSelect.username) || "postgres",
    PASSWORD: String(configBdSelect.password) || "help.postgres",
    MAX_POOL: Number(process.env.BD_MAX_POOL) || 5,
    IDLE: Number(process.env.BD_IDLE) || 30000,
    ACQUIRE: Number(process.env.BD_ACQUIRE) || 60000,
    SHOW_LOG: Boolean(process.env.BD_SHOW_LOG === "true") ? true : false,
}