
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post }from './components/Post'

import styles from './App.module.css'

import './global.css'


export default function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Isabella Poloni"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, suscipit architecto totam eveniet qui soluta placeat sint at, doloremque mollitia rerum atque nostrum nobis beatae optio sit. Et, nemo adipisci."
          />
          <Post
            author="Post teste"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}

