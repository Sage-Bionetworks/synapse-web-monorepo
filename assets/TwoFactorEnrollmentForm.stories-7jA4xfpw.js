import{n as e}from"./chunk-zsgVPwQN.js";import{n as t,r as n}from"./TwoFactorEnrollmentForm-tjQaqSY4.js";import{i as r,r as i}from"./ToastMessage-bWLQiVLK.js";var a,o,s,c;e((()=>{n(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Authentication/TwoFactorEnrollment`,component:t},s={args:{totpSecret:{secretId:`0`,secret:`fake-secret`,alg:``,digits:6,period:30,username:`fake-username`},onTwoFactorEnrollmentSuccess:()=>{i(`Successfully enrolled in 2FA!`,`success`)},onBackClicked:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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