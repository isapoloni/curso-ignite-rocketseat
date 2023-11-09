import { useState } from 'react'
import Post from './Post'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'


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

