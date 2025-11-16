import React from "react";
import Button from "../../components/Button/Button";
import InputField from "../../components/Input/InputField";
import Linkk from "../../components/Link/Index";

const Login = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form>
        <InputField
          label="Email"
          type="email"
          placeholder="Masukkan email"
          name="email"
          className
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Masukkan password"
          name="password"
        />
        <Button text="Login" />
        <Linkk href="/register">Register disini</Linkk>
      </form>
    </>
  );
};

export default Login;
