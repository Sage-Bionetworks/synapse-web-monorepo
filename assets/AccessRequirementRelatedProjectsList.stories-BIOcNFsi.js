import{s as o,b as n,O as a,H as c}from"./iframe-CDo31VQT.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CtYmbS_p.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-De0YyHGF.js";import"./index-n3RJ91jU.js";import"./_baseOrderBy-CzmabnCx.js";import"./_baseIteratee-22si1V97.js";import"./_baseMap-DRCaeSez.js";import"./_baseEach-D9qbLuld.js";import"./useInfiniteQuery-zNzDu-Ai.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-C8XqtHUd.js";import"./useEntity-uUVj_auO.js";import"./pickBy-BCJRYgtr.js";import"./isString-BtfLA6Fx.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DHi9K3Vb.js";import"./useGetEntityHeaders-DWbg_-gf.js";import"./EntityIcon-BMX3azV0.js";import"./ErrorChip-Uq50Cf6-.js";import"./Chip-B6hxaUER.js";import"./ListItem-DqmEqhXu.js";import"./listItemButtonClasses-B5zecWfz.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
