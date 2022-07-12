export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Mobkoi API Demo",
            version: "0.1.0",
            description: "Mobkoi Compaign API Demo",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html"
            },
            contact: {
                name: "Herman Ramaniuk",
                email: "h9159689@gmail.com"
            }
        },
        servers: [
            { url: "http://localhost:5000/" },
            { url: "https://mobkoi-herman.herokuapp.com/" }
        ],
        security: {
            app_id: []
        }
    },
    apis: ["src/swagger/schemas/*.yaml", "src/swagger/*.yaml"]
}
