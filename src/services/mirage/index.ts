import { createServer, Factory, Model, Response } from 'miragejs'

import * as faker from '@faker-js/faker';

type User = {
    name: string;
    email: string;
    created_at: string;
}


export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i +1}`
                },
                email() {
                    return faker.faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.faker.date.recent(10)
                }
            })
        },

        seeds(server) {
            server.createList('user', 200)
        },
        
        routes() {
            this.namespace = 'dash-go.herokuapp.com'
            this.timing = 750


            this.get('/users', function(schema, request){
                const { page = 1, per_page = 10 } =  request.queryParams

                const total = schema.all('user').length

                // page = 3
                // 3 - 1 = 2 * 10 = 20
                // começa no 20
                const pageStart = (Number(page) - 1) * Number(per_page);
                const pageEnd = pageStart + Number(per_page)

                const users = this.serialize(schema.all('user'))
                    .users.slice(pageStart, pageEnd)

                return new Response(
                    200,
                    {'x-total-count': String(total)},
                    {users}
                )

            })
            this.post('/users')

            this.namespace = ''
            this.passthrough()
        }
    })

    return server;
}
