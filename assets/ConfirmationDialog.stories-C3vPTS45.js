import{j as o,B as n}from"./iframe-DjCs0N9T.js";import{C as r}from"./ConfirmationDialog-DtaMK8Wg.js";import"./index-Chi_LkuB.js";import"./DialogBase-G442yd3L.js";import"./Close-BtUXOgnJ.js";import"./HelpPopover-Cv3rcWtw.js";import"./MarkdownPopover-ERQh7wwa.js";import"./LightTooltip-Mucs5Dmz.js";import"./MarkdownSynapse-BphwuRUM.js";import"./SkeletonButton-ra5Cjzqp.js";import"./SkeletonInlineBlock-BcoZAk2Q.js";import"./SkeletonTable-C6E9liFP.js";import"./SkeletonParagraph-COuF-1cd.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
