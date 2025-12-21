export class StatsService {
    constructor(request) {
        this.request = request;
    };

    async getStats() {
        return await this.request.get('/estatisticas');
    };
};