import{n as o,b as n,Q as a,H as c}from"./iframe-CpfV3NOk.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BgmBjwjK.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-Bg4kd5fC.js";import"./index-C4-1Fb9W.js";import"./_baseOrderBy-D3MUMegZ.js";import"./_baseIteratee-CwnUjdrn.js";import"./_baseMap-DXvb3YXn.js";import"./_baseEach-Bl5cvDEJ.js";import"./useInfiniteQuery-B30BxfoI.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-NJfby3mr.js";import"./useEntity-C1kGutZW.js";import"./pickBy-VF0gERx7.js";import"./isString-M5PtLTGF.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BBbZSh8P.js";import"./useGetEntityHeaders-BzhDRmxU.js";import"./EntityIcon-DjCBlFng.js";import"./ErrorChip-DjhLHBMZ.js";import"./Chip-D0au_Ohq.js";import"./ListItem-Du6L42EC.js";import"./listItemButtonClasses-D4ELf39w.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
