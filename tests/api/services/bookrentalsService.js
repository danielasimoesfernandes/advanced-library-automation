export class BookrentalsService {
    constructor(request) {
        this.request = request;
    };

    async rentBook({ usuarioId, livroId, dataInicio, dataFim }) {
        return await this.request.post('/arrendamentos', {
            data: { usuarioId, livroId, dataInicio, dataFim }
        });
    };

    async getRentals() {
        return await this.request.get('/arrendamentos');
    };

    async updateRentalStatus(rentalId, status) {
        return await this.request.put(`/arrendamentos/${rentalId}/status`, {
            data: { status }
        });
    };

    async getUserRentals(userId) {
        return await this.request.get('/arrendamentos/me', {
            params: {
                usuarioId: userId
            }
        });
    };
};
