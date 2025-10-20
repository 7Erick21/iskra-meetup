# React Meetup App

Este proyecto fue desarrollado como parte de una prueba técnica. Está disponible en un repositorio Git para visualizar el control de versiones.

## 🧩 Solución Implementada

La aplicación permite gestionar meetups mediante una interfaz sencilla y moderna. Las principales mejoras y funcionalidades implementadas son:

### 🔀 Navegación por rutas

Se integró `react-router-dom` para estructurar la navegación en tres vistas principales:

- `/` → **Home**: muestra el listado de meetups.
- `/new-meetup` → **New Meetup**: formulario para crear un nuevo meetup.
- `/favorites` → **Favorites**: vista con los meetups marcados como favoritos.

### ⭐ Gestión de favoritos

Se implementó un sistema para marcar meetups como favoritos:

- Se utilizó **Zustand** para manejar el estado global.
- Los favoritos se almacenan en **localStorage** para persistencia entre sesiones.
- Se crearon dos stores: uno para el listado general y otro para los favoritos. Se sugiere como mejora futura unificar ambos en un solo store, añadiendo una propiedad `favorite: boolean` a cada meetup.

### 🧪 Testing

Se añadieron pruebas utilizando `@testing-library/react` y `enzyme` para validar componentes y funcionalidades clave de la aplicación.

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/react-meetup.git
   cd react-meetup

2. Instala las dependencias:
   ```bash
   npm install

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm start

4. Abre la aplicación en tu navegador:
   Visita http://localhost:3000 para ver la app en funcionamiento.
