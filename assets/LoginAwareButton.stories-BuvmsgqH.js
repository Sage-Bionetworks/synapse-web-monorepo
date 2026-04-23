import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-CR4qI0Ep.js";import{n,t as r}from"./ExitToApp-CL__Wto1.js";import{n as i,t as a}from"./LoginAwareButton-BwZqHbZN.js";var o,s,c,l,u;e((()=>{n(),i(),o=t(),s={title:`UI/LoginAwareButton`,component:a,parameters:{backgrounds:{default:`Challenge Header`,values:[{name:`Challenge Header`,value:`#3E68AA`}]}},argTypes:{isAuthenticated:{control:{type:`boolean`}}},args:{isAuthenticated:!0}},c={args:{isAuthenticated:!1,children:`Register for this Challenge`,to:`/pathName?key=value#fragment`,href:``,disableElevation:!0,variant:`contained`,color:`secondary`,sx:{color:`white`,fontSize:`1.12em`,textTransform:`none`,padding:`4px 18px`,fontWeight:400,":hover":{color:`white`},":active":{color:`white`},":visited":{color:`white`}},replace:!1}},l={args:{isAuthenticated:!0,children:`Leave Challenge`,onClick:()=>{alert(`Leave Challenge Clicked`)},endIcon:(0,o.jsx)(r,{}),variant:`outlined`,sx:{borderColor:`white`,color:`white`,fontSize:`1.12em`,textTransform:`none`,padding:`4px 18px`,fontWeight:400,":hover":{color:`#172430`,borderColor:`#172430`}},replace:!1}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false,
    children: 'Register for this Challenge',
    to: '/pathName?key=value#fragment',
    href: '',
    disableElevation: true,
    variant: 'contained',
    color: 'secondary',
    sx: {
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: 'white'
      },
      ':active': {
        color: 'white'
      },
      ':visited': {
        color: 'white'
      }
    },
    replace: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    children: 'Leave Challenge',
    onClick: () => {
      alert('Leave Challenge Clicked');
    },
    endIcon: <ExitToAppIcon />,
    variant: 'outlined',
    sx: {
      borderColor: 'white',
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: '#172430',
        borderColor: '#172430'
      }
    },
    replace: false
  }
}`,...l.parameters?.docs?.source}}},u=[`Register`,`Leave`]}))();export{l as Leave,c as Register,u as __namedExportsOrder,s as default};