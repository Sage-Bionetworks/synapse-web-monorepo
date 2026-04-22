import{s as o,b as n,O as a,H as c}from"./iframe-CseC-baw.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C3Ab6zEe.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-LlRVvucj.js";import"./index-Cs-oxnB7.js";import"./_baseOrderBy-BI2WWhcD.js";import"./_baseIteratee-FkIOi2kZ.js";import"./_baseMap-ChkSHv-Q.js";import"./_baseEach-I5MBxf0i.js";import"./useInfiniteQuery-BZ_GGw6g.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-_JXZE8-S.js";import"./useEntity-IS8-aX6E.js";import"./pickBy-BLqDP6KE.js";import"./isString-CDFSk2zC.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DQ3kjnM1.js";import"./useGetEntityHeaders-DvnfnpZp.js";import"./EntityIcon-87f12oRf.js";import"./ErrorChip-CkWsggLP.js";import"./Chip-8D96B7uR.js";import"./ListItem-YIxnHUO0.js";import"./listItemButtonClasses-BOJ5pjAV.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
