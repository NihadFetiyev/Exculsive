const express = require('express');
const userModel = require('../Models/UserModel.js');

const router = express.Router();


// CRUD for users
router.get('/', async (req, res) => {
    try {

        const users = await userModel.find({});
        res.send(users)
    } catch (error) {
        res.status(500).json({ message: error })

    }
})
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = await userModel.findById(id)
        res.send(user)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.post('/', async (req, res) => {
    try {
        const user = new userModel(req.body);
        await user.save()
        res.send(user)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.put('/:id', async (req, res) => {
    try {

        const { id } = req.params
        const user = await userModel.findByIdAndUpdate(id, req.body)

        res.send(user)
    } catch (error) {
        res.status(500).json({ message: error })

    }
})

router.delete('/:id', async (req, res) => {
    try {

        const user = await userModel.findByIdAndDelete(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})


module.exports = router