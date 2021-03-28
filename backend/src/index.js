const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb+srv://admin:admin@cluster0-kvde4.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
// Metodos http: get, post, put, delete

// post é usado para criar um novo dado
// put editar um dado  ----> geralmente é usado apenas para um unico usuario
// delete deleta o dado  ----> geralmente é usado apenas para um unico usuario

// recebe informaçoes (mesma coisa do get nas classes)
// app.get('/', (request, response) => {
//    return response.json({message: 'hello omnistack'});
// });

// Tipos de parametros:

// Querys params: request.query (Filtros, ordenação, paginação, ...)
// app.get('/users', (request, response) => {
//     console.log(request.query);
//     return response.json({message: 'hello omnistack'});
// }); 

// Route params:request.params (Identificar um recurso na alteração ou remoção)

// app.delete('/users/:id', (request, response) => {
//    console.log(request.params);
//    return response.json({message: 'hello omnistack'});
// });

// Body: request.body (Dados para criação ou alteração de um registro)
// app.post('/users', (request, response) => {
//    console.log(request.body);
//    return response.json({message: 'hello omnistack'});
// });

// MongoDB (Não-relacional)

app.listen(3333);