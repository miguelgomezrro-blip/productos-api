// Datos de ejemplo del inventario
const productos = [
  { id: 1, nombre: "Laptop Lenovo", precio: 2800000, stock: 8, categoria: "Tecnología" },
  { id: 2, nombre: "Mouse Logitech", precio: 120000, stock: 25, categoria: "Tecnología" },
  { id: 3, nombre: "Teclado Mecánico", precio: 350000, stock: 12, categoria: "Tecnología" },
  { id: 4, nombre: "Silla Ergonómica", precio: 850000, stock: 5, categoria: "Muebles" },
  { id: 5, nombre: "Escritorio", precio: 1200000, stock: 7, categoria: "Muebles" },
  { id: 6, nombre: "Audífonos Sony", precio: 450000, stock: 18, categoria: "Audio" },
  { id: 7, nombre: "Micrófono USB", precio: 380000, stock: 10, categoria: "Audio" },
  { id: 8, nombre: "Monitor Samsung", precio: 950000, stock: 6, categoria: "Tecnología" },
];

// Funcion que agrupa todas las operaciones solicitadas sobre el inventario
function analizarProductos(lista) {
  const caros = lista.filter((p) => p.precio > 100000);

  const valorTotalInventario = lista.reduce((acc, p) => acc + p.precio * p.stock, 0);

  const productoMayorStock = lista.reduce((max, p) => (p.stock > max.stock ? p : max), lista[0]);

  const tecnologia = lista.filter((p) => p.categoria === "Tecnología");

  const buscarPorId = (id) => lista.find((p) => p.id === Number(id)) || null;

  const porCategoria = lista.reduce((acc, p) => {
    acc[p.categoria] = (acc[p.categoria] || 0) + 1;
    return acc;
  }, {});

  return { caros, valorTotalInventario, productoMayorStock, tecnologia, buscarPorId, porCategoria };
}

module.exports = { productos, analizarProductos };
