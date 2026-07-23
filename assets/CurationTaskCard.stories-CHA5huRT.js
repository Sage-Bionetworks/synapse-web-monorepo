import{o as e}from"./preload-helper-CsHsquCd.js";import{t}from"./jsx-runtime-l3w3GfrB.js";import{n,p as r,t as i}from"./core-IjRt3rc-.js";import{An as a,En as o}from"./synapse-client-JkKWZI7Y.js";import{E as s,t as c}from"./dist-4IcYCsIY.js";import{n as l,t as u}from"./CurationTaskCard-eszPaHmd.js";var d,f,p,m,h,g,_;e((()=>{a(),c(),i(),l(),d=t(),f={title:`Curator/Dashboard/CurationTaskCard`,component:u,parameters:{stack:`mock`,withRouter:!0}},p=`syn123`,m=`syn456`,h={dataType:`metadata_clinical`,taskId:123,instructions:`Project: Precision Drug Treatment Profiling in Human Pancreatic Tissue`,assigneePrincipalId:`273957`,taskProperties:{concreteType:`org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties`}},g={argTypes:{state:{control:`select`,options:Object.values(s)},canEdit:{control:`boolean`}},args:{state:s.NOT_STARTED,canEdit:!0},parameters:{msw:{handlers:[n.post(`${o}/repo/v1/entity/:entityId/bundle2`,({params:e})=>{let t=e.entityId===p;return r.json({entity:{name:`Precision Drug Treatment Profiling`},permissions:{canEdit:t}})})]}},render:({state:e,canEdit:t})=>(0,d.jsx)(u,{taskBundle:{task:{...h,projectId:t?p:m},status:{state:e}}})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Demo`]}))();export{g as Demo,_ as __namedExportsOrder,f as default};