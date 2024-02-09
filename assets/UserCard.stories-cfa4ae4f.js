import{a as z,F as x,j as a}from"./jsx-runtime-9dc53467.js";import{e as D,f as h,M as k,g as b,L as w,h as v}from"./SynapseConstants-dc6cdfaa.js";import{w as y}from"./SynapseClient-0bc28181.js";import"./getEndpoint-ac94413e.js";import"./index-76fb7be0.js";import{U as c}from"./UserBadge-17286047.js";import{B as O}from"./Box-2044d34a.js";import"./OrientationBanner-6563f144.js";import"./FullWidthAlert-56b416c7.js";import"./Alert-a2690b50.js";import"./styled-2fcfc37a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./createSvgIcon-8a3e2935.js";import"./Paper-699baef2.js";import"./IconButton-64077c25.js";import"./ButtonBase-f4a900e8.js";import"./emotion-react.browser.esm-b6cea713.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./TransitionGroupContext-1474f578.js";import"./useForkRef-8feb2ebf.js";import"./useIsFocusVisible-e5f6c995.js";import"./Stack-69986211.js";import"./extendSxProp-c283072b.js";import"./AlertTitle-a34c5fe9.js";import"./Typography-b1f79b20.js";import"./useTheme-76051239.js";import"./Grow-cbd0a034.js";import"./isHostComponent-fa76b8d9.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./utils-bed83364.js";import"./ClickAwayListener-3907f9d7.js";import"./Tooltip-b4e2f4d6.js";import"./Button-8ea9f590.js";import"./InfoTwoTone-c9bbd609.js";import"./CheckCircleTwoTone-b021ad72.js";import"./inputBaseClasses-7a80a621.js";import"./Fade-1b8e1369.js";import"./Link-66bc2a10.js";import"./_getTag-6966e563.js";import"./_Map-02912bad.js";import"./isArray-5e3f9107.js";import"./StringUtils-2ea3ab4d.js";import"./index-bd88158d.js";import"./dayjs.min-f79c4412.js";import"./index-9d475cdf.js";import"./tiny-invariant-dd7d57d2.js";import"./Menu-282b7c89.js";import"./index-c71daf5e.js";import"./Modal-f2a92dc6.js";import"./Backdrop-a166067b.js";import"./getScrollbarSize-ac846fe6.js";import"./ownerWindow-2c76219e.js";import"./createChainedFunction-0bab83cf.js";import"./MenuList-209db6ea.js";import"./List-7dea6900.js";import"./IconSvg-5d9a5c7d.js";import"./ErrorOutlined-c656d1cd.js";import"./GetAppTwoTone-89480507.js";import"./InfoOutlined-64e960b4.js";import"./cloneDeep-cb98969d.js";import"./_baseClone-c3e37260.js";import"./_Uint8Array-595ed3dd.js";import"./_baseTimes-8715be3e.js";import"./_initCloneObject-b3d76b79.js";import"./_getAllKeys-a7c6e1ea.js";import"./SkeletonTable-aa2cf667.js";import"./times-c23b3cf2.js";import"./identity-46f208ab.js";import"./toInteger-8c467ff1.js";import"./isSymbol-7c514724.js";import"./Skeleton-5f112c28.js";import"./ToastMessage-b1133164.js";import"./CSSTransition-46e04253.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./Divider-1bbf49d6.js";import"./dividerClasses-0324015e.js";import"./MenuItem-7900b244.js";import"./Card-c5e40899.js";import"./Avatar-cb65f89e.js";const lo={title:"UI/UserCard",component:c,render:function(n){const{data:m}=y();let s=m==null?void 0:m.ownerId;return s===v.toString()&&(s=void 0),z(x,{children:[a("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),a(c,{ownerId:n.ownerId??s,...n})]})}},r={args:{size:D,avatarSize:"SMALL"}},o={args:{size:h}},t={args:{size:k}},i={decorators:[p=>a(O,{maxWidth:"450px",children:a(p,{})})],args:{size:k,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:b},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},e={args:{size:w}};var d,l,A;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var M,I,L;e.parameters={...e.parameters,docs:{...(M=e.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(L=(I=e.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const Ao=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{r as Avatar,e as LargeUserCard,t as MediumUserCard,i as MediumUserCardWithActions,o as SmallUserCard,Ao as __namedExportsOrder,lo as default};
//# sourceMappingURL=UserCard.stories-cfa4ae4f.js.map
