function App() {

  const press = () => {
    let bs = ["John", "David", "Vimal"];
    let num = Math.floor(Math.random() * 3);
    console.log(bs[num]);
  }
  return (
    <>
      <h1>Hello React!</h1>
      <button onClick={press}>Student</button>
    </>
  )
}

export default App
