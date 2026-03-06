const roleService = require('../service/roleService')

const getAllRole = async (req, res) => {
    try {
        const roles = await roleService.getAllRoles()
        res.status(200).json(roles)
    } catch (error) {
        res.status(400).json(error)
    }
}
const createRole = async (req, res) => {
    try {
        const roles = await roleService.createRole(req.body)
        if (roles)
            res.status(200).json(roles)
        else
            res.status(400).json({ message: 'Role not created' })
    } catch (error) {
        res.status(400).json(error)
    }
}
const deleteRole = async (req, res) => {
    try {
        const role = await roleService.deleteRole(req.body.role_id)
        if (role)
            res.status(200).json(role)
        else
            res.status(400).json({ message: 'Role not deleted' })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getAllRole,
    createRole,
    deleteRole
}