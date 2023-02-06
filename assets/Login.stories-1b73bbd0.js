import{b0 as p}from"./SynapseContext-f092e46c.js";import{d as e}from"./ToastMessage-808a1c1f.js";import{s as n}from"./StorybookComponentWrapper-86564b9a.js";import"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./Fade-d5cf0a46.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./useTheme-5ece020a.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./styled-9b57412c.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./Clear-ddba1ff0.js";import"./useIsFocusVisible-c754a498.js";import"./SvgIcon-a4f5cf68.js";import"./isArray-a82322d9.js";import"./Button-7d415009.js";import"./index-4d501b15.js";import"./getEndpoint-5374ab4d.js";import"./IconSvg-6adbbddc.js";import"./FullWidthAlert-bcde5cdd.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-f9d24722.js";import"./Typography-f91bff1f.js";import"./IconButton-6e69f6c0.js";import"./ButtonBase-a1be1f9a.js";import"./emotion-react.browser.esm-515d14f4.js";import"./assertThisInitialized-081f9914.js";import"./Link-ce35937e.js";import"./Button-475c86c5.js";import"./SynapseConstants-6db32387.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./isSymbol-b6149709.js";import"./dayjs.min-e0adaab4.js";import"./react-router-4a618c5d.js";const W={title:"Authentication/Login",component:p},o={args:{sessionCallback:()=>{n().then(({profile:m})=>{e(`You are currently logged in as ${m.userName}`,"info",{autoCloseInMs:5e3})})},renderBackButton:!0}};var r,t,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=Login.stories-1b73bbd0.js.map
