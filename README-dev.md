# Servidor de desarrollo — MenuScore
# Servidor de desarrollo — MenuScore

Este archivo explica cómo levantar un servidor local para ver la web con recarga en caliente (live-reload).

Requisitos
- Node.js (v14+) para usar los scripts npm con `live-server` o `browser-sync`. Python es opcional para servidores estáticos.

Opciones rápidas

1) Recomendado — con live-reload usando `live-server` (instalado como devDependency)

  Abrir PowerShell en la carpeta del proyecto:

  ```powershell
  cd "C:\MSweb\htmlWeb"
  npm install
  npm run start
  ```

2) Alternativa — `browser-sync` con hot reload (más control sobre inyección de CSS)

  ```powershell
  cd "C:\MSweb\htmlWeb"
  npm install
  npm run dev:bs
  ```

  - Este script usa `npx browser-sync` y vigila los archivos del proyecto. Abre http://127.0.0.1:3000.

3) Rápido (sin Node) — servidor estático sin live-reload (Python)

  ```powershell
  cd "C:\MSweb\htmlWeb"
  python -m http.server 3000
  ```

Notas importantes
- El sitio realiza una comprobación rápida (HEAD) para `assets/video/demo.mp4` y solo inserta la etiqueta `<video>` si el archivo existe. Si no existe, se muestra un placeholder SVG (`assets/images/video-placeholder.svg`) para evitar 404s y mantener la experiencia.
- Se agregó un favicon SVG en `assets/images/favicon.svg` para eliminar 404s de favicon.

Design
- Se aplicó un rediseño global inspirado en sitios de producto (paleta más neutra, hero en tarjeta, CTAs más prominentes). Revisa `css/styles.css` para ver las variables y overrides.

Si quieres que instale `browser-sync` como devDependency en el proyecto en lugar de usar `npx`, dímelo y lo pongo en `package.json`.
