import{j as o,B as n}from"./iframe-Dbbh8EoS.js";import{C as r}from"./ConfirmationDialog-DgOVI2l3.js";import"./index-Chi_LkuB.js";import"./DialogBase-DP21qmxt.js";import"./Close-Dh11qsnE.js";import"./HelpPopover-D9KVZzsy.js";import"./MarkdownPopover-BphtwQmM.js";import"./LightTooltip-CYhWOoK6.js";import"./MarkdownSynapse-Na_JpKhK.js";import"./SkeletonButton-BznCZj-O.js";import"./SkeletonInlineBlock-BfsUoAAw.js";import"./SkeletonTable-Cpo7iVUX.js";import"./SkeletonParagraph-DMnuMidF.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
