import{cM as k,cL as z,cK as L,cw as D,cJ as b,d8 as h,j as e,V as j,g_ as w}from"./iframe-DgbfDeQR.js";import{c as l}from"./UserBadge-DT_nDzPV.js";import"./index-r8ZA1smB.js";import"./SkeletonTable-CkIMw70Y.js";import"./MenuItem-kceyAJzH.js";import"./Card-Bp2w-evW.js";import"./Chip-D6WFZ5Ud.js";const G={title:"UI/UserCard",component:l,render:function(d){const{data:c}=h();let t=c==null?void 0:c.ownerId;return t===w.toString()&&(t=void 0),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),e.jsx(l,{ownerId:d.ownerId??t,...d})]})}},r={args:{size:k,avatarSize:"SMALL"}},a={args:{size:z}},s={args:{size:L}},o={decorators:[i=>e.jsx(j,{sx:{maxWidth:"450px"},children:e.jsx(i,{})})],args:{size:L,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:D},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},n={args:{size:b}};var m,A,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(C=(U=s.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var _,x,E;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var f,M,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...(I=(M=n.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const N=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{r as Avatar,n as LargeUserCard,s as MediumUserCard,o as MediumUserCardWithActions,a as SmallUserCard,N as __namedExportsOrder,G as default};
