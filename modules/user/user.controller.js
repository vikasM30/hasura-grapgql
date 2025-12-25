const UserService = require('./user.service');

exports.getUser = async (req, res) => {
  const user = await UserService.getUserById(req.params.id);
  res.json(user);
};

exports.createUser = async (req, res) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json(user);
};
