import{cI as A,cH as p,cG as l,cw as u,cF as g,j as r,V as S,gW as R}from"./iframe-DCJ7skCF.js";import{d as U}from"./useUserBundle-B1IzmcZW.js";import{c as d}from"./UserBadge-B1k4a2En.js";import"./index-Chi_LkuB.js";import"./useSuspenseQuery-hpjNpxLU.js";import"./SkeletonTable-91lmyC3W.js";import"./MenuItem-yNgfeWcI.js";import"./Card-CrtXJCz7.js";import"./Chip-BB_My-sd.js";const z={title:"UI/UserCard",component:d,render:function(i){const{data:m}=U();let c=m?.ownerId;return c===R.toString()&&(c=void 0),r.jsxs(r.Fragment,{children:[r.jsx("p",{children:"If you are logged in, your avatar or card will appear. If you are not logged in, enter an ownerId (e.g. 273960) or alias (e.g. brucehoff) below."}),r.jsx(d,{ownerId:i.ownerId??c,...i})]})}},e={args:{size:A,avatarSize:"SMALL"}},a={args:{size:p}},o={args:{size:l}},s={decorators:[t=>r.jsx(S,{sx:{maxWidth:"450px"},children:r.jsx(t,{})})],args:{size:l,menuActions:[{field:"Action 1",callback:()=>{console.log("Action 1 clicked")}},{field:u},{field:"Action 2",callback:()=>{console.log("Action 2 clicked")}},{field:"Action 3",callback:()=>{console.log("Action 3 clicked")}}]}},n={args:{size:g}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: AVATAR,
    avatarSize: 'SMALL'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: SMALL_USER_CARD
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: MEDIUM_USER_CARD
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: LARGE_USER_CARD
  }
}`,...n.parameters?.docs?.source}}};const D=["Avatar","SmallUserCard","MediumUserCard","MediumUserCardWithActions","LargeUserCard"];export{e as Avatar,n as LargeUserCard,o as MediumUserCard,s as MediumUserCardWithActions,a as SmallUserCard,D as __namedExportsOrder,z as default};
