import{at as g,j as e,r as w}from"./iframe-CvY4ZvuJ.js";import{S as v}from"./SynapseNavDrawer-yo75KM3x.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-Dn8VXhEo.js";import"./useInfiniteQuery--_EbWIUu.js";import"./useDownloadList-BmdJrif9.js";import"./waitForAsyncResult-DErT-r1T.js";import"./CreateProjectModal-YJ94KpRC.js";import"./ConfirmationDialog-yKbj63se.js";import"./DialogBase-Cao7Dzdg.js";import"./Close-DK3fY5s5.js";import"./HelpPopover-C4eL4pDr.js";import"./MarkdownPopover-BINR37hc.js";import"./LightTooltip-DI-aYQ3b.js";import"./MarkdownSynapse-DLSzoPS4.js";import"./SkeletonButton-tyjQjXOk.js";import"./SkeletonInlineBlock-CuvHcddn.js";import"./SkeletonTable-dMQ-mK3Q.js";import"./SkeletonParagraph-C7GW6bi4.js";import"./SynapseHomepageNavBar-1MkQHNMR.js";import"./SageResourcesPopover-B2CMb6tk.js";import"./Grid-BqlScswC.js";import"./index-bMipKrjl.js";import"./MenuItem-DKvXd6gt.js";import"./UserBadge-BD2zhjf4.js";import"./Card-BXO89Jdk.js";import"./Chip-BETMumCU.js";import"./Slide-w4iKnlC9.js";import"./InputAdornment-2LoE7r8s.js";import"./listItemButtonClasses-BaIgwaKR.js";import"./Badge-aP9qq4kB.js";import"./usePreviousProps-DdU2m-PX.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
