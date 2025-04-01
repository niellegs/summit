# Especificações do Projeto

A definição do problema foi dado pelo antropologia, uma técnica de observação que nos permitiu criar as personas e usuários abaixo.

## Personas

<div align="center">



| Sabrina Almeida |![Design sem nome(2)](https://github.com/user-attachments/assets/eb0ff4a0-2ed4-421b-8faf-5ea0b5279fa0)  |
|-----------------|-|
|Idade: |42|
|Ocupação: | Servidora pública aposentada|
|Motivações: | Melhorar a comunicação e o acompanhamento de tarefas da equipe, evitando retrabalho e atrasos.|
|Hobbies: | Ciclismo, leitura sobre inovação e gestão.|

| Camila Torres |![Design sem nome(3)](https://github.com/user-attachments/assets/34217f25-d2f8-45c4-9877-2e7abe8c1806) |
|-----------------------|-|
|Idade:|29|
|Ocupação:| Coordenadora de Marketing|
|Motivações| Gerenciar demandas do time de criação e manter um fluxo de trabalho organizado.|
|Frustrações| Equipes dispersas, dificuldade em acompanhar quem está sobrecarregado e quem precisa de mais tarefas. |
|Hobbies| Viajar, assistir séries e praticar yoga.|

|João Martins |![Design sem nome(4)](https://github.com/user-attachments/assets/5a11ca2d-1eb9-450e-b688-2f502f6ad1b8)|
|-----------------------|-|
|Idade:|35|
|Ocupação:| CEO de uma startup|
|Motivações| Acompanhar os principais indicadores de produtividade e garantir que os times cumpram metas. |
|Frustrações| Falta de visibilidade sobre o andamento dos projetos e comunicação ineficiente entre setores. |
|Hobbies| Jogar xadrez, maratonar documentários sobre negócios. |

|Renata Oliveira|![Design sem nome(5)](https://github.com/user-attachments/assets/4941019f-5ad5-4b32-807b-06cab286eb3c)  |
|-----------------------|-|
|Idade:|25|
|Ocupação:| Freelancer (Desenvolvedora Front-End)|
|Motivações| Gerenciar melhor o tempo e organizar as entregas de projetos para diferentes clientes.|
|Frustrações| Dificuldade em priorizar tarefas, perder prazos por falta de organização. |
|Hobbies| Jogar RPG, aprender novas tecnologias.|

|Pedro Santos|![Design sem nome(6)](https://github.com/user-attachments/assets/93f8f6e8-35aa-49d0-bac8-6756ba86e943)|
|-----------------------|-|
|Idade:|31|
|Ocupação:| Líder técnico em uma empresa de software|
|Motivações| Melhorar a colaboração entre os desenvolvedores e ter uma visão clara do progresso das sprints.|
|Frustrações| Equipes trabalhando de formas isolada, falta de clareza nas demandas. |
|Hobbies| Jogar videogames, cozinhar pratos diferentes.|

</div>

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                             |PARA ... `MOTIVO/VALOR`                 |
|--------------------|--------------------------------------------------------------------------------|----------------------------------------|
|Sabrina Almeida| Acompanhar o andamento das tarefas da minha equipe | Evitar retrabalhos e atrasos|
|Camila Torres| Gerenciar demandas do meu time | Acompanhar quem tem mais tarefas e evitar sobrecarregar os membros do time|
|João Martins| Acompanhar os principais indicadores de produtividade | Garantir  que meu time cumprirá as metas|
|Renata Oliveira| Priorizar tarefas e gerenciar prazos | Entregar os projetos para seus clientes dentro do prazo|
|Renata Oliveira| Organizar os meus projetos | Facilitar o desenvolvimento para diferentes clientes em paralelo|
|Pedro Santos| Ter uma visão clara do progresso das sprints | Acompanhar e gerenciar a evolução do software|


## Modelagem de Processo de Negócio - Wally

### Análise da Situação Atual

A gestão eficiente de quipes e projetos é um desafio constante para empresas e profissionais que buscam alta produtividade e organização. Muitas equipes ainda enfrentam dificuldades na comunicação, na distribuição de tarefas e no acompanhamento de entregas, o que impacta diretamente na performance e nos resultados.

Os principais problemas identificados incluem:
- **Falta de centralização:** As informações e tarefas ficam dispersas em diferentes canais e ferramentas, dificultando o acompanhamento.
- **Baixa visibilidade do progresso:** Gestores e equipes têm dificuldade em mensurar a evolução dos projetos em tempo real.
- **Comunicação fragmentada:** O uso excessivo de e-mails, mensagens e reuniões desorganizadas gera ruídos e perdas de tempo.
- **Dificuldade na delegação de tarefas:**  Sem um sistema eficiente, definir responsabilidades e acompanhar execuções torna-se desafiador.
- **Falta na automação:** Muitos processos operacionais são manuais, reduzindo a eficiência e aumentando a margem de erro.

A necessidade de uma solução integrada e intuitiva se torna evidente, permitindo que times coçaborem de forma organizada, acompanhem seu desempenho e otimizem seu fluxo de trabalho com transparência e eficiência.

![Flowchart](https://github.com/user-attachments/assets/d5be9436-f43f-49ed-8973-24996cb71f94)

## Indicadores de Desempenho

| Indicador                              | Descrição | Objetivo | Cálculo | Fonte de Dados | Perspectiva |
|----------------------------------------|-----------|----------|---------|-----------------|-------------|
| **Lucratividade**          | Quantidade de lucro gerado ao usuário | Avaliar a economia gerado aos usuários. | A diferença entre os recursos necessários antes e depois do gerenciamento de tarefas. | Base de dados do app | Financeiro |
| **Produtividade**          | Nível de aproveitamento das tarefas entregues | A porcentagem de tarefas entregues dentro do prazo estabelecido. | Base de dados do app | Cliente |
| **Qualidade**          | Insights de pontos para melhoria em um processo. | Aprimorar o processo a fim de obter resultados melhores de forma mensurável. | Quantidade de erros e acertos em cada medidor de produtividade | Base de dados do app | Cliente |
| **Percentual de Satisfação dos Usuários**          | Percentual de usuários que avaliaram positivamente a aplicação baseado em pesquisas de feedback. | Medir o nível de aceitação de um aplicativo. | (Avaliações positivas / Total de avaliações) * 100  | Base de dados do app | Aprendizado e Crescimento |

## Requisitos

As tabelas a seguir apresentam uma descrição detalhada dos requisitos funcionais e não funcionais que definem o escopo do projeto:



