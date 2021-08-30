import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';

import styles from './styles.module.scss';
import thumbImg from '../../../public/images/thumb.png';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <a>
              <Image
                src={thumbImg}
                alt="Post titulo 1"
                width={720}
                height={410}
                quality={100}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 HULHO 2021</time>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a{' '}
              </p>
            </a>
          </Link>

          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#fff" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#fff" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronRight size={25} color="#fff" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
