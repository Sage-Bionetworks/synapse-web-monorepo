import{n as e}from"./chunk-jRWAZmH_.js";import{En as t,Tn as n,vn as r,yn as i}from"./iframe-YjMPAbrw.js";var a,o,s,c;e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Authentication/TwoFactorEnrollment`,component:n},s={args:{totpSecret:{secretId:`0`,secret:`fake-secret`,alg:``,digits:6,period:30,username:`fake-username`},onTwoFactorEnrollmentSuccess:()=>{r(`Successfully enrolled in 2FA!`,`success`)},onBackClicked:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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