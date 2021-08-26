import React from 'react';

import { ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export default function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter(); // Pega qual o barra da rota
  const className = asPath === rest.href ? activeClassName : ''; // className = {styles.active}
  // Se a rota/pagina que estamos acessando for igual ao link que ele clicou, então ativamos o classname
  return <Link {...rest}>{cloneElement(children, { className })}</Link>;
}
