const api ="https://jsonplaceholder.typicode.com/todos";
 
async function fetchData(){
    try {
        const response =await fetch(api);
        console.log(response)
        if(!response.ok){
            //tr  loi cho catch
            throw new Error('Loi$:{response.status}${respsonse.statusText}')
        }
        const data =await response.json();
        
    }
    catch(error){}
}