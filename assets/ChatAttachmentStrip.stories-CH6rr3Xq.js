import{o as e}from"./preload-helper-CsHsquCd.js";import{t}from"./jsx-runtime-l3w3GfrB.js";import{n,t as r}from"./ChatAttachmentStrip-sqtuyENs.js";function i(e,t={}){return{fileHandleId:e,label:`file-${e}.txt`,contentType:`text/plain`,...t}}var a,o,s,c,l,u,d,f;e((()=>{n(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Synapse/Chat/ChatAttachmentStrip`,component:r,args:{onRemove:o()}},c={args:{items:[]}},l={args:{items:[i(`1`,{label:`PCA_Lung_Cancer_Feature_Reduction_Classification.pdf`,contentType:`application/pdf`}),i(`2`,{label:`Adams cool text file.txt`}),i(`3`,{label:`Another file.csv`,contentType:`text/csv`})]}},u={args:{items:Array.from({length:4},(e,t)=>i(`${t+1}`))},parameters:{chromatic:{viewports:[480]}},decorators:[e=>(0,a.jsx)(`div`,{style:{width:`480px`},children:(0,a.jsx)(e,{})})]},d={args:{wrap:!0,onRemove:void 0,items:Array.from({length:5},(e,t)=>i(`${t+1}`))},decorators:[e=>(0,a.jsx)(`div`,{style:{width:`512px`},children:(0,a.jsx)(e,{})})]},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [attachmentItem('1', {
      label: 'PCA_Lung_Cancer_Feature_Reduction_Classification.pdf',
      contentType: 'application/pdf'
    }), attachmentItem('2', {
      label: 'Adams cool text file.txt'
    }), attachmentItem('3', {
      label: 'Another file.csv',
      contentType: 'text/csv'
    })]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 4
    }, (_, i) => attachmentItem(\`\${i + 1}\`))
  },
  parameters: {
    // Matches the composer card's inner content width (480px).
    chromatic: {
      viewports: [480]
    }
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>]
}`,...u.parameters?.docs?.source},description:{story:`In the composer (nowrap), a 4th chip is intentionally left partially offscreen -- the
container relies on default browser horizontal-scroll behavior rather than a custom
scrollbar.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    wrap: true,
    onRemove: undefined,
    items: Array.from({
      length: 5
    }, (_, i) => attachmentItem(\`\${i + 1}\`))
  },
  decorators: [Story => <div style={{
    width: '512px'
  }}>
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}},f=[`Empty`,`WithAttachments`,`FourthChipOverflows`,`Wrapping`]}))();export{c as Empty,u as FourthChipOverflows,l as WithAttachments,d as Wrapping,f as __namedExportsOrder,s as default};