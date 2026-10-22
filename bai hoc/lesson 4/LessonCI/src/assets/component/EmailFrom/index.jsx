import React ,{useState}from 'react'

const EmailFrom = () => {
    const[email , setEmail]= useState("");
    const[isValid,setIsValid] = useState(true);

    //ham kiem tra dinh dang email
    const validateEmail = (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return (
    <div style={{padding :'20px'}}>
      <h3>Kiểm tra định dạng Email</h3>
      <input
        type="text"
        placeholder="Nhập email của bạn"
        value={email}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          border: `2px solid ${isValid ? "green" : "red"}`,
        }}
      />
      <p style={{ color: isValid ? "green" : "red", marginTop: "10px" }}>
        {email
          ? isValid
            ? "Email hợp lệ!"
            : "Email không hợp lệ. Vui lòng kiểm tra lại."
          : "Vui lòng nhập email để kiểm tra."}
      </p>
    </div>
  );
};
}

export default EmailFrom