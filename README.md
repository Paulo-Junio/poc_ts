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

5. Para iniciar o prisma em sua máquina

```bash

    npx prisma init

```
6. Para gerar e rodar migrações 

```bash

    npx prisma migrate dev

```
6. Para gerar modelos/interfaces/tipos no @prisma/client

```bash

    npx prisma generate

```
6. Para rodar o seed

```bash

    npx prisma db seed

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
    status: "status da tarefa cadastrado no banco"
}
```

Em caso de envio de um body inválido, retornará o status 400 - bad request
<br><br>
<h3>Buscar todas as tarefas</h3> 
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
            responsible :{
                    name:"nome do responsável pela tarefa"
                }
            status: {
                statusName:"status da tarefa"
            }
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
        status: "novo status da tarefa cadastrado no banco"
    }
```

Em caso de envio de um body ou id inválido, retornará o status 400 - bad request
<br><br>
<h3>Deletar uma tarefa</h3> 
<br>
<strong>Rota:</strong> DELETE: /tarefas/:id
<br><br>
Paramêtro de rota: id - corresponde ao id da tarefa que será deleteda
<br><br>
Em caso de envio de um id inválido, retornará o status 404 e a mensagem "A tarefa não existe."
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
            responsible :{
                    name:"nome do responsável pela tarefa"
                }
            status: {
                statusName:"status da tarefa"
            }
        }
    ] 
```

Em caso de envio de um id inválido, retornará o status 400 - bad request
<br>
<h3>Criar um responsável</h3> 
<br>
<strong>Rota:</strong> POST: /responsible
<br><br>
Body esperado:

```
{
    name: "nome do responsável",
    surname: "apelido do responsáve",
    contact: "telefone do usuário (string) no formato DDDXXXXXXXXX",
}
```
Em caso de sucesso, status code 200<br>
Em caso de envio de um body inválido, retornará o status 400 - bad request
<br><br>
<h3>Buscar todos os responsáveis</h3> 
<br>
<strong>Rota:</strong> GET: /reponsible
<br><br>
Retorna uma lista de objetos dos resposáveis

```
    [
        {
            id: id do responsável
            name: "do responsável",
            surname: "apelido do responsável",
            contact: "telefone do responsável (string ") no formato DDDXXXXXXXXX,
            createdAt: "data de criação",
        }
    ]  
``` 
<br><br>
<h3>Atualizar o reponsável</h3> 
<br>
<strong>Rota:</strong> PUT: /responsible/:id
<br><br>
Paramêtro de rota: id - corresponde ao id do resposável que será atualizada
<br><br>

Body esperado :

```
    {
        name: "nome do responsável",
        surname: "apelido do responsáve",
        contact: "telefone do usuário (string) no formato DDDXXXXXXXXX",
    }
```
Em caso de sucesso, status code 200<br>
Em caso de envio de  id inválido, retornará o status 404 e a mensagem "O usuário não existe."<br>
Em caso de envio de  body inválido, retornará o status 400 e a mensagem do erro.
<br><br>
<h3>Deletar um responsável</h3> 
<br>
<strong>Rota:</strong> DELETE: /responsible/:id
<br><br>
Paramêtro de rota: id - corresponde ao id do resposável que será deleteado
<br><br>
Em caso de sucesso, status code 200<br>
Em caso de envio de  id inválido, retornará o status 404 e a mensagem "O usuário não existe."<br>
Em caso de o responsável estar atrelado a uma tarefa, retornará o status 400 e a mensagem "Esse usuário possui tarefas atreladas a ele."
<br><br>

<h3>Criar um status</h3> 
<br>
<strong>Rota:</strong> POST: /status
<br><br>
Body esperado:

```
{
    statusName: "status",
}
```
Em caso de sucesso, status code 200
Em caso de envio de um body inválido, retornará o status 400 - bad request
<br><br>
<h3>Buscar todos os status</h3> 
<br>
<strong>Rota:</strong> GET: /status
<br><br>
Retorna uma lista de objetos dos status

```
    [
        {
            id: id do responsável
            statusName: "status",
            createdAt: "data de criação",
        }
    ]  
``` 
<br><br>
<h3>Atualizar o status</h3> 
<br>
<strong>Rota:</strong> PUT: /status/:id
<br><br>
Paramêtro de rota: id - corresponde ao id do status que será atualizada
<br><br>

Body esperado :

```
    {
        statusName: "nome do responsável"
    }
```
Em caso de sucesso, status code 200<br>
Em caso de envio de  id inválido, retornará o status 404 e a mensagem "O status não existe."<br>
Em caso de envio de  body inválido, retornará o status 400 e a mensagem do erro.
<br><br>
<h3>Deletar um status</h3> 
<br>
<strong>Rota:</strong> DELETE: /status/:id
<br><br>
Paramêtro de rota: id - corresponde ao id do status que será deleteado
<br><br>
Em caso de sucesso, status code 200<br>
Em caso de envio de  id inválido, retornará o status 404 e a mensagem "O status não existe."<br>
Em caso de o status estar atrelado a uma tarefa, retornará o status 400 e a mensagem "Esse status possui tarefas atreladas a ele."
<br><br>
