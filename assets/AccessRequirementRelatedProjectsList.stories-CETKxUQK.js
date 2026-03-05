import{n as o,b as n,Q as a,H as c}from"./iframe-DmJPOOU_.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DNxmzyk8.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CMox_RrW.js";import"./index-BXFJdLDG.js";import"./_baseOrderBy-eGJUtKsY.js";import"./_baseIteratee-1Q2L5zu3.js";import"./_baseMap-BWARg_nl.js";import"./_baseEach-CAIliHKy.js";import"./useInfiniteQuery-BDaCbZ6f.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CwAgcUER.js";import"./useEntity-CQC1iVNp.js";import"./pickBy-M_UJi6ID.js";import"./isString-DV94wrcf.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-RBjfW4XO.js";import"./useGetEntityHeaders-N9vBAa9Y.js";import"./EntityIcon-DRC7RGPj.js";import"./ErrorChip-zGeSWOAx.js";import"./Chip-CM8JUIti.js";import"./ListItem-CeZm0VNM.js";import"./listItemButtonClasses-CS68_jdA.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
