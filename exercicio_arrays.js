/* ### Buscando e encontrando dados em Arrays
Baseado no Array de livros por categoria abaixo, faça os seguintes desafios
    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do Autor Augusto Cury
    * * Transformar a função em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

// Exercício resolvido pelo Mayk Brito
// Array com Objetos de livros dentro, com categoria e autor
const bookByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author:'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',

            }
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author:'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',

            }
        ],
    },
];

//Consulta de quantas categorias
const totalCategories = bookByCategory.length
console.log(totalCategories);

//Laço para descobrir o total de livros em cada categorias
for(let category of bookByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

// Função para descobrir quantos autores tem
function countAuthors () {
    // Array vazio para receber os autores
    let authors = []

    //Laço para identificar os autores e adicionar no array
    for(let category of bookByCategory) {
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    // Print do total de autores
    console.log('Total de Autores: ', authors.length)   
}

// Chamando a função da contagem de autores
countAuthors()

// Função para descobrir quantos livros o Augusto Cury tem no Array
function booksOfAuthor (author) {
    let books= []

    for(let category of bookByCategory) {
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    } 
    console.log(`Livros do autor ${author}: ${books.join(', ')}`)   
}

booksOfAuthor('Augusto Cury')

// Função para mostrar o títulos dos livros
function titleBook () {
    // Array vazio para receber os títulos dos livros
    let titles = []

    //Laço para identificar os títulos dos livros e adicionar no array
    for(let category of bookByCategory) {
        for(let book of category.books){
            if(titles.indexOf(book.title) == -1) {
                titles.push(book.title)
            }
        }
    }
    // Print total dos títulos dos livros
    console.log('Livros: ', titles)   
}

// Chamando a função para mostrar os títulos dos livros
titleBook()

// Comando para mostrar objetos do array - títulos e autores
console.log(bookByCategory[0].books)
console.log(bookByCategory[1].books)
