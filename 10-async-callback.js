const {readFile,writeFile} = require('fs')


readFile('./Images/first.txt', 'utf8', (err,result)=>{

    if(err){
        console.log(err);
        return
    }

    const first = result

    readFile('./Images/second.txt','utf8',(err,result)=>{

        if(err){
            console.log(err);
            return
        }

        const second = result

        writeFile('./Images/result-async.txt',`${first},${second} `,(err,result)=>{
            if(err){
                console.log(err);
                return
            }

            console.log(result);
        })
    })
})