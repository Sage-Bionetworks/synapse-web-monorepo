import{j as e}from"./jsx-runtime-9dc53467.js";import{E as A}from"./ErrorChip-82c1f53a.js";import{S as E,F as N,b as i}from"./SynapseClient-d7905674.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Tooltip-72ca093b.js";import"./styled-2fcfc37a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./useTheme-76051239.js";import"./isHostComponent-fa76b8d9.js";import"./Grow-241280c4.js";import"./useForkRef-8feb2ebf.js";import"./index-d3ea75b5.js";import"./utils-bed83364.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useIsFocusVisible-e5f6c995.js";import"./Chip-74479db8.js";import"./createSvgIcon-8a3e2935.js";import"./ButtonBase-f4a900e8.js";import"./emotion-react.browser.esm-b6cea713.js";import"./assertThisInitialized-081f9914.js";import"./Avatar-cb65f89e.js";import"./ErrorOutlined-c656d1cd.js";import"./SynapseConstants-8157454e.js";import"./OrientationBanner-1bd00e8c.js";import"./FullWidthAlert-a8fd2235.js";import"./Alert-a2690b50.js";import"./Paper-699baef2.js";import"./IconButton-64077c25.js";import"./Stack-69986211.js";import"./extendSxProp-c283072b.js";import"./Box-2044d34a.js";import"./AlertTitle-a34c5fe9.js";import"./Typography-b1f79b20.js";import"./ClickAwayListener-3907f9d7.js";import"./Button-8ea9f590.js";import"./getEndpoint-ac94413e.js";import"./InfoTwoTone-c9bbd609.js";import"./CheckCircleTwoTone-b021ad72.js";import"./inputBaseClasses-7a80a621.js";import"./Fade-1b8e1369.js";import"./Link-66bc2a10.js";import"./_getTag-6966e563.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-bd88158d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";const yr={title:"Components/ErrorChip",component:A,decorators:[(l,x)=>e(E,{children:s=>e(N,{synapseContext:{...s,accessToken:x.isAuthenticated?s.accessToken||"fake token":void 0},children:e(l,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NoAccessError,
    isAuthenticated: true
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const Sr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,Sr as __namedExportsOrder,yr as default};
//# sourceMappingURL=ErrorChip.stories-177a372d.js.map
