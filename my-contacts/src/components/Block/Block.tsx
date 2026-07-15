import style from './Block.module.css'

interface BlockProps {
    title: string;
    text: string;
}

function Block({title, text}: BlockProps) {

  return (
    <>
      <a target="_blank">
            <section className={style.block_contacts}>
              <p className={style.contact_text}>
                <p>{title}</p>
                <p>{text}</p>
              </p>
            </section>
        </a>
    </>
  )
}

export default Block;
