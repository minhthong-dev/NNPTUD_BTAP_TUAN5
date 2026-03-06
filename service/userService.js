const userModel = require('../schemas/users')
const mongoose = require('mongoose')

const getAllUsers = async () => {
    try {
        const users = await userModel.find({ isDeleted: false })
        return users
    } catch (error) {
        console.log('Error in getAllUsers', error)
        throw error
    }
}
const getUserById = async (id) => {
    try {
        const user = await userModel.findOne({ _id: id, isDeleted: false })
        return user
    } catch (error) {
        console.log('Error in getUserById', error)
        throw error
    }
}
const createUser = async (userData) => {
    try {
        const user = new userModel(userData)
        await user.save()
        return user
    } catch (error) {
        console.log('Error in createUser', error)
        throw error
    }
}
const deleteUser = async (id) => {
    try {
        const user = await userModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
        return user
    } catch (error) {
        console.log('Error in deleteUser', error)
        throw error
    }
}

const updateUser = async (id, userData) => {
    try {
        const user = await userModel.findOneAndUpdate({ _id: id, isDeleted: false }, userData, { new: true })
        return user
    } catch (error) {
        console.log('Error in updateUser', error)
        throw error
    }
}

const enableUser = async (email, username) => {
    try {
        const user = await userModel.findOneAndUpdate(
            { email: email, name: username, isDeleted: false },
            { Status: true },
            { new: true }
        )
        return user
    } catch (error) {
        console.log('Error in enableUser', error)
        throw error
    }
}

const disableUser = async (email, username) => {
    try {
        const user = await userModel.findOneAndUpdate(
            { email: email, name: username, isDeleted: false },
            { Status: false },
            { new: true }
        )
        return user
    } catch (error) {
        console.log('Error in disableUser', error)
        throw error
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