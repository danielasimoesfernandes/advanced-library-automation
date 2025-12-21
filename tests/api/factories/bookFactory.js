export class BookFactory {
    constructor(request) {
        this.request = request;
    }

    async createBookTest() {
        return await this.request.post('/livros', {
            data: {
                nome: "Test Book " + Number(Date.now()),
                autor: "Test Author",
                paginas: 434,
                descricao: "Test Description",
                imagemUrl: "https://example.com/test.jpg",
                estoque: 10,
                preco: 35.50
            }
        });
    };

    async createBookForRentalTest() {
        return await this.request.post('/livros', {
            data: {
                nome: "Rental Test Book",
                autor: "Tech Author Rentals",
                paginas: 543,
                descricao: "A book created to test rental functionality",
                imagemUrl: "https://exemplo.com/imagem.jpg",
                estoque: 5,
                preco: 49.9
            }
        });
    };

    async createBookForFavoritesTest() {
        return await this.request.post('/livros', {
            data: {
                nome: "Favorites Test Book",
                autor: "Tech Author Fav",
                paginas: 567,
                descricao: "A book created to test favorites functionality",
                imagemUrl: "https://exemplo.com/imagem.jpg",
                estoque: 3,
                preco: 69.9
            }
        });
    };

    async createBookForPurchasesTest() {
        return await this.request.post('/livros', {
            data: {
                nome: "Purchase Test Book 4",
                autor: "Author Pur",
                paginas: 347,
                descricao: "A book created to test purchase functionality - part 4",
                imagemUrl: "https://exemplo.com/imagem.jpg",
                estoque: 16,
                preco: 57.0
            }
        });
    };
};