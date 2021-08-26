import React from 'react';

import styles from './styles.module.scss';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';

import ActiveLink from '../ActiveLink';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink href="/" activeClassName={styles.active}>
          <a>
            <Image src={logo} alt="Sujeito Programador Logo" />
          </a>
        </ActiveLink>

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Conteúdos</a>
          </ActiveLink>

          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <a>Quem Somos?</a>
          </ActiveLink>
        </nav>

        <a
          type="button"
          className={styles.readyButton}
          href="https://sujeitoprogramador.com"
        >
          COMEÇAR
        </a>
      </div>
    </header>
  );
}
