import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserRegForm = () => {
  const { register, unregister, handleSubmit, setValue, errors, watch } = useForm();

  const submitEmail = (data: object) => {
    const url = `http://localhost:3001`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });
    api.post('register', data).then(() => {
      alert('usuário cadastrado');
    });
  };

  useEffect(() => {
    register('name', { required: 'Nome não pode estar em branco ' });
    register('email', {
      required: 'email não pode estar em branco',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'email inválido',
      },
    });
    register('password', { required: 'senha não pode estar em branco' });
    register('passwordConf', {
      required: 'confirmação de senha não pode estar em branco',
      validate: (value) => value === watch('password') || 'Confirmação de senha difere',
    });

    return () => {
      unregister('name');
      unregister('email');
      unregister('password');
      unregister('passwordConf');
    };
  }, [register, unregister]);

  return (
    <form onSubmit={handleSubmit(submitEmail)}>
      <div>
        <label>Nome: </label>
        <input onChange={(e) => setValue('name', e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input onChange={(e) => setValue('email', e.target.value)} />
      </div>
      <div>
        <label>Senha: </label>
        <input onChange={(e) => setValue('password', e.target.value)} />
      </div>
      <div>
        <label>Confirmação de Senha: </label>
        <input onChange={(e) => setValue('passwordConf', e.target.value)} />
      </div>
      <div>
        <button type="submit">Cadastrar</button>
      </div>
      {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      {errors.passwordConf && <p style={{ color: 'red' }}>{errors.passwordConf.message}</p>}
    </form>
  );
};

export default UserRegForm;
