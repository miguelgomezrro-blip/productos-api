# Productos API — Express + Node.js

API REST que expone operaciones sobre un inventario de productos, usando
únicamente arreglos de objetos en memoria (sin base de datos).

## Función principal

`analizarProductos(productos)` (en `productos.js`) recibe el arreglo y calcula:

1. Productos con precio mayor a $100.000.
2. Valor total del inventario (precio × stock).
3. Producto con mayor stock.
4. Productos de categoría "Tecnología".
5. Búsqueda de un producto por id.
6. Cantidad de productos agrupados por categoría.

## Requisitos

- Node.js 18 o superior.

## Instalación y ejecución local

```bash
git clone <URL_DE_TU_REPOSITORIO>
cd productos-api
npm install
npm start
```

El servidor queda disponible en: `http://localhost:3000`

## Endpoints disponibles

| Método | Ruta                          | Descripción                                   |
|--------|-------------------------------|------------------------------------------------|
| GET    | `/`                           | Guía rápida de endpoints                       |
| GET    | `/api/productos`              | Lista todos los productos                      |
| GET    | `/api/productos/caros`        | Productos con precio > $100.000                |
| GET    | `/api/productos/valor-total`  | Valor total del inventario (precio × stock)    |
| GET    | `/api/productos/mayor-stock`  | Producto con mayor stock                       |
| GET    | `/api/productos/tecnologia`   | Productos de categoría "Tecnología"            |
| GET    | `/api/productos/por-categoria`| Cantidad de productos agrupados por categoría  |
| GET    | `/api/productos/:id`          | Busca un producto por su id                    |

## Probar con curl

```bash
curl http://localhost:3000/api/productos
curl http://localhost:3000/api/productos/caros
curl http://localhost:3000/api/productos/valor-total
curl http://localhost:3000/api/productos/mayor-stock
curl http://localhost:3000/api/productos/tecnologia
curl http://localhost:3000/api/productos/por-categoria
curl http://localhost:3000/api/productos/3
```

## Probar con Postman

Importa la colección `postman/Productos_API.postman_collection.json` y ajusta
la variable `base_url` (por defecto `http://localhost:3000`, o la URL pública
una vez desplegado).

## Despliegue para obtener una URL pública

Para entregar una URL que el profesor pueda consumir directamente (no solo
localhost), despliega el proyecto en un servicio gratuito, por ejemplo
**Render**:

1. Sube este proyecto a un repositorio de GitHub.
2. Entra a https://render.com y crea una cuenta (puedes usar tu cuenta de GitHub).
3. "New +" → "Web Service" → selecciona el repositorio.
4. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Despliega. Render te entrega una URL pública tipo
   `https://productos-api-xxxx.onrender.com`.
6. Verifica que funcione visitando `https://productos-api-xxxx.onrender.com/api/productos`.

(Alternativas equivalentes: Railway, Cyclic, Fly.io.)

## Entregable para el profesor

- Enlace del repositorio en GitHub.
- URL pública del despliegue (ej. Render) para consumir la API.
- Evidencia de funcionamiento: capturas de Postman o de la respuesta del navegador
  para cada endpoint.
