import { User, Car } from '../types';

export const initialUsers: User[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    email: 'pedro@email.com',
  },
];

export const carsList: Car[] = [
  {
    id: '1',
    model: 'Civic',
    brand: 'Honda',
    color: 'Preto',
    year: 2022,
  },
  {
    id: '2',
    model: 'Corolla',
    brand: 'Toyota',
    color: 'Branco',
    year: 2023,
  },
  {
    id: '3',
    model: 'Onix',
    brand: 'Chevrolet',
    color: 'Prata',
    year: 2021,
  },
  {
    id: '4',
    model: 'Golf',
    brand: 'Volkswagen',
    color: 'Azul',
    year: 2022,
  },
  {
    id: '5',
    model: 'Focus',
    brand: 'Ford',
    color: 'Vermelho',
    year: 2020,
  },
];

export const loggedUser: User = {
  id: 'user1',
  name: 'Usuário Logado',
  email: 'usuario@email.com',
};