import execQuery from '../execQuery';

async function inserirAluno(aluno) {
  try {
    const resultado = await execQuery.execQuery(`INSERT into alunos VALUES ('${aluno.nome}')`);
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  }
}

export default inserirAluno;
