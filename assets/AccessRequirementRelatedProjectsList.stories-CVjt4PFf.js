import{n as o,b as n,Q as a,H as c}from"./iframe-SpTPUL8m.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C4TZJr_2.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DSZI34h1.js";import"./index-BPOVYvhU.js";import"./_baseOrderBy-lQS-Mv4J.js";import"./_baseIteratee-CaM8Iugn.js";import"./_baseMap-BruZldJj.js";import"./_baseEach-Dahxdq_T.js";import"./useInfiniteQuery-BpbmMIh3.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-XkjY8iAP.js";import"./useEntity-wFGgMglJ.js";import"./pickBy-lVBueDr9.js";import"./isString-CRjJcNPG.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CtG5jObx.js";import"./useGetEntityHeaders-CzKOxL5U.js";import"./EntityIcon-CIsQEd2k.js";import"./ErrorChip-Cd2oyG5k.js";import"./Chip-BbzLJe0J.js";import"./ListItem-C5FE55VF.js";import"./listItemButtonClasses-DD21Mqvg.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
