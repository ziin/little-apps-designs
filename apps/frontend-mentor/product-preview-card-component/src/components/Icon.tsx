import { SVGProps } from 'react';

import { ReactComponent as Cart } from '@assets/icons/icon-cart.svg';

const icons = {
  cart: Cart,
};

export type IconIds = keyof typeof icons;

type IconProps = SVGProps<SVGSVGElement> & {
  id: IconIds;
  color?: string;
};

const Icon = ({ id, ...props }: IconProps) => {
  const Component = icons[id] as React.ComponentType<SVGProps<SVGSVGElement>>;

  if (!Component) {
    throw new Error(`Icon "${id}" not found`);
  }

  return <Component {...props} />;
};

export default Icon;
