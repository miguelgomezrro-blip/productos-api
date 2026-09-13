const express = require('express');
const cors = require('cors');
const { productos, analizarProductos } = require('./productos');

const app = express();
app.use(cors());
app.use(express.json());

// Pagina de inicio con guia rapida de endpoints disponibles
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de Productos - Express + Node.js',
    endpoints: [
      'GET /api/productos',
      'GET /api/productos/caros',
      'GET /api/productos/valor-total',
      'GET /api/productos/mayor-stock',
      'GET /api/productos/tecnologia',
      'GET /api/productos/por-categoria',
      'GET /api/productos/:id',
    ],
  });
});

// Listar todos los productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// Productos con precio mayor a $100.000
app.get('/api/productos/caros', (req, res) => {
  const { caros } = analizarProductos(productos);
  res.json(caros);
});

// Valor total del inventario (precio x stock)
app.get('/api/productos/valor-total', (req, res) => {
  const { valorTotalInventario } = analizarProductos(productos);
  res.json({ valorTotalInventario });
});

// Producto con mayor stock
app.get('/api/productos/mayor-stock', (req, res) => {
  const { productoMayorStock } = analizarProductos(productos);
  res.json(productoMayorStock);
});

// Solo productos de categoria "Tecnologia"
app.get('/api/productos/tecnologia', (req, res) => {
  const { tecnologia } = analizarProductos(productos);
  res.json(tecnologia);
});

// Cantidad de productos agrupados por categoria
app.get('/api/productos/por-categoria', (req, res) => {
  const { porCategoria } = analizarProductos(productos);
  res.json(porCategoria);
});

// Buscar producto por id (debe ir despues de las rutas especificas anteriores)
app.get('/api/productos/:id', (req, res) => {
  const { buscarPorId } = analizarProductos(productos);
  const producto = buscarPorId(req.params.id);
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
  res.json(producto);
});

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ mensaje: 'Recurso no encontrado' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API de productos escuchando en http://localhost:${PORT}`);
});
