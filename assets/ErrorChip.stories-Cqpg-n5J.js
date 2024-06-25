import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{E as l}from"./ErrorChip-COVu76jh.js";import{S as A,F as N,_ as i}from"./SynapseClient-DOvPcqTn.js";import"./index-Dl6G-zuu.js";import"./Tooltip-Drs5efNb.js";import"./createTheme-CcAD2pPO.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DXXbLLGH.js";import"./index-GEGPABih.js";import"./index-DgT9Y5QJ.js";import"./styled-Sx1jgj-B.js";import"./utils-DkbdKabZ.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DGN18uA0.js";import"./useForkRef-CEBgoE3Z.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DK1F46qr.js";import"./mergeSlotProps-BW52tAYO.js";import"./isHostComponent-DVu5iVWx.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./Chip-DbzvvpKq.js";import"./createSvgIcon-DSqIFKhr.js";import"./ButtonBase-DE7aKxis.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Avatar-DfcwodJm.js";import"./Alert-C43IQeyU.js";import"./Paper-BCUpbPXs.js";import"./IconButton-DYXdVn2C.js";import"./ErrorOutlined-CN3JQb1a.js";import"./index-Jpdv6DNM.js";import"./SynapseConstants-xT-wNYiF.js";import"./OrientationBanner-2CkDIifK.js";import"./FullWidthAlert-E8rh7S-2.js";import"./Stack-CqpovyXN.js";import"./Box--1V6nYGL.js";import"./AlertTitle-CYZGUJl4.js";import"./Typography-CxCAiHvb.js";import"./ClickAwayListener-BnMSRy2k.js";import"./Button-DBz2LXAC.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-B6zWmPbt.js";import"./CheckCircleTwoTone-DPjbEwSO.js";import"./colorManipulator-BNChw7e0.js";import"./inputBaseClasses-DiZSv6oN.js";import"./Fade-BgJxt2ZN.js";import"./getEndpoint-CjoHA800.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-kkaQjRHX.js";import"./_getTag-C0pnHUBv.js";import"./_Map-DQ7BAz_a.js";import"./isArray-ggc3KxVp.js";import"./StringUtils-D4kDWP8q.js";const Cr={title:"Components/ErrorChip",component:l,decorators:[(g,E)=>e.jsx(A,{children:s=>e.jsx(N,{synapseContext:{...s,accessToken:E.isAuthenticated?s.accessToken||"fake token":void 0},children:e.jsx(g,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const fr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,fr as __namedExportsOrder,Cr as default};
