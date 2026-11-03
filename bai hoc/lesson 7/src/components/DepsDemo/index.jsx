//! Cu phap useEffect:
//! useEffect(callback,dependecies)
//! callback: la mot ham duoc goi trong useEffect sau khi return 
//! thuc hien nhiem vu xuat giao dien cua no
//! dependencies : la mot mang chua cac gia tri ma useEffect se theo doi, 
//! va phu thuoc vao no de thuc thi 
import React, { useEffect,useState } from 'react'

const DepsDemo = () => {
    const [count,setCount] = useState(0);
    const [other,setOther] = useState(0);
    console.log("component duoc ve")

    //A:khong truyen dependencies,chay sau moi lan duoc ve
    useEffect(()=>{
        console.log("A:khong co dependencies")
    })
    //B:mang rong ,chi chay lan dau tien
    useEffect(()=>{
        console.log("B mang rong[]")
    },[]);
    //C:chay lan dau,va chay lai khi count thay doi
    useEffect(()=>{
        console.log('C: deps[count], count= ${count}');
},[count])
  return (
    <div>
        <p>count:{count}|other:{other}</p>
        <button onClick={() => setCount(count + 1)}>Tang count</button>
        <button onClick={() => setOther(other + 1)}>Tang other</button>

    </div>
  )
}

export default DepsDemo;