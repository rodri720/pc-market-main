const { User } = require('../Models/Users');

async function postUser(req, res) {
  try {
    // Obtener los datos del nuevo usuario del cuerpo de la solicitud (req.body)
    const { username, email, password } = req.body;

    // Crear el nuevo usuario en la base de datos
    const user = await User.create({
      username,
      email,
      password,
    });

    // Responder con el usuario recién creado
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al crear el usuario' });
  }
}

module.exports = { postUser };