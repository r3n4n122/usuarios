# Usuarios

Para rodar a aplicação sera necessario ter o docker instalado na maquina

O projeto consiste em criar usuarios, editar, listar e filtrar. 

## Ferramentas utilizadas: 
  > Back-end:
    Ruby on rails, Docker, Postgresql.
    
   > Front-end:
    React, NPM, Material UI.

## Passa a passo para rodar a aplicação:

  - Depois de clonar o projeto execute o comando ```docker compose up --build``` para que o docker crie as imagens necessarias e faça a instalação das ferramentas.

  - Acesse o bash do backend com o comando ```docker compose backend bash``` e execute ```bin/rails db:create```
  quando subir o docker, o projeto vai rodar um bundle install para baixar as gems e npm install para atualizar o package.json
  ### Criando estados e Cidades
  ```
    state = State.new(abbreviation: "SP", name: "São Paulo").save
    city = City.new(name: "São Paulo").save 
  ```
- acessar a porta ```http://localhost:4000```
