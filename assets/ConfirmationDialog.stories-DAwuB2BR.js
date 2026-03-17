import{j as o,B as n}from"./iframe-Bd48Phhx.js";import{C as r}from"./ConfirmationDialog-D4Di_An5.js";import"./index-Chi_LkuB.js";import"./DialogBase-DJeR-4bo.js";import"./Close-DEayXyHI.js";import"./HelpPopover-DCI79EJV.js";import"./MarkdownPopover-BdpxecKY.js";import"./LightTooltip-Baq7jYr-.js";import"./MarkdownSynapse-BQCReIPi.js";import"./SkeletonButton-yGLAaBDC.js";import"./SkeletonInlineBlock-BSKjVSEt.js";import"./SkeletonTable-DPwFQSrG.js";import"./SkeletonParagraph-keiL0wvn.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
