const roleModel = require('../schemas/role')
const mongoose = require('mongoose')

const getAllRoles = async () => {
    try {
        const roles = await roleModel.find({ isDeleted: false })
        return roles
    } catch (error) {
        console.log('Error in getAllRoles', error)
        throw error
    }
}
const createRole = async (roleData) => {
    try {
        const roles = await new roleModel(roleData)
        await roles.save()
        return roles
    } catch (error) {
        console.log(error)
        throw error
    }
}

const getRoleById = async (id) => {
    try {
        const role = await roleModel.findOne({ _id: id, isDeleted: false })
        return role
    } catch (error) {
        console.log('Error in getRoleById', error)
        throw error
    }
}

const updateRole = async (id, roleData) => {
    try {
        const role = await roleModel.findOneAndUpdate({ _id: id, isDeleted: false }, roleData, { new: true })
        return role
    } catch (error) {
        console.log('Error in updateRole', error)
        throw error
    }
}

const deleteRole = async (id) => {
    try {
        const role = await roleModel.findByIdAndUpdate({ _id: id }, { isDeleted: true }, { new: true })
        return role
    } catch (error) {
        console.log('Error in deleteRole', error)
        throw error
    }
}

module.exports = {
    getAllRoles,
    createRole,
    getRoleById,
    updateRole,
    deleteRole
}