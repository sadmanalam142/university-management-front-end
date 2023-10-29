import LoginPage from '@/components/Login/page';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "UMS | Login",
  description: "Generated by create next app",
};

const Login = () => {
  return (
    <LoginPage/>
  );
};

export default Login;