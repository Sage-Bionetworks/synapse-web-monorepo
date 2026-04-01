import{j as o,B as n}from"./iframe-2O6u4SzH.js";import{C as r}from"./ConfirmationDialog-BrGQU89G.js";import"./index-Chi_LkuB.js";import"./DialogBase-DL0Zz-CT.js";import"./Close-Bft55rfH.js";import"./HelpPopover-DtPUv-h0.js";import"./MarkdownPopover-DCPcpUWN.js";import"./LightTooltip-C0ip7qPz.js";import"./MarkdownSynapse-B-iJPTvS.js";import"./SkeletonButton-CiuXBI7w.js";import"./SkeletonInlineBlock-BxhXmgi0.js";import"./SkeletonTable-Cg2ViMwY.js";import"./SkeletonParagraph-0TQyd4RC.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
