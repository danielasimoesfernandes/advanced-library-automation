export class FavoritesService  {
    constructor(request) {
        this.request = request;
    };

    async addBookToFavorites({ usuarioId, livroId }) {
        return await this.request.post('/favoritos', {
            data: { usuarioId, livroId }
        });
    };
    
    async getUserFavorites(userId) {
        return await this.request.get(`/favoritos/${userId}`);
    };
        
    async removeBookFromFavorites({ usuarioId, livroId }) {
        return await this.request.delete('/favoritos', {
            data: { usuarioId, livroId }
        });
    };
}