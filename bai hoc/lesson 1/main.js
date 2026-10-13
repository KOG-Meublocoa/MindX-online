const productName = "Laptop Gaming ASUS";
const price2 =25000000;
const stock =12;
console.log('Ten:'${productName}| Gia:$ {price}VND|)

function  dientich (dai,rong) {
    
}
console.log(dientich (5,3));
const dientich2 = (dai,rong)=> dai * rong;
console.log(dientich2 (5,3));

function showfriends(...names){
    return 'Ban co ${names.length} nguoi ban:${names.join(",")}';

}
console.log(showfriends("Lan","Huy","Nam","Hieu"));


function showfriends(leader,...members){
    return `Leader : ${leader}`|Members :${members.join(",")};

}
console.log(showfriendsTeam("Hai","Hoang","Anh","Linh","Hieu"))

const showfriendsTeam2 = (leader,...members)=>{
   return `Leader : ${leader}`|Members :${members.join(",")};
}

// business rule 'luu y'


console.log(greet("MindX"));
console.log(add(1,2))

console.log(fetchUser(1))