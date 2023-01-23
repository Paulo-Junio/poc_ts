## POC_TS 

O POC_TS é um organizado de tarefas sendo possivel adicionar um nome, descrição, responável, data e status da tarefa.

## Como usar o projeto em sua máquina

1. Clone esse repositório
2. Instale todas as dependencias

```bash

    npm i

```

3. O banco de dados está hospedado na nuvem. Não é preciso cria-lo
4. Para rodar o projeto em sua máquina utilize o nodemon

```bash

    npx nodemon src/index.ts

```

## Rotas e como utiliza-las
<br>

<h3>Criar uma tarefa</h3> 
<br>
<strong>Rota:</strong> POST: /tarefas
<br><br>
Body esperado:

```
{
    name: "nome da tarefa",
    description: "descrição da tarefa",
    responsible: "nome do responsável pela tarefa",
    data: "data da tarefa",
    status: "incomplete ou complete"
}
```

Em caso de envio de um body inválido, retornará o status 400 - bad request
<br><br>
<h3>Criar as tarefas</h3> 
<br>
<strong>Rota:</strong> GET: /tarefas
<br><br>
Retorna uma lista de objetos das tarefas

```
    [
        {
            id: id da tareda
            name: "nome da tarefa",
            description: "descrição da tarefa",
            responsible: "nome do responsável pela tarefa",
            data: "data da tarefa",
            status: "novo status incomplete ou complete"
        }
    ]  
``` 
<br><br>
<h3>Atualizar o status de uma tarefa</h3> 
<br>
<strong>Rota:</strong> PUT: /tarefas/:id
<br><br>
Paramêtro de rota: id - corresponde ao id da tarefa que será atualizada
<br><br>

Body esperado :

```
    {
        name: "nome da tarefa",
        description: "descrição da tarefa",
        responsible: "nome do responsável pela tarefa",
        data: "data da tarefa",
        status: "novo status incomplete ou complete"
    }
```

Em caso de envio de um body ou id inválido, retornará o status 400 - bad request
<br><br>
<h3>Criar deletar uma tarefa</h3> 
<br>
<strong>Rota:</strong> DELETE: /tarefas/:id
<br><br>
Paramêtro de rota: id - corresponde ao id da tarefa que será atualizada
<br><br>
Em caso de envio de um id inválido, retornará o status 400 - bad request
<br><br>
<h3>Buscar todas as tarefas de um responsável</h3> 
<br>
<strong>Rota:</strong> GET: /tarefas/:usuário
<br><br>

Paramêtro de rota: usuário - corresponde ao nome do responável pela tarefa <br><br>
Retorna uma lista de objetos das tarefas do usuário

```
    [
        {
            id: id da tareda
            name: "nome da tarefa",
            description: "descrição da tarefa",
            responsible: "nome do responsável pela tarefa",
            data: "data da tarefa",
            status: "novo status incomplete ou complete"
        }
    ]
```

Em caso de envio de um id inválido, retornará o status 400 - bad request