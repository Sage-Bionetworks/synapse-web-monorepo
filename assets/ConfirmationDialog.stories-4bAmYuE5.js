import{j as o,B as n}from"./iframe-DvDPVyr3.js";import{C as r}from"./ConfirmationDialog-hJY-6MQc.js";import"./index-Chi_LkuB.js";import"./DialogBase-J8iZt42d.js";import"./Close-Dl87lOTy.js";import"./HelpPopover-B9l6QfUy.js";import"./MarkdownPopover-1Vxonhz2.js";import"./LightTooltip-A87-OJtX.js";import"./MarkdownSynapse-CFI-ggll.js";import"./SkeletonButton-ChNWGaeP.js";import"./SkeletonInlineBlock-DTOZhiyP.js";import"./SkeletonTable-0fE1v7Jp.js";import"./SkeletonParagraph-C4mex8S5.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
