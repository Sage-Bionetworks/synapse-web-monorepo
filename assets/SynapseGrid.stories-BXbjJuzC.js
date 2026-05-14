import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{HS as n,Uv as r,Vb as i,XS as a}from"./iframe-CFF1Lvns.js";import{n as o,t as s}from"./SynapseGrid-D6tyoCgw.js";var c,l,u,d,f,p;e((()=>{r(),c=t(a(),1),o(),l=n(),u={title:`Components/SynapseGrid`,component:s,parameters:{stack:`staging`,requireLogin:!0},argTypes:{query:{control:`text`},showDebugInfo:{control:`boolean`,description:`Show debug information including session details and model snapshot`}}},d={args:{query:`SELECT * FROM syn35295069`},render:function({query:e,...t}){let n=(0,c.useRef)(null);return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(i,{variant:`outlined`,onClick:()=>n.current?.initializeGrid({initialQuery:{sql:e||`SELECT * FROM syn35295069`},concreteType:`org.sagebionetworks.repo.model.grid.CreateGridRequest`}),sx:{color:`inherit`,margin:`10px 0`},children:`Start Grid Session`}),(0,l.jsx)(s,{ref:n,...t})]})}},f={args:{showDebugInfo:!0}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    query: 'SELECT * FROM syn35295069'
  },
  render: function GridWithButton({
    query,
    ...args
  }) {
    const gridRef = useRef<SynapseGridHandle>(null);
    return <div>
        <Button variant="outlined" onClick={() => gridRef.current?.initializeGrid({
        initialQuery: {
          sql: query || 'SELECT * FROM syn35295069'
        },
        concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest'
      })} sx={{
        color: 'inherit',
        margin: '10px 0'
      }}>
          Start Grid Session
        </Button>
        <SynapseGrid ref={gridRef} {...args} />
      </div>;
  }
} satisfies Story`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    showDebugInfo: true
  }
}`,...f.parameters?.docs?.source}}},p=[`GridWithQuery`,`GridWithUserInputAndDebugInfo`]}))();export{d as GridWithQuery,f as GridWithUserInputAndDebugInfo,p as __namedExportsOrder,u as default};