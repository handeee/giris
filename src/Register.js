import React from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
const Register = () => {
  const [Kayitdeg, setKayitdeg] = useState("");
  const [Kayitdeg2, setKayitdeg2] = useState("");
  const newkul=async (name,pasword)=>{
    const response=await axios.post("http://localhost:3000/Kullanicilar",{
      Kayitdeg,
      Kayitdeg2
    });
    console.log((response));
    const newk=[
      
    ]
   }
   
  return (
  
    <div>
       <div className='container'>
      <form>
        <div>
          <p>Giriş yapınız:</p>
        </div>
        <div className="gir">
          <div>Adı:</div>
          <div><input id="giris" onChange={kayithandle} /></div>
        </div>
        <div className="gir">
          <div>Soyadı:</div>
          <div><input id="gir" onChange={kayithandle2} /></div>
        </div>
        <button onClick={kayittikla}>Giriş</button><button onClick={kayityap}>kayıt</button>
      </form>
    </div>
    </div>
  )
}

export default Register
