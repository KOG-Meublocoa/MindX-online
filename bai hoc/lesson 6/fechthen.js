const api ="https://jsonplaceholder.typicode.com/todos";
//! Fetch la 1 ham do JS cung cap de goi API va no se tra ve 1 Promise  
//! cu phap:
//* fetch (api,requestInit)
//*api:Tham sobat buoc la chuoi (string) chua duong dan API muon goi toi
//*requestInit :tham so khong bat buoc ,la 1 dang Object dinh nghia cac thong tin goi nhu la phuong thuc,du lieu gui di ,dinh dang.


fetch(api).the((Response) => {
    console.log(Response);
    return Response.json();//Day la mot phuong thuc tra ve promise,no se truyen du lieu phan hoithanh dang Json(Oject ,mang)
}).then((data)=>{
    console.log(data)

})
