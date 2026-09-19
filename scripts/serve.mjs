import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, sep, extname } from 'node:path';

const preview = process.argv.includes('--preview');
const root = fileURLToPath(new URL(preview ? '../dist/' : '../', import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
};

createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
    const file = resolve(root, relative);
    // Serve only the public entry point and source resources.
    if ((relative !== 'index.html' && !relative.startsWith('src/')) ||
        !file.startsWith(root) ||
        (relative !== 'index.html' && !file.startsWith(resolve(root, 'src') + sep)) ||
        relative.split('/').some(part => part.startsWith('.'))) {
      response.writeHead(404).end('No encontrado');
      return;
    }
    const data = await readFile(file);
    response.writeHead(200, {
      'Content-Type': types[extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch (error) {
    const status = error instanceof URIError ? 400 : ['ENOENT', 'EISDIR', 'ENOTDIR'].includes(error.code) ? 404 : 500;
    response.writeHead(status).end(status === 404 ? 'No encontrado' : 'Error al procesar la solicitud');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`${preview ? 'Vista de producción' : 'Desarrollo'}: http://localhost:${port}`);
});
