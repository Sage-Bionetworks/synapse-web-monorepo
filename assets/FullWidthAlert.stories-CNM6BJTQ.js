import{at as g,j as e,r as w}from"./iframe-aiCTTxzx.js";import{S as v}from"./SynapseNavDrawer--ZP2kl9f.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CpQLOMM8.js";import"./useInfiniteQuery-Gkgwzaik.js";import"./useDownloadList-C8yl0tfS.js";import"./waitForAsyncResult-C2Ku05ZK.js";import"./CreateProjectModal-B8mbu_nA.js";import"./ConfirmationDialog-DO-EfviT.js";import"./DialogBase-Gzuj-6fR.js";import"./Close-CfukyXb1.js";import"./HelpPopover-DCPIXOU3.js";import"./MarkdownPopover-2FWIzgd3.js";import"./LightTooltip-DNGLoswC.js";import"./MarkdownSynapse-CmpESD_-.js";import"./SkeletonButton-95Mbk9h_.js";import"./SkeletonInlineBlock-D-HDpP9G.js";import"./SkeletonTable-C8arYsQV.js";import"./SkeletonParagraph-JveYRW9s.js";import"./SynapseHomepageNavBar-DR-AFkxD.js";import"./SageResourcesPopover-CptXFvbj.js";import"./Grid-Bp6ID_x8.js";import"./index-Q4iuKSAo.js";import"./MenuItem-DS99slWK.js";import"./UserBadge-1dDO35aJ.js";import"./Card-CHv0SxIu.js";import"./Chip-RH7BrEwh.js";import"./Slide-Bx2ekaFv.js";import"./InputAdornment-LFK0i-__.js";import"./listItemButtonClasses-DpfzkRpE.js";import"./Badge-AJk6ttNS.js";import"./usePreviousProps-B2nWtMw7.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
