import{j as o,B as n}from"./iframe-DtOCV9ZO.js";import{C as r}from"./ConfirmationDialog-BIEXc5Nr.js";import"./index-Chi_LkuB.js";import"./DialogBase-BWg90ihX.js";import"./Close-D6GiZp3q.js";import"./HelpPopover-Cdi7BMOo.js";import"./MarkdownPopover-DA9u2k23.js";import"./LightTooltip-7xtsJ5TU.js";import"./MarkdownSynapse-DtveY7cQ.js";import"./SkeletonButton-BW-Av5i1.js";import"./SkeletonInlineBlock-CzzA0rkX.js";import"./SkeletonTable-DpWsxm1f.js";import"./SkeletonParagraph-BvB6yuWG.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
