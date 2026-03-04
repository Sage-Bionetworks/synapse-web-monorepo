import{n as o,b as n,Q as a,H as c}from"./iframe-DFPaMFUW.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CX0WAM4U.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-CiX_hKPJ.js";import"./index-C4bY0XrL.js";import"./_baseOrderBy-BWUrDSHp.js";import"./_baseIteratee-KXbrUvbm.js";import"./_baseMap-CV69pYre.js";import"./_baseEach-BoHV8FR1.js";import"./useInfiniteQuery-BfpnCJzv.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CI2VfoQg.js";import"./useEntity-CpWZSi6I.js";import"./pickBy-C-hCh3hG.js";import"./isString-DWRNILOM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D6_7uDZw.js";import"./useGetEntityHeaders-BBwBvFM5.js";import"./EntityIcon-Be3dzf3J.js";import"./ErrorChip-C-TSVd48.js";import"./Chip-DzCjxfH4.js";import"./ListItem-qI3oLIML.js";import"./listItemButtonClasses-C7QOT5hR.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
