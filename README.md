# Guess a Number Game

Um mini-jogo interativo e responsivo de adivinhação de números desenvolvido com HTML5, CSS3 e JavaScript. O projeto desafia o utilizador a adivinhar um número gerado aleatoriamente pelo sistema dentro de um intervalo de 1 a 100, contando com um número limitado de tentativas e feedbacks em tempo real.

## Tecnologias Utilizadas

* HTML5: Estruturação semântica do card do jogo, campo de entrada numérica (`<input type="number">`) e elementos textuais de status.
* CSS3: Estilização completa, uso de cantos suavizados, gerenciamento de sombras projetadas e paleta de cores minimalista.
* JavaScript: Lógica do jogo (geração de número pseudo-aleatório, validação de entrada, contagem de tentativas e manipulação do DOM para exibir os resultados).

## Funcionalidades e Técnicas Aplicadas

* Geração Aleatória Dinâmica: O motor em JavaScript gera um número secreto utilizando `Math.random()` a cada nova partida iniciada.
* Sistema Dinâmico de Tentativas: Controle rígido do limite de jogadas (exibindo "You have 10 chances"), que decresce conforme o utilizador envia palpites incorretos.
* Input e Validação de Dados: Campo de texto minimalista e centralizado com cantos arredondados, otimizado para receber apenas valores numéricos válidos.
* Botão de Ação Direta: Botão "Check" estilizado com preenchimento azul sólido de alto contraste para submissão imediata do palpite.
* Interface Limpa e Flutuante: O card branco do jogo apresenta cantos arredondados por meio de `border-radius` e uma sombra suave (`box-shadow`), centralizado perfeitamente com Flexbox sobre um plano de fundo azul plano e vibrante.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone 
