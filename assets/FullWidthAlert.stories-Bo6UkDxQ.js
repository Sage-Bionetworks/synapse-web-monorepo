import{ay as g,j as r,r as w}from"./iframe-C6DVh3a8.js";import{S as v}from"./SynapseNavDrawer-Y43e6vOi.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CdB6sHmG.js";import"./useInfiniteQuery-ClFk1pW2.js";import"./useDownloadList-7_MIlia5.js";import"./waitForAsyncResult-D8eeb4MN.js";import"./useUserBundle-GB9vlSqF.js";import"./useSuspenseQuery-Chz7E6o7.js";import"./CreateProjectModal-nMd1cUl2.js";import"./ConfirmationDialog-Bn1YHVno.js";import"./DialogBase-DG3FOts0.js";import"./Close-Cvfvekss.js";import"./HelpPopover-D15layXw.js";import"./MarkdownPopover-DYELty5d.js";import"./LightTooltip-CehMS9nA.js";import"./MarkdownSynapse-DbU2DxXy.js";import"./SkeletonButton-DJ25ODSP.js";import"./SkeletonInlineBlock-DaN9DO1b.js";import"./SkeletonTable-BaZC2los.js";import"./SkeletonParagraph-BiRrs5sP.js";import"./SynapseHomepageNavBar-CvxzXCNU.js";import"./SageResourcesPopover-CL5fsFwV.js";import"./Grid-Ba5ajPM-.js";import"./index-CWyeuUHI.js";import"./MenuItem-BQStYWQ5.js";import"./UserBadge-CxhgYPLm.js";import"./Card-BPBXAoVw.js";import"./Chip-DnxNYuul.js";import"./Slide-Bu6PCpC5.js";import"./InputAdornment-CQNkYQ5a.js";import"./listItemButtonClasses-CPX8fj-K.js";import"./Badge-D73WPuWr.js";import"./usePreviousProps-JdV1Aj9c.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
