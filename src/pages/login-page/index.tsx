import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserLoginForm } from '../../components';

interface Table {
  id: number;
  label: string;
  avaliable: boolean;
}

const LoginPage = () => {
  const [dataTables, setDataTables] = useState([]);

  useEffect(() => {
    const url = `https://json-server-order-here.herokuapp.com/`;
    const api = axios.create({
      baseURL: url,
      headers: { 'Content-Type': 'application/json' },
    });
    api.get('tables').then((res) => {
      setDataTables(res.data.filter((table: Table) => table.avaliable));
    });
  }, []);

  return <UserLoginForm dataTables={dataTables} />;
};

export default LoginPage;
