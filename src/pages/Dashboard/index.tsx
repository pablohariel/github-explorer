import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { api } from '../../services/api';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const { full_name, description, owner } = response.data;

      const repository = {
        full_name,
        description,
        owner,
      };

      setRepositories([repository, ...repositories]);
      setNewRepo('');
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href={repository.full_name}>
            <img src={repository.owner.avatar_url} alt="Pablo Hariel" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description ? repository.description : 'No description'}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export { Dashboard };
