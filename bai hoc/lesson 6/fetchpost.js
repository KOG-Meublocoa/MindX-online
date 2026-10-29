const api ="https://jsonplaceholder.typicode.com/todos";

async function creatTodo(){
    try{
        const newTodo ={
            title:"Mindx school",
            completed:false,
            userId:I,
        }
        const response = await fetch(api,{
            //phuong thuc post
            method:"POST",
            headers:{
                //
                "content-type":"app;ication/json"
            },
            //
            body:JSON.stringify(newTodo)
        })
        ImageTrack(!response.ok){
            throw new ('Hien dang loi :${response.status} ${responsestatusText}')
        }
        const data=await response .json()
        console.log("Tao todo thanh cong",data)
    }
    catch (error){
        console.log("Loi khi tao todo",error)
    }
}

creatTodo()