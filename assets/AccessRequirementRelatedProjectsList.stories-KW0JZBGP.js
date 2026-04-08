import{s as o,b as n,O as a,H as c}from"./iframe-FEhVLLlO.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CXFmdkRT.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DLPzpr6N.js";import"./index-D-512QAu.js";import"./_baseOrderBy-CrdayDuJ.js";import"./_baseIteratee-mWx-HW66.js";import"./_baseMap-rV8-36rj.js";import"./_baseEach-CSLszIvx.js";import"./useInfiniteQuery-BAQMxQ9Q.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B3cFFCeI.js";import"./useEntity-REhwfYE-.js";import"./pickBy-Be7w8Qan.js";import"./isString-4XSt_YuW.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Kr-j5CL1.js";import"./useGetEntityHeaders-DB8lRLKN.js";import"./EntityIcon-C1WaeWmj.js";import"./ErrorChip-COsLfVNI.js";import"./Chip-CX6tLmAn.js";import"./ListItem-C1hAmWYY.js";import"./listItemButtonClasses-BCDQHrTJ.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
