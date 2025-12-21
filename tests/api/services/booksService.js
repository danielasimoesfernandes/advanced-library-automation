export class BooksService {
    constructor(request) {
        this.request = request;
    }; 

    // Service to create a new book
    async createBook({ nome, autor, paginas, descricao, imagemUrl, estoque, preco }) {
        return await this.request.post('/livros', {
            data: { nome, autor, paginas, descricao, imagemUrl, estoque, preco }
        });
    };

    // Service to create a new book (failing case - missing fields)
    async createBookMissingFields({ nome, autor, paginas }) {
        return await this.request.post('/livros', {
            data: { nome, autor, paginas}
        });
    };

    // Service to get all books
    async getAllBooks() {
        return await this.request.get('/livros');
    };

    // Service to get all available books
    async getAvailableBooks() {
        return await this.request.get('/livros/disponiveis');
    };     
    
    // Service to get a book by its ID
    async getBookById(bookId) {
        return await this.request.get('/livros/' + bookId);
    };

    // Service to update a book by its ID
    async updateBook(bookId, bookData) {
        return await this.request.put('/livros/' + bookId, {
            data: bookData
        });
    };  

    // Service to delete a book by its ID
    async deleteBook(bookId) {
        return await this.request.delete('/livros/' + bookId);
    };

    // Service to get recent books - last 5 added books
    async getRecentBooks() {
        return await this.request.get('/livros/recentes/ultimos');
    };
};