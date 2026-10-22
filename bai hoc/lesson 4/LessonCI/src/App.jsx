function App() {
  let age = 10;
  const handleIncAge = () => {
    age++;
    console.log(age);
  };

  return (
    <div className="app">
      <h1>Hello mọi người!</h1>
      <p>Mỗi năm tôi sẽ được tăng 1 tuổi</p>
      <p>Hiện tại tôi: {age} tuổi!</p>
      <button onClick={handleIncAge}>Tăng tuổi</button>
    

    
      <p>Moi nam toi se duoc tang 1 tuoi</p>
      <p>Hien tai toi:{age} tuoi!</p>
      <button onClick={handleIncAge}>Tang tuoi</button>
      <h2>Phan 1: Su dung useState</h2>
      <AgeState>
       <h2>Phan 2 : Su dung Light-Bulb</h2>
       <LightBulb>
        <h3>Phan 3 :validate Email</h3>
        <gsdsgds></gsdsgds>
    <div/>
  );
};

export default App;