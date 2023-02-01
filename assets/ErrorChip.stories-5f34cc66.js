import{j as r}from"./jsx-runtime-670450c2.js";import{E as S}from"./ErrorChip-31194011.js";import{f as n,a0 as g,S as k}from"./index-5643b5a3.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./Tooltip-266dd013.js";import"./extends-98964cd2.js";import"./SvgIcon-51e1f886.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-abc8f272.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./useTheme-1b437015.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./ButtonBase-359737e8.js";import"./emotion-react.browser.esm-421a64bf.js";import"./assertThisInitialized-081f9914.js";import"./IconSvg-0e7cf93d.js";import"./SynapseConstants-f1d07af3.js";import"./Button-7d415009.js";import"./FullWidthAlert-59d3d098.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-46957a4f.js";import"./index-4d501b15.js";import"./Typography-4e56074b.js";import"./Fade-f3cad5fb.js";import"./isArray-a82322d9.js";import"./getEndpoint-5374ab4d.js";import"./IconButton-4918d20b.js";import"./Link-f2f6852b.js";import"./Button-2476b393.js";const ne={title:"Components/ErrorChip",component:S,argTypes:{}},s=i=>r(g,{children:a=>r(k,{synapseContext:{...a,accessToken:i.isAuthenticated?a.accessToken||"fake token":void 0},children:r(S,{...i})})}),T=new n(401,"You must be signed in to access this resource.",""),e=s.bind({});e.args={chipText:"syn1234567",error:T,isAuthenticated:!1};const f=new n(403,"You do not have READ access on this entity.",""),t=s.bind({});t.args={chipText:"syn1234567",error:f,isAuthenticated:!0};const E=new n(404,"The entity does not exist.",""),o=s.bind({});o.args={chipText:"syn1234567",error:E,isAuthenticated:!0};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => <SynapseContextConsumer>
    {context => <SynapseContextProvider synapseContext={{
    ...context,
    accessToken: args.isAuthenticated ? context.accessToken || 'fake token' : undefined
  }}>
        <ErrorChip {...args} />
      </SynapseContextProvider>}
  </SynapseContextConsumer>`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => <SynapseContextConsumer>
    {context => <SynapseContextProvider synapseContext={{
    ...context,
    accessToken: args.isAuthenticated ? context.accessToken || 'fake token' : undefined
  }}>
        <ErrorChip {...args} />
      </SynapseContextProvider>}
  </SynapseContextConsumer>`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var C,y,h;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`args => <SynapseContextConsumer>
    {context => <SynapseContextProvider synapseContext={{
    ...context,
    accessToken: args.isAuthenticated ? context.accessToken || 'fake token' : undefined
  }}>
        <ErrorChip {...args} />
      </SynapseContextProvider>}
  </SynapseContextConsumer>`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const se=["NotSignedIn","NoAccess","NotFound"];export{t as NoAccess,o as NotFound,e as NotSignedIn,se as __namedExportsOrder,ne as default};
//# sourceMappingURL=ErrorChip.stories-5f34cc66.js.map
