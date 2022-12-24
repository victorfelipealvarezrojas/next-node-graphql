import { cursos } from "./cursosdb";

export const resolvers = {
    Query: {
        obtenerCurso: (_, { input }, ctx, info) => {
            console.log(ctx)
            return cursos.filter(curso => curso.tecnologia === input.tecnologia)
        },
        obtenerTecnologia: () => cursos

    }
}