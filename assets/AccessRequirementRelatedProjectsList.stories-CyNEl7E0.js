import{n as o,b as n,Q as a,H as c}from"./iframe-D2314vV7.js";import{A as m}from"./AccessRequirementRelatedProjectsList-EjmiwmGI.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-jlR9BA06.js";import"./index-uz0aFGkQ.js";import"./_baseOrderBy-C8mlA2uL.js";import"./_baseIteratee-vNs5qHqV.js";import"./_baseMap-CMdkRV5u.js";import"./_baseEach-lxWvv5jk.js";import"./useQueries-CEbKoZrk.js";import"./useInfiniteQuery-BkYzK-VQ.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Cnokm_AN.js";import"./useEntity-Bbhi_KOY.js";import"./pickBy-ZOU6t9n3.js";import"./isString-0a-oBQWp.js";import"./useSuspenseQuery-Dqm9rcpM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DPq4ejvG.js";import"./useGetEntityHeaders-CECGYUjd.js";import"./EntityIcon-DK1fGGQY.js";import"./ErrorChip-kW_i3cNr.js";import"./Chip-Dx5TUVtU.js";import"./ListItem-CI4GcaHb.js";import"./listItemButtonClasses-BYk7Nv3g.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
