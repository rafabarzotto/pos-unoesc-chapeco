# Artigo CSS3 - Rafael Barzotto

##### Unoesc Chapecó
##### Pós-graduação em Desenvolvimento Web, Cloud e dispositivos Móveis - WebMob
##### Disciplina: HTML5+CSS3
##### Professor: Jean Carlo Nascimento
##### Acadêmico: Rafael Barzotto
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

##### Referência:

http://tableless.com.br/transition-e-animation/
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

http://www.w3schools.com/css/tryit.asp?filename=trycss3_transition1

##### Referência:

http://tableless.com.br/transition-e-animation/
----------------
### 3 - CSS Animation

##### O que é?

##### Onde usar:

##### Como Usar:

```css
@keyframes cssanimation
{
from {background: blue;}
to {background: grey;}
}
```

##### Exemplo:

##### Referência:
----------------
### 4 - CSS Animation

##### O que é?

##### Onde usar:

##### Como Usar:

```css
@keyframes cssanimation
{
from {background: blue;}
to {background: grey;}
}
```

##### Exemplo:

##### Referência:
----------------
### 5 - CSS Animation

##### O que é?

##### Onde usar:

##### Como Usar:

```css
@keyframes cssanimation
{
from {background: blue;}
to {background: grey;}
}
```

##### Exemplo:

##### Referência:
----------------
### 6 - CSS Animation

##### O que é?

##### Onde usar:

##### Como Usar:

```css
@keyframes cssanimation
{
from {background: blue;}
to {background: grey;}
}
```

##### Exemplo:

##### Referência:
----------------


