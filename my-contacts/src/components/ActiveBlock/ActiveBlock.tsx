import style from './ActiveBlock.module.css'
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
            <section className={style.block_contacts}>
              <p 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                className={style.contact_text}
              >
                <span className={isHovered ? style.text_visible : style.text_hidden}>{tag}</span>
                <span className={!isHovered ? style.text_visible : style.text_hidden}>{app}</span>
              </p>
            </section>
        </a>
    </>
  )
}

export default Block;
