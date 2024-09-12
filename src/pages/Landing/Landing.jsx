// assets
import logotype from '../../assets/branding/forker-with-text.png'

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
              Feast Finder is your go-to app for discovering and sharing the best dishes in town. Whether you’re new to the area or a seasoned local, Feast Finder can guide you to top-rated meals and hidden gems near you. Rate individual dishes with our Fork Rating system, and watch as your favorite restaurants earn scores based on your top picks. Connect with fellow food lovers, find trending dishes, and build your personalized list of must-try spots. Feast Finder is your ultimate guide to enjoying the best flavors your city has to offer!
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