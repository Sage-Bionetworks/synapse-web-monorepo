import{n as o,b as n,O as a,H as c}from"./iframe-CV5uF1_e.js";import{A as m}from"./AccessRequirementRelatedProjectsList-CcRX3yL9.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DYB9COxg.js";import"./index-Lq8AZYKI.js";import"./_baseOrderBy-CALcBExl.js";import"./_baseIteratee-DKiQefv_.js";import"./_baseMap-CndHGrEy.js";import"./_baseEach-BBarx7fo.js";import"./useQueries-NxuMdxZj.js";import"./useInfiniteQuery-oU30NX3B.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-22bkctei.js";import"./useEntity-K0J7SxVO.js";import"./pickBy-CCxuAjeM.js";import"./isString-DmYfii3A.js";import"./useSuspenseQuery-CGczKAJn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4JZ_nBvJ.js";import"./useGetEntityHeaders-PapYV6en.js";import"./EntityIcon-MUgI2uul.js";import"./ErrorChip-DNDlfeSX.js";import"./Chip-KBD8jJOF.js";import"./ListItem-eNRkFcKE.js";import"./listItemButtonClasses-zWm1TryB.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
