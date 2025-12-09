import { useContext } from "react";
import DataContext from "../context/DataContext";

function BOne() {
    const { demo, name } = useContext(DataContext);
    return (<>

        <h2>{name}</h2>
    </>);
}

export default BOne;