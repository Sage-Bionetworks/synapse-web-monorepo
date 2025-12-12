import{ay as g,j as r,r as w}from"./iframe-DxLAvgox.js";import{S as v}from"./SynapseNavDrawer-DlQiwWsx.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BU0FAvRa.js";import"./useInfiniteQuery-5-3iz-fe.js";import"./useDownloadList-CzrDG1jS.js";import"./waitForAsyncResult-Cg9ttgEm.js";import"./useUserBundle-Cl9nEyKf.js";import"./useSuspenseQuery-Bz18OTgk.js";import"./CreateProjectModal-DdyQ-BUQ.js";import"./ConfirmationDialog-DiSSyxsu.js";import"./DialogBase-BvJ5UgLC.js";import"./Close-DWl4F5t6.js";import"./HelpPopover-DnbDN1Hz.js";import"./MarkdownPopover-D3aqrJqn.js";import"./LightTooltip-Bm_Du9SN.js";import"./MarkdownSynapse-B2SR9_8j.js";import"./SkeletonButton-BslgCCKq.js";import"./SkeletonInlineBlock-DbpHeMSy.js";import"./SkeletonTable-DodbVua_.js";import"./SkeletonParagraph-9LEWhVxx.js";import"./SynapseHomepageNavBar-B22SPROG.js";import"./SageResourcesPopover-C_0B_Y0C.js";import"./Grid-CotEr8D_.js";import"./index-S82T9GXF.js";import"./MenuItem-CDsrTtNF.js";import"./UserBadge-CEfiugXx.js";import"./Card-BJAh0ufu.js";import"./Chip-BbRs-Tuc.js";import"./Slide-CSw_m2XW.js";import"./InputAdornment-C87492MK.js";import"./listItemButtonClasses-B7cg0K7t.js";import"./Badge-DgwtsEqh.js";import"./usePreviousProps-DEWyDXrk.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
