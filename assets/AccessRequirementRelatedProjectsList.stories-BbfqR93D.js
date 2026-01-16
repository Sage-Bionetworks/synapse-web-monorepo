import{n as o,b as n,O as a,H as c}from"./iframe-B-xyH02x.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DoMKu1HF.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-_j6x-JtH.js";import"./index-BJsp20bP.js";import"./_baseOrderBy-C0REZliL.js";import"./_baseIteratee-fpDZ_ZY4.js";import"./_baseMap-DjISqwK4.js";import"./_baseEach-CHfNr7If.js";import"./useQueries-D6R1GWKv.js";import"./useInfiniteQuery-Co2saULA.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DZ4RsdMg.js";import"./useEntity-B_VK1sTi.js";import"./pickBy-NGLZhl8P.js";import"./isString-BD56fkoe.js";import"./useSuspenseQuery-C7ZzErHF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CFMjsswk.js";import"./useGetEntityHeaders-GhOqHanu.js";import"./EntityIcon-BxcgRxp4.js";import"./ErrorChip-BRT26K5x.js";import"./Chip-CRxMN-mm.js";import"./ListItem-CXfG5eiy.js";import"./listItemButtonClasses-BtFgg0V9.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
