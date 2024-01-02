# Closures no React

# sempre que voce for atualizar uma informação e essa informação depende do valor que ela tinha anteriormente, ou seja, depende dela mesma é sempre legal fazer essa padrão de funções:

```js
    // use: 
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() { 
        setLikeCount((state) => {
            return state + 1
        })
    }
    
    // ao invés de: 
    function handleLikeCommentClosures() {
        setLikeCount(likeCount + 1);
    }

```


