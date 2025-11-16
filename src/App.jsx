import AuthLayout from "./layouts/AuthLayout";
import Register from "./pages/auth/Register";
import React from "react";

function App() {
  return (
    <AuthLayout>
      {/* <Login /> */}
      <Register />
    </AuthLayout>
  );
}

export default App;
