import InputField from "../../components/Input/InputField";
import Button from "../../components/Button/Button";
import Linkk from "../../components/Link/Index";

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
        <Linkk href="/login">Login disini</Linkk>
      </form>
    </>
  );
};

export default Register;
