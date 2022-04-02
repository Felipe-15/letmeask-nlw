# Letme Ask

O projeto consiste em um **Q&A Real-time**, ou seja, uma aplicação de perguntas e respostas em tempo real com funcionalidades de salas, foi feito em base da **NLW** da <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a>, mas com algumas adições como:
- Styled Components
- Switch de Temas (Escuro e Claro)
- Páginas e lógicas para proteção de entradas sem permissões em salas já encerradas ou de outros donos por meio de url.
- Modal para remover perguntas
- Responsividade
- Componentes para carregamento

## Como funciona

A aplicação tem a possibilidade de criação de salas por meio de login com conta Google, sem login é possível apenas entrar em alguma sala aberta, mas não é possível mandar mensagens enquanto estiver sem login. Para banco de dados e "listening" de mudanças nas salas como novas perguntas é usado o Firebase Database Realtime que conta com várias funções para webhooks que permitem com mais facilidade que o app seja realtime, e é usado também o Google Auth Provider oferecido pelo mesmo para que o login seja rápido e fácil.

## Preview
