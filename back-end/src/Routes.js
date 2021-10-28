import { Router } from 'express'
import { AtividadeController } from './controllers/AtividadeController'

const Routers = Router()

Routers.post('/atividades/create', AtividadeController.create)

Routers.get('/atividades', AtividadeController.list)

Routers.post('/atividades/update/:id', AtividadeController.update)

Routers.delete('/atividades/delete/:id', AtividadeController.delete)


export default Routers  