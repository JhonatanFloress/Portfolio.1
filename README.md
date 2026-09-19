# Portafolio de Jhonatan Sánchez

Sitio personal con HTML, CSS y JavaScript. Node.js sirve el sitio durante el desarrollo y prepara los archivos para Vercel. No utiliza Python ni requiere dependencias externas.

## Requisitos

Node.js 22 o superior y npm.

## Desarrollo

```sh
npm run dev
```

Abre http://localhost:3000. Recarga el navegador después de editar archivos. Detén el servidor con `Ctrl+C`. `npm start` también inicia el servidor local.

## Estructura

```text
index.html
src/
  css/main.css
  js/main.js
  images/
    visual-red.jpg
    visual-collage.jpg
  documents/jhonatan-sanchez-cv.pdf
scripts/
  serve.mjs
  build.mjs
package.json
vercel.json
```

Edita el contenido en `index.html`, los estilos en `src/css/main.css` y las interacciones en `src/js/main.js`. Usa nombres en minúsculas separados por guiones y actualiza las referencias al renombrar recursos.

## Compilación y vista previa

```sh
npm run build
npm run preview
```

El build regenera `dist/` con `index.html` y `src/`. La vista previa sirve esa carpeta en http://localhost:3000. No edites `dist/` directamente ni la subas a Git.

## Despliegue en Vercel

1. Sube los cambios a tu repositorio de Git.
2. Importa el repositorio en Vercel y selecciona la raíz de este proyecto.
3. Publica el proyecto. `vercel.json` configura el preset **Other**, el comando `npm run build` y el directorio de salida `dist`.

Vercel publica los archivos estáticos generados; el servidor de desarrollo no se ejecuta en producción.

Referencia: https://vercel.com/docs/project-configuration/vercel-json

Las tipografías de Google Fonts requieren conexión a internet; hay fuentes locales alternativas. `.gitignore` excluye archivos de macOS, configuración local del editor y archivos generados.
