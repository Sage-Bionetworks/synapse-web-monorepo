import{j as i,dG as e,r as a}from"./iframe-BPjtn3Py.js";import{D as R}from"./DataGrid-DKCWlKue.js";import"./index-r8ZA1smB.js";import"./DateTimePicker-D8D-gB1p.js";import"./useMobilePicker-DRqL82z1.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DtzZYK5M.js";import"./index-MU1GfQRJ.js";import"./ListItem-CkKLwbMV.js";import"./listItemButtonClasses-DdJLo_SH.js";import"./Chip-B9tVR_eV.js";import"./Tabs-BbVb8d_1.js";import"./KeyboardArrowRight-DGjERXGN.js";import"./MenuItem-BbZL7_By.js";import"./index-C148XJoK.js";import"./index-Dy0fAFKr.js";import"./Autocomplete-DkVhAa1G.js";import"./usePreviousProps-D1XVPvif.js";const ce={title:"Components/DataGrid",component:R,parameters:{chromatic:{viewports:[1200]}}},O=["category","name","age","email","status","isActive","created_date","score","description"],w=[0,1,2,3,4,5,6,7,8],I={category:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:["Option A","Option B","Option C","Option D"]},name:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null},age:{type:{type:"integer",isArray:!1},isRequired:!1,enumeratedValues:null},email:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:null},status:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:["Active","Inactive","Pending","Archived"]},isActive:{type:{type:"boolean",isArray:!1},isRequired:!1,enumeratedValues:null},created_date:{type:{type:"string",format:"date-time",isArray:!1},isRequired:!1,enumeratedValues:null},score:{type:{type:"number",isArray:!1},isRequired:!1,enumeratedValues:null},description:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:null}},V=[{__reactKey:"1",category:"Option A",name:"John Doe",age:28,email:"john.doe@example.com",status:"Active",isActive:!0,created_date:e("2024-01-15").toISOString(),score:95,description:"Senior software engineer with 5 years experience",__validationStatus:"valid"},{__reactKey:"2",category:"Option B",name:"Jane Smith",age:34,email:"jane.smith@example.com",status:"Active",isActive:!0,created_date:e("2024-02-20").toISOString(),score:88,description:"Product manager focusing on data analytics",__validationStatus:"valid"},{__reactKey:"3",category:"Option A",name:"Bob Johnson",age:45,email:"bob.johnson@example.com",status:"Inactive",isActive:!1,created_date:e("2023-11-10").toISOString(),score:72,description:"System architect with cloud infrastructure expertise",__validationStatus:"valid"},{__reactKey:"4",category:"Option C",name:"Alice Williams",age:29,email:"alice.williams@example.com",status:"Pending",isActive:!0,created_date:e("2024-03-05").toISOString(),score:91,description:"UX designer specializing in healthcare applications",__validationStatus:"pending"},{__reactKey:"5",category:"Option D",name:"Charlie Brown",age:52,email:"charlie.brown@example.com",status:"Archived",isActive:!1,created_date:e("2023-08-22").toISOString(),score:65,description:"Former tech lead, retired",__validationStatus:"valid"},{__reactKey:"6",category:"Option B",name:"Diana Martinez",age:31,email:"diana.martinez@example.com",status:"Active",isActive:!0,created_date:e("2024-01-30").toISOString(),score:94,description:"Data scientist working on machine learning models",__validationStatus:"valid"},{__reactKey:"7",category:"Option A",name:"Ethan Davis",age:26,email:"ethan.davis@example.com",status:"Active",isActive:!0,created_date:e("2024-04-12").toISOString(),score:87,description:"Full-stack developer with React and Node.js skills",__validationStatus:"invalid"},{__reactKey:"8",category:"Option C",name:"Fiona Garcia",age:38,email:"fiona.garcia@example.com",status:"Active",isActive:!0,created_date:e("2023-12-18").toISOString(),score:89,description:"DevOps engineer managing CI/CD pipelines",__validationStatus:"valid"},{__reactKey:"9",category:"Option B",name:"George Wilson",age:42,email:"george.wilson@example.com",status:"Pending",isActive:!1,created_date:e("2024-02-08").toISOString(),score:78,description:"Security analyst with penetration testing background",__validationStatus:"pending"},{__reactKey:"10",category:"Option D",name:"Hannah Lee",age:27,email:"hannah.lee@example.com",status:"Active",isActive:!0,created_date:e("2024-03-25").toISOString(),score:92,description:"Frontend developer specializing in accessibility",__validationStatus:"valid"}];function l({initialRowData:D,columnNames:x,columnOrder:K,schemaPropertiesInfo:q,entityIsView:C=!1,jsonSchema:G,enableEditing:c=!0}){const P=a.useRef(null),[j,N]=a.useState(D),[b,k]=a.useState(null),[W,B]=a.useState(null),T=a.useCallback((t,E)=>{console.log("Grid changed:",{newValue:t,operations:E}),c&&N(t)},[c]),Y=a.useCallback(t=>{console.log("Selection changed:",t.selection),B(t.selection)},[]);return i.jsx(R,{gridRef:P,rowValues:j,columnNames:x,columnOrder:K,schemaPropertiesInfo:q,entityIsView:C,jsonSchema:G,selectedRowIndex:b,lastSelection:W,handleChange:T,setSelectedRowIndex:k,handleSelectionChange:Y})}const r={render:()=>i.jsx(l,{initialRowData:V,columnNames:O,columnOrder:w,schemaPropertiesInfo:I})},n={render:()=>i.jsx(l,{initialRowData:V.slice(0,5),columnNames:O,columnOrder:w,schemaPropertiesInfo:I,entityIsView:!0,enableEditing:!1})},s={render:()=>i.jsx(l,{initialRowData:[{__reactKey:"1",id:"1",title:"Task 1",completed:"Yes"},{__reactKey:"2",id:"2",title:"Task 2",completed:"No"},{__reactKey:"3",id:"3",title:"Task 3",completed:"Yes"}],columnNames:["id","title","completed"],columnOrder:[0,1,2],schemaPropertiesInfo:{id:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:null},title:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null},completed:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:["Yes","No"]}}})},o={render:()=>i.jsx(l,{initialRowData:[{__reactKey:"1",name:"Valid Row",value:"100",__validationStatus:"valid"},{__reactKey:"2",name:"Invalid Row",value:"abc",__validationStatus:"invalid"},{__reactKey:"3",name:"Pending Row",value:"50",__validationStatus:"pending"},{__reactKey:"4",name:"Another Valid Row",value:"200",__validationStatus:"valid"}],columnNames:["name","value"],columnOrder:[0,1],schemaPropertiesInfo:{name:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null},value:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null}},jsonSchema:{type:"object",properties:{}}})};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <DataGridStoryWrapper initialRowData={sampleRowData} columnNames={sampleColumnNames} columnOrder={sampleColumnOrder} schemaPropertiesInfo={sampleSchemaPropertiesInfo} />
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,y,_;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <DataGridStoryWrapper initialRowData={sampleRowData.slice(0, 5)} columnNames={sampleColumnNames} columnOrder={sampleColumnOrder} schemaPropertiesInfo={sampleSchemaPropertiesInfo} entityIsView={true} enableEditing={false} />
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var g,v,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DataGridStoryWrapper initialRowData={[{
    __reactKey: '1',
    id: '1',
    title: 'Task 1',
    completed: 'Yes'
  }, {
    __reactKey: '2',
    id: '2',
    title: 'Task 2',
    completed: 'No'
  }, {
    __reactKey: '3',
    id: '3',
    title: 'Task 3',
    completed: 'Yes'
  }]} columnNames={['id', 'title', 'completed']} columnOrder={[0, 1, 2]} schemaPropertiesInfo={{
    id: {
      type: {
        type: 'string',
        isArray: false
      },
      isRequired: false,
      enumeratedValues: null
    },
    title: {
      type: {
        type: 'string',
        isArray: false
      },
      isRequired: true,
      enumeratedValues: null
    },
    completed: {
      type: {
        type: 'string',
        isArray: false
      },
      isRequired: false,
      enumeratedValues: ['Yes', 'No']
    }
  }} />
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,h,A;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <DataGridStoryWrapper initialRowData={[{
    __reactKey: '1',
    name: 'Valid Row',
    value: '100',
    __validationStatus: 'valid'
  }, {
    __reactKey: '2',
    name: 'Invalid Row',
    value: 'abc',
    __validationStatus: 'invalid'
  }, {
    __reactKey: '3',
    name: 'Pending Row',
    value: '50',
    __validationStatus: 'pending'
  }, {
    __reactKey: '4',
    name: 'Another Valid Row',
    value: '200',
    __validationStatus: 'valid'
  }]} columnNames={['name', 'value']} columnOrder={[0, 1]} schemaPropertiesInfo={{
    name: {
      type: {
        type: 'string',
        isArray: false
      },
      isRequired: true,
      enumeratedValues: null
    },
    value: {
      type: {
        type: 'string',
        isArray: false
      },
      isRequired: true,
      enumeratedValues: null
    }
  }} jsonSchema={{
    type: 'object',
    properties: {}
  }} />
}`,...(A=(h=o.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};const de=["BasicGrid","ViewOnlyGrid","MinimalGrid","WithValidationStates"];export{r as BasicGrid,s as MinimalGrid,n as ViewOnlyGrid,o as WithValidationStates,de as __namedExportsOrder,ce as default};
