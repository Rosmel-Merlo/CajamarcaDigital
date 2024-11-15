import NavBar from "./Components/navBar/NavBar";
import SideBar from "./Components/sideBar/SideBar";

function App() {

  const {} = useBoolean(false);
  return (
    <div>
      <NavBar />
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
