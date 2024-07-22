import type {ReactNode} from 'react';
import type {LinkCms} from '~/lib/types';

interface Button {
  link: LinkCms;
  style: string;
}

interface Content {
  alignmentDesktop: string;
  alignmentMobile: string;
  darkOverlay: boolean;
  maxWidthDesktop: string;
  maxWidthMobile: string;
  positionDesktop: string;
  positionMobile: string;
}

interface Section {
  aboveTheFold: boolean;
  fullWidth: boolean;
  textColor: string;
  desktop: {
    heightType: string;
    staticHeight: string;
    aspectRatio: string;
    minHeight: string;
    maxheight: string;
  },
  mobile: {
    heightType: string;
    staticHeight: string;
    aspectRatio: string;
    minHeight: string;
    maxheight: string;
  },
}

export interface ThreeDHeroCms {
  splineUrlDesktop: string;
  splineUrlMobile: string;
  heading?: string;
  subtext?: string;
  buttons: Button[];
  content: Content;
  section: Section;
}

export interface HeroContainerProps {
  children: ReactNode;
  cms: ThreeDHeroCms;
}
