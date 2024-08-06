import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [kayitdeg, setKayitdeg] = useState("");
  const [kayitdeg2, setKayitdeg2] = useState("");

  const kayithandle = (event) => {
    setKayitdeg(event.target.value);
  };

  const kayithandle2 = (event) => {
    setKayitdeg2(event.target.value);
  };

  const kayittikla = (event) => {
    event.preventDefault();
    // Giriş işlemleri burada yapılabilir.
    console.log("Giriş işlemi yapılacak.");
  };

  const kayityap = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/Kullanicilar", {
        name: kayitdeg,
        pasword: kayitdeg2
      });
      console.log(response.data);
      // Başarılı bir kayıt sonrası yapılacak işlemler
    } catch (error) {
      console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
      // Hata durumunda yapılacak işlemler
    }
  };

  return (
    <div>
      <div className='container'>
        <form>
          <div>
            <p>Giriş yapınız:</p>
          </div>
          <div className="gir">
            <div>Ad:</div>
            <div><input id="giris" value={kayitdeg} onChange={kayithandle} /></div>
          </div>
          <div className="gir">
            <div>Şifre:</div>
            <div><input id="gir" value={kayitdeg2} onChange={kayithandle2} /></div>
          </div>
          <button onClick={kayittikla}>Giriş</button>
          <button onClick={kayityap}>Kayıt</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
