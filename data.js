const data = {
    categories: [
        {
        name: 'Lanches',
        image: '/imagens/lanches.jpg'

        },
        {
        name: 'Sobremesas',
        image: '/imagens/sobremesas.jpg'
        },
        {
        name: 'Bebidas',
        image: '/imagens/bebidas.jpg',
        },
    ],
    products: [
        {
            category: 'Lanches',
            name: 'Shawarma de Carne',
            price: '10',
            image: '/imagens/shawarmacarne.jpeg',
            description: 'Pão arabe com Carne, tomate, Alface, cebola, Molho arabe',
        },
        {
            category: 'Lanches',
            name: 'Shawarma de Frango',
            price: '55',
            image: '/imagens/shawarmafrango.jpeg',
            description: 'Frango, tomate, Alface, cebola, Molho arabe',
        },
        {
            category: 'Lanches',
            name: 'Shawarma Misto',
            price: '15',
            image: '/imagens/shawarmamisto.jpeg',
            description: "Pão arabe com Frango e Carne, tomate, Alface, cebola, Molho arabe",
        },
        {
            category: 'Sobremesas',
            name: 'Harisse',
            price: '5',
            image: '/imagens/harisse.jpg',
            description: "Bolo de simolina "
        },
        {
            category: 'Sobremesas',
            name: 'Knefe',
            price: '6',
            image: '/imagens/knefe.jpg',
            description: "Um doce arabe feito de vermicelli (Um tipo de macarrao bastane fino)"
        },
        {
            category: 'Sobremesas',
            name: 'Mahalabie',
            price: '4',
            image: '/imagens/mahalabie.jpg',
            description :" Mistur os delicados aromas da agua de flor de laranjeira do almasco"

        },
        {
            category: 'Bebidas',
            name: 'Coca-Cola',
            price: '3',
            image: '/imagens/cocacola.jpg'
        },
        {
            category: 'Bebidas',
            name: 'Guaraná',
            price: '3',
            image: '/imagens/guaraná.jpg',
            description:" 350 Ml"
        },
        {
            category: 'Bebidas',
            name: 'Sprite',
            price: '3',
            image: '/imagens/sprite.png',
            description:" 350 Ml"
        },
    ],
};

module.exports = data;