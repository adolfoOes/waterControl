module.exports = function(app) {

    app.get('/users',function(req,res){
        var connection = app.persistence.connectionFactory();
        var userDao = new app.persistence.userDao(connection);

        userDao.listAll(function(error,result){

            if (error){
                res.status(500).json({error : error.message});
            } else if (result == '') {
                res.status(404);
                res.send('Nenhum usuário encontrado!');
            } else {
                res.json(result);
            }
            
            res.end();
        });
    });

    app.post('/users/createUser',function(req,res){
        var user = req.body;
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