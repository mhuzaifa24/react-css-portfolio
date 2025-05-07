    import React, { createContext, useState } from "react";

    export const PageTitleContext = createContext();

    export const PageTitleProvider = ({ children }) => {
    const [pageTitle, setPageTitle] = useState("Home");

    return (
        <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
        {children}
        </PageTitleContext.Provider>
    );
    };
