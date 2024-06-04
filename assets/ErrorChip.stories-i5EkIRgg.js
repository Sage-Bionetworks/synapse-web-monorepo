import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{E as l}from"./ErrorChip-D8_gP_rB.js";import{S as A,F as N,Y as i}from"./SynapseClient-Ihq4xrvb.js";import"./index-Dl6G-zuu.js";import"./Tooltip-CYVQ1vhC.js";import"./createTheme-CwlmBDro.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./index-DMoHWj5j.js";import"./index-aEXBT5Ni.js";import"./styled-OgyJf9MH.js";import"./utils-C1pLSGi5.js";import"./inheritsLoose-B7h9gheN.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-DGN18uA0.js";import"./useForkRef-CEBgoE3Z.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DYov3NPi.js";import"./mergeSlotProps-DHTQkAbv.js";import"./isHostComponent-DVu5iVWx.js";import"./useIsFocusVisible-DHYsnH_Q.js";import"./Chip-CYFbMuEw.js";import"./createSvgIcon-BYNyJbGL.js";import"./ButtonBase-5SeL_6IU.js";import"./assertThisInitialized-B9jnkVVz.js";import"./Avatar-CSnnTcUv.js";import"./Alert-HJYNNEvY.js";import"./Paper-BWoP1bRz.js";import"./IconButton-CgTC7RgJ.js";import"./ErrorOutlined-BSUguZv8.js";import"./index-S3N2_v0E.js";import"./SynapseConstants-BVYQRCsB.js";import"./OrientationBanner-BV5RFxzC.js";import"./FullWidthAlert-xeBFwHL5.js";import"./Stack-CkbmjR2j.js";import"./Box-DRdN2jdb.js";import"./AlertTitle-DKiwjjrh.js";import"./Typography-B88_J_TK.js";import"./ClickAwayListener-BnMSRy2k.js";import"./Button-mb55Lwfk.js";import"./getEndpoint-CjoHA800.js";import"./tinycolor-Begke6kS.js";import"./InfoTwoTone-sybcF8uh.js";import"./CheckCircleTwoTone-h9GSy5KG.js";import"./colorManipulator-CXx1BTzE.js";import"./inputBaseClasses-DUreQxsm.js";import"./Fade-BNGotgqy.js";import"./dayjs.min-d18Up55D.js";import"./index-BfyspvgH.js";import"./tiny-invariant-CopsF_GD.js";import"./Link-EkQ0dGSu.js";import"./_getTag-B6zWmB6G.js";import"./_Map-W_LbVzGG.js";import"./isArray-D3Xc0Edl.js";import"./StringUtils-D4kDWP8q.js";const Cr={title:"Components/ErrorChip",component:l,decorators:[(g,E)=>e.jsx(A,{children:s=>e.jsx(N,{synapseContext:{...s,accessToken:E.isAuthenticated?s.accessToken||"fake token":void 0},children:e.jsx(g,{})})})]},y=new i(401,"You must be signed in to access this resource.",""),r={args:{chipText:"syn1234567",error:y,isAuthenticated:!1}},S=new i(403,"You do not have READ access on this entity.",""),o={args:{chipText:"syn1234567",error:S,isAuthenticated:!0}},T=new i(404,"The entity does not exist.",""),t={args:{chipText:"syn1234567",error:T,isAuthenticated:!0}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
