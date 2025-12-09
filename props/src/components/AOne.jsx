import { useContext } from "react";
import DataContext from "../context/DataContext";

function AOne() {
    const { demo, name } = useContext(DataContext);
    return (<>
        <h1>{demo}</h1>
        <h2>{name} is a human</h2>
    </>);
}

export default AOne;