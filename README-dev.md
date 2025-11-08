# Servidor de desarrollo — MenuScore

Este archivo explica cómo levantar un servidor local para ver la web con recarga en caliente (live-reload).

Requisitos
- Node.js (v14+) para usar el script npm con `live-server` OR Python (opción sin live-reload).

Opciones rápidas

1) Recomendado — con live-reload (Node.js)

  Abrir PowerShell en la carpeta del proyecto (por ejemplo):

  ```powershell
  cd "C:\Users\migue\OneDrive\Documentos\MenuScore\htmlWeb"
  npm install
  npm run start
  ```

  - Esto instalará `live-server` (devDependency) la primera vez y abrirá `index.html` en el navegador en http://127.0.0.1:3000.
  - El servidor recargará automáticamente la página cuando edites archivos en esta carpeta.

2) Rápido (sin Node) — servidor estático sin live-reload (Python)

  ```powershell
  cd "C:\Users\migue\OneDrive\Documentos\MenuScore\htmlWeb"
  python -m http.server 3000
  ```

  - Abre http://127.0.0.1:3000 en tu navegador. No hay recarga automática.

Notas
- Si no tienes Node.js instalado, descarga e instala desde https://nodejs.org/ y repite la opción 1.
- Si prefieres otro live-reloader (browser-sync), puedo actualizar `package.json` a esa opción.
