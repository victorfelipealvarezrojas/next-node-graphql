# GraphQL

1. Query : forma de extraer la informacion :

```js

   query {
     obtenerPoductos {
        id 
        nombre
        precio
        stock
     }
   }

```

2. Mutation : actualizar, crear, eliminar :

```js

   mutation eliminarProducto($id: ID) {
     eliminarProducto(id: $id)
   }
   {
     "data":{
        "eliminarProducto" : "eliminado de forma correcta"
     }
   }

```

3. Resolver : funciones que retornan los valores

```js

   ontenerClientes: async (_, {id}) => {
     const clientes await Clientes.findById({id});
     return clientes;
   }

```

4. Schema : agrupa query y mutation, describe los tipos de datos y tiene que ser
            similar a la BD

```js

   type Cliente {
     id: ID
     nombre: String
     emails: [Emails]
   }
   type Emails {
     email: String
   }
   type Query {
     ontenerClientes(id:ID): Cliente
   }

```

