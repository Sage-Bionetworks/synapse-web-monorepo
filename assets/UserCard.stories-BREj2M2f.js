import{n as e}from"./chunk-jRWAZmH_.js";import{HS as t,Kg as n,N_ as r,Uv as i,Wb as a,Xg as o,d_ as s,p_ as c,qn as l,rt as u,sg as d,vr as f}from"./iframe-BvmREx1Q.js";import{i as p,r as m}from"./UserBadge-BEzmlHsy.js";var h,g,_,v,y,b,x,S;e((()=>{l(),u(),r(),i(),p(),h=t(),g={title:`UI/UserCard`,component:m,render:function(e){let{data:t}=f(),n=t?.ownerId;return n===`273950`&&(n=void 0),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`p`,{children:`If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below.`}),(0,h.jsx)(m,{ownerId:e.ownerId??n,...e})]})}},_={args:{size:d,avatarSize:`SMALL`}},v={args:{size:c}},y={args:{size:o}},b={decorators:[e=>(0,h.jsx)(a,{sx:{maxWidth:`450px`},children:(0,h.jsx)(e,{})})],args:{size:o,menuActions:[{field:`Action 1`,callback:()=>{console.log(`Action 1 clicked`)}},{field:s},{field:`Action 2`,callback:()=>{console.log(`Action 2 clicked`)}},{field:`Action 3`,callback:()=>{console.log(`Action 3 clicked`)}}]}},x={args:{size:n}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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