# Portafolio de Jhonatan Sánchez

Sitio personal estático construido con HTML, CSS y JavaScript. Incluye experiencia, tecnologías, perfil, descarga del CV y contacto.

## Estructura

```text
index.html
assets/
  css/
    main.css
  js/
    main.js
  images/
    visual-red.jpg
    visual-collage.jpg
  documents/
    jhonatan-sanchez-cv.pdf
```

## Desarrollo local

Desde la raíz del proyecto, ejecuta:

```sh
python3 -m http.server 8000
```

Abre http://localhost:8000 en el navegador. Detén el servidor con `Ctrl+C`.
No requiere instalar dependencias ni ejecutar una compilación. Las tipografías de Google Fonts requieren conexión a internet; hay fuentes alternativas locales.

## Edición

- Contenido y secciones: `index.html`.
- Diseño y estilos adaptables: `assets/css/main.css`.
- Diálogos y copia del correo: `assets/js/main.js`.
- Imágenes: `assets/images/`.
- Currículum: `assets/documents/jhonatan-sanchez-cv.pdf`.

Usa nombres en minúsculas y guiones para separar palabras. Al renombrar un recurso, actualiza también sus referencias.

## Publicación

Publica `index.html` y `assets/` juntos desde la raíz. No hay paso de build ni carpeta `dist` necesaria. Si el alojamiento estaba configurado para publicar `dist`, cambia su directorio de publicación a la raíz del repositorio.

Los archivos de macOS, la configuración local del editor y las dependencias quedan excluidos mediante `.gitignore`.
