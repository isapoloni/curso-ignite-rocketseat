import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post(props) {
    console.log('props', props)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src="https://github.com/isapoloni.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Isabella Poloni</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='16 de Novembro ás 18:35h' dateTime='2023-11-16 18:33:40'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
              
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}