import deletarAluno from '../services/AlunosServices/deletarAluno';
import inserirAluno from '../services/AlunosServices/inserirAluno';
import listarAlunos from '../services/AlunosServices/listarAlunos';

class AlunosController {
  async getAlunos(req, res) {
    const alunos = await listarAlunos();
    console.log(alunos);
    res.end(JSON.stringify(alunos));
  }

  async inserirAluno(req, res) {
    const aluno = req.body;
    console.log(aluno.nome);
    await inserirAluno(aluno);
    res.end(JSON.stringify(aluno));
  }

  async excluirAluno(req, res) {
    const aluno = req.body;
    const alunoExcluido = await deletarAluno(aluno);
    res.end(alunoExcluido);
  }
}

export default new AlunosController();
