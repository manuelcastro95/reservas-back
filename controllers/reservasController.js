

const getPaises = async (req, res) => {
  // try {
  //   const users = await User.find({}).populate('role');
  //   res.json(users);
  // } catch (error) {
  //   console.error('Error', error);
  //   res.status(500).send('Server error');
  // }
}


const storeReserva = async (req, res) => {
  // const { nombre, apellido, email, telefono, password, roleId } = req.body;

  // try {
  //   const role = await Role.findById(roleId);

  //   const user = new User({ nombre, apellido, email, telefono, password, role: role._id });
  //   await user.save();
  // } catch (error) {
  //   console.error('Error al crear usuario:', error);
  // }

  // res.status(200).json({ mensaje: 'Usuario insertado exitosamente' });
}

module.exports = {
  getPaises,
  storeReserva
}
