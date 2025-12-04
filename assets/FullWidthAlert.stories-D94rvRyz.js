import{ay as g,j as r,r as w}from"./iframe-APCqMGQN.js";import{S as v}from"./SynapseNavDrawer-CDqf1z-o.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DazQpYdj.js";import"./useInfiniteQuery-gXjf5_Em.js";import"./useDownloadList-NdnT-gZh.js";import"./waitForAsyncResult-DytUQiAl.js";import"./useUserBundle-Cy20sB8T.js";import"./useSuspenseQuery-BHob01YS.js";import"./CreateProjectModal-Ct3G_DLI.js";import"./ConfirmationDialog-DX-eJ8BJ.js";import"./DialogBase-CPOjmtcd.js";import"./Close-Dfqur9mW.js";import"./HelpPopover-CSvALpOm.js";import"./MarkdownPopover-B00IKW0p.js";import"./LightTooltip-PuK_Y7Ky.js";import"./MarkdownSynapse-3Z4rZ9Dt.js";import"./SkeletonButton-BmM8-g6B.js";import"./SkeletonInlineBlock-CeF_-ICV.js";import"./SkeletonTable-DvijJWyz.js";import"./SkeletonParagraph-D-_OgKUm.js";import"./SynapseHomepageNavBar-Bn_i580P.js";import"./SageResourcesPopover-CyvP8g0K.js";import"./Grid-DsreRBQp.js";import"./index-Bfv0LEY1.js";import"./MenuItem-BDJHy-II.js";import"./UserBadge-CYspYllf.js";import"./Card-CF59eyAb.js";import"./Chip-TkJBG0Qb.js";import"./Slide-BRxch2wO.js";import"./InputAdornment-wcEqHGft.js";import"./listItemButtonClasses-CAaGfR5y.js";import"./Badge-DHHAj9Pr.js";import"./usePreviousProps-CrPmH5-V.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
