import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {publicRoutes} from './routes/publicRoutes';


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, idx) => <Route
              key={idx}
              path={path}
              element={<Component />} />)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
