import Navbar from "../components/fragments/Navbar";
import Header from "../components/fragments/Header";
import { data } from "../pages/Data";
const MainLayout = ({ children }) => {
  return (
    <div>
      {data.map((item) => (
        <Navbar key={item.name} title="navbar" username={item.name} />
      ))}
      <Header title="Header page" />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
