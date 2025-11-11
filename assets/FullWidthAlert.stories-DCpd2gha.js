import{at as g,j as e,r as w}from"./iframe-0_E6QA5q.js";import{S as v}from"./SynapseNavDrawer-CrpxGX9Q.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BzP402XH.js";import"./useInfiniteQuery-CHkzf4rJ.js";import"./useDownloadList-D_dxt3j7.js";import"./waitForAsyncResult-DhOtx3GO.js";import"./CreateProjectModal-DS59YdEF.js";import"./ConfirmationDialog-FBI9JYIN.js";import"./DialogBase-DH7mUDhm.js";import"./Close-BPBl1RMs.js";import"./HelpPopover-DU2BwJqT.js";import"./MarkdownPopover-CxR3E5eY.js";import"./LightTooltip-Cbbiylwj.js";import"./MarkdownSynapse-KMP-leAR.js";import"./SkeletonButton-B7g5trXc.js";import"./SkeletonInlineBlock-C6wGBfZc.js";import"./SkeletonTable-DeeOmUeM.js";import"./SkeletonParagraph--7EvjUiD.js";import"./SynapseHomepageNavBar-Y6bK3s4V.js";import"./SageResourcesPopover-woKCK-qe.js";import"./Grid-XQrIDmWa.js";import"./index-BqiUF3nO.js";import"./MenuItem-CAzHj_Ft.js";import"./UserBadge-KfQC8GAX.js";import"./Card-BUNvL0MS.js";import"./Chip-CGQIXmoB.js";import"./Slide-D5R6_j3F.js";import"./InputAdornment-DJtSQFoe.js";import"./listItemButtonClasses-CadlTcWg.js";import"./Badge-BDzsvDHi.js";import"./usePreviousProps-CEEBDOLm.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
