import{o as e}from"./preload-helper-CsHsquCd.js";import{n as t,p as n,t as r}from"./core-IjRt3rc-.js";import{Cn as i,Ct as a,Tn as o,kn as s}from"./synapse-client-SWrWebbD.js";import{n as c,t as l}from"./AccessRequirementRelatedProjectsList-05uiVsad.js";var u,d,f,p,m;e((()=>{i(),s(),r(),c(),u={title:`Governance/AccessRequirementRelatedProjectsList`,component:l},d={args:{accessRequirementId:9603055}},f={args:{accessRequirementId:9605913}},p={args:{accessRequirementId:1234567},parameters:{stack:`mock`,msw:{handlers:[t.post(`${o}${a}`,()=>n.json({results:[{id:`1234567`,type:`org.sagebionetworks.repo.model.ManagedACTAccessRequirement`,createdOn:`2017-08-23T18:48:20.892Z`,modifiedOn:`2023-12-14T00:43:41.315Z`,name:`Team AR without Related Projects`,version:`1`,relatedProjectIds:[],reviewerIds:[]}]},{status:200}))]}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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