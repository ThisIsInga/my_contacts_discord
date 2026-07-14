import './App.css'
import Block from "./components/block/Block.tsx";

function App() {
  return (
    <>
      <section className="background">
        <section className="main_contacts">
          <h2>My Contacts</h2>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
          <Block/>
        </section>
      </section>
    </>
  )
}

export default App;