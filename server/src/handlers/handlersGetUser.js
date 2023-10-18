const { User } = require('../Models/Users');

async function getUser(req, res) {
  try {
    // Obtener un usuario por su ID desde la base de datos
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener el usuario' });
  }
}

module.exports = { getUser };
