const { Product } = require('../Models/Products');

async function getProducts(req, res) {
  try {
    // Obtener todos los productos desde la base de datos
    const products = await Product.findAll();
    return res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener los productos' });
  }
}

module.exports = { getProducts };
