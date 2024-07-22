import {BUTTONS, COLORS, FLEX_POSITIONS} from '~/settings/common';
import {containerSettings} from '~/settings/container';

const content = {
  label: 'Content Settings',
  name: 'content',
  description: 'Dark overlay, content position, content alignment',
  component: 'group',
  fields: [
    {
      label: 'Dark Overlay',
      name: 'darkOverlay',
      component: 'toggle',
      description: 'Adds 20% opacity black overlay over media',
      toggleLabels: {
        true: 'On',
        false: 'Off',
      },
    },
    {
      label: 'Content Position (tablet/desktop)',
      name: 'positionDesktop',
      component: 'select',
      options: FLEX_POSITIONS.desktop,
    },
    {
      label: 'Content Alignment (tablet/desktop)',
      name: 'alignmentDesktop',
      component: 'radio-group',
      direction: 'horizontal',
      variant: 'radio',
      options: [
        {label: 'Left', value: 'md:text-left md:items-start'},
        {label: 'Center', value: 'md:text-center md:items-center'},
        {label: 'Right', value: 'md:text-right md:items-end'},
      ],
    },
    {
      label: 'Max Content Width (tablet/desktop)',
      name: 'maxWidthDesktop',
      component: 'select',
      options: [
        {label: 'Narrow', value: 'md:max-w-[22rem] lg:max-w-[28rem]'},
        {label: 'Medium', value: 'md:max-w-[30rem] lg:max-w-[38rem]'},
        {label: 'Wide', value: 'md:max-w-[38rem] lg:max-w-[48rem]'},
        {label: 'Full', value: 'md:max-w-full'},
      ],
    },
    {
      label: 'Content Position (mobile)',
      name: 'positionMobile',
      component: 'select',
      options: FLEX_POSITIONS.mobile,
    },
    {
      label: 'Content Alignment (mobile)',
      name: 'alignmentMobile',
      component: 'radio-group',
      direction: 'horizontal',
      variant: 'radio',
      options: [
        {label: 'Left', value: 'text-left items-start'},
        {label: 'Center', value: 'text-center items-center'},
        {label: 'Right', value: 'text-right items-end'},
      ],
    },
    {
      label: 'Max Content Width (mobile)',
      name: 'maxWidthMobile',
      component: 'select',
      options: [
        {label: 'Narrow', value: 'max-w-[16.5rem]'},
        {label: 'Medium', value: 'max-w-[22.5rem]'},
        {label: 'Wide', value: 'max-w-[28.5rem]'},
        {label: 'Full', value: 'max-w-full'},
      ],
    },
  ],
  defaultValue: {
    alignmentDesktop: 'md:text-right md:items-end',
    alignmentMobile: 'text-center items-center',
    darkOverlay: false,
    maxWidthDesktop: 'md:max-w-[30rem] lg:max-w-[38rem]',
    maxWidthMobile: 'max-w-[22.5rem]',
    positionDesktop: 'md:justify-end md:items-center',
    positionMobile: 'justify-center',
  },
};

const section = {
  label: 'Section Settings',
  name: 'section',
  component: 'group',
  description: 'Above the fold, text color, icon color, full width',
  fields: [
    {
      label: 'Above The Fold',
      name: 'aboveTheFold',
      component: 'toggle',
      description: `Sets the heading as H1`,
      toggleLabels: {
        true: 'On',
        false: 'Off',
      },
    },
    {
      label: 'Text Color',
      name: 'textColor',
      component: 'select',
      options: COLORS,
    },
    {
      label: 'Full Width',
      name: 'fullWidth',
      component: 'toggle',
      description: 'Removes max width of this section',
      toggleLabels: {
        true: 'On',
        false: 'Off',
      },
    },
  ],
  defaultValue: {
    aboveTheFold: false,
    textColor: 'var(--white)',
    fullWidth: false,
  },
};

export function Schema() {
  return {
    category: 'Heroes',
    label: '3D Hero',
    key: 'three-d-hero',
    previewSrc:
      'https://cdn.shopify.com/s/files/1/0671/5074/1778/files/3d-hero-preview.jpg?v=1675730349',
    fields: [
      {
        label: 'Spline Scene URL (Desktop/Tablet)',
        name: 'splineUrlDesktop',
        component: 'text',
        defaultValue: 'https://prod.spline.design/Z0uKCRnbieYzmRPf/scene.splinecode',
      },
      {
        label: 'Spline Scene URL (Mobile)',
        name: 'splineUrlMobile',
        component: 'text',
        defaultValue: 'https://prod.spline.design/MpKPGfz1H36Fpccv/scene.splinecode',
      },
      {
        label: 'Heading',
        name: 'heading',
        component: 'text',
        defaultValue: 'Time To Blast Off!',
      },
      {
        label: 'Subtext',
        name: 'subtext',
        component: 'markdown',
        defaultValue:
          'Sometimes, all your brand needs is a **3D rocket** to stand out. Seriously, despite the implied sarcasm – *we mean it*.',
      },
      {
        label: 'Buttons',
        name: 'buttons',
        component: 'group-list',
        description: 'Max of two buttons',
        itemProps: {
          label: '{{item.link.text}}',
        },
        validate: {
          maxItems: 2,
        },
        fields: [
          {
            label: 'Link',
            name: 'link',
            component: 'link',
          },
          {
            label: 'Button Style',
            name: 'style',
            component: 'select',
            options: BUTTONS,
          },
        ],
        defaultItem: {
          link: {text: 'Shop Now', url: ''},
          style: 'btn-primary',
        },
        defaultValue: [
          {
            link: {text: 'Shop Now', url: ''},
            style: 'btn-primary',
          },
        ],
      },
      content,
      section,
      containerSettings(),
    ]
  }
}