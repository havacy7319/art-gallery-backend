const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUserById,
  updateUser
}

function getAllUsers (req, res) {
  UserModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

async function getUser (req, res) {
   /* UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
    */
    try{
      const foundUser = await UserModel.findById(req.params.id)
      res.json(foundUser)               
    }catch(err){
      handleError(err,res)
    }
    

}

function createUser(req, res) {
  // enctriptamos el password al crear el user
req.body.password = bcrypt.hashSync(req.body.password, 10)
Users.create(req.body)
  .then((user) => res.json(user))
  .catch((err) => res.json(err));
}


function deleteUserById (req, res) {
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: false,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
