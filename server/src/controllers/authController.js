import jwt from 'jsonwebtoken';
import Users from '../models/userSchema.js'

export const register = async (req, res) => {
    try {
        // const user = await Users.create(req.body)
        const newuser = new Users(req.body)
        await newuser.save()
        const token = jwt.sign({ username: newuser.username, role: "User" }, process.env.SECRET_KEY , { expiresIn: "60h" });
        res.send({token})
    } catch (error) {
        res.status(403).send({ message: error })
    }
}


export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await Users.findOne({ username })
        if (!user) {
            res.status(403).send({ message: "Wrong Username!" })
            return
        }       
        if (user.password !== password) {
            res.status(403).send({ message: "Wrong password!" })
            return
        }
        const token = jwt.sign({ username: user.username, role: user.role }, process.env.SECRET_KEY);
        res.status(200).json(token)                              
    } catch (error) {
        res.status(403).send({ message: error })
    }
}