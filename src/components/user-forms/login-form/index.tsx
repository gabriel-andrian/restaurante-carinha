import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { IReducer } from '../../../redux/reducers';
import { requestSession, IdataLogin } from '../../../redux/actions/login';
import {
  ContainerTitle,
  H3Styled,
  H3ErrorStyled,
  InputEmail,
  InputPassword,
  ContainerSubmit,
  InputSubmit,
  DivText,
  ContainerRegister,
  ContainerLinkRegister,
} from './styled';

import Select from 'react-select';
import { VoidExpression } from 'typescript';

interface Props {
  dataTables: Array<any>;
}

const UserLoginForm = ({ dataTables }: Props) => {
  const { register, unregister, handleSubmit, setValue, errors } = useForm();


  const dispatch = useDispatch();
  const history = useHistory()

  const token: (string | null) = useSelector((state: IReducer) => state.session.token);
  token && history.push('/menu')

  const submitEmail = (data: IdataLogin) => {
    dispatch(requestSession(data));
  };

  useEffect(() => {
    register('email', {
      required: 'e-mail não pode estar em branco',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'formato de e-mail inválido',
      },
    });
    register('password', { required: 'senha não pode estar em branco' });
    register('table', { required: 'Selecione uma mesa' });
    return () => {
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  return (
    <>
      <form onSubmit={handleSubmit(submitEmail)} style={{ backgroundColor: 'black' }}>
        <ContainerTitle>
          Seja bem vindo <div>Faça seu login para continuar:</div>
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
        <div>
          {errors.table ? (
            <H3ErrorStyled>{errors.table.message}</H3ErrorStyled>
          ) : (
              <H3Styled>Mesa:</H3Styled>
            )}
          <div style={{ 
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '11vh',
            maxHeight: '80px',
            width: '46vw',
            maxWidth: '250px',
            }}>
            <Select
              defaultValue={null}
              onChange={({ id }: any) => setValue('table', id)}
              options={dataTables}
              ref={register}
            /></div>
        </div>
        <div>
          <ContainerSubmit>
            <InputSubmit type="submit" value="LOGAR" />
          </ContainerSubmit>
        </div>
        <DivText>Ainda não tem Cadastro?</DivText>
        <ContainerRegister>
          <ContainerLinkRegister>
            <Link
              style={{
                fontSize: '20px',
                color: 'white',
              }}
              to="/register">
              CADASTRAR
            </Link>
          </ContainerLinkRegister>
        </ContainerRegister>
      </form>
    </>
  );
};

export default UserLoginForm;
