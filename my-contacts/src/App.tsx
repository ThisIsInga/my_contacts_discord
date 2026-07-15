import './App.css'
import ActiveBlock from "./components/ActiveBlock/ActiveBlock.tsx";

function App() {
  return (
    <>
      <section className="background">
        <section className="main_contacts">
          <h2>My Contacts</h2>
          <ActiveBlock url='https://www.twitch.tv/f1shf1ssh' tag='@f1shf1ssh' app='Twitch'/>
          <ActiveBlock url='https://www.youtube.com/@This_Is_Inga' tag='@This_Is_Inga' app='YouTube'/>
          <ActiveBlock url='https://t.me/this_is_inga' tag='@This_Is_Inga' app='Telegram'/>
          <ActiveBlock url='https://t.me/Inga_projects_programming' tag='@Inga_projects_programming' app='Telegram work'/>
          <ActiveBlock url='https://github.com/ThisIsInga' tag='@ThisIsInga' app='GitHub'/>
          <ActiveBlock url='https://steamcommunity.com/id/this_is_inga/' tag='@kadzuzui' app='Steam'/>
        </section>
      </section>
    </>
  )
}

export default App;