import{cG as k,cF as z,cE as L,cq as D,cD as h,d2 as b,j as e,V as j,h0 as v}from"./iframe-C7HGvOUl.js";import{c as l}from"./UserBadge-Bj0YRfAa.js";import"./index-r8ZA1smB.js";import"./SkeletonTable-COY9zVYr.js";import"./MenuItem-CIAKLYgH.js";import"./Card-C57WWo12.js";import"./Chip-DuMKcKGN.js";const B={title:"UI/UserCard",component:l,render:function(d){const{data:c}=b();let t=c==null?void 0:c.ownerId;return t===v.toString()&&(t=void 0),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),e.jsx(l,{ownerId:d.ownerId??t,...d})]})}},r={args:{size:k,avatarSize:"SMALL"}},a={args:{size:z}},s={args:{size:L}},o={decorators:[i=>e.jsx(j,{sx:{maxWidth:"450px"},children:e.jsx(i,{})})],args:{size:L,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:D},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},n={args:{size:h}};var m,A,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,...(p=(A=r.parameters)==null?void 0:A.docs)==null?void 0:p.source}}};var u,g,S;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var R,U,C;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...(C=(U=s.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var E,x,_;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var f,M,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(I=(M=n.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const F=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{r as Avatar,n as LargeUserCard,s as MediumUserCard,o as MediumUserCardWithActions,a as SmallUserCard,F as __namedExportsOrder,B as default};
