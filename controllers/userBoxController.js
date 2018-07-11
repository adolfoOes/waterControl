module.exports = function(app) {

    app.get('/userBox',function(req,res){
        var connection = app.persistence.connectionFactory();
        var userBoxDao = new app.persistence.userBoxDao(connection);

        userBoxDao.listAll(function(error,result){

            if (error){
                res.status(500).json({error : error.message});
            } else if (result == '') {
                res.status(404);
                res.send('Nenhum sensor encontrado para o usuário!');
            } else {
                res.json(result);
            }
            
            res.end();
        });
    });

    app.post('/userBox/createUserBox',function(req,res){
        var userBox = req.body;
        var connection = app.persistence.connectionFactory();
        var userBoxDao = new app.persistence.userBoxDao(connection);

        userBoxDao.save(userBox, function(error,result){
            
            if (error){
                res.status(500).json({error : error.message});
            } else {
                res.json(result);
            }
            res.end();
        });
    });

    app.get('/userBox/findByUser', function(req,res){

        var user = req.query;

        console.log(user)

        var connection = app.persistence.connectionFactory();
        var userBoxDao = new app.persistence.userBoxDao(connection);

        userBoxDao.findByUserId(user.id,function(error,result){

            if (error){
                res.status(500).json({error : error.message});
            } else {
                res.json(result);
            }

            res.end();
        })


    })

}