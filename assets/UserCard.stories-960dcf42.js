import{a as z,F as x,j as a}from"./jsx-runtime-9dc53467.js";import{i as D,j as b,M as L,k as h,e as v,A as w}from"./SynapseConstants-eb00dc31.js";import"./index-76fb7be0.js";import"./getEndpoint-ac94413e.js";import{y}from"./ApplicationSessionManager-9bd355c2.js";import{U as c}from"./UserBadge-97c51812.js";import{B as O}from"./Box-8faf86fd.js";import"./OrientationBanner-a1ca5cdb.js";import"./FullWidthAlert-706fe840.js";import"./Alert-c3fe2b05.js";import"./styled-3c6f4d83.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-396e3e24.js";import"./Paper-411d859b.js";import"./IconButton-f820fa46.js";import"./ButtonBase-8587e55b.js";import"./emotion-react.browser.esm-5fddd3df.js";import"./TransitionGroupContext-e6fd87c7.js";import"./useForkRef-8feb2ebf.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./useIsFocusVisible-18cd238e.js";import"./Stack-4eda368b.js";import"./extendSxProp-1372051e.js";import"./AlertTitle-aeea0d59.js";import"./Typography-1d068b0b.js";import"./useTheme-e79ecbc0.js";import"./Grow-c431c788.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./utils-6fa73630.js";import"./ClickAwayListener-3b20c94f.js";import"./Tooltip-801f2a9c.js";import"./Button-33299b2c.js";import"./InfoTwoTone-b17047a2.js";import"./CheckCircleTwoTone-c37d81c7.js";import"./inputBaseClasses-034b6b96.js";import"./Fade-240af196.js";import"./Link-6ae0d01e.js";import"./_getTag-559aebd9.js";import"./_Map-92f6da1c.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-01eb1463.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";import"./Menu-fc614fa0.js";import"./index-c71daf5e.js";import"./Modal-748aabbc.js";import"./Backdrop-989db5e0.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./MenuList-b0aba911.js";import"./List-a6975dc7.js";import"./IconSvg-a7217c47.js";import"./ErrorOutlined-6f3ac166.js";import"./GetAppTwoTone-d672483d.js";import"./InfoOutlined-e9da64e0.js";import"./cloneDeep-587c61b8.js";import"./_baseClone-7c94ad0c.js";import"./_Uint8Array-df44b265.js";import"./_baseTimes-8715be3e.js";import"./_initCloneObject-c3239c20.js";import"./_getAllKeys-aca88255.js";import"./SkeletonTable-fdb2ca5b.js";import"./times-8d386772.js";import"./identity-46f208ab.js";import"./toInteger-5bb233f4.js";import"./isSymbol-7c514724.js";import"./Skeleton-131bd473.js";import"./ToastMessage-313b7aae.js";import"./CSSTransition-c744be84.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Divider-94881329.js";import"./dividerClasses-b0ef5b8b.js";import"./MenuItem-4ee45934.js";import"./Card-e26aaef7.js";import"./Avatar-47fe5841.js";import"./useSlot-14db1f32.js";const Ao={title:"UI/UserCard",component:c,render:function(n){const{data:m}=y();let s=m==null?void 0:m.ownerId;return s===w.toString()&&(s=void 0),z(x,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(c,{ownerId:n.ownerId??s,...n})]})}},r={args:{size:D,avatarSize:"SMALL"}},o={args:{size:b}},t={args:{size:L}},i={decorators:[p=>a(O,{maxWidth:"450px",children:a(p,{})})],args:{size:L,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:h},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},e={args:{size:v}};var d,l,A;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(k=(I=e.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const uo=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{r as Avatar,e as LargeUserCard,t as MediumUserCard,i as MediumUserCardWithActions,o as SmallUserCard,uo as __namedExportsOrder,Ao as default};
