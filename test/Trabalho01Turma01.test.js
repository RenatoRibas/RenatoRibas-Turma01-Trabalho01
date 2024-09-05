const GerenciadorDeTarefas = require("../src/Trabalho01Turma01");


describe('GerenciadorDeTarefas',()=>{
    let tarefa;

    beforeEach(()=>{
        gerenciador = new GerenciadorDeTarefas();
    })

    test("Adicionando tarefa válida",async()=>{
        tarefa = {id: 1, descricao:'Criar README.md',data: '2021-09-04', prioridade: 1, concluida: false};
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.tarefas[0]).toEqual(tarefa);
    })

    test("Removendo tarefa",async()=>{
        gerenciador.removerTarefa(tarefa);
        expect(gerenciador.tarefas[0]).toEqual(undefined);
    })

    test("Buscando tarefa por id",async () => {
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.buscarTarefaPorId(1)).toBe(tarefa);
    })

  test("Atualizar tarefa", () => {
    const tarefa = { id: 1, descricao: 'Criar README.md', prioridade: 1 };
    gerenciador.adicionarTarefa(tarefa);

    const novosDados = { descricao: 'Atualizar README.md', prioridade: 2 };
    gerenciador.atualizarTarefa(1, novosDados);
    const tarefaAtualizada = gerenciador.buscarTarefaPorId(1);
    expect(tarefaAtualizada.descricao).toBe('Atualizar README.md');
    expect(tarefaAtualizada.prioridade).toBe(2);
});


    test("Listando tarefas",async()=>{
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.listarTarefas()).toEqual([tarefa]);
    })

    test("Contando tarefas",async()=>{
        gerenciador.adicionarTarefa(tarefa);
        expect(gerenciador.contarTarefas()).toBe(1);
    })

    test("Marcando tarefa como concluida",async()=>{
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.marcarTarefaComoConcluida(1);
        expect(gerenciador.tarefas[0].concluida).toBe(true);
    })

    test("Listando tarefas concluidas",async()=>{
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.marcarTarefaComoConcluida(1);
        expect(gerenciador.listarTarefasConcluidas()).toEqual([tarefa]);
    })

    test("Listando tarefas pendentes",async()=>{
        tarefa02 = {id: 2, descricao:'Criar tela Home, About e Contato',proridade: 1, concluida: false};
        gerenciador.adicionarTarefa(tarefa02);
        expect(gerenciador.listarTarefasPendentes()).toEqual([tarefa02]);
    })

    test("Removendo tarefas concluidas",async()=>{
        gerenciador.removerTarefasConcluidas();
        expect(gerenciador.tarefas[0]).toEqual(undefined);
    })

    test("Buscando tarefa por descricao",async()=>{
        expect(gerenciador.buscarTarefaPorDescricao('Criar tela Home, About e Contato'));
    })

    test("Adicionar tag a tarefa", () => {
        const tarefa = { id: 1, descricao: 'Criar README.md', tags: [] };
        gerenciador.adicionarTarefa(tarefa);
    
        const tag = 'importante';
        gerenciador.adicionarTagATarefa(1, tag);
        const tarefaAtualizada = gerenciador.buscarTarefaPorId(1);
        expect(tarefaAtualizada.tags).toContain(tag);
    });
    

    test("Remover tag da tarefa", () => {
        const tarefa = { id: 1, descricao: 'Criar README.md', tags: ['importante'] };
        gerenciador.adicionarTarefa(tarefa);
    
        const tagParaRemover = 'importante';
        gerenciador.removerTagDaTarefa(1, tagParaRemover);
    
        const tarefaAtualizada = gerenciador.buscarTarefaPorId(1);
        expect(tarefaAtualizada.tags).not.toContain(tagParaRemover);
        expect(tarefaAtualizada.tags).toEqual([undefined]); // A tag restante deve ser 'trabalho'
    });

   test("Listar tarefas por tag", () => {
    const tarefa1 = { id: 1, descricao: 'Criar README.md', tags: ['importante'] };
    const tarefa2 = { id: 2, descricao: 'Criar tela Home, About e Contato', tags: ['fluxo'] };
    const tarefa3 = { id: 3, descricao: 'Criar dashboards', tags: ['analitycs'] };
    gerenciador.adicionarTarefa(tarefa1);
    gerenciador.adicionarTarefa(tarefa2);
    gerenciador.adicionarTarefa(tarefa3);

    const tagParaPesquisar = 'fluxo';
    const tarefasComTag = gerenciador.listarTarefasPorTag(tagParaPesquisar);

    expect(tarefasComTag).toEqual([tarefa2]);
});


   test ("Buscando tarefas por data", async () => {
        expect(gerenciador.buscarTarefasPorData('2021-09-04'));
    })

    test("Atualizando a prioridade da tarefa", () => {
        tarefa = {id: 1, descricao:'Criar README.md',data: '2021-09-04', prioridade: 1, concluida: false};
        gerenciador.adicionarTarefa(tarefa);
        const novaPrioridade = 2;
        gerenciador.atualizarPrioridade(1, novaPrioridade);
        expect(gerenciador.tarefas[0].prioridade).toBe(2);
    });
    

    test("Listando tarefa por prioridade", () => {   
        const tarefa = {id: 1, descricao: 'Criar README.md', data: '2021-09-04', prioridade: 1, concluida: false};   
        gerenciador.adicionarTarefa(tarefa);
    
        expect(gerenciador.listarTarefasPorPrioridade(1)).toEqual([tarefa]);
    });

    test("Contando tarefas por prioridade", () => {
        const tarefa1 = { id: 1, descricao: 'Criar README.md', prioridade: 1 };
        const tarefa2 = { id: 2, descricao: 'Criar tela Home, About e Contato', prioridade: 2 };
        const tarefa3 = { id: 3, descricao: 'Refatorar código', prioridade: 1 };
    
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.adicionarTarefa(tarefa3);
        expect(gerenciador.contarTarefasPorPrioridade(1)).toBe(2);
        expect(gerenciador.contarTarefasPorPrioridade(2)).toBe(1);
    });
    
    test("Marcar todas as tarefas como concluídas", () => {
        const tarefa1 = { id: 1, descricao: 'Criar README.md', concluida: false };
        const tarefa2 = { id: 2, descricao: 'Criar tela Home, About e Contato', concluida: false };
        const tarefa3 = { id: 3, descricao: 'Refatorar código', concluida: false };
    
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.adicionarTarefa(tarefa3);   
        gerenciador.marcarTodasComoConcluidas();
        gerenciador.tarefas.forEach(tarefa => {
            expect(tarefa.concluida).toBe(true);
        });
    });

    test("Reabrir tarefa", () => {
        const tarefa = { id: 1, descricao: 'Criar README.md', concluida: true };
        gerenciador.adicionarTarefa(tarefa);
        gerenciador.reabrirTarefa(1);
        expect(gerenciador.buscarTarefaPorId(1).concluida).toBe(false);
    });

    test("Ordenar tarefas por data", () => {
        const tarefa1 = { id: 1, descricao: 'Criar README.md', data: '2024-09-01' };
        const tarefa2 = { id: 2, descricao: 'Criar tela Home, About e Contato', data: '2024-08-15' };
        const tarefa3 = { id: 3, descricao: 'Refatorar código', data: '2024-09-10' };
    
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.adicionarTarefa(tarefa3);
        gerenciador.ordenarTarefasPorData();
        expect(gerenciador.tarefas).toEqual([
            tarefa2, tarefa1,tarefa3
        ]);
    });
    
    test("Ordenar tarefas por prioridade", () => {
        const tarefa1 = { id: 1, descricao: 'Criar README.md', prioridade: 3 };
        const tarefa2 = { id: 2, descricao: 'Criar tela Home, About e Contato', prioridade: 1 };
        const tarefa3 = { id: 3, descricao: 'Refatorar código', prioridade: 2 };
    
        gerenciador.adicionarTarefa(tarefa1);
        gerenciador.adicionarTarefa(tarefa2);
        gerenciador.adicionarTarefa(tarefa3);
        gerenciador.ordenarTarefasPorPrioridade();
        expect(gerenciador.tarefas).toEqual([
            tarefa2,tarefa3,tarefa1 
        ]);
    });
    


    


    


});
