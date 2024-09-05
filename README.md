# Gerenciador de Tarefas

## Descrição
O Gerenciador de Tarefas é um módulo para gerenciamento de tarefas, permitindo adicionar, atualizar, remover e listar tarefas, bem como manipular tags, prioridades e status das tarefas. Este projeto inclui testes unitários para garantir o funcionamento correto de cada funcionalidade.

## Funcionalidades
Adicionar, remover e atualizar tarefas.
Marcar tarefas como concluídas e reabrir tarefas.
Listar tarefas por prioridade, data e status (concluídas ou pendentes).
Contar tarefas com base em prioridade.
Adicionar e remover tags das tarefas.
Listar tarefas por tag.
Ordenar tarefas por data e prioridade.
Instalação
Certifique-se de ter o Node.js e npm instalados. Então, siga os passos abaixo:

## Clone o repositório:
git clone <URL_DO_REPOSITORIO>

## Navegue até o diretório do projeto:
cd <DIRETORIO_DO_PROJETO>

## Instale as dependências:
npm install

## Testes
Os testes são escritos utilizando o framework Jest. Para rodar os testes, execute o seguinte comando:
npm test


## Casos de Teste
## Aqui está uma visão geral dos testes implementados:

Adicionar Tarefa Válida: Verifica se uma tarefa é adicionada corretamente.
Remover Tarefa: Verifica se uma tarefa pode ser removida.
Buscar Tarefa por ID: Verifica se é possível buscar uma tarefa pelo seu ID.
Atualizar Tarefa: Testa a atualização das informações de uma tarefa existente.
Listar Tarefas: Verifica a listagem de todas as tarefas.
Contar Tarefas: Verifica a contagem total de tarefas.
Marcar Tarefa como Concluída: Testa se uma tarefa pode ser marcada como concluída.
Listar Tarefas Concluídas: Verifica a listagem das tarefas concluídas.
Listar Tarefas Pendentes: Verifica a listagem das tarefas pendentes.
Remover Tarefas Concluídas: Testa a remoção de todas as tarefas concluídas.
Buscar Tarefa por Descrição: Verifica a busca de tarefas por sua descrição.
Adicionar Tag a Tarefa: Testa a adição de uma tag a uma tarefa.
Remover Tag da Tarefa: Testa a remoção de uma tag de uma tarefa.
Listar Tarefas por Tag: Verifica a listagem de tarefas com base em uma tag específica.
Buscar Tarefas por Data: Verifica a busca de tarefas por data.
Atualizar Prioridade da Tarefa: Testa a atualização da prioridade de uma tarefa.
Listar Tarefa por Prioridade: Verifica a listagem de tarefas por prioridade.
Contar Tarefas por Prioridade: Verifica a contagem de tarefas com base em sua prioridade.
Marcar Todas as Tarefas como Concluídas: Testa se todas as tarefas podem ser marcadas como concluídas.
Reabrir Tarefa: Testa a reabertura de uma tarefa concluída.
Ordenar Tarefas por Data: Verifica a ordenação das tarefas por data.
Ordenar Tarefas por Prioridade: Verifica a ordenação das tarefas por prioridade.