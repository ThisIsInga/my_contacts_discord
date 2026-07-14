import './Block.css'
import {useState} from "react";

function Block() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
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
    </>
  )
}

export default Block;
