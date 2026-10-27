import React from 'react'

const LoginForm = () => {
    const onFinish = (values)=>{
        //thuc hien hien thi cac gia tri cua from khi nguoi dung submit
        console.log("Success:",values)
    }
  return (
   <Form onFinish-{onFinish}>
   <Form.Item
   lable="Username"
   <From.Item lable ="username" rules={[{required:true,message:"Please input your username!"}]}>
    <Input/>
   </From.Item>
   
   </Form>

  )
}

export default LoginForm