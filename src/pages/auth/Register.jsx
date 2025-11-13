import React from "react";
import InputField from "../../components/Input/InputField";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Index";

const Register = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form>
        <InputField
          label="Nama Lengkap"
          type="text"
          placeholder="Masukkan nama lengkap"
        />
        <InputField label="Email" type="email" placeholder="Masukkan email" />
        <InputField
          label="Password"
          type="password"
          placeholder="Masukkan password"
          id="password"
        />
        <Button text="Daftar" />
        <Link href="/login">Login disini</Link>
      </form>
    </>
  );
};

export default Register;
