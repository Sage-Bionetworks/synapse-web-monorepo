import{j as o,B as n}from"./iframe-Byg5KEO3.js";import{C as r}from"./ConfirmationDialog-JsFCfxK0.js";import"./index-Chi_LkuB.js";import"./DialogBase-CnDWnT2B.js";import"./Close-CpMA1DKn.js";import"./HelpPopover-CT10kuL6.js";import"./MarkdownPopover-DISWB6lN.js";import"./LightTooltip-MazkSLsv.js";import"./MarkdownSynapse-DUFzxpBi.js";import"./SkeletonButton-4jGLqIPK.js";import"./SkeletonInlineBlock-BMXq3IDQ.js";import"./SkeletonTable-DoPPIijf.js";import"./SkeletonParagraph-Bg9PA-th.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
