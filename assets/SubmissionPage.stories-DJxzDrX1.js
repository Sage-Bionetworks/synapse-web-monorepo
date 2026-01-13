import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-DVNYwO2X.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B_aMI1tc.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DueqMrA1.js";import"./useAccessRequirements-DWR2oOa2.js";import"./index-9hqwGMA7.js";import"./_baseOrderBy-CmoZ_S3f.js";import"./_baseIteratee-DppP0dwZ.js";import"./_baseMap-ksk5ZDPW.js";import"./_baseEach-Dp5MzYWx.js";import"./useQueries-BQ487jlg.js";import"./useInfiniteQuery-B9oS7yw5.js";import"./groupBy-D_zPxWD6.js";import"./_createAggregator-Cc5opjSo.js";import"./DialogBase-D-pfxM0N.js";import"./Close-BRaPVnbs.js";import"./HelpPopover-CGudOJSg.js";import"./MarkdownPopover-BeI37cFn.js";import"./LightTooltip-bl3iHu17.js";import"./MarkdownSynapse-5ft7ZGQf.js";import"./SkeletonButton-CiDtB3IB.js";import"./SkeletonInlineBlock-Bgae_khf.js";import"./SkeletonTable-BpqkbE8o.js";import"./SkeletonParagraph-Bq0xaWku.js";import"./EntityLink-XAzzfvzb.js";import"./useEntity-olcXtPjS.js";import"./pickBy-BQ7-Hlay.js";import"./isString-D_fby3AB.js";import"./useSuspenseQuery-33kCA9BT.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJPyfImq.js";import"./useGetEntityHeaders-CSxZ3DO1.js";import"./EntityIcon-CvuZWRxc.js";import"./ErrorChip-ZmNEi7jr.js";import"./Chip-sOf8CffO.js";import"./UserOrTeamBadge-qHIfMXaj.js";import"./UserBadge-Q4jkqetP.js";import"./useUserBundle-DscWjVV3.js";import"./MenuItem-Ci0bIVjj.js";import"./Card-C6iAvcUJ.js";import"./TeamBadge-TABBYRNJ.js";import"./UnmanagedACTAccessRequirementItem-D3KF-f9L.js";import"./RequirementItem--S1UzBTk.js";import"./LockTwoTone-DkYNjSqA.js";import"./UserSearchBoxV2-D1kwjU32.js";import"./useDebouncedEffect-BL-oaFM1.js";import"./use-deep-compare-effect.esm-_A2F6RRf.js";import"./uniq-Ct69rUQw.js";import"./without-BVd9CiLi.js";import"./Select-aab027f3.esm-CY4Tay_Z.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CFa0ooaD.js";import"./SelfSignAccessRequirementItem-DkyLzVjw.js";import"./DataAccessRequestAccessorsFilesForm-C_G-VYTw.js";import"./enums-q9hYWdUy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-B4DUe1BE.js";import"./RadioGroup-D_-J_cVD.js";import"./Radio-C0iUxmjC.js";import"./SwitchBase-CgidC8Mu.js";import"./FormGroup--LcGs4NA.js";import"./FormControlLabel-2BD87kef.js";import"./UploadDocumentField-B-fuj9wi.js";import"./FileUpload-CV9UEHVi.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BRSUwKT_.js";import"./GridLegacy-BSUk7kUd.js";import"./ResearchProjectForm-al8xfDCC.js";import"./TextFieldWithWordLimit-BlT5cjUB.js";import"./AuthenticatedRequirement-LwwFTHA6.js";import"./CertificationRequirement-Cwyr78T7.js";import"./TwoFactorAuthEnabledRequirement-CNadwTDi.js";import"./ValidationRequirement-COViAkXh.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-r8D16PPN.js";import"./RejectDataAccessRequestModal-DbnvqfX1.js";import"./CannedRejectionDialog-CBms421a.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-u7vUp13p.js";import"./Checkbox-DTSE5Rp3.js";import"./Grid-CwhdJPOL.js";import"./upperFirst-BO18g1er.js";import"./_stringToArray-S0Ut-cgz.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
