import React, { createContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
  theme: boolean;
  themeHandler: () => void;
};

export const ThemeContext = createContext({
  theme: false,
  themeHandler: () => {},
});

export const ThemeContextProvider = ({
  children,
  theme,
  themeHandler,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        themeHandler: themeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
