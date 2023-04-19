import getAll from '../execQuery';

async function listarAlunos() {
  try {
    const result = await getAll.getAll('SELECT nome FROM alunos');
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default listarAlunos;
