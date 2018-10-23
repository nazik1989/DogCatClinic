app.factory('names', function(){
    console.log("mtav servisi mej");
    var obj = {};

    obj.arr = [];

    obj.add = function(sendedData){
        console.log(sendedData);
        obj.arr.push(sendedData);
    };

    obj.get = function(){
        return obj.arr;
    };
    console.log(3,obj);

    return obj;
});