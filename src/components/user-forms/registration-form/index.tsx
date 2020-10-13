import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { message } from 'antd';

const UserRegForm = () => {
  const { register, unregister, handleSubmit, setValue, errors, watch } = useForm();

  const submitEmail = (data: object) => {
    //e.preventDefault()
    const url = `https://json-server-order-here.herokuapp.com`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });
    api.post('register', data).then(() => {
      message.success('Cadastro feito com sucesso!');
    })
    .catch(
      message.error("Email já existente!", 3)
    )
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
    register('password', {
      required: 'Senha não pode estar em branco *',
      minLength: { value: 8, message: 'Senha deve ter ao menos 8 caracteres *' },
    });
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
    <form
      style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onSubmit={handleSubmit(submitEmail)}>
      <InputStyle placeholder="Nome" onChange={(e) => setValue('name', e.target.value)} />
      {errors.name && <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.name.message}</h3>}

      <InputStyle placeholder="E-mail" onChange={(e) => setValue('email', e.target.value)} />
      {errors.email && (
        <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.email.message}</h3>
      )}

      <InputStyle placeholder="Senha" onChange={(e) => setValue('password', e.target.value)} />
      {errors.password && (
        <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.password.message}</h3>
      )}

      <InputStyle
        placeholder="Confirmação de Senha"
        onChange={(e) => setValue('passwordConf', e.target.value)}
      />
      {errors.passwordConf && (
        <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.passwordConf.message}</h3>
      )}

      <div
        style={{
          placeContent: 'center center',
          display: 'flex',
        }}>
        <ButtonStyle type="submit" value="CADASTRAR" />
      </div>
    </form>
  );
};
const ButtonStyle = styled.input`
  place-content: end center;
  height: 11vh;
  max-height: 80px;
  width: 46vw;
  max-width: 200px;
  background: #4CAF50;
  border:none;
  outline:none;
  border-radius: 20px;
  font-size: 20px;
  box-shadow: 0 9px #999;
  color:white;
&:hover{
  background-color: #3e8e41
}
&:active{
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`;
const InputStyle = styled.input`
  width: 80%;
  max-width: 400px;
  line-height: 3em;
  font-family: sans-serif;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
`;

export default UserRegForm;
