import{j as o,B as n}from"./iframe-BfPCYB0E.js";import{C as r}from"./ConfirmationDialog-8SnXnQ-s.js";import"./index-Chi_LkuB.js";import"./DialogBase-BW5bnvAH.js";import"./Close-Buelrktg.js";import"./HelpPopover-BsJ_8UVh.js";import"./MarkdownPopover-TvgvUYyl.js";import"./LightTooltip-CdZMPFTC.js";import"./MarkdownSynapse-DczAMsEj.js";import"./SkeletonButton-Cp9NnTu7.js";import"./SkeletonInlineBlock-D4QJhjaO.js";import"./SkeletonTable-O-QCdGWt.js";import"./SkeletonParagraph-KYHFxt8I.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
