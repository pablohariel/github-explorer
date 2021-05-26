import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form action="">
      <input placeholder="Digite o nome do repositorio" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/52895805?v=4" alt="Pablo Hariel" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/52895805?v=4" alt="Pablo Hariel" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/52895805?v=4" alt="Pablo Hariel" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/52895805?v=4" alt="Pablo Hariel" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="test">
        <img src="https://avatars.githubusercontent.com/u/52895805?v=4" alt="Pablo Hariel" />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>

    </Repositories>
  </>
);

export { Dashboard };
