import{n as o,b as n,Q as a,H as c}from"./iframe-QjK0KVVQ.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DmG2-Kw5.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CEk_RmUW.js";import"./index-YuzRGUHA.js";import"./_baseOrderBy-D464MD8-.js";import"./_baseIteratee-D0wMyYDQ.js";import"./_baseMap-CH_vJgWe.js";import"./_baseEach-Nu6NXdmH.js";import"./useQueries-Jnd7wWig.js";import"./useInfiniteQuery-DM0-hvaX.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DOS0XzSS.js";import"./useEntity-CUKVHP5x.js";import"./pickBy-BzKhWdcw.js";import"./isString-CZlSZ-gY.js";import"./useSuspenseQuery--yWao2XD.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4MWeAlKP.js";import"./useGetEntityHeaders-oYfk2twg.js";import"./EntityIcon-I5a7UGl2.js";import"./ErrorChip-xD2n5Uiu.js";import"./Chip-Czdb_SG1.js";import"./ListItem-CxO61kFx.js";import"./listItemButtonClasses-Dhr_m3L8.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
