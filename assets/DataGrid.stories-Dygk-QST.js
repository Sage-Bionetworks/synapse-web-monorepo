import{j as i,dG as e,r as a}from"./iframe-CJi55ERg.js";import{D as d}from"./DataGrid-H8d1XUEg.js";import"./index-Chi_LkuB.js";import"./DateTimePicker-DEKHV2Vl.js";import"./useMobilePicker-DTLDCi1i.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-o9Djcqfz.js";import"./index-DJ8Jevlp.js";import"./ListItem-qYvTpJhS.js";import"./listItemButtonClasses-CMAgeQfW.js";import"./Chip-DELPMDmB.js";import"./Tabs-BXSKaZoW.js";import"./KeyboardArrowRight-BzijBgoc.js";import"./MenuItem-CXmp431F.js";import"./index-C148XJoK.js";import"./index-DbDXKBSr.js";import"./Autocomplete-Db53z0wK.js";import"./usePreviousProps-CZu1xY4C.js";const Q={title:"Components/DataGrid",component:d,parameters:{chromatic:{viewports:[1200]}}},m=["category","name","age","email","status","isActive","created_date","score","description"],u=[0,1,2,3,4,5,6,7,8],p={category:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:["Option A","Option B","Option C","Option D"]},name:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null},age:{type:{type:"integer",isArray:!1},isRequired:!1,enumeratedValues:null},email:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:null},status:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:["Active","Inactive","Pending","Archived"]},isActive:{type:{type:"boolean",isArray:!1},isRequired:!1,enumeratedValues:null},created_date:{type:{type:"string",format:"date-time",isArray:!1},isRequired:!1,enumeratedValues:null},score:{type:{type:"number",isArray:!1},isRequired:!1,enumeratedValues:null},description:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:null}},y=[{__reactKey:"1",category:"Option A",name:"John Doe",age:28,email:"john.doe@example.com",status:"Active",isActive:!0,created_date:e("2024-01-15").toISOString(),score:95,description:"Senior software engineer with 5 years experience",__validationStatus:"valid"},{__reactKey:"2",category:"Option B",name:"Jane Smith",age:34,email:"jane.smith@example.com",status:"Active",isActive:!0,created_date:e("2024-02-20").toISOString(),score:88,description:"Product manager focusing on data analytics",__validationStatus:"valid"},{__reactKey:"3",category:"Option A",name:"Bob Johnson",age:45,email:"bob.johnson@example.com",status:"Inactive",isActive:!1,created_date:e("2023-11-10").toISOString(),score:72,description:"System architect with cloud infrastructure expertise",__validationStatus:"valid"},{__reactKey:"4",category:"Option C",name:"Alice Williams",age:29,email:"alice.williams@example.com",status:"Pending",isActive:!0,created_date:e("2024-03-05").toISOString(),score:91,description:"UX designer specializing in healthcare applications",__validationStatus:"pending"},{__reactKey:"5",category:"Option D",name:"Charlie Brown",age:52,email:"charlie.brown@example.com",status:"Archived",isActive:!1,created_date:e("2023-08-22").toISOString(),score:65,description:"Former tech lead, retired",__validationStatus:"valid"},{__reactKey:"6",category:"Option B",name:"Diana Martinez",age:31,email:"diana.martinez@example.com",status:"Active",isActive:!0,created_date:e("2024-01-30").toISOString(),score:94,description:"Data scientist working on machine learning models",__validationStatus:"valid"},{__reactKey:"7",category:"Option A",name:"Ethan Davis",age:26,email:"ethan.davis@example.com",status:"Active",isActive:!0,created_date:e("2024-04-12").toISOString(),score:87,description:"Full-stack developer with React and Node.js skills",__validationStatus:"invalid"},{__reactKey:"8",category:"Option C",name:"Fiona Garcia",age:38,email:"fiona.garcia@example.com",status:"Active",isActive:!0,created_date:e("2023-12-18").toISOString(),score:89,description:"DevOps engineer managing CI/CD pipelines",__validationStatus:"valid"},{__reactKey:"9",category:"Option B",name:"George Wilson",age:42,email:"george.wilson@example.com",status:"Pending",isActive:!1,created_date:e("2024-02-08").toISOString(),score:78,description:"Security analyst with penetration testing background",__validationStatus:"pending"},{__reactKey:"10",category:"Option D",name:"Hannah Lee",age:27,email:"hannah.lee@example.com",status:"Active",isActive:!0,created_date:e("2024-03-25").toISOString(),score:92,description:"Frontend developer specializing in accessibility",__validationStatus:"valid"}];function l({initialRowData:_,columnNames:g,columnOrder:v,schemaPropertiesInfo:S,entityIsView:f=!1,jsonSchema:h,enableEditing:c=!0}){const A=a.useRef(null),[R,O]=a.useState(_),[w,I]=a.useState(null),[V,D]=a.useState(null),x=a.useCallback((t,q)=>{console.log("Grid changed:",{newValue:t,operations:q}),c&&O(t)},[c]),K=a.useCallback(t=>{console.log("Selection changed:",t.selection),D(t.selection)},[]);return i.jsx(d,{gridRef:A,rowValues:R,columnNames:g,columnOrder:v,schemaPropertiesInfo:S,entityIsView:f,jsonSchema:h,selectedRowIndex:w,lastSelection:V,handleChange:x,setSelectedRowIndex:I,handleSelectionChange:K})}const r={render:()=>i.jsx(l,{initialRowData:y,columnNames:m,columnOrder:u,schemaPropertiesInfo:p})},n={render:()=>i.jsx(l,{initialRowData:y.slice(0,5),columnNames:m,columnOrder:u,schemaPropertiesInfo:p,entityIsView:!0,enableEditing:!1})},s={render:()=>i.jsx(l,{initialRowData:[{__reactKey:"1",id:"1",title:"Task 1",completed:"Yes"},{__reactKey:"2",id:"2",title:"Task 2",completed:"No"},{__reactKey:"3",id:"3",title:"Task 3",completed:"Yes"}],columnNames:["id","title","completed"],columnOrder:[0,1,2],schemaPropertiesInfo:{id:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:null},title:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null},completed:{type:{type:"string",isArray:!1},isRequired:!1,enumeratedValues:["Yes","No"]}}})},o={render:()=>i.jsx(l,{initialRowData:[{__reactKey:"1",name:"Valid Row",value:"100",__validationStatus:"valid"},{__reactKey:"2",name:"Invalid Row",value:"abc",__validationStatus:"invalid"},{__reactKey:"3",name:"Pending Row",value:"50",__validationStatus:"pending"},{__reactKey:"4",name:"Another Valid Row",value:"200",__validationStatus:"valid"}],columnNames:["name","value"],columnOrder:[0,1],schemaPropertiesInfo:{name:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null},value:{type:{type:"string",isArray:!1},isRequired:!0,enumeratedValues:null}},jsonSchema:{type:"object",properties:{}}})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <DataGridStoryWrapper initialRowData={sampleRowData} columnNames={sampleColumnNames} columnOrder={sampleColumnOrder} schemaPropertiesInfo={sampleSchemaPropertiesInfo} />
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <DataGridStoryWrapper initialRowData={sampleRowData.slice(0, 5)} columnNames={sampleColumnNames} columnOrder={sampleColumnOrder} schemaPropertiesInfo={sampleSchemaPropertiesInfo} entityIsView={true} enableEditing={false} />
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const Z=["BasicGrid","ViewOnlyGrid","MinimalGrid","WithValidationStates"];export{r as BasicGrid,s as MinimalGrid,n as ViewOnlyGrid,o as WithValidationStates,Z as __namedExportsOrder,Q as default};
