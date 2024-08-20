import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{E as l}from"./ErrorChip-o0Qj46rx.js";import{S as A,F as N,X as i}from"./SynapseClient-C1hEaEDx.js";import"./OrientationBanner-D9iiRUAg.js";import"./index-Dl6G-zuu.js";import"./RegularExpressions-D6yUxzx6.js";import"./getEndpoint-CjoHA800.js";import"./Tooltip-Drr3vXNI.js";import"./createTheme-DFSTUSmt.js";import"./index-GEGPABih.js";import"./index-hJhP8EJR.js";import"./styled-D9wW3ABP.js";import"./utils-Bdp_oNP4.js";import"./TransitionGroupContext-B611AcNu.js";import"./useForkRef-CEBgoE3Z.js";import"./index-B6qzg4VC.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-lFU1cKdF.js";import"./mergeSlotProps-deWJORir.js";import"./isHostComponent-DVu5iVWx.js";import"./useIsFocusVisible-Cwvw9TRl.js";import"./Chip-CZXC0IVJ.js";import"./createSvgIcon-gkOuU5-G.js";import"./ButtonBase-BgDXtZj-.js";import"./Avatar-VbBYm8Q1.js";import"./Alert-Aa0bm5Nm.js";import"./Paper-6hBhi2Vr.js";import"./IconButton-CLoAcDX9.js";import"./ErrorOutlined-CnICwQW0.js";import"./index-7Z2-YRMp.js";import"./SynapseConstants-D3KdaG9T.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-BOGoGeNw.js";import"./CheckCircleTwoTone-U_UPMvHV.js";import"./colorManipulator-2ZEM0eRC.js";import"./inputBaseClasses-ZfVcQiUT.js";import"./Fade-Bhxuafx5.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./FullWidthAlert-Q7pb-Dsc.js";import"./Stack-D3AEdRlD.js";import"./Box-DRYT9rh3.js";import"./AlertTitle-DKLb405u.js";import"./Typography-DgBbIcOX.js";import"./ClickAwayListener-5odGQiyi.js";import"./Button-CLkrjdQe.js";import"./Link-Cl5bQMMR.js";import"./_getTag-BK1szWWC.js";import"./_Map-CWVOAJuy.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-Co1zhm8v.js";const Sr={title:"Components/ErrorChip",component:l,decorators:[(g,E)=>e.jsx(A,{children:s=>e.jsx(N,{synapseContext:{...s,accessToken:E.isAuthenticated?s.accessToken||"fake token":void 0},children:e.jsx(g,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
