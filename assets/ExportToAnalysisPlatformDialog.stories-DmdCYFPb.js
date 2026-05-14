import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Gt as n,HS as r,Wt as i,XS as a,ag as o,n as s,ng as c,t as l}from"./iframe-sg5Fjk1a.js";import{m as u,n as d,p as f,t as p,v as m}from"./QueryWrapper-B4UtGVdm.js";import{n as h,t as g}from"./ExportToAnalysisPlatformDialog-D7IeSA52.js";function _(){let{isShowingExportToAnalysisPlatformModal:e,setIsShowingExportToAnalysisPlatformModal:t}=m();return(0,v.useEffect)(()=>{e||t(!0)},[e,t]),(0,y.jsx)(y.Fragment,{})}var v,y,b,x,S;e((()=>{f(),p(),i(),s(),o(),v=t(a(),1),h(),y=r(),b={title:`Explore/Send to Analysis Platform Dialog`,component:g,argTypes:{hasRowSelection:{description:`Simulates whether or not the table has row selection enabled.`,control:{type:`boolean`}},unitDescription:{description:`A word describing what each row represents`,control:{type:`text`}}},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/GWQwLZl82ZT75gYonOx8Qf/AMP-ALS-Knowledge-Portal-v1?node-id=234-115477&m=dev`},msw:{handlers:[...l(c)]}}},x={name:`Send to Analysis Platform Dialog`,args:{platformInstructionProps:{cavaticaConnectAccountURL:`https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess`},hasRowSelection:!1,unitDescription:`file`},decorators:[(e,t)=>(0,y.jsx)(d,{initQueryRequest:n,children:(0,y.jsxs)(u,{unitDescription:t.unitDescription,isRowSelectionVisible:t.hasRowSelection,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`,`adworkbench`,`pluto`],children:[(0,y.jsx)(_,{}),(0,y.jsx)(e,{})]})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Send to Analysis Platform Dialog',
  args: {
    platformInstructionProps: {
      cavaticaConnectAccountURL: 'https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess'
    },
    hasRowSelection: false,
    unitDescription: 'file'
  },
  decorators: [(Story, args) => {
    return <QueryWrapper initQueryRequest={mockQueryBundleRequest}>
          <QueryVisualizationWrapper unitDescription={args.unitDescription} isRowSelectionVisible={args.hasRowSelection} enabledExternalAnalysisPlatforms={['cavatica', 'terra', 'adworkbench', 'pluto']}>
            <ShowModalTrigger />
            <Story />
          </QueryVisualizationWrapper>
        </QueryWrapper>;
  }]
}`,...x.parameters?.docs?.source}}},S=[`Demo`]}))();export{x as Demo,S as __namedExportsOrder,b as default};