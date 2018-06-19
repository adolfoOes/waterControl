module.exports = function(app) {

    app.get('/users',function(req,res){
        console.log('List all users.');

        console.log(app.persistence)

        var connection = app.persistence.connectionFactory();
       
        console.log('List userDao.');
        
        var userDao = app.persistence.userDao(connection);

        console.log(userDao)

        res.send('OK');
        res.end();
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