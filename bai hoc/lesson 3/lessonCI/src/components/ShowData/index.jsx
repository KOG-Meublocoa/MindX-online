// import React from "react";

const ShowData = () => {
  const school = "MindX Technology School";
  const age = 20;
  const listName = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];
  return (
    <div>
      <h3>Bạn là người {age >= 20 ? "Trưởng thành" : "đang lớn"}!</h3>
      <p>Hello mọi người, welcome to {school}!</p>
      <p>5 năm nữa bạnn sẽ {age + 5} tuổi!</p>
      <p>Danh sách (đưa mảng vào trực tiếp): {listName}</p>
      <p>Danh sách nối bằng join: {listName.join(", ")}</p>
    </div>
  );
};

export default ShowData;
