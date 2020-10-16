import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonStyle, InputStyle, ContainerForm } from '../styleds';
import { message } from 'antd';
import { useHistory } from 'react-router-dom';

const UserRegForm = () => {
  const { register, unregister, handleSubmit, setValue, errors, watch } = useForm();
  let history = useHistory();

  const submitEmail = (data: object) => {
    const url = `https://json-server-order-here.herokuapp.com`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });

    api
      .post('register', data)
      .then(() => {
        message.success('Cadastro feito com sucesso!');
        history.push('/');
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          message.error('Email já existente!', 3);
        }
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
    register('password', {
      required: 'Senha não pode estar em branco *',
      minLength: { value: 8, message: 'Senha deve ter ao menos 8 caracteres *' },
    });
    register('passwordConf', {
      required: 'Confirmação de senha não pode estar em branco *',
      validate: (value) => value === watch('password') || 'Confirmação de senha diferente',
    });

    return () => {
      unregister('name');
      unregister('email');
      unregister('password');
      unregister('passwordConf');
    };
  }, [register, unregister]);

  return (
    <ContainerForm onSubmit={handleSubmit(submitEmail)}>
      <InputStyle placeholder="Nome" onChange={(e) => setValue('name', e.target.value)} />
      {errors.name && <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.name.message}</h3>}

      <InputStyle placeholder="E-mail" onChange={(e) => setValue('email', e.target.value)} />
      {errors.email && (
        <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.email.message}</h3>
      )}

      <InputStyle
        placeholder="Senha"
        type="password"
        onChange={(e) => setValue('password', e.target.value)}
      />
      {errors.password && (
        <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.password.message}</h3>
      )}

      <InputStyle
        placeholder="Confirmação de Senha"
        type="password"
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
    </ContainerForm>
  );
};

export default UserRegForm;
