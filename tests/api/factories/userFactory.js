export class UserFactory {
    constructor(request) {
        this.request = request;
    }

async registerTestUser() {
        return await this.request.post('/registro', {
            data: {
                nome: "Dani Teste",
                email: "dani.test" + Date.now() + "@teste.com",
                senha: "senha123"
            }
        });
    };
};