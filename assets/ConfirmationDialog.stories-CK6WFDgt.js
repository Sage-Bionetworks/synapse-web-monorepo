import{j as o,B as n}from"./iframe-QSWh_nl6.js";import{C as r}from"./ConfirmationDialog-CX4ewaN9.js";import"./index-Chi_LkuB.js";import"./DialogBase-D2MmUTIb.js";import"./Close-QryVeLEP.js";import"./HelpPopover-Bcffqgpu.js";import"./MarkdownPopover-c1W7vBzm.js";import"./LightTooltip-6Ty6ser2.js";import"./MarkdownSynapse-CJNodr3S.js";import"./SkeletonButton-Ca6I-8rV.js";import"./SkeletonInlineBlock-rFa2WtsV.js";import"./SkeletonTable-D0oXxerW.js";import"./SkeletonParagraph-C2ql9lI3.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
