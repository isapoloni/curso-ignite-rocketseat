import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'



//O react não fica "obeservando" os valores das variaveis se o estado vai mudar ou não, não é performático  
//Estado = variáveis que eu quero que o componente monitore



export function Post({ author, publishedAt, content }) {

    //desestruturação do state, o setX é usado para causar alterações no estado e avisa ao react que foi feito tal alteração para ler
    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
    ]);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    });
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });
    
    
    function handleCreateNewComment() {
        event.preventDefault()

        //imutabilidade
        //spread operator = ele le o valor da variavél comment e copia 
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória), dessa forma para o react é mais rápido analisar um novo espaço, doq um espaço ja existente

        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        
        setComments(commentsWithoutDeleteOne);
    }

    /*
        exemplo usando o Intl do javascript
        const publishedDateFormatted = new Intl.DateTimeFormat('pt-br', {
            day: '2-digit',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
    
        }).format(publishedAt);
    */

    const isNewCommentEmpty = newCommentText.length === 0;


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        hasBorder
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}