import{a as A,F as _,j as d}from"./jsx-runtime-670450c2.js";import{b as S}from"./UserCard-082ed245.js";import{C as b,h as y,t as N,L,as as R}from"./SynapseConstants-f1d07af3.js";import{a$ as M}from"./index-22b033bd.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./getEndpoint-5374ab4d.js";import"./IconCopy-9a72c17a.js";import"./SkeletonTable-64b9e293.js";import"./times-83d022c2.js";import"./toInteger-63904031.js";import"./isSymbol-b6149709.js";import"./isArray-a82322d9.js";import"./extends-98964cd2.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./Button-7d415009.js";import"./index-4d501b15.js";import"./Skeleton-4064b2ac.js";import"./styled-9ea72d20.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-eaaa54fe.js";import"./emotion-react.browser.esm-c209b88a.js";import"./IconSvg-cf287ff5.js";import"./SvgIcon-d8836e03.js";import"./Tooltip-e2a21fb8.js";import"./useTheme-a927bea5.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-96c5f47c.js";import"./TransitionGroupContext-ab7f4b4e.js";import"./useIsFocusVisible-c754a498.js";import"./ToastMessage-8fc96da8.js";import"./FullWidthAlert-10bb9b65.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-ace3d0f1.js";import"./Typography-70326f55.js";import"./assertThisInitialized-081f9914.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-9feaf103.js";import"./toString-3056297c.js";import"./Overlay-529574f8.js";import"./contains-60f9209b.js";import"./usePopperMarginModifiers-363ddb1c.js";import"./useWaitForDOMRef-54076dc2.js";import"./Fade-2c9937b4.js";import"./IconButton-7162f347.js";import"./ButtonBase-99361597.js";import"./Link-ce18840d.js";import"./Button-445c67f6.js";const Nr={title:"UI/UserCard",component:S},t=i=>{const{data:a}=M();let s=a==null?void 0:a.ownerId;return s===R.toString()&&(s=void 0),A(_,{children:[d("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),d(S,{ownerId:i.ownerId??s,...i})]})},r=t.bind({});r.args={size:b,avatarSize:"SMALL"};const e=t.bind({});e.args={size:y};const o=t.bind({});o.args={size:N};const n=t.bind({});n.args={size:L};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const {
    data: currentUserProfile
  } = useGetCurrentUserProfile();
  let currentUserId = currentUserProfile?.ownerId;
  if (currentUserId === ANONYMOUS_PRINCIPAL_ID.toString()) {
    currentUserId = undefined;
  }
  return <>
      <p>
        If you are logged in, your avatar or card will appear. If you are not
        logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff)
        below.
      </p>
      <UserCard ownerId={args.ownerId ?? currentUserId} {...args} />
    </>;
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,I,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const {
    data: currentUserProfile
  } = useGetCurrentUserProfile();
  let currentUserId = currentUserProfile?.ownerId;
  if (currentUserId === ANONYMOUS_PRINCIPAL_ID.toString()) {
    currentUserId = undefined;
  }
  return <>
      <p>
        If you are logged in, your avatar or card will appear. If you are not
        logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff)
        below.
      </p>
      <UserCard ownerId={args.ownerId ?? currentUserId} {...args} />
    </>;
}`,...(l=(I=e.parameters)==null?void 0:I.docs)==null?void 0:l.source}}};var g,U,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const {
    data: currentUserProfile
  } = useGetCurrentUserProfile();
  let currentUserId = currentUserProfile?.ownerId;
  if (currentUserId === ANONYMOUS_PRINCIPAL_ID.toString()) {
    currentUserId = undefined;
  }
  return <>
      <p>
        If you are logged in, your avatar or card will appear. If you are not
        logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff)
        below.
      </p>
      <UserCard ownerId={args.ownerId ?? currentUserId} {...args} />
    </>;
}`,...(f=(U=o.parameters)==null?void 0:U.docs)==null?void 0:f.source}}};var w,C,P;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  const {
    data: currentUserProfile
  } = useGetCurrentUserProfile();
  let currentUserId = currentUserProfile?.ownerId;
  if (currentUserId === ANONYMOUS_PRINCIPAL_ID.toString()) {
    currentUserId = undefined;
  }
  return <>
      <p>
        If you are logged in, your avatar or card will appear. If you are not
        logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff)
        below.
      </p>
      <UserCard ownerId={args.ownerId ?? currentUserId} {...args} />
    </>;
}`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const Lr=["Avatar","SmallUserCard","MediumUserCard","LargeUserCard"];export{r as Avatar,n as LargeUserCard,o as MediumUserCard,e as SmallUserCard,Lr as __namedExportsOrder,Nr as default};
//# sourceMappingURL=UserCard.stories-0935eae8.js.map
