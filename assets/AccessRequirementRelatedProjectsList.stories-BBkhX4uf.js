import{n as o,b as n,Q as a,H as c}from"./iframe-pozrfGX9.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B6a9COpV.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-fBMjbIHK.js";import"./index-DK5SCnFS.js";import"./_baseOrderBy-BYJW5QEN.js";import"./_baseIteratee-CPEDkU6I.js";import"./_baseMap-CrtdhqL2.js";import"./_baseEach-BSpAmI0c.js";import"./useInfiniteQuery-BoWyfOQx.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-2D9T37uL.js";import"./useEntity-DjNKlE7X.js";import"./pickBy-BgJu4nxq.js";import"./isString-dc7ZEHEL.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BjeXetgB.js";import"./useGetEntityHeaders-B5Sd4D98.js";import"./EntityIcon-Dy1Nnurb.js";import"./ErrorChip-laD1PmXM.js";import"./Chip-SQ2CRNke.js";import"./ListItem-C23Uagvh.js";import"./listItemButtonClasses-DKZCNe1d.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
