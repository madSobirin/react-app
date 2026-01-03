import Navbar from "../components/fragments/Navbar";
import Header from "../components/fragments/Header";
import { name } from "../db/Name";
const MainLayout = ({ children }) => {
  return (
    <div>
      {name.map(({ name }) => (
        <Navbar title="navbar" username={name} />
      ))}

      <Header title="Header page" />
      {children}
    </div>
  );
};

export default MainLayout;
