import{n as o,b as n,Q as a,H as c}from"./iframe-C0AexDGo.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DII3HzJJ.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-gm9L2nUe.js";import"./index-BLmC8C9J.js";import"./_baseOrderBy-CQnT6_z2.js";import"./_baseIteratee-Cumo85pk.js";import"./_baseMap-DuuksuE2.js";import"./_baseEach-BYTNHSI6.js";import"./useInfiniteQuery-B2H1bPeH.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-BLP0ZZDN.js";import"./useEntity-0eq8IzEx.js";import"./pickBy-BKiqvuJk.js";import"./isString-CEp7wxdK.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C-QbFGo_.js";import"./useGetEntityHeaders-CsH2S6ZZ.js";import"./EntityIcon-C-B7zRkw.js";import"./ErrorChip-g9xrxoGJ.js";import"./Chip-7BiG69Cu.js";import"./ListItem-NycXdyyE.js";import"./listItemButtonClasses-BVWTFNxv.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
