import{j as o,B as n}from"./iframe-Dh1-Bj9i.js";import{C as r}from"./ConfirmationDialog-Dy9AxfBp.js";import"./index-Chi_LkuB.js";import"./DialogBase-Cs4R-zR2.js";import"./Close-D_7cgIwF.js";import"./HelpPopover-DkPOfTbO.js";import"./MarkdownPopover-D5SjgShk.js";import"./LightTooltip-DzvAkcfH.js";import"./MarkdownSynapse-IvCz3QWr.js";import"./SkeletonButton-C-IErnIc.js";import"./SkeletonInlineBlock-D9o-fuxy.js";import"./SkeletonTable-nkHHAelC.js";import"./SkeletonParagraph-Cbgp8OCT.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
