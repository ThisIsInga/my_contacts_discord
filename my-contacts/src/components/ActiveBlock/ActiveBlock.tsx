import './ActiveBlock.css'
import {useState} from "react";

interface BlockProps {
  tag: string;
  app: string;
  url: string;
}

function Block({tag, app, url}: BlockProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <a href={url} target="_blank">
            <section className="block_contacts">
              <p 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                className="contact_text"
              >
                <span className={isHovered ? "text_visible" : "text_hidden"}>{tag}</span>
                <span className={!isHovered ? "text_visible" : "text_hidden"}>{app}</span>
              </p>
            </section>
        </a>
    </>
  )
}

export default Block;
