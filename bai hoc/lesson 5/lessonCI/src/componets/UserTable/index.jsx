import React from 'react'

const UserTable = () => {
    const columns =[
{ 
        title:"Name",    //tieu de
        dataIndex:"name",//ten field trong du lieu ma cot lay gia tri
        key:"name",//la khoa duy nhat cho cot,React phan biet su khac nhay giua cac cot
        render:(text)=><a>{text}</a>,//tuy chinh cach hien thi du lieu trong cot
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
    },
    {
        title:"Action",
        key:"action",
        render:(_,record)=>(
            <Space size="middle">
                <a>Invite{record.name}</a>
                <a>Delete</a>
            </Space>
        ),

    
    },
       const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
}, 
    ]
},
  return <Table columns={columns}dataSource={data}></Table>
  //! columns: Mang cau hinh 


export default UserTable
