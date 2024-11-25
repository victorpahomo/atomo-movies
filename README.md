# Atomo Movies

**Atomo Movies** es una aplicación web desarrollada como prueba técnica que permite explorar películas y series usando la API de TMDB. El proyecto está construido con un enfoque minimalista y moderno, siguiendo estrictamente buenas prácticas de desarrollo.

---

## 🚀 Tecnologías utilizadas

- **Vite**: Para un entorno de desarrollo rápido.
- **React**: Librería principal
- **TypeScript**: Tipado estático para mayor robustez.
- **React Router**: Manejo de rutas en la aplicación.
- **React Testing Library + Vitest**: Pruebas unitarias para garantizar la calidad del código.
- **CSS puro**: Diseños y animaciones sin utilizar librerías de estilos externas.
- **lite-youtube Script de optimización**: Para mejorar el rendimiento de los videos de YouTube.

---

## 📋 Características principales

### 🌟 Minimalismo puro
- **Vanilla React y CSS puro**: 
  - No se usaron librerías adicionales para estilos, estado o fetch.
  - Diseños realizados completamente con **CSS puro**, siguiendo la metodología **BEM** para clases CSS.

### ⚡ Rendimiento y optimización
- **Imágenes optimizadas**: Todas las imágenes locales se optimizaron externamente en formato **WebP**.
- **Carga eficiente**: Skeletons animados para mejorar la experiencia durante la carga de datos.
- **Infinite scroll**: Implementado en algunas páginas de exploración de películas y series.

### 🎯 Funcionalidades principales
- **Inicio dinámico**: Una gran tarjeta en la página de inicio muestra contenido "Próximamente en cartelera" que cambia en cada recarga.
- **Filtrado por categoría**: Para buscar contenido fácilmente.
- **Manejo de estado y excepciones**: Hooks reutilizables gestionan los llamados a la API, incluyendo estados de carga, errores y excepciones.

### 🔗 Navegación
- **Enrutamiento dinámico**: Con React Router.
- **Alias `@`**: Para una estructura de rutas más clara y organizada.

---

## 🏗️ Convenciones de desarrollo

- **Carpetas**: `kebab-case` (ejemplo: `movie-details`).
- **Archivos React**: `PascalCase` (ejemplo: `MovieCard.tsx`).
- **Clases CSS**: Metodología **BEM**.
- **Archivos CSS**: El nombre coincide con el componente vinculado (ejemplo: `MovieCard.css`).

---

## 🛠️ Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/victorpahomo/atomo-movies
   cd atomo-movies
   ```

2. Instala las dependencias:
  ```bash
  npm install
   ```
3. Ejecuta el proyecto en modo desarrollo:
  ```bash
  npm run dev
   ```

## 🧪 Pruebas unitarias

El proyecto incluye pruebas unitarias básicas. Para ejecutarlas:
  ```bash
  npm run test
   ```

## 📂 Estructura del proyecto

El proyecto sigue principios **SOLID** para mantener el código limpio y reutilizable.

- **Carpetas organizadas**: Basadas en características o módulos principales.
- **Hooks reutilizables**: Todos los llamados a la API están encapsulados en hooks.
- **Códigos animados y skeletons**: Diseñados para mejorar la UX.

---

## 🌐 Demo (opcional)

[Enlace a la demo](https://atomo-movies.vercel.app/)

---

## ✨ Contribuciones

Este proyecto sigue un enfoque minimalista. Si tienes ideas o sugerencias, ¡serán bienvenidas! 

---

### Desarrollado por Víctor Manuel Morales Hoyos