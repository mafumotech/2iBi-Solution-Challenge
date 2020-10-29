# 2iBi-Solution-Challenge
Este repositório contem o projecto do desafio proposto pela empresa 2iBi software.
para acessar o demo click aqui: https://mafumotech.github.io/2iBi-Solution-Challenge/
# Ferramentas
Para o desenvolvimento desta aplicação foram utilizadas as seguintes ferramentas:
- Typesript
- Angular 7
- datatables.net
- Consumiu-se a API RESTCOUNTRIES do site https://restcountries.eu  

# Desenvolvimento
Para iniciar o meu desenvolvimento, criei dois components em /src/app/pages, um component dashboard-component.ts e xml.component.ts,
no component dashboard.component.ts, criei uma tabela com os campos solicitados no desafio do repositório da 2iBi,
onde são populados todos os dados dos países consumidas apartir do link: https://restcountries.eu/rest/v2/all.
Para consumir esta API, criei um serviço chamado dashboard.service.ts localizado em /src/app/pages/dashboard

Esta tabela também contém 3 botões. 
- Botão XML para gerar XML (criando um código)
- Botão Excel para gerar XLS (padrão do datatable)
- Botão CSV para gerar CSV (padrão do datatable)

ao clicar no botão XML és redirecionado para o component xml.component.ts, onde é gerado o código XML.

Assim cumpriu-se com todos os passos pedidos no desafio.
