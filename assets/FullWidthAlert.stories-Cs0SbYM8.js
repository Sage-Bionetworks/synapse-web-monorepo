import{at as g,j as e,r as w}from"./iframe-Dc6hcGlJ.js";import{S as v}from"./SynapseNavDrawer-D0okC6nh.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DnFHq-45.js";import"./useInfiniteQuery-IUWpIdre.js";import"./useDownloadList-dc1F8LR1.js";import"./waitForAsyncResult-7MC8r4wf.js";import"./CreateProjectModal-CMpDZifM.js";import"./ConfirmationDialog-BDYlXH9A.js";import"./DialogBase-BCuTdDbU.js";import"./Close-Bu2yudNY.js";import"./HelpPopover-BxBUcBpZ.js";import"./MarkdownPopover-BqZuBojY.js";import"./LightTooltip-BLobyLjn.js";import"./MarkdownSynapse-9j4LJb_F.js";import"./SkeletonButton-BXWOXl9N.js";import"./SkeletonInlineBlock-CGB-MCvO.js";import"./SkeletonTable-C5xUm_Zr.js";import"./SkeletonParagraph-BA9ytrTV.js";import"./SynapseHomepageNavBar-JGlVvlMM.js";import"./SageResourcesPopover-Dja4a5GU.js";import"./Grid-CeYYAj7u.js";import"./index-jKqhNBOG.js";import"./MenuItem-CX3e5zAM.js";import"./UserBadge-H-ZUUhh9.js";import"./Card-XI7C-k8U.js";import"./Chip-DqtQxgW8.js";import"./Slide-BhgjVewm.js";import"./InputAdornment-BzZ6yejJ.js";import"./listItemButtonClasses-BiLEMd7K.js";import"./Badge-By91Y3x8.js";import"./usePreviousProps-Dx1un79N.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
