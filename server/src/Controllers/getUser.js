const { User } = require('../Models/Users.js');

async function getUser(req, res) {
  try {
    

    // Buscar el usuario por su ID en la base de datos
    const user = await User.findOne({
      where: { id },
    });
} catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener el usuario' });
}
}
    module.exports = {
        getUser,
      }