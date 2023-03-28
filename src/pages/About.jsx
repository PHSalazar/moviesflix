import React, { useEffect } from 'react';
import Footer from '../components/Footer';

const About = () => {
  const name_project = import.meta.env.NAME_PROJ;
  document.name = 'about';

  const setActive = () => {
    const links = document.querySelectorAll('.navbar a');
    links.forEach((link) => link.classList.remove('active'));
    const ele = document.querySelector(`.navbar a[data-prop=${document.name}]`);
    ele.classList.add('active');
  };
  useEffect(() => {
    setActive();
  }, []);
  return (
    <>
      <div className="body about">
        <h2>MoviesFlix - Pedro Henrique Salazar</h2>
        <p>
          Recentemente, eu criei esse projeto com ReactJS com o objetivo de
          aprimorar minhas habilidades nessa tecnologia. Esse projeto
          (MoviesFlix) consistiu em desenvolver uma aplicação web utilizando os
          conceitos e recursos mais avançados do ReactJS, como componentes
          funcionais, hooks, roteamento e gerenciamento de estado.
        </p>
        <p>
          Durante o desenvolvimento, pude explorar novas formas de lidar com a
          lógica da aplicação e aprimorar minha capacidade de criar interfaces
          de usuário interativas e responsivas. Ao finalizar o projeto, sinto
          que adquiri um conhecimento mais aprofundado do ReactJS e estou
          confiante em utilizá-lo em projetos mais complexos no futuro.
        </p>
        <p>
          Nele puder aprofundar meu conhecimento em alguns hooks, com exemplo,
          useState, useEffect, consumo de API com fetch, fazendo o uso da API da{' '}
          <b>The Movie DataBase</b>, trazendo informações de filmes e séries.
        </p>
        <p>
          Usei como base vídeos encontrados na internet para que eu pudesse ter
          um ponto de partida e ao longo do desenvolvimento, pude melhorar
          algumas funções do projeto, incrementando algumas outras. Para
          começar, assisti o vídeo{' '}
          <a href="https://youtu.be/XqxUHVVO7-U" target={'_blank'}>
            nesse link
          </a>{' '}
          do <b>Matheus Battisti - Hora de Codar</b>, onde nos dá uma direção do
          que precisa ser feito. Depois, refiz todo o projeto 'sozinho' e tentei
          adicionar algumas utilidades no projeto, separando a API por série e
          filmes, página de detalhes mais atrativa, navbar dinamica demarcando
          links ativos, post folder principal na Home com indicação de filme
          aleatório.
        </p>
        <p>
          Por fim, eu agradeço imensamente a visualização no projeto! Qualquer
          dúvida, estou à disposição.
        </p>
        <p
          style={{
            textIndent: '0',
          }}
        >
          Att, <br />
          <b>Pedro Henrique Salazar</b>.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
