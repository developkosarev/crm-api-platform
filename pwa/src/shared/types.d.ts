/* import { StaticImageData } from 'next/image'; */
import { ReactElement } from 'react';
/* import type { TablerIcon } from "@tabler/icons-react" */

type Link = {
  label?: string;
  href?: string;
  ariaLabel?: string;
  /*icon?: Icon;*/
};

type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  /*socials: Array<Link>;*/
  footNote?: string | ReactElement;
  theme?: string;
};

