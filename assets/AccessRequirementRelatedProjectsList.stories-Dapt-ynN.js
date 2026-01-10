import{n as o,b as n,O as a,H as c}from"./iframe-xmmb_I0l.js";import{A as m}from"./AccessRequirementRelatedProjectsList-EHG9lSdc.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-B7hNwYVJ.js";import"./index-lYHXK35I.js";import"./_baseOrderBy-C623CZoW.js";import"./_baseIteratee-BdxYwHJk.js";import"./_baseMap-CGzOi-md.js";import"./_baseEach-B1RTpd10.js";import"./useQueries-B6_MsPWT.js";import"./useInfiniteQuery-Dlr9EZ3N.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BXuzwE8L.js";import"./useEntity-PsEU5Z6M.js";import"./pickBy-DQIDNL5V.js";import"./isString-CWN2TzYl.js";import"./useSuspenseQuery-B2gu81Lt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BfFlbH_n.js";import"./useGetEntityHeaders-mLrU5oZ0.js";import"./EntityIcon-B3QB4buR.js";import"./ErrorChip-D6aUT_uY.js";import"./Chip-5gf_Tn0T.js";import"./ListItem-CUqzWDmV.js";import"./listItemButtonClasses-DdhxpvT0.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
