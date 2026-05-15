import{n as e}from"./chunk-jRWAZmH_.js";import{An as t,Cn as n,jn as r,wn as i}from"./iframe-DLlGW_Fz.js";var a,o,s,c;e((()=>{r(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Authentication/TwoFactorEnrollment`,component:t},s={args:{totpSecret:{secretId:`0`,secret:`fake-secret`,alg:``,digits:6,period:30,username:`fake-username`},onTwoFactorEnrollmentSuccess:()=>{n(`Successfully enrolled in 2FA!`,`success`)},onBackClicked:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    totpSecret: {
      secretId: '0',
      secret: 'fake-secret',
      alg: '',
      digits: 6,
      period: 30,
      username: 'fake-username'
    },
    onTwoFactorEnrollmentSuccess: () => {
      displayToast('Successfully enrolled in 2FA!', 'success');
    },
    onBackClicked: fn()
  }
}`,...s.parameters?.docs?.source}}},c=[`Demo`]}))();export{s as Demo,c as __namedExportsOrder,o as default};