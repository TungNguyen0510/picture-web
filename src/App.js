import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTER } from "./router";
import NotFoundPage from "./feature/not-found";
import PrivateLayout from "./layout/private";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {APP_ROUTER.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateLayout>
                <route.element />
              </PrivateLayout>
            }
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
