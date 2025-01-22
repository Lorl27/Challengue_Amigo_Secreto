# 🎁 Amigo Secreto 🎁

------------------------ ୧ ‧₊˚ 🍂 ⋅

### ÍNDICE

1. **Descripción del proyecto**: Explicación breve y atractiva sobre el propósito de la aplicación.
2. **Funcionalidades**: Detalles claros de lo que el usuario puede hacer.
3. **Tecnologías utilizadas**: Lista de herramientas y lenguajes empleados.
4. **Instrucciones de instalación**: Paso a paso para configurar el proyecto localmente.
5. **Cómo usar**: Guía para interactuar con la aplicación.
6. **Solución de problemas**: Posibles errores comunes y cómo resolverlos.
7. **Mejoras futuras**: Ideas para expandir la funcionalidad.
8. **Licencia**: Permisos de uso del código.
9. **Créditos**: Reconocimiento a la autora.

------------------------ ୧ ‧₊˚ 🍂 ⋅

## ¿De qué trata el desafío?

Este proyecto es una aplicación interactiva que permite a los usuarios crear una lista de amigos y realizar un sorteo aleatorio para determinar quién es el "amigo secreto". <br> La aplicación está desarrollada utilizando **HTML**, **CSS** y **JavaScript**, con validaciones para garantizar una experiencia de usuario fluida y amigable.

---

## Funcionalidades

### ✏️ Agregar nombres
- Los usuarios pueden escribir el nombre de un amigo/a en un campo de texto y agregarlo a una lista visible al hacer clic en el botón **"Añadir"**.
- Se valida que el campo no esté vacío antes de agregar el nombre.

### ✅ Validar entrada
- Si el usuario intenta enviar un campo vacío o con solo espacios en blanco, el programa mostrará un mensaje de error y marcará el campo en rojo.

### 📋 Visualizar la lista
- Los nombres ingresados aparecen en una lista interactiva debajo del campo de entrada, actualizándose dinámicamente sin recargar la página.

### 🎲 Sorteo aleatorio
- Al hacer clic en el botón **"Sortear Amigo"**, el programa selecciona un nombre al azar de la lista y lo muestra en pantalla.
- Si la lista está vacía, el programa alerta al usuario para que agregue al menos un nombre.

---

## 🛠️ Tecnologías utilizadas

- **HTML5:** Para la estructura del contenido.
- **CSS3:** Para el diseño y estilo visual.
- **JavaScript:** Para la lógica de la aplicación y la interacción del usuario.

---

## 📦 Instalación

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu_usuario/amigo-secreto.git```
2. **Abrir el proyecto**:
    Encuentra la carpeta del proyecto y abre el archivo ```index.html``` en tu Navegador de preferencia (Compatibilidad asegurada).

---

## 🚀 Ejecución: ¿Qué tengo qué hacer?

1. Ingresa un nombre en el campo de texto y haz clic en el botón **"Añadir"** para agregarlo a la lista.
2. Repite este paso para añadir más nombres.
3. Una vez que tengas todos los nombres, haz clic en **"Sortear Amigo"** para elegir aleatoriamente a uno de los participantes.
4. El nombre seleccionado aparecerá resaltado en la pantalla.

---

## ⚠️ Posibles problemas y soluciones

**Problema: El botón *"Añadir"* no agrega nombres a la lista.**
* \_Solución\_: Asegúrate de que el archivo app.js esté correctamente vinculado en el index.html y que no haya errores en la consola del navegador.

**Problema: El botón "Sortear Amigo" no muestra ningún resultado.**
* \_Solución\_: Comprueba que la lista tenga *al menos* un nombre antes de hacer clic en el botón.

---

## 🌟 Futuras Mejoras
* Permitir eliminar nombres de la lista.
* Añadir un contador de participantes en tiempo real.
* Implementar un diseño más responsive para dispositivos móviles.
* Añadir almacenamiento local para guardar la lista de amigos entre sesiones.

---

## 📄 Licencia
Este proyecto está bajo la **licencia MIT**. 
Puedes usar, modificar y distribuir el código libremente, siempre y cuando se incluya esta nota.

---

## 👩‍💻 Autora
**Desarrollado con ❤️ por (Lorl27)[https://github.com/Lorl27].**