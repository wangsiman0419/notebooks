const fs=require('fs');
fs.readFile('./name.json',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        var res=JSON.parse(data);
        console.log(res)
    }
})