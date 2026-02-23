import{j as o,B as n}from"./iframe-D6-EgIYn.js";import{C as r}from"./ConfirmationDialog-BievdrGA.js";import"./index-Chi_LkuB.js";import"./DialogBase-jhwmtm1u.js";import"./Close-CB4RDINp.js";import"./HelpPopover-6jNO7rXC.js";import"./MarkdownPopover-63--326B.js";import"./LightTooltip-ByM4QqbN.js";import"./MarkdownSynapse-BOOvENLm.js";import"./SkeletonButton-BgAZzTmz.js";import"./SkeletonInlineBlock-CkGbAtvq.js";import"./SkeletonTable-Cw1xCxvL.js";import"./SkeletonParagraph-DzfgVu65.js";const{fn:e}=__STORYBOOK_MODULE_TEST__,x={title:"UI/ConfirmationDialog",component:r},t={args:{open:!0,title:"My Dialog Title",confirmButtonProps:{children:"Confirm",color:"error"},maxWidth:"lg",content:o.jsxs(o.Fragment,{children:[o.jsx("p",{children:"Some content within the dialog, which can contain other components:"}),o.jsx(n,{variant:"contained",children:"Button"})]}),titleHelpPopoverProps:{helpUrl:"https://help.synapse.org",markdownText:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"},onCancel:e(),onConfirm:e()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
