import{n as e}from"./chunk-jRWAZmH_.js";import{$h as t,Hg as n,Hn as r,Mv as i,Nb as a,Q as o,Rg as s,T_ as c,a_ as l,jS as u,pr as d,r_ as f}from"./iframe-DaePClcE.js";import{i as p,r as m}from"./UserBadge-DvOttFYn.js";var h,g,_,v,y,b,x,S;e((()=>{r(),o(),c(),i(),p(),h=u(),g={title:`UI/UserCard`,component:m,render:function(e){let{data:t}=d(),n=t?.ownerId;return n===`273950`&&(n=void 0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`p`,{children:`If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below.`}),(0,h.jsx)(m,{ownerId:e.ownerId??n,...e})]})}},_={args:{size:t,avatarSize:`SMALL`}},v={args:{size:l}},y={args:{size:n}},b={decorators:[e=>(0,h.jsx)(a,{sx:{maxWidth:`450px`},children:(0,h.jsx)(e,{})})],args:{size:n,menuActions:[{field:`Action 1`,callback:()=>{console.log(`Action 1 clicked`)}},{field:f},{field:`Action 2`,callback:()=>{console.log(`Action 2 clicked`)}},{field:`Action 3`,callback:()=>{console.log(`Action 3 clicked`)}}]}},x={args:{size:s}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...x.parameters?.docs?.source}}},S=[`Avatar`,`SmallUserCard`,`MediumUserCard`,`MediumUserCardWithActions`,`LargeUserCard`]}))();export{_ as Avatar,x as LargeUserCard,y as MediumUserCard,b as MediumUserCardWithActions,v as SmallUserCard,S as __namedExportsOrder,g as default};