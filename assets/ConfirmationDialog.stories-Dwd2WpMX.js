import{j as o,B as n}from"./iframe-B6BHQgsg.js";import{C as r}from"./ConfirmationDialog-Bb8wqThd.js";import"./index-Chi_LkuB.js";import"./DialogBase-C3nXM1hL.js";import"./Close-DhlrG9rp.js";import"./HelpPopover-Duf7eahg.js";import"./MarkdownPopover-DB1525ks.js";import"./LightTooltip-npEhufm2.js";import"./MarkdownSynapse-CYzlYABb.js";import"./SkeletonButton-DHh5ZoUY.js";import"./SkeletonInlineBlock-C-VRD2YJ.js";import"./SkeletonTable-DrzWDZqG.js";import"./SkeletonParagraph-KorLLKG4.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
