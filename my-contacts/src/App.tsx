import './App.css'
import {useState} from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="background">
        <section className="main_contacts">
          <h2>My Contacts</h2>
          <a href="https://www.twitch.tv/f1shf1ssh" target="_blank">
            <section className="block_contacts">
              <p 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                className="contact_text"
              >
                <span className={isHovered ? "text_visible" : "text_hidden"}>@f1shf1ssh</span>
                <span className={!isHovered ? "text_visible" : "text_hidden"}>Twitch</span>
              </p>
            </section>
          </a>
          <a href="https://t.me/this_is_inga" target="_blank">
            <section className="block_contacts">
              <p 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                className="contact_text"
              >
                <span className={isHovered ? "text_visible" : "text_hidden"}>@This_Is_Inga</span>
                <span className={!isHovered ? "text_visible" : "text_hidden"}>Telegram</span>
              </p>
            </section>
          </a>
          <a href="https://discord.com/users/this_is_inga" target="_blank">
            <section className="block_contacts">
              <p 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                className="contact_text"
              >
                <span className={isHovered ? "text_visible" : "text_hidden"}>@this_is_inga</span>
                <span className={!isHovered ? "text_visible" : "text_hidden"}>Discord</span>
              </p>
            </section>
          </a>
        </section>
      </section>
    </>
  )
}

export default App
