import{ay as g,j as r,r as w}from"./iframe-BUOdsTSh.js";import{S as v}from"./SynapseNavDrawer-CH5KVYlT.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DUiZ_Hqh.js";import"./useInfiniteQuery-BQSNFCnR.js";import"./useDownloadList-DQGqUp1e.js";import"./waitForAsyncResult-CQVBYm4k.js";import"./useUserBundle-CTHXD_uI.js";import"./useSuspenseQuery-BjDE67iy.js";import"./CreateProjectModal-D6mcijR-.js";import"./ConfirmationDialog-CbO0lTFx.js";import"./DialogBase-DQg2Vi5e.js";import"./Close-U8nFtaRM.js";import"./HelpPopover-6NrJABUY.js";import"./MarkdownPopover-Di4SlQgS.js";import"./LightTooltip-Da_PEhJu.js";import"./MarkdownSynapse-DqCsA8Jf.js";import"./SkeletonButton-ByACKKgg.js";import"./SkeletonInlineBlock-BZZZqUCg.js";import"./SkeletonTable-CSizy4er.js";import"./SkeletonParagraph-DiZBwklZ.js";import"./SynapseHomepageNavBar-CVGvh-cN.js";import"./SageResourcesPopover-OE-CFAX0.js";import"./Grid-CtZSHvS3.js";import"./index-Dy3y5VXk.js";import"./MenuItem-8DBEXON1.js";import"./UserBadge-DehLGxLX.js";import"./Card-CuzZsAO2.js";import"./Chip-D1GuGoQD.js";import"./Slide-BuYhAKTO.js";import"./InputAdornment-wAzON35C.js";import"./listItemButtonClasses-BFI_lEVh.js";import"./Badge-fdc0Lchj.js";import"./usePreviousProps-CoDl5yeK.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
