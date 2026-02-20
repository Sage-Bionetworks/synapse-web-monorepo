import{j as o,B as n}from"./iframe-D2314vV7.js";import{C as r}from"./ConfirmationDialog-Rlnq_K10.js";import"./index-Chi_LkuB.js";import"./DialogBase-CeLIS526.js";import"./Close-DF-SSni9.js";import"./HelpPopover-DPlyz4f8.js";import"./MarkdownPopover-DLwjwgAy.js";import"./LightTooltip-C3RLT3BD.js";import"./MarkdownSynapse-DOP2sYUv.js";import"./SkeletonButton-B53Z_sb3.js";import"./SkeletonInlineBlock-CV4xFhI_.js";import"./SkeletonTable-BKP48mc0.js";import"./SkeletonParagraph-LgnNm5lB.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
