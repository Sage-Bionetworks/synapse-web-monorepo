import{j as o,B as n}from"./iframe-Gl2uG7Gu.js";import{C as r}from"./ConfirmationDialog-CkI_Ky3R.js";import"./index-Chi_LkuB.js";import"./DialogBase-CFDv1eZ2.js";import"./Close-D3nqMVPZ.js";import"./HelpPopover-FfzFHXn8.js";import"./MarkdownPopover-CvADHgL2.js";import"./LightTooltip-DCTLNLfM.js";import"./MarkdownSynapse-Dvsaf59R.js";import"./SkeletonButton-CAFmp0_I.js";import"./SkeletonInlineBlock-BdepDM7J.js";import"./SkeletonTable-DN89Pk10.js";import"./SkeletonParagraph-Ck270a2X.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'My Dialog Title',
    confirmButtonProps: {
      children: 'Confirm',
      color: 'error'
    },
    maxWidth: 'lg',
    content: <>
        <p>
          Some content within the dialog, which can contain other components:
        </p>
        <Button variant="contained">Button</Button>
      </>,
    titleHelpPopoverProps: {
      helpUrl: 'https://help.synapse.org',
      markdownText: 'Option to show a _HelpPopover_ in the title bar with a link to the docs site'
    },
    onCancel: fn(),
    onConfirm: fn()
  }
}`,...t.parameters?.docs?.source}}};const w=["Demo"];export{t as Demo,w as __namedExportsOrder,x as default};
