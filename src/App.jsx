import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SideBarProvider } from '@/contexts/SideBar';
import routers from '@/routers/routers';
import SideBar from '@components/SideBar/SideBar';
import { Suspense } from 'react';

function App() {
  return (
    <SideBarProvider>
      <SideBar />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routers.map(({ path, element: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SideBarProvider>
  );
}

export default App;
