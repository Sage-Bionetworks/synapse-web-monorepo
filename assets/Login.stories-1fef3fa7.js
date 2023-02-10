import{b0 as p}from"./SynapseContext-8a8a2a7d.js";import{d as e}from"./ToastMessage-f34af748.js";import{s as n}from"./StorybookComponentWrapper-c41a0c02.js";import"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-65d0b271.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-860bf3dd.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./styled-692f7acd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-fa5d240c.js";import"./useIsFocusVisible-c754a498.js";import"./SvgIcon-11a58ea3.js";import"./isArray-a82322d9.js";import"./Button-7d415009.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-f040e081.js";import"./FullWidthAlert-ca15609f.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-3f5fe1df.js";import"./Typography-641a9a3f.js";import"./IconButton-e44040a1.js";import"./ButtonBase-8f10ace8.js";import"./emotion-react.browser.esm-5ef5dfb7.js";import"./assertThisInitialized-081f9914.js";import"./Link-3a86b878.js";import"./Button-ec3f5b60.js";import"./SynapseConstants-6db32387.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./dayjs.min-e0adaab4.js";import"./react-router-9ff2542c.js";const W={title:"Authentication/Login",component:p},o={args:{sessionCallback:()=>{n().then(({profile:m})=>{e(`You are currently logged in as ${m.userName}`,"info",{autoCloseInMs:5e3})})},renderBackButton:!0}};var r,t,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=Login.stories-1fef3fa7.js.map
