import Header from "./components/Header";
import Content from "./components/Content";
function App() {

  const press = () => {
    let bs = ["John", "David", "Vimal"];
    let num = Math.floor(Math.random() * 3);
    console.log(bs[num]);
  }
  return (
    <>
      <Header></Header>
      <Content></Content>
    </>
  )
}

export default App
