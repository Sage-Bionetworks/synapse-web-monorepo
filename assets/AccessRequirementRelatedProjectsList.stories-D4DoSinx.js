import{n as o,b as n,Q as a,H as c}from"./iframe-BVIZDvjc.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Z5pVWtdG.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BPE-2Pul.js";import"./index-DNB6jgYr.js";import"./_baseOrderBy-DkKW-f5Q.js";import"./_baseIteratee-D9EuEOo0.js";import"./_baseMap-Bi6B3sHX.js";import"./_baseEach-IrID1Gdl.js";import"./useInfiniteQuery-BSt_-lE2.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BValSIug.js";import"./useEntity-Bn24goiK.js";import"./pickBy-DEaar3Eq.js";import"./isString-xAVC3jrr.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-N2Gqs-EN.js";import"./useGetEntityHeaders-CYuq30kJ.js";import"./EntityIcon-DAzVWQJ-.js";import"./ErrorChip-yw65Glsn.js";import"./Chip-Bzu_y-sk.js";import"./ListItem-BJ06OWeo.js";import"./listItemButtonClasses-BXxyGXVq.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
