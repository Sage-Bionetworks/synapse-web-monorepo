import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-k6B4MjXD.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CEhCsbxC.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-ChmyUx5S.js";import"./useAccessRequirements-DJadZ6mO.js";import"./index-WOehqnwl.js";import"./_baseOrderBy-Ds31bn-Q.js";import"./_baseIteratee-CAoDB8fy.js";import"./_baseMap-oMJnhGiQ.js";import"./_baseEach-D51EWim7.js";import"./useInfiniteQuery-CFREU8Pv.js";import"./groupBy-77FokXdr.js";import"./_createAggregator-DO5lRv4H.js";import"./DialogBase-Ccfo_49T.js";import"./Close-DOldyZv5.js";import"./HelpPopover-t1MsDT6m.js";import"./MarkdownPopover-D-j3as32.js";import"./LightTooltip-D4E2KaZT.js";import"./MarkdownSynapse-EyuM-I29.js";import"./SkeletonButton-DUY-d9ph.js";import"./SkeletonInlineBlock-DCdHLNp-.js";import"./SkeletonTable-DolM1Kfd.js";import"./SkeletonParagraph-B7V0f3GA.js";import"./EntityLink-BMnvXvUS.js";import"./useEntity-mKrDOST6.js";import"./pickBy-o1hNIBqW.js";import"./isString-DjMb8mei.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BX3B_uN4.js";import"./useGetEntityHeaders-D7JbI84x.js";import"./EntityIcon-BH50cEa9.js";import"./ErrorChip-CcKXH2Ik.js";import"./Chip-ClQuTivw.js";import"./UserOrTeamBadge-CILQNINt.js";import"./UserBadge-CTPE8I7e.js";import"./useUserBundle-9_lecAHf.js";import"./MenuItem-DIdsJc7D.js";import"./Card-BYlpnDBX.js";import"./TeamBadge-Bh3ge5pJ.js";import"./UnmanagedACTAccessRequirementItem-DmZRY88f.js";import"./RequirementItem-SZof_4Qs.js";import"./LockTwoTone-Dzh7QyLA.js";import"./UserSearchBoxV2-DLWu6Fbw.js";import"./useDebouncedEffect-BHVw51nn.js";import"./use-deep-compare-effect.esm-pGvFVVHS.js";import"./uniq-BKcpMB4F.js";import"./without-DI6PJLT7.js";import"./Select-aab027f3.esm-CuM-d5KN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BUeNF2uh.js";import"./SelfSignAccessRequirementItem-BzuMOABa.js";import"./DataAccessRequestAccessorsFilesForm-Cv0fEoXl.js";import"./enums-BwPtLfJi.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BSKNIhCV.js";import"./RadioGroup-B19D6fE-.js";import"./Radio-JD34nBeR.js";import"./SwitchBase-Ckg5eRY-.js";import"./FormGroup-C3twrIfO.js";import"./FormControlLabel-B-nIKQ4K.js";import"./UploadDocumentField-BKzJJ0-o.js";import"./FileUpload-CVgohViu.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Ds41aiT0.js";import"./GridLegacy-B3zvB1Nd.js";import"./ResearchProjectForm-Di-Jrw-_.js";import"./TextFieldWithWordLimit-C15uwcUJ.js";import"./AuthenticatedRequirement-BIfMohDR.js";import"./CertificationRequirement-DIlIiZKe.js";import"./TwoFactorAuthEnabledRequirement-CTwIJkYU.js";import"./ValidationRequirement-enpuGdSE.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Co32LvUA.js";import"./RejectDataAccessRequestModal-rHzVmLLq.js";import"./CannedRejectionDialog-BGtGx1fp.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-QQIwXsjr.js";import"./Checkbox-dZ9U26rf.js";import"./Grid-0yqev7cN.js";import"./upperFirst-bHOYK8fM.js";import"./_stringToArray-DH4XHGoZ.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
