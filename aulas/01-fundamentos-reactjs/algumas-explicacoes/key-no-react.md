# Key no React

## Por que única?

3 principais momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera; 
2. Quando a propiedade aletra; 
3. Quando um componente pai renderiza novamente;

-----------

1, 2, 3, 4 

------------

1, 2, 3, 4, 5 -> ao correr uma nova renderização, ao ter um key única, ele entende qual informação ele deve redenrizar sem precisar renderizar o conteúdo que ja foi renderizado


## Por que não posso usar o índice do array?

```js
    const posts = [1, 2, 3, 4, 5]
    //0, 1, 2, 3, 4

    //por algum motivo precisei mudar meus números de posição, o react vai entender que ele deve renderizar novamente meu componente, mas os indices não irão mudar e dessa forma o react irá entender que deve renderizar novamente o componente
    const posts = [1, 2, 5, 4, 3]
    //0, 1, 2, 3, 4

```