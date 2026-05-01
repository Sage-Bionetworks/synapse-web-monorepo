import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{bc as n,jS as r,xc as i,zS as a}from"./iframe-DIvGBLSL.js";import{r as o,t as s}from"./SynapseNavDrawer-BlvyuaSe.js";var c,l,u,d,f,p,m;e((()=>{c=t(a(),1),i(),o(),l=r(),u={title:`UI/FullWidthAlert`,argTypes:{variant:{options:[`warning`,`info`,`danger`,`success`,void 0],control:{type:`radio`}}},component:n,parameters:{chromatic:{viewports:[300,600,1200]}}},d={args:{variant:`success`,show:!0,title:`Package has been downloaded`,description:`The files contained in this zip file have been removed from your list.`,isGlobal:!1}},f={args:{variant:`success`,show:!0,title:`Success`,description:`Lorem ipsum dolor sit amet`,primaryButtonConfig:{text:`Accept and Continue`,onClick:()=>alert(`Accepted`)},isGlobal:!0,onClose:void 0}},p={args:{...f.args},render:e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s,{initIsOpen:!1,gotoPlace:e=>{window.alert(`Nav bar calling back to change route to ${e}`)}}),(0,l.jsx)(n,{...e})]}),decorators:[e=>((0,c.useEffect)(()=>(document.body.classList.add(`SynapseNavDrawerIsShowing`),()=>{document.body.classList.remove(`SynapseNavDrawerIsShowing`)}),[]),(0,l.jsx)(e,{}))]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...p.parameters?.docs?.source}}},m=[`DownloadListPackageCreation`,`SuccessAlertWithPrimaryButtonOnly`,`SynapseNavDrawerIsShowing`]}))();export{d as DownloadListPackageCreation,f as SuccessAlertWithPrimaryButtonOnly,p as SynapseNavDrawerIsShowing,m as __namedExportsOrder,u as default};