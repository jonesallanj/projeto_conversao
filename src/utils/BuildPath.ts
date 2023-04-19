export default function BuildPath(pathDirName: string) {
  const paths = pathDirName.split('\\');
  let path = '';
  for (let i = 0; i < paths.length - 2; i++) {
    path = path + paths[i] + '\\';
  }
  return path;
}
