# Creado por Jeisson Estevens Araque Ramirez-PREELEC2202PC-TDS0033
## Opcion elegida: 1.

## **importante crear en el back el jwt secret con el comando: php artisan jwt:secret**

### Paso 1:
- Crear la base de datos.
- Hacer la migration para crear las tablas.
- crear los roles en la base de datos: INSERT INTO roles (id, name) values (1, 'admin'), (2, 'user');
### Paso 2:
- Crear los semestres en la base de datos: INSERT INTO semester (id) VALUES(1),(2);

Para los usuarios la pagina tiene apartado de registro donde se puede registrar usuarios y escoger el perfil.

# front_api_vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
