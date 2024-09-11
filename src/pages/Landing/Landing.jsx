// assets
import logotype from '../../assets/branding/forker-wtext.png'

// css
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>
          <img src={logotype} alt="A cute googly eyed fork" />
        </section>
        <section className={styles.about}>
          <header>
            <h3>WHO THE FORK ARE WE </h3>
            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
            Whether you're new to town or a seasoned local food enthusiast, FEAST FINDER empowers you to find and explore culinary delights, one dish at a time! Find your next feast with ease. Signup or login to get started.
            </p>
          </article>
        </section>
        </main>
        <footer className={styles.footer}>
        <p>© 2024 FEAST FINDERS INC. FORK RIGHTS RESERVED</p>
      </footer>
    </>
  )
}

export default Landing