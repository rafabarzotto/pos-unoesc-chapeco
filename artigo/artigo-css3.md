# Artigo CSS3 - Rafael Barzotto

##### Unoesc Chapecó
##### Pós-graduação em Desenvolvimento Web, Cloud e dispositivos Móveis - WebMob
##### Disciplina: HTML5+CSS3
##### Professor: Jean Carlo Nascimento
##### Acadêmico: Rafael Barzotto
##### E-mail: {rafabarzotto@hotmail.com}
----------------
### 1 - CSS Animation

##### O que é?
Com as animações CSS é possível definir uma mudança de estilo para outro estilo.
Gerar animações deixando o conteudo ou a página da web mais dinâmica, em alguns casos
pode se substituir as animações flash ou javascript pelo CSS Animation, que é renderizado de forma mais rápida.


##### Onde usar:
Qualquer página da Web que se deseja implementar conteudo dinâmico e atrativo.

##### Como Usar:
Descrever como o elemento será animado com o keyframe, este que indicara o estado inicial e final da animação de acordo
com uma porcentagem. 0% inicio, 100% fim.

```css
@keyframes example {
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}
}
```

Depois aplicar o keyframe em um selector para que a animação possa acontecer.

```css
div {
    animation-name: exemplo; /* Nome da animacão */
    animation-duration: 5s;  /* duração */
    animation-timing-function: ease; /* progressão da animação no tempo */
    animation-delay: 1s; /* quando inicia */
    animation-iteration-count: infinite; /*repetição da animação */
    animation-direction: alternate; /*direção de inicio, começar pelo incio ou pelo final */
    animation-play-state: running; /*define se a animação está rodando ou nao */
}
```


##### Exemplo:

Um exemplo de como aplicar está definido no item *Como Usar:*

##### Referência:

(http://tableless.com.br/transition-e-animation/)
----------------
### 2 - CSS Transition

##### O que é?
Quando se usa a propriedade :hover ou :focus para mudar o estado de um elemento, a troca ocorre bruscamente
de um estado a outro.
Para suavisar a troca entre os estados escolhidos de forma suave, pode-se usar o CSS transition, este que realizada 
a troca de forma dinâmica de acordo com o determinado tempo.

##### Onde usar:
Alterar a cor de uma palavra ou o background para chamar a atenção ao passar o mouse pelo elemento.
Alterar forma ou tamanho de um elemento dinâmicamente em um periodo de tempo determinado

##### Como Usar:

```css
div {
    width: 100px; /* largura */
    height: 100px; /* altura */
    background: red; /* cor do background */
    transition: width 2s; /* tipo de transição e tempo de duração */
}
```

Ao passar o mouse aciona o :hover aumenta de 100px para 300px em uma transição suave que levará 2 segundos.

```css
div:hover {
    width: 300px;
}
```
##### Exemplo:

Um exemplo de como aplicar está definido no item *Como Usar:*

##### Referência:

(http://tableless.com.br/transition-e-animation/)

----------------
### 3 - CSS Transform

##### O que é?
Propriedade do CSS capaz de mover, girar ou inclinar um elemento.

##### Onde usar:

Em qualquer elemento que se deseje alterar o tamanho, angulo, rotação e mudança de lugar.

##### Como Usar:

```css
div {
    transform: rotate(7deg); /* define a transformação, será aplicado um giro de 7deg*/
    transform: translation(10);            /* move o elemento no eixo x e y */
    transform: scale(0.5);                   /* tamanho do elemento */
    transform: skew(30deg);                   /* angulo do elemento */
}
```

##### Exemplo:

```css
div {
    transform: rotate(3deg);
}
```

##### Referência:

(https://css-tricks.com/almanac/properties/t/transform/)

----------------
### 4 - CSS Cursor

##### O que é?
Define um tipo de cursor, pode ser usado ao passar por cima de um elemento, assim visualizando a partir do icone do cursor
o que tal elemento faz.

##### Onde usar:

Um exemplo prático é a definição do cursor com o icone de *Ajuda*, para que o usuario saiba que ao clicar naquele determinado local irá receber ajuda da documentação, tutorial, etc.

##### Como Usar:

Basta definir o tipo do icone de acordo com o elemento.

os tipos podem ser:

auto
crosshair
default
e-resize
grab
help
move
n-resize
ne-resize
nw-resize
pointer
progress
s-resize
se-resize
sw-resize
text
w-resize
wait
not-allowed
no-drop

##### Exemplo:

```css
span.crosshair {
    cursor: crosshair;
}

span.help {
    cursor: help;
}

span.wait {
    cursor: wait;
}
```


##### Referência:

(http://www.htmlgoodies.com/beyond/css/article.php/3470321)

----------------
### 5 - CSS Filter

##### O que é?

CSS Filter pode ser usado para aplicar filtros em imagens, assim como os do instagram, ou photoshop..
Esses filtros são definidos no proprio css.

##### Onde usar:

Em imagens que se deseja aplicar um efeito, deixando-as mais estilosas.

##### Como Usar:

Basta escolher o tipo do filtro e valor que determina a quantidade de efeito aplicado..
Os filtros podem ser:

    blur
    brightness
    contrast
    drop-shadow
    grayscale
    sepia
    hue-rotate
    invert
    opacity



##### Exemplo:

```css
img {
    filter: grayscale(100%); /* deixa a imagem em escala de cinza com o valor máximo aplicado no filtro */
}
```

##### Referência:

(http://tableless.com.br/css-filters-aplicando-filtros-em-imagens-com-css/)

----------------
### 6 - CSS Word-Break

##### O que é?

Tem como função não deixar os textos, frases, palavras escaparem para fora da div, de um paragrafo, etc.
Ao invés do conteudo sair de dentro do seu elemento, o elemento aumentará de tamanho.

##### Onde usar:

Em elementos como paragrafos, titulos, subtitulos, artigos, etc. Onde seja necessario que o conteudo em texto não
extrapole os limites 

##### Como Usar:

Apenas aplicar o cod do word break no elemento necessario.

```css
h.title {
    width: 11px; 
    word-wrap: break-word;
}
```

##### Exemplo:

Um exemplo de como aplicar está definido no item *Como Usar:*

##### Referência:

(https://developer.mozilla.org/pt-BR/docs/Web/CSS/word-wrap)

----------------
### 7 - CSS Z-Index

##### O que é?

O z-index tem como função definir a prioriedade, ou a ordem em que está determinado elemento dentro de uma pilha.

##### Onde usar:

Um caso simples para exemplificar, é imaginar que você precisa deixar que um texto, um elemento p por exemplo, fique sob 
uma imagem. Para isso pode-se usar o z-index.

##### Como Usar:

Basta adicionar no elemento qual sua prioriedade.
o código é:
    z-index: -1;
sendo que os números negativos representam um prioriedade menor, e os positivos um prioriedade maior.


##### Exemplo:

```css
img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
p.ex {
    width: 11px;
    z-index: 1; /* Esse elemento ficará por cima da imagem */
}
```

##### Referência:

(http://www.devmedia.com.br/css-z-index-entendendo-sobre-o-eixo-z-na-web/28698)

----------------
### 8 - CSS Clip

##### O que é?

CSS clip tem como função cortar elementos. Basta lembrar que só funciona com elementos tagados como fixed ou absolut.

##### Onde usar:

Elemento que necessita ser cortado, seja para para reduzir tamanho, mudar a forma do elemento, ou qualquer fim especifico.

##### Como Usar:

Para usar o clip deve se definir qual elemento será cortado, e passar a propriedade rect
com as cordenadas do corte sendo elas: topo, direita, inferior, esquerda.

##### Exemplo:

```css
img {
    position: absolute;
    clip: rect(0px,20px,100px,0px);
}
```

##### Referência:

(https://css-tricks.com/clipping-masking-css/)

----------------
### 9 - CSS VH-Unit

##### O que é?

View ports unit.

Usado para definir o tamanho de um elemento de acordo com o tamanho da tela.

##### Onde usar:

Em qualquer elemento em que desejar

##### Como Usar:

Define o tamanho do elemento em *vh*, o vh equivale a porcentagem em relação ao tamanho da tela em questão.

```css
p {
  height: 30vh; /* o tamanho do paragrafo ocupará 30% da tela visivel. */
} 
```

##### Exemplo:

Um exemplo de como aplicar está definido no item *Como Usar:*

##### Referência:

(http://glauberramos.com/12-regras-css-poucos-conhecem.html)

----------------
### 10 - CSS Z-Index

##### O que é?

Para não ficar limitado as fontes padrões, a propriedade font-face deixa importar externamente uma fonte para ser usada.
A fonte pode estar armazenada no computador ou na web, basta passar o endereço dela.

##### Onde usar:

Qualquer página da web onde seja preciso deixar mais bonito, alterando as fontes.

##### Como Usar:

Usar o codigo da propriedade font-face definindo um apelido para a fonte, sua localização, formato, tamanho e estilo.
Depois é só aplicar a fonte onde quiser. Como no exemplo.

```css
@font-face {
    font-family: Blackout; /* nome da fonte */
    src: url("font.ttf") format("truetype"); /* localização e formato */
    font-weight: normal; /* tamanho */
    font-style: normal; /* estilo */
}
```

##### Exemplo:

```css
p { font-family: "Blackout", Cursive; }
```

##### Referência:

(http://tableless.com.br/font-face-fonts-externas-na-web/)


