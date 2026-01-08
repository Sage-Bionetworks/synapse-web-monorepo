import{cI as k,cH as z,cG as L,cw as D,cF as b,j as r,V as h,gW as j}from"./iframe-k9YwU_Xc.js";import{d as w}from"./useUserBundle-Ciq97Tj-.js";import{c as l}from"./UserBadge-DuQvc6Dg.js";import"./index-r8ZA1smB.js";import"./useSuspenseQuery-CiFSWrMs.js";import"./SkeletonTable-aVeOh9ct.js";import"./MenuItem-xt1g1Ufs.js";import"./Card-BUvqTfdV.js";import"./Chip-CKkKYJUZ.js";const N={title:"UI/UserCard",component:l,render:function(d){const{data:c}=w();let t=c==null?void 0:c.ownerId;return t===j.toString()&&(t=void 0),r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),r.jsx(l,{ownerId:d.ownerId??t,...d})]})}},e={args:{size:k,avatarSize:"SMALL"}},a={args:{size:z}},o={args:{size:L}},s={decorators:[i=>r.jsx(h,{sx:{maxWidth:"450px"},children:r.jsx(i,{})})],args:{size:L,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:D},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},n={args:{size:b}};var m,A,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,...(p=(A=e.parameters)==null?void 0:A.docs)==null?void 0:p.source}}};var u,g,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var R,U,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...(C=(U=o.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var f,x,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => {
    return <Box sx={{
      maxWidth: '450px'
    }}>
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var _,I,M;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const V=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{e as Avatar,n as LargeUserCard,o as MediumUserCard,s as MediumUserCardWithActions,a as SmallUserCard,V as __namedExportsOrder,N as default};
