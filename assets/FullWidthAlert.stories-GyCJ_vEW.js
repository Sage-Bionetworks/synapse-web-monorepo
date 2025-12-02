import{at as g,j as e,r as w}from"./iframe-ClyxPfmc.js";import{S as v}from"./SynapseNavDrawer-DLO68h9V.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DPOb84OY.js";import"./useInfiniteQuery-Cqgwy5DL.js";import"./useDownloadList-CCxqxMuK.js";import"./waitForAsyncResult-D8UcEUmj.js";import"./CreateProjectModal-XcOejZ2V.js";import"./ConfirmationDialog-BsTE_PBt.js";import"./DialogBase-Bta8Ocnf.js";import"./Close-D1ca1SeS.js";import"./HelpPopover-CX_ddDkl.js";import"./MarkdownPopover-dvWKxOZ7.js";import"./LightTooltip-x_r9dSqG.js";import"./MarkdownSynapse-DQFUbqu6.js";import"./SkeletonButton-JqUeiWK5.js";import"./SkeletonInlineBlock-CyrAtLJW.js";import"./SkeletonTable-ClI70_Q3.js";import"./SkeletonParagraph-BsIbpmnA.js";import"./SynapseHomepageNavBar-D3kEfrla.js";import"./SageResourcesPopover-DMU2VjkF.js";import"./Grid-C_QyTJ9i.js";import"./index-DAlOmM9o.js";import"./MenuItem-DP0olmzU.js";import"./UserBadge-dq1rcuGr.js";import"./Card-u1-hFSg-.js";import"./Chip-Bt2Da9Ss.js";import"./Slide-CZfalL30.js";import"./InputAdornment-CCHJ5Mz_.js";import"./listItemButtonClasses-DGqufEfc.js";import"./Badge-B819wIDo.js";import"./usePreviousProps-iqJ5Wr2Y.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
