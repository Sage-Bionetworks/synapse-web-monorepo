import{j as o,B as n}from"./iframe-DlbWcGN2.js";import{C as r}from"./ConfirmationDialog-52XVYQBi.js";import"./index-Chi_LkuB.js";import"./DialogBase-iPKdwKl0.js";import"./Close-ClY7c3V4.js";import"./HelpPopover-D8qjwvMR.js";import"./MarkdownPopover-Dqmv7u1m.js";import"./LightTooltip-jUz17zhr.js";import"./MarkdownSynapse-DBEf5gPX.js";import"./SkeletonButton-dCMet_AC.js";import"./SkeletonInlineBlock-Zv-gdja3.js";import"./SkeletonTable-CLjRwafm.js";import"./SkeletonParagraph-CTcAcvxB.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
