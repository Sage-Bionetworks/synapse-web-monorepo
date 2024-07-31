import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{E as l}from"./ErrorChip-BDRyVjJN.js";import{S as A,F as N,W as i}from"./SynapseClient-Dbc8tFdW.js";import"./OrientationBanner-x6ohh6pv.js";import"./index-Dl6G-zuu.js";import"./EntityTypeUtils-BpOAC-k-.js";import"./getEndpoint-CjoHA800.js";import"./Tooltip-BZeYxe44.js";import"./createTheme-Dtzk88yv.js";import"./index-GEGPABih.js";import"./index-Cvyar9fI.js";import"./styled-BEXTB4Ho.js";import"./utils-C59yjAo_.js";import"./TransitionGroupContext-B611AcNu.js";import"./useForkRef-CEBgoE3Z.js";import"./index-B6qzg4VC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CspkvTld.js";import"./mergeSlotProps-Dv5GaMzt.js";import"./isHostComponent-DVu5iVWx.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./Chip-BgmV-XzN.js";import"./createSvgIcon-eMxRw33w.js";import"./ButtonBase-CI9J1-uo.js";import"./Avatar-CWVDxNGt.js";import"./Alert-C2wXqEQ3.js";import"./Paper-B2c6t1gu.js";import"./IconButton-cf2NThiY.js";import"./ErrorOutlined-Bqgz-1Qz.js";import"./index-CIIvWsNs.js";import"./SynapseConstants-Br5dMy50.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CxHU0jl8.js";import"./CheckCircleTwoTone-BB9W7Hyp.js";import"./colorManipulator-D5JWZs3m.js";import"./inputBaseClasses-DcVJRUx_.js";import"./Fade-DX0GMli6.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./FullWidthAlert-jkkWXtk2.js";import"./Stack-DkXTQwBs.js";import"./Box-BlHPf8tq.js";import"./AlertTitle-CmC2H_AO.js";import"./Typography-qpntpuFp.js";import"./ClickAwayListener-5odGQiyi.js";import"./Button-jcEr4EiK.js";import"./Link-DhsldE67.js";import"./_getTag-eW65qzo1.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";const Sr={title:"Components/ErrorChip",component:l,decorators:[(g,E)=>e.jsx(A,{children:s=>e.jsx(N,{synapseContext:{...s,accessToken:E.isAuthenticated?s.accessToken||"fake token":void 0},children:e.jsx(g,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotFoundError,
    isAuthenticated: true
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Tr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,Tr as __namedExportsOrder,Sr as default};
