import { Router } from 'express';
import AlunosController from '../controllers/AlunosController';
import auth from '../middlewares/AuthMiddleware';

const roteador = Router();

roteador.get('/alunos', auth.AuthMiddleware, auth.ManagerMiddleware, AlunosController.getAlunos);

roteador.post('/aluno', AlunosController.inserirAluno);

roteador.delete('/aluno', AlunosController.excluirAluno);

export default roteador;
