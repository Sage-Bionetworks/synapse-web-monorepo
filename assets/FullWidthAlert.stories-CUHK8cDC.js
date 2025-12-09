import{ay as g,j as r,r as w}from"./iframe-CQJI7H2t.js";import{S as v}from"./SynapseNavDrawer-CrSEVFY3.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-BSoyl4dh.js";import"./useInfiniteQuery-D6F9oIjz.js";import"./useDownloadList-DwKGejsm.js";import"./waitForAsyncResult-D30zjv5S.js";import"./useUserBundle-BJxyK2Lo.js";import"./useSuspenseQuery-Bc-UZawL.js";import"./CreateProjectModal-BydLLtxM.js";import"./ConfirmationDialog-ByNauc16.js";import"./DialogBase-Bii4OYGm.js";import"./Close-ByqpzM9n.js";import"./HelpPopover-BGDGJ311.js";import"./MarkdownPopover-BsAFOo-I.js";import"./LightTooltip-DON7P_WS.js";import"./MarkdownSynapse-Dg1sB7BI.js";import"./SkeletonButton-DUugX30x.js";import"./SkeletonInlineBlock-BCuuGuk5.js";import"./SkeletonTable-939R3x-7.js";import"./SkeletonParagraph-oxsYr-A_.js";import"./SynapseHomepageNavBar-B5LoYwHS.js";import"./SageResourcesPopover-DD5-6mWD.js";import"./Grid-Dsb41YIw.js";import"./index-DqkU7ALG.js";import"./MenuItem-CsWn5GfW.js";import"./UserBadge-Dyq7f4N_.js";import"./Card-yxllXAz0.js";import"./Chip-CsTJhxo4.js";import"./Slide-BCwO9chz.js";import"./InputAdornment-1g_8crPz.js";import"./listItemButtonClasses-CxhAJpDr.js";import"./Badge-uBxSJN09.js";import"./usePreviousProps-ZZZQrcPt.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
