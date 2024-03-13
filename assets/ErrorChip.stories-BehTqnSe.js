import{j as e}from"./jsx-runtime-CKrituN3.js";import{E as l}from"./ErrorChip-DDc9H7ep.js";import{S as A,F as N,V as i}from"./ApplicationSessionManager-CoKgEkVZ.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Tooltip-XprEAl00.js";import"./createTheme-2XtGYoE4.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DMoHWj5j.js";import"./index-CJ-wfEIf.js";import"./styled-CPWjInoX.js";import"./utils-SU9mu0D7.js";import"./inheritsLoose-B7h9gheN.js";import"./index-BtM5VmRH.js";import"./TransitionGroupContext-B1FFUpIO.js";import"./useForkRef-BSLA1zlB.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DHJeVGyA.js";import"./mergeSlotProps-ih6DGlm4.js";import"./isHostComponent-DVu5iVWx.js";import"./useIsFocusVisible-Chjat8DO.js";import"./Chip-wMvD6Pzg.js";import"./createSvgIcon-ClnqzT54.js";import"./ButtonBase-xB_9igmm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Avatar-1vKdsY-O.js";import"./Alert-jLvJNeQC.js";import"./Paper-DYLu205z.js";import"./IconButton-DUzhqGqo.js";import"./ErrorOutlined-BhDYotgP.js";import"./SynapseConstants-Dbq7Gtj7.js";import"./OrientationBanner-DFzKDcoJ.js";import"./FullWidthAlert-Dm349vLy.js";import"./Stack-wDqeWMTC.js";import"./Box-qzYP1vnN.js";import"./AlertTitle-DGMjNv9d.js";import"./Typography-BhttL55U.js";import"./ClickAwayListener-CVXPLwF5.js";import"./Button-BOCcoe4v.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-CBfzdnva.js";import"./CheckCircleTwoTone-B5Iaww82.js";import"./colorManipulator-CieAV1Z7.js";import"./inputBaseClasses-DIwNn5yR.js";import"./Fade--kK2ZsE4.js";import"./index-C-UbkUMQ.js";import"./dayjs.min-BIwLhz4I.js";import"./index-Dk74W0Oi.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-BXqr-BaG.js";import"./_getTag-7fqy2l2P.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";const fr={title:"Components/ErrorChip",component:l,decorators:[(g,E)=>e.jsx(A,{children:s=>e.jsx(N,{synapseContext:{...s,accessToken:E.isAuthenticated?s.accessToken||"fake token":void 0},children:e.jsx(g,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var p,n,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    chipText: 'syn1234567',
    error: NotSignedInError,
    isAuthenticated: false
  }
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var a,c,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Fr=["NotSignedIn","NoAccess","NotFound"];export{o as NoAccess,t as NotFound,r as NotSignedIn,Fr as __namedExportsOrder,fr as default};
