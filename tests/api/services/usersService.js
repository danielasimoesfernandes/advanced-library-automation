export class UsersService {
    constructor(request) {
        this.request = request;
    };

    async getUsers() {
        return await this.request.get('/usuarios');
    };

    async updateUserData(nome, email, tipo) {
        return await this.request.put(`/usuarios/${userId}`, {
            data: { nome, email, tipo }
        });
    };

    async deleteUser(userId) {
        return await this.request.delete(`/usuarios/${userId}`);
    };
};