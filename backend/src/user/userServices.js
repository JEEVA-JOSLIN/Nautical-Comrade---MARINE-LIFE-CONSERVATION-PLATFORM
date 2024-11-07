var userModel = require('./userModel');
module.exports.getDataFromDBServie=()=>{
    return new Promise(function checkURL(resolve,reject){

        userModel.find({},function returnData(error,result){
            if(error)
            {
                reject(false);
            }
            else{
                resolve(result);
            }
        });
    });
}


module.exports.createUserDBService =(userDetails) => {

    return new Promise(function myFn(resolve,reject)
{
    var userModelData = new userModel();
    userModelData.email = userDetails.email;
    userModelData.password=userDetails.password;
    userModelData.save(
        
        
        function resultHandle(error,result){
    if(error)
    {
        reject(false);
    }
    else
    {
        resolve(true);
    }});
});
}
 