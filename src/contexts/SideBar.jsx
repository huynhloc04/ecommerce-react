import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState(null);
  return (
    <SideBarContext.Provider
      value={{ isOpen, setIsOpen, sidebarType, setSidebarType }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
