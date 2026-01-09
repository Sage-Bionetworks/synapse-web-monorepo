import{j as o,B as n}from"./iframe-dqn_o-j7.js";import{C as r}from"./ConfirmationDialog-BglZMyws.js";import"./index-Chi_LkuB.js";import"./DialogBase-Du7TIgB4.js";import"./Close-Axrw4Kzl.js";import"./HelpPopover-C9R8R_7q.js";import"./MarkdownPopover-D3CVPC0g.js";import"./LightTooltip-Dhs-cvGE.js";import"./MarkdownSynapse-BD2Fjx54.js";import"./SkeletonButton-B8uw_n6q.js";import"./SkeletonInlineBlock-nI55AVgz.js";import"./SkeletonTable-8ejcRdZg.js";import"./SkeletonParagraph-DUPitNKo.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
