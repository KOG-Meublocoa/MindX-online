import React from 'react'

//Componet Cha : Se dinh nghia ham xu ly va truyen xuong cho con
const ButtonDemo = () => {
    const hanlleSumbit = () => alert("sumbit");
    const hanlleCancel = () => alert("cancel");
  return (
    <div style={}>
         <Button lable="Sumbit" onCLick{hanlleSumbit}/>
         <Button lable="Cancle" onCLick{hanlleCancel}/>
    </div>
  )
}

export default ButtonDemo
