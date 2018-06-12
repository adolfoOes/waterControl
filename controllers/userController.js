module.exports = function(app) {

    app.get('/users',function(req,res){
        console.log('List all users.');
        res.send('OK');
    });

    app.post('/users/createUser',function(req,res){
        var user = req.body;
        console.log('Creating a new user.');
        var connection = app.persistence.connectionFactory();
        var userDao = app.persistence.userDao(connection);

        userDao.create(user, function(error,result){
            console.log('User created.');
            res.json(user);
        });

        res.send(user);
    });
}