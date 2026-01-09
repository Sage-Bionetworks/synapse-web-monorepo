import{ay as g,j as r,r as w}from"./iframe-CJCPT_yY.js";import{S as v}from"./SynapseNavDrawer-STZ7ePvi.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-6l6KCO3o.js";import"./useInfiniteQuery-Cpo1uBE7.js";import"./useDownloadList-DQUZjMOS.js";import"./waitForAsyncResult-xjvy8IV2.js";import"./useUserBundle-DV8uACsM.js";import"./useSuspenseQuery-CA-nz-xS.js";import"./CreateProjectModal-BHmEF8H-.js";import"./ConfirmationDialog-BD2HXlgs.js";import"./DialogBase-DD_PbrBf.js";import"./Close-BRTzwidq.js";import"./HelpPopover-C4PJJkqz.js";import"./MarkdownPopover-D-gx4RgI.js";import"./LightTooltip-BJLQph6o.js";import"./MarkdownSynapse-CTWmq3WF.js";import"./SkeletonButton-B0ZXgmWW.js";import"./SkeletonInlineBlock-DKm9jtot.js";import"./SkeletonTable-DEcRya5M.js";import"./SkeletonParagraph-CRVUa_L6.js";import"./SynapseHomepageNavBar-Ch15r6wb.js";import"./SageResourcesPopover-CYloUGXv.js";import"./Grid-CKs3MHRE.js";import"./index-8HwUI_iG.js";import"./MenuItem-FQcUK81X.js";import"./UserBadge-CPPowmDC.js";import"./Card-CC0cQVjk.js";import"./Chip-BjrahEkE.js";import"./Slide-ChidOHaH.js";import"./InputAdornment-BS_0c_w-.js";import"./listItemButtonClasses-DYyGUxr8.js";import"./Badge-I0ZiQ-Ez.js";import"./usePreviousProps-DUbZ-Tde.js";const Y={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),r.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
