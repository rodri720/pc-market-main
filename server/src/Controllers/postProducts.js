const { Products } = require('../db.js');

const postProducts = async (req, res) =>{
  try {
    // Obtener los datos del nuevo producto del cuerpo de la solicitud (req.body)
    const { name  } = req.body;
console.log(name)
    // Crear el nuevo producto en la base de datos
    await Products.create({
      name
      
    });

    // Responder con el producto recién creado y un código de estado 201 (Created)
    return res.status(201).json({ message: 'Producto creado exitosamente' });
  } catch (error) {
    console.error(error);
    // Si ocurre un error, responder con un código de estado 500 (Internal Server Error) y un mensaje de error
    return res.status(500).json({ error: 'Error al crear el producto' });
  }
}

module.exports =  postProducts ;
