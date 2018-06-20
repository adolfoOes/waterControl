module.exports = function(app) {

    app.get('/users',function(req,res){
        var connection = app.persistence.connectionFactory();
        var userDao = new app.persistence.userDao(connection);

        userDao.listAll(function(error,result){

            console.log('test')
            res.json(result);
            res.end(); 

        });
    });

    app.post('/users/createUser',function(req,res){
        var user = req.body;
        console.log('Creating a new user.');
        console.log(app.persistence);
        var connection = app.persistence.connectionFactory();
        var userDao = new app.persistence.userDao(connection);

        userDao.save(user, function(error,result){
            
            if (error){
                res.status(500).json({error : error.message});
            } else {
                res.json(user);
            }
            res.end(); 
        });
    });
}