
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/isapoloni.png',
      name: 'Isabella Poloni',
      role: 'Front End Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal! 👋' },
      { type: 'paragraph', content: 'Estou animada para compartilhar o meu mais recente projeto no meu portfólio. É um aplicativo de gestão de consultas médicas chamado DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-11-17 16:00:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/VictorGVC.png',
      name: 'Victor Gabriel',
      role: 'Back End Developer'
    },
    content: [
      { type: 'paragraph', content: 'E aí, pessoal! 👋' },
      { type: 'paragraph', content: 'Acabei de concluir mais um projeto para o meu portfólio. É um sistema de gerenciamento de banco de dados criado durante o NLW Return, um evento incrível promovido pela Rocketseat. O projeto se chama DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-11-22 10:25:30')
  },
];

//itreação

//forEach retorna undefined

export default function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

