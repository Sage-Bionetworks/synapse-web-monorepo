import{j as o,B as n}from"./iframe-Fj4lak5c.js";import{C as r}from"./ConfirmationDialog-DfmVN50m.js";import"./index-Chi_LkuB.js";import"./DialogBase-DO9GwF3-.js";import"./Close-D8Dcnzwn.js";import"./HelpPopover-Dir9cMCM.js";import"./MarkdownPopover-CTr2IYFG.js";import"./LightTooltip-BvGcOz9H.js";import"./MarkdownSynapse-o56dOjAb.js";import"./SkeletonButton-Caf_IZFe.js";import"./SkeletonInlineBlock-BlJ5s_Kh.js";import"./SkeletonTable-t4KSioMX.js";import"./SkeletonParagraph-CrmOE7Us.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
