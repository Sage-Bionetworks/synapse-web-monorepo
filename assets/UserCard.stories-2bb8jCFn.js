import{cL as k,cK as z,cJ as L,cv as D,cI as b,d7 as h,j as r,V as j,gr as v}from"./iframe-Ci1lmE8g.js";import{c as l}from"./UserBadge-DRfGM4AR.js";import"./index-r8ZA1smB.js";import"./SkeletonTable-DkbE7er9.js";import"./MenuItem-DNhPNPdH.js";import"./Card-B9m98vxz.js";import"./Chip-7ZjY8iwO.js";const G={title:"UI/UserCard",component:l,render:function(d){const{data:c}=h();let t=c==null?void 0:c.ownerId;return t===v.toString()&&(t=void 0),r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),r.jsx(l,{ownerId:d.ownerId??t,...d})]})}},e={args:{size:k,avatarSize:"SMALL"}},a={args:{size:z}},s={args:{size:L}},o={decorators:[i=>r.jsx(j,{sx:{maxWidth:"450px"},children:r.jsx(i,{})})],args:{size:L,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:D},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},n={args:{size:b}};var m,A,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,...(p=(A=e.parameters)==null?void 0:A.docs)==null?void 0:p.source}}};var u,g,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var R,U,C;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...(C=(U=s.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var x,E,_;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(E=o.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var f,I,M;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const N=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{e as Avatar,n as LargeUserCard,s as MediumUserCard,o as MediumUserCardWithActions,a as SmallUserCard,N as __namedExportsOrder,G as default};
