import{af as r,J as t}from"./iframe-B9o6ulgU.js";import"./index-r8ZA1smB.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Authentication/TwoFactorEnrollment",component:r},e={args:{totpSecret:{secretId:"0",secret:"fake-secret",alg:"",digits:6,period:30,username:"fake-username"},onTwoFactorEnrollmentSuccess:()=>{t("Successfully enrolled in 2FA!","success")},onBackClicked:c()}};var s,n,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const i=["Demo"];export{e as Demo,i as __namedExportsOrder,m as default};
