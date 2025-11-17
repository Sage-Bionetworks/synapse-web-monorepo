import{at as g,j as e,r as w}from"./iframe-DOnL1WnT.js";import{S as v}from"./SynapseNavDrawer-CliQWj-P.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-CQBoco9R.js";import"./useInfiniteQuery-DBtR-i50.js";import"./useDownloadList-DZWSkAmK.js";import"./waitForAsyncResult-B7L0YBsf.js";import"./CreateProjectModal-BIwk5ANc.js";import"./ConfirmationDialog-DBlD3c8E.js";import"./DialogBase-CKf_63Ui.js";import"./Close-MJ_nsuDC.js";import"./HelpPopover-D86Vst7Z.js";import"./MarkdownPopover-CauQ5K7i.js";import"./LightTooltip-bfiAMs0U.js";import"./MarkdownSynapse-BF6cile7.js";import"./SkeletonButton-B9cG9K33.js";import"./SkeletonInlineBlock-BUPDznw3.js";import"./SkeletonTable-PXKcpraC.js";import"./SkeletonParagraph-BmRLG4OY.js";import"./SynapseHomepageNavBar-hZBb_Je7.js";import"./SageResourcesPopover-BD4vkPke.js";import"./Grid-OsvXf4Gv.js";import"./index-BSAtyD83.js";import"./MenuItem-hhLXKwPr.js";import"./UserBadge-DQCtOu7Y.js";import"./Card-DY48lF53.js";import"./Chip-C754RM17.js";import"./Slide-DOGEHKqD.js";import"./InputAdornment-B7i6LfX-.js";import"./listItemButtonClasses-95cHtwzX.js";import"./Badge-KFGMI9DN.js";import"./usePreviousProps-CAQSiXsQ.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
