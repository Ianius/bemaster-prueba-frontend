# Aplicativo Web de Visualización de Contenido Multimedia
Este repositorio contiene el código fuente de un aplicativo web desarrollado como parte de un desafío para un puesto de Frontend Developer. El aplicativo permite a los usuarios visualizar contenido multimedia tipo videos, así como también acceder a diferentes categorías de contenido.

## Descripción del Proyecto
El aplicativo consta de varios componentes principales:

- Login: Permite a los usuarios iniciar sesión, implementando la lógica de validación de campos vacíos y caracteres permitidos para el campo de email.

- Home: Muestra 5 cards representando las categorías a las cuales el usuario logueado tendrá acceso, junto con un navbar básico para la navegación dentro del aplicativo.

- ContentCategory: Presenta todo el contenido relacionado a la categoría seleccionada desde el componente 'Home'.

- ContentDetails: Permite visualizar el contenido multimedia seleccionado desde el componente contentCategory y su respectiva sinopsis o resumen.

## Tecnologías Utilizadas
- React JS
- Typescript

## Configuración y Uso
1. Clona este repositorio.
2. Instala las dependencias utilizando npm install.
3. Ejecuta la aplicación utilizando npm start.
4. La aplicación estará disponible en tu navegador en http://localhost:3000.
5. Los usuarios disponibles estan definidos en src/data/db.json. Por ejemplo: email: user1@example.com, password: 123