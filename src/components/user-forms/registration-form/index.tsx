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
    register('name', { required: 'Nome não pode estar em branco *' });
    register('email', {
      required: 'Email não pode estar em branco *',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Email inválido *',
      },
    });
    register('password', { required: 'Senha não pode estar em branco *',minLength:{value:8 , message:'Senha deve ter ao menos 8 caracteres *'} });
    register('passwordConf', {
      required: 'Confirmação de senha não pode estar em branco *',
      validate: (value) => value === watch('password') || 'Confirmação de senha difere *',
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
        <input
          style={{
            maxWidth: '400px',
            width: '80%',
            lineHeight: '3em',
            fontFamily: 'sans-serif',
            margin: '1em 2em',
            borderRadius: '5px',
            border: '2px solid #f2f2f2',
            outline: 'none',
            paddingLeft: '10px',
            fontSize: '20px'
          }}
          placeholder="Nome"
          onChange={(e) => setValue('name', e.target.value)} />
          {errors.name && <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.name.message}</h3>}
      </div>
      <div>
        <input
          style={{
            maxWidth: '400px',
            width: '80%',
            lineHeight: '3em',
            fontFamily: 'sans-serif',
            margin: '1em 2em',
            borderRadius: '5px',
            border: '2px solid #f2f2f2',
            outline: 'none',
            paddingLeft: '10px',
            fontSize: '20px'
          }}
          placeholder="E-mail"
          onChange={(e) => setValue('email', e.target.value)} />
          {errors.email && <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.email.message}</h3>}
      </div>
      <div>
        <input
          style={{
            maxWidth: '400px',
            width: '80%',
            lineHeight: '3em',
            fontFamily: 'sans-serif',
            margin: '1em 2em',
            borderRadius: '5px',
            border: '2px solid #f2f2f2',
            outline: 'none',
            paddingLeft: '10px',
            fontSize: '20px'
          }}
          placeholder="Senha"
          onChange={(e) => setValue('password', e.target.value)} />
          {errors.password && <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.password.message}</h3>}
      </div>
      <div>
        <input
          style={{
            maxWidth: '400px',
            width: '80%',
            lineHeight: '3em',
            fontFamily: 'sans-serif',
            margin: '1em 2em',
            borderRadius: '5px',
            border: '2px solid #f2f2f2',
            outline: 'none',
            paddingLeft: '10px',
            fontSize: '20px'
          }}
          placeholder="Confirmação de Senha"
          onChange={(e) => setValue('passwordConf', e.target.value)} />
          {errors.passwordConf && <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.passwordConf.message}</h3>}
      </div>
      <div style={{
        placeContent: 'center center',
        display: 'flex',
      }}>
        <input
          style={{
            placeContent: 'end center',
            height: '11vh',
            maxHeight: '80px',
            width: '46vw',
            maxWidth: '200px',
            background: '#26C000',
            border: '1px solid #000',
            borderRadius: '20px',
            fontSize: '20px'
          }}
          type="submit" value="CADASTRAR" />
      </div>
    </form>
  );
};

export default UserRegForm;
