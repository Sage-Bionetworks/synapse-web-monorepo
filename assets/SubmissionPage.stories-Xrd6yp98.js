import{g as d,k as u,n as t,a3 as c,dN as R,b as e,km as i,kn as E,H as s,ko as _,p as m,kp as I,kq as S,k5 as O}from"./iframe-RNQ9FFfL.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-lOrYThJA.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CrJ7rqWh.js";import"./useAccessRequirements-BpcWwB_F.js";import"./index-BQpHgqbu.js";import"./_baseOrderBy-BAC9mgPR.js";import"./_baseIteratee-DejOueIh.js";import"./_baseMap-By2r3gd3.js";import"./_baseEach-D2x73z0-.js";import"./useInfiniteQuery-BxfOt_4y.js";import"./groupBy-kSoHz5a7.js";import"./_createAggregator-DUAU6T_6.js";import"./DialogBase-obsFT4U8.js";import"./Close-D12ceDGd.js";import"./HelpPopover-Bu2Wm8fE.js";import"./MarkdownPopover-Dg5ZNl7W.js";import"./LightTooltip-DXhNzA7Y.js";import"./MarkdownSynapse-DBaSEh29.js";import"./SkeletonButton-D0L_5F4L.js";import"./SkeletonInlineBlock-Bh2U8Vk5.js";import"./SkeletonTable-CWFE2ocy.js";import"./SkeletonParagraph-TNDyKrCR.js";import"./EntityLink-I9JNKj_9.js";import"./useEntity-D2rXBnNC.js";import"./pickBy-B1UJ-_RB.js";import"./isString-BkhGZ6X_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BF6-QWBu.js";import"./useGetEntityHeaders-vFjpiI0O.js";import"./EntityIcon-BngzCxtn.js";import"./ErrorChip-BpdBH2i0.js";import"./Chip-Dz2JQ-pG.js";import"./UserOrTeamBadge-B5BaJdL5.js";import"./UserBadge-DfL9o1vu.js";import"./useUserBundle-DBFUriey.js";import"./MenuItem-CB_dWfsU.js";import"./Card-COObVNPF.js";import"./TeamBadge-DUZLoM7e.js";import"./UnmanagedACTAccessRequirementItem-CXmTOuc9.js";import"./RequirementItem-zopFJxhF.js";import"./LockTwoTone-C0V21N9y.js";import"./UserSearchBoxV2-BaYbTtSh.js";import"./useDebouncedEffect-BfX1Nvoe.js";import"./use-deep-compare-effect.esm-CR1MGTYv.js";import"./uniq-BtLabKOw.js";import"./without-dxVEvsO8.js";import"./Select-aab027f3.esm-fVrVd46F.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CkYSu1yW.js";import"./SelfSignAccessRequirementItem-B-LGl_ax.js";import"./DataAccessRequestAccessorsFilesForm-C4PjIBp3.js";import"./enums-BCSCmXXs.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-pE9F2KW9.js";import"./RadioGroup-BgqOmLVY.js";import"./Radio-D5pQpiI2.js";import"./SwitchBase-Djcezb5v.js";import"./FormGroup-BCIPib_p.js";import"./FormControlLabel-CQvWlPja.js";import"./UploadDocumentField-CCaWlWC1.js";import"./FileUpload-S9enShIX.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DCVxYRo7.js";import"./GridLegacy-Du9x2190.js";import"./ResearchProjectForm-CKLldOxS.js";import"./TextFieldWithWordLimit-raS2j18_.js";import"./AuthenticatedRequirement-B2EIz_V0.js";import"./CertificationRequirement-CJNgOfFC.js";import"./TwoFactorAuthEnabledRequirement-BOY2ZccV.js";import"./ValidationRequirement-DqKiZj15.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-B6V-9lv6.js";import"./RejectDataAccessRequestModal-Cd9hUhUd.js";import"./CannedRejectionDialog-JlEdg0re.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-B3HKAPXk.js";import"./Checkbox-C6yQUJRz.js";import"./Grid-YYSVNtq1.js";import"./upperFirst-CE8P5_OH.js";import"./_stringToArray-BHyPW1hL.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
