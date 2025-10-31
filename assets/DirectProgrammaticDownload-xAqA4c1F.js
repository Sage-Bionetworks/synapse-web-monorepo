import{r as c,j as t,b_ as d,aq as p}from"./iframe-DkJtXMGY.js";import{P as m}from"./ProgrammaticInstructionsModal-VuXHINwX.js";import{T as _}from"./SynapseTableConstants-2qH3fDlQ.js";const u=`import synapseclient
syn = synapseclient.Synapse()
syn.login(authToken="YOUR_TOKEN_HERE")
`,y=`library(synapser)
synLogin(authToken="YOUR_TOKEN_HERE")
`;function n({entityId:a,version:e}){const[r,o]=c.useState(!1),s=`${y}
# Obtain a pointer and download the data
${a} <- synGet(entity='${a}'${e?`, version=${e}`:""} ) `,i=`${u}
# Obtain a pointer and download the data
${a} = syn.get(entity='${a}'${e?`, version=${e}`:""} )

# Get the path to the local copy of the data file
filepath = ${a}.path`,l=`synapse get ${a} ${e?`--version ${e}`:""}`;return t.jsxs(t.Fragment,{children:[t.jsx(d,{title:"Programmatic download options",enterNextDelay:_,placement:"left",children:t.jsx("span",{children:t.jsx("button",{className:"btn-download-icon",onClick:()=>o(!0),children:t.jsx(p,{icon:"code"})})})}),r&&t.jsx(m,{show:!0,onClose:()=>o(!1),title:"Download Programmatically",cliCode:l,rCode:s,pythonCode:i})]})}try{n.displayName="DirectProgrammaticDownload",n.__docgenInfo={description:"",displayName:"DirectProgrammaticDownload",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},version:{defaultValue:null,description:"",name:"version",required:!1,type:{name:"number"}}}}}catch{}export{n as D,u as P,y as R};
