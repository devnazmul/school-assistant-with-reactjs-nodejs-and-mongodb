const Teacher = require("../../models/Teacher");
const User = require("../../models/User");

const test = (req, res) => {
    res.send('test teacher controller.');
}

const create = (req, res) => {
    User.find({ email: req.headers.user_email }, (err, user) => {
        if (!err) {
            if (user.length > 0) {
                if (user[0]?.is_admin) {
                    Teacher.create({
                        spacial_at: req.body.spacial_at,
                        name: req.body.name,
                        email: req.body.email,
                        phone: req.body.phone,
                        gander: req.body.gander,
                        about: req.body.about,
                        date_of_birth: req.body.date_of_birth,
                        password: req.body.password,
                    }).then((teacher)=>{
                        res.send({
                            data:teacher
                        })
                    })


                } else {
                    res.send({
                        message: 'Sorry unable to create teacher!'
                    })
                }
            } else {
                res.send({
                    message: 'Sorry unable to create teacher!'
                })
            }
        } else {
            res.send({
                message: 'Sorry unable to create teacher!'
            })
        }
    })
}

module.exports = {
    test,
    create
};