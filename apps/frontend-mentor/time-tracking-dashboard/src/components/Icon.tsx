import { SVGProps } from 'react';

import { ReactComponent as Ellipsis } from '@assets/icons/icon-ellipsis.svg';
import { ReactComponent as Exercise } from '@assets/icons/icon-exercise.svg';
import { ReactComponent as Play } from '@assets/icons/icon-play.svg';
import { ReactComponent as SelfCare } from '@assets/icons/icon-self-care.svg';
import { ReactComponent as Social } from '@assets/icons/icon-social.svg';
import { ReactComponent as Study } from '@assets/icons/icon-study.svg';
import { ReactComponent as Work } from '@assets/icons/icon-work.svg';

const icons = {
  ellipsis: Ellipsis,
  play: Play,
  exercise: Exercise,
  'self-care': SelfCare,
  social: Social,
  study: Study,
  work: Work,
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
