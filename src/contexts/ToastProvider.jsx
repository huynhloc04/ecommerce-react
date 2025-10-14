import { createContext, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
