import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 8000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url === '/' ? '/index.html' : req.url);

  // public/ を優先（Vite の挙動に合わせる）、次にルート
  const candidates = [
    path.join(__dirname, 'public', url),
    path.join(__dirname, url),
  ];

  const tryNext = (paths) => {
    if (!paths.length) {
      res.writeHead(404);
      res.end('File Not Found');
      return;
    }
    const filePath = paths[0];
    const extname = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    fs.readFile(filePath, (error, content) => {
      if (error?.code === 'ENOENT') {
        tryNext(paths.slice(1));
      } else if (error) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  };

  tryNext(candidates);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
