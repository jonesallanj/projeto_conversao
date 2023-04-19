import { Router } from 'express';
import BuildPath from '../utils/BuildPath';

const roteador = Router();

roteador.get('/', async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/src/views/index.html`);
  console.log(BuildPath(__dirname));
});

roteador.get('*', async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/src/views/404.html`);
});

export default roteador;
