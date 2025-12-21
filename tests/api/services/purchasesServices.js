export class PurchasesService {
    constructor(request) {
        this.request = request;
    };
    
    async purchaseBook({ usuarioId, livroId, quantidade,  }) {
        return await this.request.post('/compras', {
            data: { usuarioId, livroId, quantidade }
        });
    };

    async getPurchases() {
        return await this.request.get('/compras');
    };

    async getUserPurchases(usuarioId) {         
        return await this.request.get('/compras/me', {
            params: { usuarioId }
        });
    };

    async updatePurchaseStatus(purchaseId, status) {
    return await this.request.put(`/compras/${purchaseId}/status`, {
        data: { status }
    });
    };
}