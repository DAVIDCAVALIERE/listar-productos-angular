export interface Product {
  id: number | string;
  name: string;
  price: number;
  description?: string;
}

export const productsList: Product[] = [
  {
    id: 1,
    name: 'Lavandina',
    price: 10,
    description: 'Botella de 1 litro',
  },
  {
    id: 2,
    name: 'Detergente',
    price: 15,
    description: 'Envase de 500 ml',
  },
  {
    id: 3,
    name: 'Esponja',
    price: 5
  },
  {
    id: 4,
    name: 'Jabón en polvo',
    price: 20,
    description: 'Bolsa de 800 gramos',
  },
  {
    id: 5,
    name: 'Papel higiénico',
    price: 12,
    description: 'Pack de 4 rollos',
  },
  {
    id: 6,
    name: 'Desodorante ambiental',
    price: 18,
    description: 'Spray de 300 ml',
  },
  {
    id: 7,
    name: 'Shampoo',
    price: 25,
    description: 'Botella de 750 ml',
  },
  {
    id: 8,
    name: 'Acondicionador',
    price: 25,
    description: 'Botella de 750 ml',
  },
  {
    id: 9,
    name: 'Cepillo de dientes',
    price: 8,
    description: 'Cerdas suaves',
  },
  {
    id: 10,
    name: 'Pasta dental',
    price: 14,
    description: 'Tubo de 90 gramos',
  },
];
