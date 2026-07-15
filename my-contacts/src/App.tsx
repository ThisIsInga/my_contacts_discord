import './App.css'
import ActiveBlock from "./components/ActiveBlock/ActiveBlock.tsx";
import Block from './components/Block/Block.tsx';

function App() {
  return (
    <>
      <section className="background">
        <section className="main_contacts">
          <h2>My Contacts</h2>
          <ActiveBlock url='https://khabarovsk.hh.ru/resume/93cb8b91ff0fd75b340039ed1f484470505157' tag='Инга Сырбу' app='Резюме'/>
          <ActiveBlock url='https://www.youtube.com/@This_Is_Inga' tag='@This_Is_Inga' app='YouTube'/>
          <ActiveBlock url='https://t.me/this_is_inga' tag='@This_Is_Inga' app='Telegram'/>
          <ActiveBlock url='https://t.me/Inga_projects_programming' tag='@Inga_projects_programming' app='Telegram work'/>
          <ActiveBlock url='https://github.com/ThisIsInga' tag='@ThisIsInga' app='GitHub'/>
          <ActiveBlock url='https://this-is-inga.itch.io/' tag='@this-is-inga' app='itch.io'/>
          <ActiveBlock url='https://www.twitch.tv/f1shf1ssh' tag='@f1shf1ssh' app='Twitch'/>
          <ActiveBlock url='https://steamcommunity.com/id/this_is_inga/' tag='@kadzuzui' app='Steam'/>
          <Block title='City' text='Khabarovsk'/>
          <Block title='Language' text='Eng / Ru'/>
          <Block title='Birthday' text='12 August'/>
        </section>
      </section>
    </>
  )
}

export default App;