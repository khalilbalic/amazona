import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Nike Slim Shirt',
      slug: 'Nike Slim Shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInSTock: 20,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Shirt',
    },
    {
      //_id: '2',
      name: 'Nike Slim Pant',
      slug: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 80,
      countInSTock: 10,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 8,
      description: 'High Quality Pant',
    },
    {
      //_id: '3',
      name: 'Nike Fat Pant',
      slug: 'Nike Fat Pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 110,
      countInSTock: 15,
      brand: 'Nike',
      rating: 4.7,
      numReviews: 16,
      description: 'High Quality Pant',
    },
    {
      //_id: '4',
      name: 'Nike Fat Panty',
      slug: 'Nike Fat Panty',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 130,
      countInSTock: 11,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 12,
      description: 'High Quality Pant',
    },
  ],
};

export default data;
