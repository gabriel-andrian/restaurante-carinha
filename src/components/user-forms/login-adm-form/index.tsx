import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { requestSession, IdataLogin } from '../../../redux/actions/login';
import {
  ContainerTitle,
  H3Styled,
  H3ErrorStyled,
  InputEmail,
  InputPassword,
  ContainerSubmit,
  InputSubmit,
} from './styled';

const LoginAdmin = () => {
  const { register, unregister, handleSubmit, setValue, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const submitEmail = (data: IdataLogin) => {
    dispatch(requestSession(data));
  };

  useEffect(() => {
    register('email', {
      required: 'e-mail não pode estar em branco',
      pattern: {
        value: /^admin@kenzie.com$/,
        message: 'usuário não autorizado',
      },
    });
    register('password', { required: 'senha não pode estar em branco' });
    return () => {
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  return (
    <>
      <form onSubmit={handleSubmit(submitEmail)}>
        <ContainerTitle>
          Seja bem vindo! <div>Faça seu login para acessar a fila dos pedidos na cozinha:</div>
        </ContainerTitle>
        <div>
          {errors.email ? (
            <H3ErrorStyled>{errors.email.message}</H3ErrorStyled>
          ) : (
            <H3Styled>E-mail:</H3Styled>
          )}
          <InputEmail onChange={(e) => setValue('email', e.target.value)} />
        </div>
        <div>
          {errors.password ? (
            <H3ErrorStyled>{errors.password.message}</H3ErrorStyled>
          ) : (
            <H3Styled>Senha:</H3Styled>
          )}
          <InputPassword onChange={(e) => setValue('password', e.target.value)} type="password" />
        </div>
        <ContainerSubmit>
          <InputSubmit type="submit" value="LOGAR" />
        </ContainerSubmit>
      </form>
    </>
  );
};

export default LoginAdmin;

// /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
