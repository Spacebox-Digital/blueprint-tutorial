import Spline from '@splinetool/react-spline';
import { ThreeDHeroCms } from './ThreeDHero.types';
import { Schema } from './ThreeDHero.schema';
import { Container, Link, Markdown } from '~/components';


export function ThreeDHero({cms}: {cms: ThreeDHeroCms}) {
  const {splineUrlDesktop, splineUrlMobile, heading, subtext, buttons, content, section} = cms;
  const maxWidthClass = section?.fullWidth
    ? 'max-w-none'
    : 'max-w-[var(--content-max-width)]';

  const {alignmentDesktop, alignmentMobile, darkOverlay, maxWidthDesktop, maxWidthMobile, positionDesktop, positionMobile} = {...content};
  const alignmentClasses = `${alignmentMobile} ${alignmentDesktop}`;
  const positionClasses = `${positionMobile} ${positionDesktop}`;
  const maxWidthContentClasses = `${maxWidthMobile} ${maxWidthDesktop}`;
  const fullBleedClass = section?.fullWidth ? 'w-full' : 'px-contained mx-auto';
  const darkOverlayClass = darkOverlay ? 'bg-[rgba(0,0,0,0.2)]' : '';

  return(
    <Container container={cms.container}>
      <div className={`relative ${maxWidthClass} ${fullBleedClass}`} style={{color: section?.textColor}}>
        <div className='hidden md:block overflow-hidden h-full'>
          {splineUrlDesktop && <Spline scene={splineUrlDesktop} />}
        </div>
        <div className='block md:hidden h-[800px]'>
          {splineUrlMobile && <Spline scene={splineUrlMobile} />}
        </div>
        <div className={`absolute inset-0 flex size-full p-4 md:p-8 xl:p-12 pointer-events-none ${positionClasses}`}>
          <div className={`relative flex flex-col gap-6 p-8 pointer-events-auto ${alignmentClasses} ${maxWidthContentClasses}`}>
            {heading && <h1>{heading}</h1>}
            {subtext && <Markdown>{subtext}</Markdown>}
            <ul className='pointer-events-auto'>
              {buttons?.slice(0, 2).map(({link, style}, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={link?.url}
                      aria-label={link?.text}
                      className={style}
                      newTab={link?.newTab}
                      type={link?.type}
                    >
                      {link?.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

ThreeDHero.displayName = 'TextBlock';
ThreeDHero.Schema = Schema;