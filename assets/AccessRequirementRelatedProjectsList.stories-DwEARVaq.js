import{n as o,b as n,Q as a,H as c}from"./iframe-E5Ka0mIZ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-uBPxEvZb.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-1-Q1slqh.js";import"./index-Cv8vAGy5.js";import"./_baseOrderBy-Cnq4q8EF.js";import"./_baseIteratee-D6PNAt1_.js";import"./_baseMap-DSEb_IbP.js";import"./_baseEach-C0RJNqJx.js";import"./useInfiniteQuery-DcuDXesA.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CAK_ZE9P.js";import"./useEntity-KCwb7Xcv.js";import"./pickBy-CA13yUMQ.js";import"./isString-BHWtDWMA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CrDwVx5c.js";import"./useGetEntityHeaders-Dl_M548F.js";import"./EntityIcon-uii8VAgq.js";import"./ErrorChip-DV_XRwDA.js";import"./Chip-Bk7-WqYd.js";import"./ListItem-e7EjZo7L.js";import"./listItemButtonClasses-BOPKPtWT.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
