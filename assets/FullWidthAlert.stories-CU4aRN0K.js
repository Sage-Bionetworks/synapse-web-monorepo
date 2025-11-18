import{at as g,j as e,r as w}from"./iframe-xpHBgFEc.js";import{S as v}from"./SynapseNavDrawer-CAMyR5St.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-Clx0ggc3.js";import"./useInfiniteQuery-BSZWHFvd.js";import"./useDownloadList-Crr6r7K7.js";import"./waitForAsyncResult-NX_oQucL.js";import"./CreateProjectModal-BqR-buQn.js";import"./ConfirmationDialog-CwyDjVHU.js";import"./DialogBase-pgJ5o4Zt.js";import"./Close-5t4oWx4m.js";import"./HelpPopover-DCjpPdCE.js";import"./MarkdownPopover-dZJj-Vn5.js";import"./LightTooltip-BDDa2W0x.js";import"./MarkdownSynapse-BeCorgwC.js";import"./SkeletonButton-CHbgpEXP.js";import"./SkeletonInlineBlock-C-Vahxr2.js";import"./SkeletonTable-DHFbt_t8.js";import"./SkeletonParagraph-DAmn3J9_.js";import"./SynapseHomepageNavBar-BJnWfzR0.js";import"./SageResourcesPopover-CAIiEq15.js";import"./Grid-DyLwKXY1.js";import"./index-BoBV2uWn.js";import"./MenuItem-B4u3b55B.js";import"./UserBadge-DtVpsyNz.js";import"./Card-DQNmpKVl.js";import"./Chip-D2WSSidr.js";import"./Slide-DawUJth9.js";import"./InputAdornment-DvmskpA0.js";import"./listItemButtonClasses-Dv7hDOy4.js";import"./Badge-B3lWneVJ.js";import"./usePreviousProps-sNEQDWB9.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,X as __namedExportsOrder,V as default};
