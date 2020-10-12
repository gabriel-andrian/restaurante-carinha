import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { setTokenSourceMapRange } from 'typescript';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/login';

const UserLoginForm = () => {
  const { register, unregister, handleSubmit, setValue, errors } = useForm();
  let history = useHistory();
  const dispatch = useDispatch();

  const submitEmail = (data: object) => {
    console.log(data);
    const url = `https://json-server-order-here.herokuapp.com/`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });
    api.post('login', data)
    .then((res) => {
      alert('logado com sucesso');
      console.log(res.data.accessToken);
      localStorage.setItem("token", res.data.accessToken);
      dispatch(login(res.data.accessToken, res.data.user));
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

    // function RegisterButton() {
    //   let history = useHistory();

    //   function handleClick() {
    //     history.push("/register");
    //   }
    //   return (
    //     <button type="button" onClick={handleClick}>
    //       Go home
    //     </button>
    //   )
    // }

    // const nextPath = (path) => {
    //   this.props.history.push(path);
    // }

    return () => {
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  return (
    <>
      <form onSubmit={handleSubmit(submitEmail)}>
        <div style={{ textAlign: 'center', fontSize: '20px', margin: '1em 2em', }}>Seja bem vindo! <div>Faça seu login para continuar:</div></div>
        <div>
          {
            errors.email
              ?
              <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.email.message}</h3>
              :
              <h3 style={{ textAlign: 'center' }}>Usuário</h3>
          }
          <input style={{
            maxWidth: '400px',
            width: '80%',
            lineHeight: '3em',
            margin: '1em 2em',
            borderRadius: '5px',
            border: '2px solid #f2f2f2',
            paddingLeft: '10px',
            fontSize: '20px'
          }}
            onChange={(e) => setValue('email', e.target.value)} />
        </div>
        <div>
          {
            errors.password
              ?
              <h3 style={{ color: 'red', textAlign: 'center' }}>{errors.password.message}</h3>
              :
              <h3 style={{ textAlign: 'center' }}>Senha</h3>
          }
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
            onChange={(e) => setValue('password', e.target.value)} type='password' />
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
            type="submit" value="LOGAR" />
        </div>
        <div style={{ textAlign: 'center', fontSize: '20px', margin: '1em 2em', }}>Ainda não tem Cadastro?</div>
        <div style={{
          placeContent: 'center center',
          display: 'flex',
          justifyContent: 'center center'
        }}>
        <div style={{
              placeContent: 'end center',
              height: '10vh',
              maxHeight: '50px',
              width: '40vw',
              maxWidth: '180px',
              background: 'lightgray',
              border: '1px solid #000',
              borderRadius: '20px',
            }} >
          <Link 
            style={{
              fontSize: '30px',

            }}
            to='/register'>Clique aqui</Link>
          </div></div>
      </form>
    </>
  );
};

export default UserLoginForm;
