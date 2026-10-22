import React ,{useState} from 'react'
import LightBulb from '../LightBulb';

const AgeState = () => {
    //khoi tao state voi useState
    const [age , setAge]=useState();
    const handleIncAge = {}=> {
        setAge(age +1);
//!useState();=>Gia trri khoi tao ban dau la underfined(chua co gi ca)
//!useState("")=> chuoi rong
//!useState(0)=>gia tri khoi tao la 0
    };
    return (
    
    )

}
export default AgeState