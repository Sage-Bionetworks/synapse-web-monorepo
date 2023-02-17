import{b5 as p}from"./SynapseContext-57d40dc1.js";import{d as e}from"./ToastMessage-80cbec70.js";import{s as n}from"./StorybookComponentWrapper-bfe5340e.js";import"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-c37d00c6.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-6e189800.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./styled-14ca3f03.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-40cc83b8.js";import"./useIsFocusVisible-ef5b8fd1.js";import"./SvgIcon-798376c1.js";import"./isArray-a82322d9.js";import"./Button-7d415009.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./SynapseConstants-6db32387.js";import"./IconSvg-38910aaf.js";import"./FullWidthAlert-a78446f8.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-e7625fe7.js";import"./Typography-ea175c9e.js";import"./IconButton-85dbcd17.js";import"./ButtonBase-85365024.js";import"./emotion-react.browser.esm-1c93b06f.js";import"./assertThisInitialized-081f9914.js";import"./Link-cd148c3f.js";import"./Button-2bfdfcba.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./dayjs.min-e0adaab4.js";import"./react-router-a0ab681b.js";const W={title:"Authentication/Login",component:p},o={args:{sessionCallback:()=>{n().then(({profile:m})=>{e(`You are currently logged in as ${m.userName}`,"info",{autoCloseInMs:5e3})})},renderBackButton:!0}};var r,t,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    sessionCallback: () => {
      sessionChangeHandler().then(({
        profile
      }) => {
        displayToast(\`You are currently logged in as \${profile.userName}\`, 'info', {
          autoCloseInMs: 5000
        });
      });
    },
    renderBackButton: true
  }
}`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};const X=["LoginDemo"];export{o as LoginDemo,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Login.stories-38daed08.js.map
