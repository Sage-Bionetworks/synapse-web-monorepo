import{s as o,b as n,O as a,H as c}from"./iframe-Ddo1nd2c.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BPpSVBw6.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-89AzbV_J.js";import"./index-BY1pmXbi.js";import"./_baseOrderBy-BJUcHcg9.js";import"./_baseIteratee-BL_XVY7N.js";import"./_baseMap-ZZuoWbUp.js";import"./_baseEach-Deb1er3l.js";import"./useInfiniteQuery-DJwQPHS2.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Bru2vQ9X.js";import"./useEntity-6i1utiFK.js";import"./pickBy-Ca1HoaHl.js";import"./isString-C31m5vfz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qjtX1WIb.js";import"./useGetEntityHeaders-D0yLijSd.js";import"./EntityIcon-C1GtyKyQ.js";import"./ErrorChip-B2CshbSc.js";import"./Chip-Lk48EpR4.js";import"./ListItem-B658fDRe.js";import"./listItemButtonClasses-n83jtxv3.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
