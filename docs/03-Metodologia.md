# Metodologia

O método ágil adotado neste projeto é o **SCRUM**, um framework que proporciona maior organização, eficiência e adaptabilidade ao desenvolvimento de software. Sua abordagem é baseada na entrega incremental do produto, por meio de ciclos curtos e contínuos denominados sprints, garantindo uma evolução constante e alinhada às necessidades do projeto.

O **SCRUM** estrutura papéis bem definidos, promovendo um fluxo de trabalho disciplinado e colaborativo. Essa estruturação permite a divisão eficiente das tarefas, fortalecendo a equipe para enfrentar desafios e aprimorando a
comunicação entre os membros.

A metodologia incentiva a troca de conhecimento e o debate construtivo de ideias, resultando em soluções mais inovadoras e adaptáveis. Dessa forma, esse método ágil não apenas otimiza o processo de desenvolvimento, mas também melhora a qualidade do produto final e a satisfação dos envolvidos.

## Relação de Ambiente de Trabalho

Os artefatos do projeto serão desenvolvidos utilizando **React Native** como framework principal para a construção da aplicação móvel e **ASP.NET** para a construção do website onlide. Os testes e validações serão realizados em dispositivos móveis físicos, emuladores e navegadores. A tabela abaixo apresenta os ambientes de trabalho e suas respectivas plataformas:

| Ambiente | Plataforma | Link de Acesso |
|---------------|----------------------------------------------|----------------|
| Design e Prototipação | Figma | |
| Desenvolvimento | React Native, Expo e Node.js | |
| Testes | Emuladores (Android Studio, iOS Simulator) e dispositivos físicos| |
| Testes | Navegadores (Chrome, Firefox, Edge e Safari) | |
| Produção | Google Play Store, Apple App Store | |
| Documentação do Projeto | Github | https://github.com/niellegs/summit/tree/main/docs |
| Gerenciamento de Tarefas do Projeto | GitHub Projects | |
| Hospedagem | a definir | |

## Controle de Versão
A ferramenta de controle de versão adotada no projeto foi o **Git**, com o repositório hospedado no **GitHub**, devido à sua facilidade de uso e à experiência técnica dos membros da equipe. O GitHub oferece uma interface prática e uma excelente integração com outras ferramentas de desenvolvimento, tornando o gerenciamento do código mais eficiente.

O projeto segue uma versão simplificada do modelo **Gitflow** para organização do versionamento. As principais **branches** adotadas são:

- `main`: Esta branch contém a versão estável do software, já testada e pronta para produção.
- `dev`: A branch de desenvolvimento e homologação, onde todas as novas features e correções de bugs são mescladas. Funciona como o ambiente de testes e preparação para a versão de produção.
- `testing`: Esta branch pode ser utilizada para versões que estão sendo testadas antes de serem validadas para a **dev** ou **main**. O fluxo de trabalho permite que a **dev** seja continuamente atualizada com
novas funcionalidades e correções de bugs, sendo, então, mesclada à **main** quando uma versão estável e testada estiver pronta para lançamento. O gerenciamento de **issues** no GitHub é utilizado para organizar e priorizar o trabalho do projeto. O sistema de **labels** (etiquetas) foi adotado para categorizar e facilitar o acompanhamento das atividades. As etiquetas são as seguintes:
- `documentation`: Utilizada para melhorar ou adicionar informações à documentação do projeto.
- `bug`: Usada quando uma funcionalidade ou parte do sistema apresenta erros ou problemas que precisam ser corrigidos.
- `enhancement`: Utilizada quando há necessidade de melhorias ou ajustes em funcionalidades já existentes no software.
- `feature`: Usada quando uma nova funcionalidade está sendo adicionada ao sistema.

### Processo

Para facilitar a organização e o acompanhamento das atividades, será utilizado o **Github Project**. vés do **Quadro Kanban**, as tarefas são distribuídas de forma visual e clara, garantindo que todos os membros da equipe saibam o status de cada atividade. O quadro está organizado da seguinte forma:

- **Product Backlog:** Esta lista contém todas as tarefas, funcionalidades e melhorias a serem implementadas ao longo do projeto. Representa o *Backlog do Produto*, onde todas as atividades são inicialmente registradas e priorizadas conforme as necessidades do cliente.
- **To Do:** Aqui estão as tarefas que foram selecionadas para a Sprint atual, também conhecidas como *Sprint Backlog*. Essas atividades estão prontas para serem iniciadas e são a base para o trabalho da equipe durante o ciclo da Sprint.
- **In Progress:** Esta lista contém as tarefas que já foram iniciadas. À medida que os membros da equipe começam a trabalhar nas atividades, elas são movidas para essa coluna, garantindo visibilidade do progresso do trabalho em andamento.
- **Done:** As tarefas que foram concluídas, testadas e validadas entram nesta lista. Elas estão prontas para serem entregues ao cliente ou stakeholders e são consideradas entregas finalizadas. A movimentação para essa lista indica que as atividades passaram pelos controles de qualidade e estão de acordo com os requisitos definidos.

**Planejamento:**
<br>
A primeira etapa do projeto Wally envolveu a concepção, definição da proposta de solução e a estruturação inicial do projeto. O foco foi estabelecer a base documental e arquitetural, garantindo um direcionamento claro para o desenvolvimento da aplicação. Foram definidas as seguintes atividades:
- Levantamento do problema e definição do escopo do projeto;
- Identificação dos objetivos gerais e específicos;
- Definição do público-alvo e justificativa do projeto;
- Elaboração das especificações do projeto, incluindo personas e histórias de usuário;
- Modelagem do processo de negócio utilizando BPMN para análise da situação atual e proposta de solução;
- Definição dos requisitos funcionais e não funcionais;
- Estabelecimento de restrições e regras de negócio;
- Criação do diagrama de casos de uso e matriz de rastreabilidade de requisitos;
- Planejamento do gerenciamento do projeto (cronograma, equipe e orçamento).

**Execução:**
<br>
Durante essa fase, a equipe estruturou toda a documentação de contexto e especificação do projeto. Foram realizadas reuniões para alinhamento das definições, validação das necessidades do usuário e organização das tarefas no quadro Kanban.
- Produção da documentação inicial e modelagem de processos de negócio (BPMN);
- Estruturação dos requisitos e restrições do projeto;
- Desenvolvimento dos primeiros diagramas UML para representar casos de uso;
- Definição da estratégia de rastreabilidade de requisitos para acompanhar o progresso do projeto.

**Evidências:**
<br>
- Documento de contexto consolidado, com definição clara do problema edos objetivos do projeto;
- Modelagem de processos de negócio finalizada (BPMN);
- Primeiras versões dos diagramas UML e matriz de rastreabilidade concluídas;
- Planejamento detalhado do gerenciamento do projeto, incluindo cronograma e divisão de papéis.
<h4 align="center">Etapa 1:</h4>

**Planejamento:**
<br>
Na segunda etapa, o foco esteve na continuidade da elaboração do projeto e no início do desenvolvimento da solução, garantindo uma base sólida para a implementação das funcionalidades essenciais. As atividades planejadas incluíram:
- Definição da metodologia de desenvolvimento (SCRUM) e configuração do ambiente de trabalho;
- Implementação do gerenciamento ágil do projeto, priorizando organização e eficiência;
- Criação do projeto de interface, incluindo wireframes e diagrama de fluxo para representar a experiência do usuário;
- Modelagem da arquitetura da solução, abrangendo diagrama de classes, modelo entidade-relacionamento (ER) e esquema relacional do banco de dados;
- Desenvolvimento do template padrão da aplicação, definindo identidade visual (logo, cores, tipografia e iconografia);
- Planejamento e estruturação dos testes de software e usabilidade para garantir a qualidade da solução.
  
**Execução:**
<br>
Com a estrutura do projeto bem definida, a equipe iniciou as implementações essenciais, focando na organização e consistência da aplicação. As principais ações realizadas foram:
- Desenvolvimento do projeto de interface, garantindo uma navegação intuitiva e alinhada às necessidades dos usuários;
- Definição e construção do template padrão da aplicação, consolidando a identidade visual;
- Elaboração e formalização dos planos de teste, estabelecendo critérios para a validação das funcionalidades.

**Evidências:**
<br>
- Wireframes e diagramas de fluxo concluídos, representando a jornada do usuário na aplicação;
- Arquitetura da aplicação documentada e validada, garantindo alinhamento com os requisitos do projeto;
- Registros dos planos de 
