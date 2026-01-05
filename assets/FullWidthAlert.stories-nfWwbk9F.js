import{ay as g,j as r,r as w}from"./iframe-DboE6cus.js";import{S as v}from"./SynapseNavDrawer-DBMu6H9U.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-Bj5QPES0.js";import"./useInfiniteQuery-C-3LxYU-.js";import"./useDownloadList-CRTrL6dg.js";import"./waitForAsyncResult-DSFLkngj.js";import"./useUserBundle-CEShpWIh.js";import"./useSuspenseQuery-NbcqIP5u.js";import"./CreateProjectModal-B0PElNXo.js";import"./ConfirmationDialog-BkYcFRKi.js";import"./DialogBase-Cryo8IG-.js";import"./Close-Dh32M8lz.js";import"./HelpPopover-D6Yfo8ak.js";import"./MarkdownPopover-DZsWRurj.js";import"./LightTooltip-tMJWkQpL.js";import"./MarkdownSynapse-CacsHCKs.js";import"./SkeletonButton-D8m5msQb.js";import"./SkeletonInlineBlock-Dnql_wpL.js";import"./SkeletonTable-B7bdJ0qY.js";import"./SkeletonParagraph-C746jxi4.js";import"./SynapseHomepageNavBar-_LPEIGTo.js";import"./SageResourcesPopover-3Rswpfjw.js";import"./Grid-xRSGKOBv.js";import"./index-BzXSeNW_.js";import"./MenuItem-BC-hmB5d.js";import"./UserBadge-BlAZ_Wz3.js";import"./Card-xik5UMs-.js";import"./Chip-D7TLsmcp.js";import"./Slide-CNJETkmP.js";import"./InputAdornment-DTwacMDa.js";import"./listItemButtonClasses-BrIJegSU.js";import"./Badge-tjUKQ0Ip.js";import"./usePreviousProps-b3S4W7_i.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
