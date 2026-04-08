import{j as o,B as n}from"./iframe-Ddo1nd2c.js";import{C as r}from"./ConfirmationDialog-DbD8Znq3.js";import"./index-Chi_LkuB.js";import"./DialogBase-CayqfCYU.js";import"./Close-Bdp-VK_k.js";import"./HelpPopover-CG9mhVeJ.js";import"./MarkdownPopover-Dbkj-DS5.js";import"./LightTooltip-LQW8Tril.js";import"./MarkdownSynapse-D36GJOu2.js";import"./SkeletonButton-0wbjxtel.js";import"./SkeletonInlineBlock-CIgujLoL.js";import"./SkeletonTable-0-Nn1Nvg.js";import"./SkeletonParagraph-B50bUVUG.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
