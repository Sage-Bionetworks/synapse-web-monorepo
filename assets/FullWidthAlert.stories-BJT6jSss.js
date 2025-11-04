import{ay as g,j as e,r as w}from"./iframe-BDc0Xlhy.js";import{S as v}from"./SynapseNavDrawer-3o69P4JV.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-4-JJrwYi.js";import"./useInfiniteQuery-CsjtSfjB.js";import"./useDownloadList-Cj5NDzoU.js";import"./waitForAsyncResult-DtiRzrTL.js";import"./CreateProjectModal-CXhyvERP.js";import"./ConfirmationDialog-VnZWqUcw.js";import"./DialogBase-B1eCoCTw.js";import"./Close-CUTSnCxN.js";import"./HelpPopover-B3UcgT8N.js";import"./MarkdownPopover-BGH4CVk-.js";import"./LightTooltip-DBJFfDVa.js";import"./MarkdownSynapse-GiDTGx5a.js";import"./SkeletonButton-DOlvDp9u.js";import"./SkeletonInlineBlock-BzdKRqEw.js";import"./SkeletonTable-DvNgt2M0.js";import"./SkeletonParagraph-BrPTge09.js";import"./SynapseHomepageNavBar-Cyoe92zw.js";import"./SageResourcesPopover-DK-Ic29K.js";import"./Grid-DJrpU52t.js";import"./index-C41l0OuT.js";import"./MenuItem-CGmsTxjm.js";import"./UserBadge-DJ1RxlFI.js";import"./Card-Cd1qTK2e.js";import"./Chip-BVXU1kgT.js";import"./Slide-Wuc6ycMx.js";import"./InputAdornment-DNkgThJj.js";import"./listItemButtonClasses-Dkr1AD7c.js";import"./Badge-DYXo_VOu.js";import"./usePreviousProps-BjaJ6N-w.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
