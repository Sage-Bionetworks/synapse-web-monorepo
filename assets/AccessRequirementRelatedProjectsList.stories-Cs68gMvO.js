import{s as o,b as n,O as a,H as c}from"./iframe-TELIK5St.js";import{A as m}from"./AccessRequirementRelatedProjectsList-Bbj3yimb.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DV-HAFjA.js";import"./index-DhCG1PUT.js";import"./_baseOrderBy-CMcDCKmR.js";import"./_baseIteratee-Bm_ygrTG.js";import"./_baseMap-BW9Pah7Q.js";import"./_baseEach-1R1uGBUK.js";import"./useInfiniteQuery-CsPobzOo.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-CIPd0Wc0.js";import"./useEntity-uH0IPj5d.js";import"./pickBy-D8zlkIai.js";import"./isString-DOfKFuJ8.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BX92XFzE.js";import"./useGetEntityHeaders-BbN-lQQC.js";import"./EntityIcon-DU1SG0uz.js";import"./ErrorChip-6BIO-Wyb.js";import"./Chip-ChN1vAl3.js";import"./ListItem-Bh9VXM03.js";import"./listItemButtonClasses-DyQLHwEc.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
