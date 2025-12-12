import{ay as g,j as r,r as w}from"./iframe-nfXQhXwW.js";import{S as v}from"./SynapseNavDrawer-rvCzowoW.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CP0eLHn0.js";import"./useInfiniteQuery-CeWkfcy6.js";import"./useDownloadList-0nDq4ezg.js";import"./waitForAsyncResult-DrAlN0oY.js";import"./useUserBundle-Dx3pUDh4.js";import"./useSuspenseQuery-wrHvDIJ0.js";import"./CreateProjectModal-DieRnPDD.js";import"./ConfirmationDialog-DBW_uYDn.js";import"./DialogBase-CcO5y5yt.js";import"./Close-BzkPRb9A.js";import"./HelpPopover-Cb2i7a5w.js";import"./MarkdownPopover-Cs0zikEV.js";import"./LightTooltip-cNRM4CWP.js";import"./MarkdownSynapse-OcvSiBwW.js";import"./SkeletonButton-Bk4CQ1lc.js";import"./SkeletonInlineBlock--rWrAuqR.js";import"./SkeletonTable-I__c7Ied.js";import"./SkeletonParagraph-DtAQS4WM.js";import"./SynapseHomepageNavBar-DnTcAdBc.js";import"./SageResourcesPopover-Dy0NSMyn.js";import"./Grid-Ch3n3ndf.js";import"./index-BOrTr2xQ.js";import"./MenuItem-DVxEnVQ-.js";import"./UserBadge-DrEl5_5I.js";import"./Card-CH2nRDyh.js";import"./Chip-nV4_OO3k.js";import"./Slide-Cr8NkcE5.js";import"./InputAdornment-CF8a4Vw_.js";import"./listItemButtonClasses-DiML2J69.js";import"./Badge-0IczgGw4.js";import"./usePreviousProps-BpREd7Pb.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
