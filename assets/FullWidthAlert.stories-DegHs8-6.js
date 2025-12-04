import{ay as g,j as r,r as w}from"./iframe-CnFFtBM5.js";import{S as v}from"./SynapseNavDrawer-HsZNiApy.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-0tbse0Ha.js";import"./useInfiniteQuery-CQzVs7Nm.js";import"./useDownloadList-BjqH7jSN.js";import"./waitForAsyncResult-BUaxqKi-.js";import"./useUserBundle-C5RZncTV.js";import"./useSuspenseQuery-D8hCSSQZ.js";import"./CreateProjectModal-1pdNsgoN.js";import"./ConfirmationDialog-CmTg6HIg.js";import"./DialogBase-KF2hOckI.js";import"./Close-Dtzq_6wc.js";import"./HelpPopover-D_UunFPX.js";import"./MarkdownPopover-CzPIRMxY.js";import"./LightTooltip-Dl0q57ba.js";import"./MarkdownSynapse-CRdc62jY.js";import"./SkeletonButton-CClASP2Q.js";import"./SkeletonInlineBlock-SiFBwNDW.js";import"./SkeletonTable-CeXSUdJ0.js";import"./SkeletonParagraph-Bh_V5SGk.js";import"./SynapseHomepageNavBar-CaGEyDqf.js";import"./SageResourcesPopover-yedinLaa.js";import"./Grid-BGJHGkXH.js";import"./index-BSyMNs-U.js";import"./MenuItem-DeX5RPAC.js";import"./UserBadge-RHwyWXL_.js";import"./Card-DFm6JQIv.js";import"./Chip-B7HTEMX4.js";import"./Slide-CA5A5_-j.js";import"./InputAdornment-BU9gVPAE.js";import"./listItemButtonClasses-DZOR9TSc.js";import"./Badge-BS_4LmuH.js";import"./usePreviousProps-UBiOn-9J.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Z=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,Z as __namedExportsOrder,Y as default};
