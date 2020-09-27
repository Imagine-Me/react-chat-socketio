
const express = require('express')
const app = express()
const http = require('http').Server(app)

const fs = require('fs')

app.use(express.static('build/'));

app.get('/:link', (req, res) => {
    return res.redirect('/');
})

const io = require('socket.io')(http)

io.on('connection', function (socket) {
    socket.on("user_join", function (data) {
        const d = {}
        d.name = data.userName
        d.id = data.id
        let users = {}
        const data_file = fs.readFileSync('./data.json', 'utf-8')
        console.log(data)
        if (data_file !== undefined && data_file !== "") {
            const users_d = JSON.parse(data_file).users
            let flag = true
            for (let i = 0; i < users_d.length; i++) {
                if (users_d[i].id === data.id) {
                    flag = false
                }
            }
            if (flag)
                users_d.push(d)
            users.users = users_d
        } else {
            users.users = [d]
        }

        fs.writeFileSync('./data.json', JSON.stringify(users))


        this.userName = data.userName
        this.id = data.id

        socket.broadcast.emit('user_join', users)
        socket.broadcast.emit("user_joined", data.userName)
    })
    socket.on('message', function (data) {
        console.log("MESSAGE ARRIVED ", data)
        socket.broadcast.emit('on_message', data)
    })
    socket.on('disconnect', function (data) {
        socket.broadcast.emit('user_leave', this.userName)
    })
})


http.listen(5000, () => {
    console.log("APP LISTEN ON PORT ", 5000)
})

