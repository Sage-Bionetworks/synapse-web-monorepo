import{a as z,F as x,j as a}from"./jsx-runtime-9dc53467.js";import{k as D,l as b,M as L,m as h,e as v,j as w}from"./SynapseConstants-c93e8ee4.js";import{H as y}from"./SynapseClient-7700f4cc.js";import"./getEndpoint-ac94413e.js";import"./index-76fb7be0.js";import{U as c}from"./UserBadge-43829a76.js";import{B as O}from"./Box-737945d6.js";import"./OrientationBanner-c0eacdfc.js";import"./FullWidthAlert-77167a31.js";import"./Alert-f631f725.js";import"./styled-87b6157a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-397996e3.js";import"./Paper-625f2e68.js";import"./IconButton-30f6f351.js";import"./ButtonBase-651ec7a9.js";import"./emotion-react.browser.esm-6130a288.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-eb200119.js";import"./extendSxProp-c4113ea3.js";import"./AlertTitle-38884730.js";import"./Typography-62cfc992.js";import"./useTheme-58bb7d64.js";import"./Grow-08403985.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./utils-830530e5.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-e8bd1358.js";import"./Button-a2b8b546.js";import"./InfoTwoTone-bbc735a3.js";import"./CheckCircleTwoTone-8a62494f.js";import"./inputBaseClasses-888452c9.js";import"./Fade-3c4a970e.js";import"./Link-adab3de3.js";import"./_getTag-dcd38d76.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-3a31b023.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";import"./Menu-b29d7520.js";import"./index-c71daf5e.js";import"./Modal-a7690934.js";import"./Backdrop-f4f4944d.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./MenuList-7e60caa0.js";import"./List-507b8078.js";import"./IconSvg-b2c8dc9b.js";import"./ErrorOutlined-20d019ce.js";import"./GetAppTwoTone-ce03f56d.js";import"./InfoOutlined-e67f3aa8.js";import"./cloneDeep-4246eae0.js";import"./_baseClone-9db79a00.js";import"./_Uint8Array-595ed3dd.js";import"./_baseTimes-8715be3e.js";import"./_initCloneObject-b3d76b79.js";import"./_getAllKeys-fa8e70cf.js";import"./SkeletonTable-04ae7db3.js";import"./times-c23b3cf2.js";import"./identity-46f208ab.js";import"./toInteger-8c467ff1.js";import"./isSymbol-7c514724.js";import"./Skeleton-b82f86a8.js";import"./ToastMessage-9aa3d9c5.js";import"./CSSTransition-cd764f80.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Divider-1f110b7b.js";import"./dividerClasses-3ebb5c26.js";import"./MenuItem-100d659d.js";import"./Card-1fb1094a.js";import"./Avatar-ae1c3f3d.js";const lo={title:"UI/UserCard",component:c,render:function(n){const{data:m}=y();let s=m==null?void 0:m.ownerId;return s===w.toString()&&(s=void 0),z(x,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(c,{ownerId:n.ownerId??s,...n})]})}},r={args:{size:D,avatarSize:"SMALL"}},o={args:{size:b}},t={args:{size:L}},i={decorators:[p=>a(O,{maxWidth:"450px",children:a(p,{})})],args:{size:L,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:h},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},e={args:{size:v}};var d,l,A;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,...(A=(l=r.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var R,U,f;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...(f=(U=t.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var C,_,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Box maxWidth={'450px'}>
          <Story />
        </Box>;
  }],
  args: {
    size: MEDIUM_USER_CARD,
    menuActions: [{
      field: 'Action 1',
      callback: () => {
        console.log('Action 1 clicked');
      }
    }, {
      field: SEPERATOR
    }, {
      field: 'Action 2',
      callback: () => {
        console.log('Action 2 clicked');
      }
    }, {
      field: 'Action 3',
      callback: () => {
        console.log('Action 3 clicked');
      }
    }]
  }
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var M,I,k;e.parameters={...e.parameters,docs:{...(M=e.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(k=(I=e.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const Ao=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{r as Avatar,e as LargeUserCard,t as MediumUserCard,i as MediumUserCardWithActions,o as SmallUserCard,Ao as __namedExportsOrder,lo as default};
