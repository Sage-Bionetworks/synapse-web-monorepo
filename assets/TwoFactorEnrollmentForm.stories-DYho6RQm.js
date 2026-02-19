import{ag as s,K as n}from"./iframe-C_dryyJN.js";import"./index-Chi_LkuB.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,c={title:"Authentication/TwoFactorEnrollment",component:s},e={args:{totpSecret:{secretId:"0",secret:"fake-secret",alg:"",digits:6,period:30,username:"fake-username"},onTwoFactorEnrollmentSuccess:()=>{n("Successfully enrolled in 2FA!","success")},onBackClicked:o()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const a=["Demo"];export{e as Demo,a as __namedExportsOrder,c as default};
