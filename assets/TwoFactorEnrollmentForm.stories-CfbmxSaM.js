import{o as e}from"./preload-helper-CsHsquCd.js";import{_ as t,i as n,t as r}from"./core-CI8DLeHF.js";import{Un as i,zn as a}from"./synapse-client-C0WJQHYT.js";import{i as o,r as s}from"./ToastMessage-BHbI-Bzr.js";import{n as c,r as l}from"./TwoFactorEnrollmentForm-DjuJUuRv.js";function u(e){return n.post(e+f,()=>t.json({concreteType:`org.sagebionetworks.repo.model.ErrorResponse`,reason:`Invalid TOTP code`},{status:400}))}function d(e,r){return n.post(e+f,()=>t.json({concreteType:`org.sagebionetworks.repo.model.ErrorResponse`,reason:r},{status:500}))}var f,p=e((()=>{r(),f=`/auth/v1/2fa`})),m,h,g,_,v,y;e((()=>{p(),i(),l(),o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Authentication/TwoFactorEnrollment`,component:c},g={args:{totpSecret:{secretId:`0`,secret:`fake-secret`,alg:``,digits:6,period:30,username:`fake-username`},onTwoFactorEnrollmentSuccess:()=>{s(`Successfully enrolled in 2FA!`,`success`)},onBackClicked:m()}},_={args:g.args,parameters:{stack:`mock`,msw:{handlers:{twoFactorEnrollment:[u(a)]}}}},v={args:g.args,parameters:{stack:`mock`,msw:{handlers:{twoFactorEnrollment:[d(a,`Something went wrong`)]}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: Demo.args,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: {
        twoFactorEnrollment: [getInvalidCodeTwoFactorEnrollmentHandler(MOCK_REPO_ORIGIN)]
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: Demo.args,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: {
        twoFactorEnrollment: [getUnexpectedErrorTwoFactorEnrollmentHandler(MOCK_REPO_ORIGIN, 'Something went wrong')]
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Demo`,`InvalidCode`,`UnexpectedError`]}))();export{g as Demo,_ as InvalidCode,v as UnexpectedError,y as __namedExportsOrder,h as default};