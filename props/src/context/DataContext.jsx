import { createContext, useState } from "react";

// Create context outside the component
const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [name, setName] = useState("John Doe");
    const [age, setAge] = useState(30);
    const demo = "This is a demo context";
    return <DataContext.Provider value={{ name, setName, age, setAge, demo }}>{children}</DataContext.Provider>;
}

export default DataContext;