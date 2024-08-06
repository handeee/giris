import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const Form = ({ degeral, degeral2 }) => {
  const [deger, setdeger] = useState(''); // Define the state variable
  const [deger2, setdeger2] = useState(''); // Define the state variable
  const navigate=useNavigate();

  const handle = (event) => {
    const value = event.target.value;
    setdeger(value);
    degeral(value);
  };

  const handle2 = (event) => {
    const value = event.target.value;
    setdeger2(value);
    degeral2(value);
  };
  const tikla = async (event) => {
    event.preventDefault(); // Prevent form submission
  let user;
    try {
      const response = await fetch("http://localhost:3000/Kullanicilar");
      const data = await response.json();
  
     user =data.find(element => deger === element.name && deger2 === element.pasword);
      if (user) {
        console.log("Giriş başarılı");
        navigate('/');
      } else {
        console.log("Giriş başarısız");
        console.log(user); // This will still log undefined if no user is found
      }
    } catch (error) {
      console.error("Veri alınamadı", error);
    }
  };
  
  const kayityap=()=>{
   navigate("/register");

  }
  return (
    <div className='container'>
      <form>
        <div>
          <p>Giriş yapınız:</p>
        </div>
        <div className="gir">
          <div>Adı:</div>
          <div><input id="giris" onChange={handle} /></div>
        </div>
        <div className="gir">
          <div>Soyadı:</div>
          <div><input id="gir" onChange={handle2} /></div>
        </div>
        <button onClick={tikla}>Giriş</button><button onClick={kayityap}>kayıt</button>
      </form>
    </div>
  );
};

export default Form;
