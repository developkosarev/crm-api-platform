/* import { StaticImageData } from 'next/image'; */
import { ReactElement } from 'react';
/* import type { TablerIcon } from "@tabler/icons-react" */

type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

type Link = {
  label: string;
  href?: string;
  ariaLabel?: string;
  /*icon?: Icon;*/
};

type Links = {
  title?: string;
  links?: Array<Link>;
  texts?: Array<string>;
};

type MenuLink = Link & {
  links?: Array<Link>;
};

type ToggleMenuProps = {
  handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>;
  isToggleMenuOpen: boolean;
};

type FooterProps = {
  title?: string;
  links?: Array<Link>;
  columns: Array<Links>;
  /*socials: Array<Link>;*/
  footNote?: string | ReactElement;
  theme?: string;
};

type HeaderProps = {
  links?: Array<MenuLink>;
  actions?: Array<CallToActionType>;
  // actions?: Array<ActionLink>;
  isSticky?: boolean;
  showToggleTheme?: boolean;
  showRssFeed?: boolean;
  position?: 'center' | 'right' | 'left';
};
