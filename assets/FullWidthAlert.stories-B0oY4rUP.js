import{at as g,j as e,r as w}from"./iframe-DuUClhsc.js";import{S as v}from"./SynapseNavDrawer-lqMjSD9f.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CkWaFVpN.js";import"./useInfiniteQuery-DgaFpXmy.js";import"./useDownloadList-AILxHI1b.js";import"./waitForAsyncResult-BfUTVh8e.js";import"./CreateProjectModal-BASJaHXq.js";import"./ConfirmationDialog-B9wYVq7g.js";import"./DialogBase-B58YmIqt.js";import"./Close-aSlNjt7A.js";import"./HelpPopover-B3FfhNks.js";import"./MarkdownPopover-B9Dcg-Cp.js";import"./LightTooltip-CtjaIoZW.js";import"./MarkdownSynapse-DaOcOh9V.js";import"./SkeletonButton-BSbzluwJ.js";import"./SkeletonInlineBlock-CoFc0Z1u.js";import"./SkeletonTable-BqjyM-uC.js";import"./SkeletonParagraph-DI40A60T.js";import"./SynapseHomepageNavBar-DJiHhrmK.js";import"./SageResourcesPopover-DHYGjMSM.js";import"./Grid-B7vi2X7i.js";import"./index-DotbbxLs.js";import"./MenuItem-C7oiRjhq.js";import"./UserBadge-baN644tt.js";import"./Card-Ddn9liVM.js";import"./Chip-Do2OA_d6.js";import"./Slide-D62WsG6e.js";import"./InputAdornment-Blgc2udU.js";import"./listItemButtonClasses-DZdI3jEo.js";import"./Badge-eEDd1R4-.js";import"./usePreviousProps-DYtg4M0T.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
