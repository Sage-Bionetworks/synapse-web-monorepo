import{u as o,a as n,Q as a,H as c}from"./iframe-CxvUBa5Y.js";import{A as m}from"./AccessRequirementRelatedProjectsList-ILXVb4_H.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BSUBKTKZ.js";import"./index-C1Mm4JJE.js";import"./_baseOrderBy-DWYhZuiu.js";import"./_baseIteratee-D_GPTcqf.js";import"./_baseMap-DWDiPcEf.js";import"./_baseEach-BFcEHZkD.js";import"./useInfiniteQuery-BZm90861.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Dm4L0vrD.js";import"./useEntity-elaFZDLe.js";import"./pickBy-L2Xf9tQn.js";import"./isString-D0HJjUrM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B-yMRRyv.js";import"./useGetEntityHeaders-CHA3qqBE.js";import"./EntityIcon-DWcFvPeM.js";import"./ErrorChip-dY5-55YB.js";import"./Chip-CztKYxS2.js";import"./ListItem-C-OjmJ8p.js";import"./listItemButtonClasses-D_qmBppn.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
