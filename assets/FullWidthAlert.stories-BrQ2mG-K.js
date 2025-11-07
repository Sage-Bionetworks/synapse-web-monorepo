import{at as g,j as e,r as w}from"./iframe-BywOI08r.js";import{S as v}from"./SynapseNavDrawer-CXJJ30UZ.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DC6pmltX.js";import"./useInfiniteQuery-Dss3vF7E.js";import"./useDownloadList-DT9vlKAi.js";import"./waitForAsyncResult-BcJVUCYM.js";import"./CreateProjectModal-CQtdPwE5.js";import"./ConfirmationDialog-CHRrIZxL.js";import"./DialogBase-CbJF6I2m.js";import"./Close-BG6jx9bS.js";import"./HelpPopover-X0uCoa3H.js";import"./MarkdownPopover-BG7aRo-S.js";import"./LightTooltip-DDHrckEI.js";import"./MarkdownSynapse-cRxt--Kk.js";import"./SkeletonButton-DzQUVwf8.js";import"./SkeletonInlineBlock-rzWwNvZc.js";import"./SkeletonTable-BGMevUuy.js";import"./SkeletonParagraph-CUhIHN6z.js";import"./SynapseHomepageNavBar-CBpAf6Sr.js";import"./SageResourcesPopover-x0-g0Vu1.js";import"./Grid-DzEpKiGD.js";import"./index-QM9LZyQP.js";import"./MenuItem-CEHSf-MP.js";import"./UserBadge-jcIe0Qnh.js";import"./Card-Bmrw94GQ.js";import"./Chip-COCF_Cxb.js";import"./Slide-BXFOG-vH.js";import"./InputAdornment-Dy42ErK9.js";import"./listItemButtonClasses-BbQi-Mjl.js";import"./Badge-COOIAXds.js";import"./usePreviousProps-es-uMYAu.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
