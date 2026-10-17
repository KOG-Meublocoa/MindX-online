const numbers = [1,2,3,4]
const names = ['An','Binh','Chi']
const mixed =['Ao thun',150000,true]
const empty =[]

console.log("1. Mang numbers :",numbers)
console.log("2. Mang names: ",names)
console.log("3. Mang mixed:", mixed)
console.log("4. Mang empty: ",empty)

const slots = new Array(5)
console.log("1,2",slots)
console.log("1,2 length :",slots,length)

const names2 =['an','binh','chi','dung','em','f','g','h','i','j']
console.log('tim vi tri phan tu 6',names2[5])
console.log('dem do dai cua mang:',names2.length)
console.log(names2[names2.length -1])
console.log(names2.length -1)
console.log('tim vi tri phan tu thu 10',names2[10])
console.log('tim vi tri phan tu am:',names2[-1])


//vd4:gan gia tri moi cho mang
const names3 = ["an","binh","chi"]
console.log('truoc khi update:',names3[0])
names3[0] = "thanh"
console.log('sau khi update:',names3[0])
names3[3] = "lam"
console.log('sau khi them:',names3)


const foods = ["pho","bun cha","com tam","banh mi"];
console.log('tim vi tri mon an dau tien',foods[0],foods[foods.lenght -1 ])
// console.log('tim vi tri mon an cuoi cung',foods[3])
// console.log(foods[2])
foods[2]  = "com suon"
console.log(foods)


//phan 2 : destructuring array va duyet mang
const arrayNumbers = [0,1,2]
const [x,y,z]= arrayNumbers

console.log("Mon 1:",x)
console.log("Mon 2:",y)
console.log("Mon 3:",z)


const team = ['An','Binh','Chi','Dung','Em']
const [leader,memeber1,memeber2,memeber3,memeber4]= team;

console.log("Leader:",leader)
console.log('Memeber1:',memeber1)
console.log('Memeber2:',memeber2)
console.log('Memeber3:',memeber3)
console.log('Memeber4:',memeber4)

const scores = [9,8,7,6,5]
const [best,second] = scores;
const [first, ,third] = scores;
const [head,...others] = scores;
const last = others[others.length -1]

console.log("best,second",best,second)
console.log("first,third",first,third)
console.log("head,others",others)
console.log(head,last)

// const arr =[1,2,3,4,5]
// for(let i = 0 ; < arr.length; i ++){
//     const element = arr[i]
//     console.log('vi tri ${i}: ${element}')
// }

// for (let i = 0;i<foods.length)


