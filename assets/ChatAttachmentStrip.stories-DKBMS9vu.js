import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./jsx-runtime-l3w3GfrB.js";import{t as r}from"./classnames-Dr-vwtlJ.js";import{n as i,t as a}from"./AttachmentChip-DHwMcMf8.js";var o,s,c,l,u=e((()=>{o=`_strip_10c32_1`,s=`_wrap_10c32_7`,c=`_item_10c32_12`,l={strip:o,wrap:s,item:c}}));function d({items:e,wrap:t=!1,onRemove:n}){return e.length===0?null:(0,p.jsx)(`div`,{className:(0,f.default)(l.strip,t&&l.wrap),children:e.map(e=>(0,p.jsx)(`div`,{className:l.item,children:(0,p.jsx)(a,{label:e.label,contentType:e.contentType,status:e.status,errorMessage:e.errorMessage,onRemove:n?()=>n(e.fileHandleId):void 0})},e.fileHandleId))})}var f,p,m=e((()=>{f=t(r(),1),i(),u(),p=n();try{d.displayName=`ChatAttachmentStrip`,d.__docgenInfo={description:`A strip of attachment chips. Used both above the chat text input for attachments pending
send (horizontally-scrolling, with a remove control on each chip) and below a sent message
in the chat transcript (wrapping, read-only).`,displayName:`ChatAttachmentStrip`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/components/SynapseChat/components/ChatAttachmentStrip/ChatAttachmentStrip.tsx`,methods:[],props:{items:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/SynapseChat/components/ChatAttachmentStrip/ChatAttachmentStrip.tsx`,name:`TypeLiteral`}],description:``,name:`items`,required:!0,tags:{},type:{name:`AttachmentStripItem[]`}},wrap:{defaultValue:{value:`false`},declarations:[{fileName:`synapse-react-client/src/components/SynapseChat/components/ChatAttachmentStrip/ChatAttachmentStrip.tsx`,name:`TypeLiteral`}],description:`Wrap to multiple rows instead of overflowing horizontally.`,name:`wrap`,required:!1,tags:{default:`false`},type:{name:`boolean`}},onRemove:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/components/SynapseChat/components/ChatAttachmentStrip/ChatAttachmentStrip.tsx`,name:`TypeLiteral`}],description:`If provided, each chip gets a remove badge. Invoked with the fileHandleId of the attachment to remove.`,name:`onRemove`,required:!1,tags:{},type:{name:`((fileHandleId: string) => void)`}}},tags:{}}}catch{}}));function h(e,t={}){return{fileHandleId:e,label:`file-${e}.txt`,contentType:`text/plain`,...t}}var g,_,v,y,b,x,S,C;e((()=>{m(),g=n(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Synapse/Chat/ChatAttachmentStrip`,component:d,args:{onRemove:_()}},y={args:{items:[]}},b={args:{items:[h(`1`,{label:`PCA_Lung_Cancer_Feature_Reduction_Classification.pdf`,contentType:`application/pdf`}),h(`2`,{label:`Adams cool text file.txt`}),h(`3`,{label:`Another file.csv`,contentType:`text/csv`})]}},x={args:{items:Array.from({length:4},(e,t)=>h(`${t+1}`))},parameters:{chromatic:{viewports:[480]}},decorators:[e=>(0,g.jsx)(`div`,{style:{width:`480px`},children:(0,g.jsx)(e,{})})]},S={args:{wrap:!0,onRemove:void 0,items:Array.from({length:5},(e,t)=>h(`${t+1}`))},decorators:[e=>(0,g.jsx)(`div`,{style:{width:`512px`},children:(0,g.jsx)(e,{})})]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`In the composer (nowrap), a 4th chip is intentionally left partially offscreen -- the
container relies on default browser horizontal-scroll behavior rather than a custom
scrollbar.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Empty`,`WithAttachments`,`FourthChipOverflows`,`Wrapping`]}))();export{y as Empty,x as FourthChipOverflows,b as WithAttachments,S as Wrapping,C as __namedExportsOrder,v as default};