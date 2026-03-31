import{n as o,b as n,Q as a,H as c}from"./iframe-DI5oOWnE.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B8YAZ81A.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D4Y9E4e8.js";import"./index-CS5gCP_E.js";import"./_baseOrderBy-B1wahwza.js";import"./_baseIteratee-DqpkiyQF.js";import"./_baseMap-Dju9eJVG.js";import"./_baseEach-BgfcCDwM.js";import"./useInfiniteQuery-BxuX-z1J.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DV_S4yb6.js";import"./useEntity-B_4VWDkv.js";import"./pickBy-B-IsmZoO.js";import"./isString-BVjChegR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CohGdH5g.js";import"./useGetEntityHeaders-CD6SosP-.js";import"./EntityIcon-BRfENHuD.js";import"./ErrorChip-IcDiFVnh.js";import"./Chip-CmH7z8y-.js";import"./ListItem-D_hkv-Q5.js";import"./listItemButtonClasses-CMqfqGUg.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
