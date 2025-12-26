import { expect } from "@playwright/test";

export class BooksDetailsPage {
    constructor(page) {
        this.page = page;
        this.booksDetailsPageTitle = page.locator('h1', { hasText: '📚 Detalhes do Livro' });
        this.bookDetailsContainer = page.locator('.book-details');
        this.bookImage = page.locator('.book-image img');
        this.bookTitle = page.locator('.book-info h2');
        this.bookAuthor = page.locator('.book-info .info-item', { hasText: 'Autor:' });
        this.bookPages = page.locator('.book-info .info-item', { hasText: 'Páginas:' });
        this.bookDescription = page.locator('.book-info .info-item', { hasText: 'Descrição:' });
        this.bookDate = page.locator('.book-info .info-item', { hasText: 'Data de Cadastro:' });
        this.favoriteButton = page.locator('.action-buttons button', { hasText: 'Adicionar aos Favoritos' });
        this.deleteButton = page.locator('.action-buttons button', { hasText: '🗑️ Deletar Livro' });
        this.goBackButton = page.locator('.action-buttons button', { hasText: '← Voltar' });
    };

    async verifyBooksDetailsTitle(id) {
        await expect(this.booksDetailsPageTitle).toBeVisible();
        if (id) {
            // O .? serve para escapar o ponto e a interrogação corretamente
            await expect(this.page).toHaveURL(new RegExp(`detalhes\\.html\\?id=${id}`));
        }
    };

    async verifyBookDetails(expectedBook) {
        await expect(this.bookDetailsContainer).toBeVisible();
        await expect(this.bookImage).toHaveAttribute('src', expectedBook.urlImage);
        await expect(this.bookTitle).toHaveText(expectedBook.bookName);
        await expect(this.bookAuthor).toContainText(expectedBook.authorName);
        await expect(this.bookPages).toContainText(expectedBook.pages);
        await expect(this.bookDescription).toContainText(expectedBook.description);
        await expect(this.bookDate).toBeVisible(); // Ou checar a data exata se quiser
        await expect(this.favoriteButton).toBeVisible();
        await expect(this.deleteButton).toBeVisible();
        await expect(this.goBackButton).toBeVisible();
    };
}