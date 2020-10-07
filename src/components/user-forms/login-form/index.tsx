import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { HiMenuAlt3 } from 'react-icons/hi';

const UserLoginForm = () => {
  const { register, unregister, handleSubmit, setValue, errors } = useForm();

  const submitEmail = (data: object) => {
    console.log(data);
    const url = `http://localhost:3001`;
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
        {
        errors.email 
        ? 
        <h3 style={{ color: 'red', textAlign:'center' }}>{errors.email.message}</h3> 
        : 
        <h3 style={{textAlign:'center'}}>Usuário</h3>
        }
        <input style={{
          maxWidth:'400px',
          width: '80%',
          lineHeight: '3em',
          margin: '1em 2em',
          borderRadius: '5px',
          border:'2px solid #f2f2f2',
          paddingLeft: '10px',
          fontSize: '20px'
        }} 
        onChange={(e) => setValue('email', e.target.value)} />
      </div>
      <div>
        {
        errors.password 
        ? 
        <h3 style={{ color: 'red', textAlign:'center' }}>{errors.password.message}</h3> 
        : 
        <h3 style={{textAlign:'center'}}>Senha</h3>
        }
        <input 
        style={{
          maxWidth:'400px',
          width: '80%',
          lineHeight: '3em',
          fontFamily: 'sans-serif',
          margin: '1em 2em',
          borderRadius: '5px',
          border:'2px solid #f2f2f2',
          outline: 'none',
          paddingLeft: '10px',
          fontSize: '20px'
      }}
        onChange={(e) => setValue('password', e.target.value)} type='password'/>
      </div>
      <div style={{
          placeContent: 'center center', 
          display: 'flex',
          }}>
        <input 
        style={{
          placeContent: 'end center',
          height:'11vh',
          maxHeight: '80px',
          width:'46vw',
          maxWidth: '200px',
          background:'#26C000',
          border:'1px solid #000',
          borderRadius:'20px',
          fontSize: '20px'
         }}
        type="submit" value="LOGAR" />
      </div>
    </form>
  );
};

export default UserLoginForm;
