import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{t as r}from"./jsx-runtime-l3w3GfrB.js";import{i,n as a,t as o}from"./core-CI8DLeHF.js";import{Fn as s,Ln as c,Vn as l,in as u}from"./synapse-client-CZF9FYCe.js";import{n as d,t as f}from"./ChatInputArea-xUCoFKKs.js";async function p(e,t){let n=v(e.ownerDocument.body);await _.click(await n.findByRole(`button`,{name:`Add files`}));let r=document.body.querySelector(`input[type="file"][id=filesToUpload]`),i=t.map(e=>new File([`content`],e,{type:`text/plain`}));await _.upload(r,i);let a=await n.findByRole(`button`,{name:`Done`});await y(()=>{b(a).not.toBeDisabled()}),await _.click(a),await n.findByText(t.at(-1))}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{s(),l(),o(),m=t(n(),1),d(),h=r(),{fn:g,userEvent:_,within:v,waitFor:y,expect:b}=__STORYBOOK_MODULE_TEST__,x={title:`Synapse/Chat/ChatInputArea`,component:f,args:{onValueChange:g(),onSend:g(),placeholder:`Message SynapseChat`},parameters:{stack:`mock`},render:function(e){let[t,n]=(0,m.useState)(e.value);return(0,h.jsx)(f,{...e,value:t,onValueChange:t=>{n(t),e.onValueChange(t)}})}},S={args:{value:``}},C={args:{value:`What files are attached to this project?`}},w={args:{value:`Waiting for a session...`,disabled:!0}},T={args:{value:``,allowAttachments:!0},play:async({canvasElement:e})=>{await p(e,[`report.pdf`])}},E={args:{value:``,allowAttachments:!0},play:async({canvasElement:e})=>{await p(e,[`a.txt`,`b.txt`,`c.txt`])}},D={args:{value:``,allowAttachments:!0},decorators:[e=>(0,h.jsx)(`div`,{style:{width:`480px`},children:(0,h.jsx)(e,{})})],play:async({canvasElement:e})=>{await p(e,[`a.txt`,`b.txt`,`c.txt`,`d.txt`])}},O={args:{value:`hello`,allowAttachments:!0},parameters:{msw:{handlers:{file:[i.post(`${c}${u}/file/multipart`,async()=>{await a(`infinite`)})]}}},play:async({canvasElement:e})=>{let t=v(e);await _.click(await t.findByRole(`button`,{name:`Add files`}));let n=document.body.querySelector(`input[type="file"][id=filesToUpload]`);await _.upload(n,new File([`content`],`report.pdf`,{type:`application/pdf`}))}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'What files are attached to this project?'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Waiting for a session...',
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    allowAttachments: true
  },
  play: async ({
    canvasElement
  }) => {
    await attachFiles(canvasElement, ['report.pdf']);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    allowAttachments: true
  },
  play: async ({
    canvasElement
  }) => {
    await attachFiles(canvasElement, ['a.txt', 'b.txt', 'c.txt']);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    allowAttachments: true
  },
  decorators: [Story => <div style={{
    width: '480px'
  }}>
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    await attachFiles(canvasElement, ['a.txt', 'b.txt', 'c.txt', 'd.txt']);
  }
}`,...D.parameters?.docs?.source},description:{story:`The composer's inner content is 480px wide; a 4th chip is intentionally left partially
offscreen -- the container relies on default browser horizontal-scroll behavior rather than
a custom scrollbar (per the Figma designer's annotation).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'hello',
    allowAttachments: true
  },
  parameters: {
    msw: {
      handlers: {
        file: [http.post(\`\${MOCK_REPO_ORIGIN}\${FILE}/file/multipart\`, async () => {
          await delay('infinite');
        })]
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Add files'
    }));
    // AddFilesDialog renders a MUI Dialog, which portals its content to document.body rather
    // than canvasElement, so the file input must be queried from the document.
    const fileInput = document.body.querySelector<HTMLInputElement>('input[type="file"][id=filesToUpload]')!;
    await userEvent.upload(fileInput, new File(['content'], 'report.pdf', {
      type: 'application/pdf'
    }));
  }
}`,...O.parameters?.docs?.source},description:{story:`Overrides the mocked multipart-upload endpoint to hang indefinitely, so the story renders
mid-upload -- with the send button disabled -- instead of racing to a completed chip.`,...O.parameters?.docs?.description}}},k=[`Empty`,`Typed`,`Disabled`,`OneAttachment`,`ThreeAttachments`,`FourthAttachmentOverflows`,`Uploading`]}))();export{w as Disabled,S as Empty,D as FourthAttachmentOverflows,T as OneAttachment,E as ThreeAttachments,C as Typed,O as Uploading,k as __namedExportsOrder,x as default};