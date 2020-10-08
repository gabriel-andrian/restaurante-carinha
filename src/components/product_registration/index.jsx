import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
const ProductRegistration = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordTarget, setPasswordTarget] = useState('');

  useEffect(() => {
    axios({
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      url: `https://json-server-order-here.herokuapp.com/owner_password`,
    }).then((data) => {
      setPasswordTarget(data.data[0].password);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    password === passwordTarget
      ? history.push('/product-registration/edit')
      : setErrorMessage(!errorMessage);
  };

  return (
    <div>
      <h1>Editar Cardápio</h1>
      <form>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="A senha é 1234"
        />
        <input type="submit" onClick={handleSubmit} value="Enviar" />
      </form>
      <p>{errorMessage && 'Senha Inválida'}</p>
    </div>
  );
};
export default ProductRegistration;
