import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-Bxo1Isko.js";import{t as r}from"./jsx-runtime-CR4qI0Ep.js";import{Tn as i,xn as a}from"./SynapseClient-BzG4sNth.js";import{r as o,t as s}from"./handlers-kEM2eI1N.js";import{i as c,r as l}from"./mockAnnotationColumns-Djrlt1nx.js";import{l as u,m as d,n as f,t as p,u as m}from"./QueryWrapper-ByfkJdMv.js";import{n as h,t as g}from"./ExportToAnalysisPlatformDialog-DM7OAo_R.js";function _(){let{isShowingExportToAnalysisPlatformModal:e,setIsShowingExportToAnalysisPlatformModal:t}=d();return(0,v.useEffect)(()=>{e||t(!0)},[e,t]),(0,y.jsx)(y.Fragment,{})}var v,y,b,x,S;e((()=>{u(),p(),l(),o(),i(),v=t(n(),1),h(),y=r(),b={title:`Explore/Send to Analysis Platform Dialog`,component:g,argTypes:{hasRowSelection:{description:`Simulates whether or not the table has row selection enabled.`,control:{type:`boolean`}},unitDescription:{description:`A word describing what each row represents`,control:{type:`text`}}},parameters:{design:{type:`figma`,url:`https://www.figma.com/design/GWQwLZl82ZT75gYonOx8Qf/AMP-ALS-Knowledge-Portal-v1?node-id=234-115477&m=dev`},msw:{handlers:[...s(a)]}}},x={name:`Send to Analysis Platform Dialog`,args:{platformInstructionProps:{cavaticaConnectAccountURL:`https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess`},hasRowSelection:!1,unitDescription:`file`},decorators:[(e,t)=>(0,y.jsx)(f,{initQueryRequest:c,children:(0,y.jsxs)(m,{unitDescription:t.unitDescription,isRowSelectionVisible:t.hasRowSelection,enabledExternalAnalysisPlatforms:[`cavatica`,`terra`,`adworkbench`,`pluto`],children:[(0,y.jsx)(_,{}),(0,y.jsx)(e,{})]})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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