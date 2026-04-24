import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CR4qI0Ep.js";import{n,t as r}from"./WarningDialog-vwNtCJX3.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`UI/WarningDialog`,component:r,render:e=>(0,i.jsx)(r,{...e}),args:{onConfirm:a(),onCancel:a()}},s={args:{open:!0,title:`Approve Request`,content:`Are you sure you want to approve this request?`,onConfirmCallbackArgs:[]}},c={args:{...s.args,title:`Confirm Deletion`,confirmButtonText:`Delete Token`,confirmButtonColor:`error`,content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`p`,{children:`If you delete this token, any applications using it will stop working. This action cannot be undone.`}),(0,i.jsx)(`p`,{className:`SRC-boldText`,children:`Are you sure you want to delete this token?`})]})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Approve Request',
    content: 'Are you sure you want to approve this request?',
    onConfirmCallbackArgs: []
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Demo.args,
    title: 'Confirm Deletion',
    confirmButtonText: 'Delete Token',
    confirmButtonColor: 'error',
    content: <>
        <p>
          If you delete this token, any applications using it will stop working.
          This action cannot be undone.
        </p>
        <p className="SRC-boldText">
          Are you sure you want to delete this token?
        </p>
      </>
  }
}`,...c.parameters?.docs?.source}}},l=[`Demo`,`AccessTokenCardWarningDialog`]}))();export{c as AccessTokenCardWarningDialog,s as Demo,l as __namedExportsOrder,o as default};