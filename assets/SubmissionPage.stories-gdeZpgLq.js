import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BdS9-wdc.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-WYRSViuW.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BxFVYhQg.js";import"./useAccessRequirements-CYXIEknU.js";import"./index-BmEGML5A.js";import"./_baseOrderBy-DwefgT-I.js";import"./_baseIteratee-D3oGQqia.js";import"./_baseMap-sufoZ6nL.js";import"./_baseEach-C3R-Q7qo.js";import"./useInfiniteQuery-B54oxMok.js";import"./groupBy-l_0DWqWW.js";import"./_createAggregator-BK1f0AXb.js";import"./DialogBase-B_l53LD_.js";import"./Close-SS6nyoVB.js";import"./HelpPopover-B69_BQlI.js";import"./MarkdownPopover-BlinJcsM.js";import"./LightTooltip-B9hgSUpU.js";import"./MarkdownSynapse-DzEXO47M.js";import"./SkeletonButton-BtChI9G1.js";import"./SkeletonInlineBlock-B1VKeUrN.js";import"./SkeletonTable-E-xscDs6.js";import"./SkeletonParagraph-BQttfzOt.js";import"./EntityLink-DtA0spe_.js";import"./useEntity-yk3zKDSU.js";import"./pickBy-zLYfMzn_.js";import"./isString-Bg-Bq7K1.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CfwXDFET.js";import"./useGetEntityHeaders-Cqaui4eI.js";import"./EntityIcon-CTJ1PyV0.js";import"./ErrorChip-DGTa7iDG.js";import"./Chip-B8w46sev.js";import"./UserOrTeamBadge-Bo7QMREQ.js";import"./useUserGroupHeader-DhQzbsNW.js";import"./TeamBadge-DyH0b7pK.js";import"./UserBadge-DiTjYkKT.js";import"./useUserBundle-CW56QhDS.js";import"./MenuItem-BSB47y6Q.js";import"./Card-CQz4BqJK.js";import"./UnmanagedACTAccessRequirementItem-B4DMvvVc.js";import"./RequirementItem-7M13_QDK.js";import"./LockTwoTone-KVtjG7xq.js";import"./ManagedACTAccessRequirementItemView-CT2A1pe5.js";import"./SelfSignAccessRequirementItem-yts5Zw1p.js";import"./DataAccessRequestAccessorsFilesForm-Bb9-KFmS.js";import"./enums-BQyxWb3m.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Co1I58Im.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BhnT5Khi.js";import"./UserSearchBox-DHR87Hop.js";import"./useDebouncedEffect-Dbqf_fkL.js";import"./Autocomplete-jeJ3UT8Z.js";import"./usePreviousProps-CRbVQsCb.js";import"./RadioGroup-EI4GGDBq.js";import"./Radio-5dCJbeJH.js";import"./SwitchBase-DOv3IdKL.js";import"./FormGroup-Chmbx7zf.js";import"./FormControlLabel-Db0CgiSH.js";import"./UploadDocumentField-BKvizfLR.js";import"./FileUpload-OGiPCKfy.js";import"./ManagedACTAccessRequirementFormWikiWrapper-ZkUVslDW.js";import"./GridLegacy-Dvkmrnlw.js";import"./ResearchProjectForm-BU2Vcjbx.js";import"./TextFieldWithWordLimit-oJUs5mto.js";import"./AuthenticatedRequirement-COLIIYNK.js";import"./CertificationRequirement-D4nM742a.js";import"./TwoFactorAuthEnabledRequirement-Dslp1gxz.js";import"./ValidationRequirement-BQV6EKYd.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DPEYHx_8.js";import"./RejectDataAccessRequestModal-DkFq1Vp0.js";import"./CannedRejectionDialog-BMdpKoPO.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-_KtxKo5o.js";import"./Checkbox-1TaYBXaY.js";import"./Grid-BXS4f0R9.js";import"./upperFirst-CNnigkr0.js";import"./_stringToArray-D9e3cOy4.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
