import{n as e}from"./chunk-jRWAZmH_.js";import{Bh as t,Xt as n,Yt as r,Zt as i,ig as a,ng as o,sg as s}from"./iframe-CBMdFeQS.js";import{n as c,t as l}from"./AccessRequirementRelatedProjectsList-CTQZzA5N.js";var u,d,f,p,m;e((()=>{o(),s(),r(),c(),u={title:`Governance/AccessRequirementRelatedProjectsList`,component:l},d={args:{accessRequirementId:9603055}},f={args:{accessRequirementId:9605913}},p={args:{accessRequirementId:1234567},parameters:{stack:`mock`,msw:{handlers:[i.post(`${a}${t}`,()=>n.json({results:[{id:`1234567`,type:`org.sagebionetworks.repo.model.ManagedACTAccessRequirement`,createdOn:`2017-08-23T18:48:20.892Z`,modifiedOn:`2023-12-14T00:43:41.315Z`,name:`Team AR without Related Projects`,version:`1`,relatedProjectIds:[],reviewerIds:[]}]},{status:200}))]}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`ManyProjects`,`OneProject`,`ZeroProjectsMock`]}))();export{d as ManyProjects,f as OneProject,p as ZeroProjectsMock,m as __namedExportsOrder,u as default};