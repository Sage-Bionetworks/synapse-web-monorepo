import{o as e}from"./preload-helper-CsHsquCd.js";import{t}from"./jsx-runtime-l3w3GfrB.js";import{_ as n,i as r,t as i}from"./core-CI8DLeHF.js";import{Ln as a,Nn as o,Pn as s,Rn as c}from"./synapse-client-CmSRto0s.js";import{E as l,_t as u,t as d}from"./dist-Bz4bJwq0.js";import{n as f,t as p}from"./CurationTaskCard-DOv6-Q8I.js";function m({taskId:e=123,jobState:t=`COMPLETE`,errorMessage:i=`Execution failed`,backendOrigin:s=a(o.REPO_ENDPOINT)}={}){let c={concreteType:u.org_sagebionetworks_repo_model_curation_ComputeTaskExecutionResponse,taskId:e};return[r.post(`${s}/repo/v1/curation/task/:taskId/execute/async/start`,()=>n.json({token:h},{status:201})),r.get(`${s}/repo/v1/asynchronous/job/:jobId`,({params:e})=>{let r={jobState:t,jobId:e.jobId,responseBody:t===`COMPLETE`?c:void 0,errorMessage:t===`FAILED`?i:void 0};return n.json(r,{status:200})})]}var h,g=e((()=>{c(),d(),i(),h=`mock-execute-async-token`})),_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{c(),g(),d(),i(),f(),_=t(),v={title:`Curator/Dashboard/CurationTaskCard`,component:p,parameters:{stack:`mock`,withRouter:!0}},y=`syn123`,b=`syn456`,x=456,S=e=>r.post(`${s}/repo/v1/entity/:entityId/bundle2`,({params:t})=>{let r=t.entityId===e;return n.json({entity:{name:`Precision Drug Treatment Profiling`},permissions:{canEdit:r}})}),C={bundle:[S(y)],currentUserProfile:[r.get(`${s}/repo/v1/userProfile`,()=>n.json({ownerId:`273957`})),r.post(`${s}/repo/v1/userGroupHeaders/batch`,()=>n.json({children:[]}))],execute:m()},w={dataType:`metadata_clinical`,taskId:123,instructions:`Project: Precision Drug Treatment Profiling in Human Pancreatic Tissue`,assigneePrincipalId:`273957`,taskProperties:{concreteType:`org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties`}},T={argTypes:{state:{control:`select`,options:Object.values(l)},canEdit:{control:`boolean`}},args:{state:l.NOT_STARTED,canEdit:!0},parameters:{msw:{handlers:[r.post(`${s}/repo/v1/entity/:entityId/bundle2`,({params:e})=>{let t=e.entityId===y;return n.json({entity:{name:`Precision Drug Treatment Profiling`},permissions:{canEdit:t}})})]}},render:({state:e,canEdit:t})=>(0,_.jsx)(p,{taskBundle:{task:{...w,projectId:t?y:b},status:{state:e}}})},E={dataType:`sample_sheet`,taskId:321,instructions:`Generate a sample sheet from the source annotations.`,assigneePrincipalId:`273957`,taskProperties:{concreteType:`org.sagebionetworks.repo.model.curation.execution.SampleSheetGenerationExecutionProperties`,destinationTaskId:x}},D={argTypes:{state:{control:`select`,options:Object.values(l)},canEdit:{control:`boolean`},hasDestinationTask:{control:`boolean`}},args:{state:l.NOT_STARTED,canEdit:!0,hasDestinationTask:!0},parameters:{msw:{handlers:C}},render:({state:e,canEdit:t,hasDestinationTask:n})=>(0,_.jsx)(p,{taskBundle:{task:{...E,projectId:t?y:b,taskProperties:{...E.taskProperties,destinationTaskId:n?x:void 0}},status:{state:e}}})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(TaskStatusStateEnum)
    },
    canEdit: {
      control: 'boolean'
    }
  },
  args: {
    state: TaskStatusStateEnum.NOT_STARTED,
    canEdit: true
  },
  parameters: {
    msw: {
      handlers: [http.post(\`\${MOCK_REPO_ORIGIN}/repo/v1/entity/:entityId/bundle2\`, ({
        params
      }) => {
        const canEdit = params.entityId === CAN_EDIT_PROJECT_ID;
        return HttpResponse.json({
          entity: {
            name: 'Precision Drug Treatment Profiling'
          },
          permissions: {
            canEdit
          }
        });
      })]
    }
  },
  render: ({
    state,
    canEdit
  }) => <CurationTaskCard taskBundle={{
    task: {
      ...baseTask,
      projectId: canEdit ? CAN_EDIT_PROJECT_ID : CANNOT_EDIT_PROJECT_ID
    },
    status: {
      state
    }
  }} />
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(TaskStatusStateEnum)
    },
    canEdit: {
      control: 'boolean'
    },
    hasDestinationTask: {
      control: 'boolean'
    }
  },
  args: {
    state: TaskStatusStateEnum.NOT_STARTED,
    canEdit: true,
    hasDestinationTask: true
  },
  parameters: {
    msw: {
      handlers: executableTaskHandlers
    }
  },
  render: ({
    state,
    canEdit,
    hasDestinationTask
  }) => <CurationTaskCard taskBundle={{
    task: {
      ...baseExecutableTask,
      projectId: canEdit ? CAN_EDIT_PROJECT_ID : CANNOT_EDIT_PROJECT_ID,
      taskProperties: {
        ...baseExecutableTask.taskProperties,
        destinationTaskId: hasDestinationTask ? DESTINATION_TASK_ID : undefined
      }
    },
    status: {
      state
    }
  }} />
}`,...D.parameters?.docs?.source}}},O=[`Demo`,`ExecutableTask`]}))();export{T as Demo,D as ExecutableTask,O as __namedExportsOrder,v as default};