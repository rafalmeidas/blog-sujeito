/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

import styles from './styles.module.scss';

type Content = {
  title: string;
  description: string;
  banner: string;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
};

interface SobreProps {
  content: Content;
}

export default function Sobre({ content }: SobreProps) {
  return (
    <>
      <Head>
        <title>Quem somos? | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>{content.title}</h1>
            <p>{content.description}</p>

            <a href={content.facebook} target="_blank" rel="noreferrer">
              <FaFacebook size={40} />
            </a>
            <a href={content.instagram} target="_blank" rel="noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href={content.youtube} target="_blank" rel="noreferrer">
              <FaYoutube size={40} />
            </a>
            <a href={content.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={40} />
            </a>
          </section>

          <img src={content.banner} alt={content.description} />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'about'),
  ]);

  const { title, description, banner, facebook, instagram, youtube, linkedin } =
    response.results[0].data;

  const content = {
    title: RichText.asText(title),
    description: RichText.asText(description),
    banner: banner.url,
    facebook: facebook.url,
    instagram: instagram.url,
    youtube: youtube.url,
    linkedin: linkedin.url,
  };

  return {
    props: {
      content,
    },
    revalidate: 60 * 60, //1 hora
  };
};
