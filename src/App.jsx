import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <AuthLayout>
      {/* <Login /> */}
      <Register />
    </AuthLayout>
  );
}

export default App;
