import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/StoreProvider';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import routers from '@/routers/routers';
import SideBar from '@components/SideBar/SideBar';
import { Suspense } from 'react';

function App() {
  return (
    <ToastProvider>
      <ThemeProvider>
        <StoreProvider>
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
        </StoreProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}

export default App;
