import{j as o,B as n}from"./iframe-CsxBzgcc.js";import{C as r}from"./ConfirmationDialog-Uzjk9IlN.js";import"./index-Chi_LkuB.js";import"./DialogBase-DhZkTiCA.js";import"./Close-BzicxIcj.js";import"./HelpPopover-y5CnxthQ.js";import"./MarkdownPopover-DmAn0kqk.js";import"./LightTooltip-BM4vanV4.js";import"./MarkdownSynapse-BlaqDi--.js";import"./SkeletonButton-C34BpE4a.js";import"./SkeletonInlineBlock-Wq3H9QMf.js";import"./SkeletonTable-DcTnDoDK.js";import"./SkeletonParagraph-aQXmvCYx.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
