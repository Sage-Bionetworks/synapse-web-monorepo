import{n as o,b as n,Q as a,H as c}from"./iframe-D4RhuUSg.js";import{A as m}from"./AccessRequirementRelatedProjectsList-B3dWyX7Z.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-D4V-w5Tn.js";import"./index-CH5hbzgU.js";import"./_baseOrderBy-DCeUPTFI.js";import"./_baseIteratee-CZFIogkU.js";import"./_baseMap-bHNVqvDK.js";import"./_baseEach-B4Uvco6Q.js";import"./useInfiniteQuery-BV3yABot.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-4nZU9QS9.js";import"./useEntity-Bm0QuzQo.js";import"./pickBy-BrWS02wJ.js";import"./isString-D6sDk7rj.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BBL8hy54.js";import"./useGetEntityHeaders-BAPYr-Vg.js";import"./EntityIcon-CA-SBkJD.js";import"./ErrorChip-Di53wrC4.js";import"./Chip-BZ-RMLLV.js";import"./ListItem-jCoRCBkX.js";import"./listItemButtonClasses-C1mk8-jI.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
