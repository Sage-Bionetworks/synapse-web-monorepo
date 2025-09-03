import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-CQIGBc1V.js";import{I as d}from"./IconSvg-CozY35vj.js";import{P as p}from"./ProgrammaticInstructionsModal-RTvGt7FL.js";import{T as m}from"./SynapseTableConstants-2qH3fDlQ.js";import{T as _}from"./Tooltip-KM72jp_q.js";const u=`import synapseclient
syn = synapseclient.Synapse()
syn.login(authToken="YOUR_TOKEN_HERE")
`,y=`library(synapser)
synLogin(authToken="YOUR_TOKEN_HERE")
`;function n({entityId:o,version:a}){const[r,e]=c.useState(!1),s=`${y}
# Obtain a pointer and download the data
${o} <- synGet(entity='${o}'${a?`, version=${a}`:""} ) `,i=`${u}
# Obtain a pointer and download the data
${o} = syn.get(entity='${o}'${a?`, version=${a}`:""} )

# Get the path to the local copy of the data file
filepath = ${o}.path`,l=`synapse get ${o} ${a?`--version ${a}`:""}`;return t.jsxs(t.Fragment,{children:[t.jsx(_,{title:"Programmatic download options",enterNextDelay:m,placement:"left",children:t.jsx("span",{children:t.jsx("button",{className:"btn-download-icon",onClick:()=>e(!0),children:t.jsx(d,{icon:"code"})})})}),r&&t.jsx(p,{show:!0,onClose:()=>e(!1),title:"Download Programmatically",cliCode:l,rCode:s,pythonCode:i})]})}try{n.displayName="DirectProgrammaticDownload",n.__docgenInfo={description:"",displayName:"DirectProgrammaticDownload",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"number"}}}}}catch{}export{n as D,u as P,y as R};
