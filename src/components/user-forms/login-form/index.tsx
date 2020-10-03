import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserLoginForm = () => {
  const { register, unregister, handleSubmit, setValue, errors } = useForm();

  const submitEmail = (data: object) => {
    console.log(data);
    const url = `https://json-server-order-here.herokuapp.com`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });
    api.post('login', data).then((res) => {
      alert('logado com sucesso');
      console.log(res.data.accessToken);
    });
  };

  useEffect(() => {
    register('email', {
      required: 'email não pode estar em branco',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'invalid email format',
      },
    });
    register('password', { required: 'senha não pode estar em branco' });

    return () => {
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  return (
    <form onSubmit={handleSubmit(submitEmail)}>
      <div>
        <label>Usuário: </label>
        <input onChange={(e) => setValue('email', e.target.value)} />
      </div>
      <div>
        <label>Senha: </label>
        <input onChange={(e) => setValue('password', e.target.value)} />
      </div>
      <div>
        <button type="submit">Logar</button>
      </div>
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
    </form>
  );
};

export default UserLoginForm;
