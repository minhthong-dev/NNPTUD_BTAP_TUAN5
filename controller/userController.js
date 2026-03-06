const userSerice = require('../service/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userSerice.getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log('Error in getAllUsers', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
const getUserById = async (req, res) => {
    try {
        const user = await userSerice.getUserById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)
    } catch (error) {
        console.log('Error in getUserById', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
const createUser = async (req, res) => {
    try {
        const user = await userSerice.createUser(req.body)
        res.status(201).json(user)
    } catch (error) {
        console.log('Error in createUser', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}
const deleteUser = async (req, res) => {
    try {
        const user = await userSerice.deleteUser(req.params.id)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)
    } catch (error) {
        console.log('Error in deleteUser', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await userSerice.updateUser(req.params.id, req.body)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        res.status(200).json(user)
    } catch (error) {
        console.log('Error in updateUser', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const enableUser = async (req, res) => {
    try {
        const { email, username } = req.body
        const user = await userSerice.enableUser(email, username)
        if (!user) {
            return res.status(404).json({ message: 'User not found or invalid credentials' })
        }
        res.status(200).json(user)
    } catch (error) {
        console.log('Error in enableUser', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

const disableUser = async (req, res) => {
    try {
        const { email, username } = req.body
        const user = await userSerice.disableUser(email, username)
        if (!user) {
            return res.status(404).json({ message: 'User not found or invalid credentials' })
        }
        res.status(200).json(user)
    } catch (error) {
        console.log('Error in disableUser', error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    enableUser,
    disableUser
}  