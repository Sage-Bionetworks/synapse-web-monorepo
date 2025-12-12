import{ay as g,j as r,r as w}from"./iframe-6fxFvYFG.js";import{S as v}from"./SynapseNavDrawer-B-HRIYaR.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CFGCophe.js";import"./useInfiniteQuery-D3h0JCdq.js";import"./useDownloadList-DE9yCT7f.js";import"./waitForAsyncResult-nytYSMvi.js";import"./useUserBundle-Cw5DWU5h.js";import"./useSuspenseQuery-ilZIAiZO.js";import"./CreateProjectModal-B8dxYNkV.js";import"./ConfirmationDialog-D7CL9Hbl.js";import"./DialogBase-CDVzPJD1.js";import"./Close--BbnJHAr.js";import"./HelpPopover-CS2yi4Iw.js";import"./MarkdownPopover-BT53YGTG.js";import"./LightTooltip-B_bCqVrh.js";import"./MarkdownSynapse-BiQ8eplM.js";import"./SkeletonButton-CwN3sKyQ.js";import"./SkeletonInlineBlock-DeCoWgUQ.js";import"./SkeletonTable-B0KdXxpl.js";import"./SkeletonParagraph-P8Ugt_HA.js";import"./SynapseHomepageNavBar-BBd0D8AD.js";import"./SageResourcesPopover-Pbt2Ui3w.js";import"./Grid-DGlN8hhe.js";import"./index-CP3LG1g1.js";import"./MenuItem-B2VLGt4Y.js";import"./UserBadge-CnsgxeYH.js";import"./Card-Cx8rkxTL.js";import"./Chip-BwWvwcwU.js";import"./Slide-cZY65-BQ.js";import"./InputAdornment-CZrav3XZ.js";import"./listItemButtonClasses-DbmKHAul.js";import"./Badge-CB85WwLt.js";import"./usePreviousProps-DyzcoV3l.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
