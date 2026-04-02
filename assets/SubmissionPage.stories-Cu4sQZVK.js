import{g as u,a as e,q as d,u as t,kq as i,kr as c,H as s,ks as R,l as m,kt as E,ku as _,a1 as I,dO as S,k9 as O}from"./iframe-CxvUBa5Y.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Cs42WfQg.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-SUso7yNt.js";import"./useAccessRequirements-BSUBKTKZ.js";import"./index-C1Mm4JJE.js";import"./_baseOrderBy-DWYhZuiu.js";import"./_baseIteratee-D_GPTcqf.js";import"./_baseMap-DWDiPcEf.js";import"./_baseEach-BFcEHZkD.js";import"./useInfiniteQuery-BZm90861.js";import"./groupBy-B0YRAlbm.js";import"./_createAggregator-DyJw0YoK.js";import"./DialogBase-CwWInD0g.js";import"./Close-CiAhw48q.js";import"./HelpPopover-T0cT0kQU.js";import"./MarkdownPopover-Ciurpa6y.js";import"./LightTooltip-BgyTyQ_i.js";import"./MarkdownSynapse-CvjlntGs.js";import"./SkeletonButton-DyDLkSqK.js";import"./SkeletonInlineBlock-Bhdwhqi9.js";import"./SkeletonTable-BIWVFjZB.js";import"./SkeletonParagraph-D_UqSVhv.js";import"./EntityLink-Dm4L0vrD.js";import"./useEntity-elaFZDLe.js";import"./pickBy-L2Xf9tQn.js";import"./isString-D0HJjUrM.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B-yMRRyv.js";import"./useGetEntityHeaders-CHA3qqBE.js";import"./EntityIcon-DWcFvPeM.js";import"./ErrorChip-dY5-55YB.js";import"./Chip-CztKYxS2.js";import"./UserOrTeamBadge-CzZYyJ7s.js";import"./UserBadge-CBzWW9-k.js";import"./useUserBundle-DzpyjFTE.js";import"./MenuItem-DuGrHJFB.js";import"./Card-BvmC2OsO.js";import"./TeamBadge-B7QBbYLp.js";import"./UnmanagedACTAccessRequirementItem-P236eR88.js";import"./RequirementItem-B6mDyRD2.js";import"./LockTwoTone-N9wu979_.js";import"./UserSearchBoxV2-BK-1Xexr.js";import"./useDebouncedEffect-CVJC6LPp.js";import"./use-deep-compare-effect.esm-DVCF_x2N.js";import"./uniq-C4hXfMbU.js";import"./without-DKOCKyBo.js";import"./Select-aab027f3.esm-Dti64Nb-.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CbOJI9Qu.js";import"./SelfSignAccessRequirementItem-BLeHmFwx.js";import"./DataAccessRequestAccessorsFilesForm-DANxCF8e.js";import"./enums-DpA7-pb2.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-B0XkT0VX.js";import"./RadioGroup-B83kizDa.js";import"./Radio-AyHQ9lqS.js";import"./SwitchBase-CVvjvYlh.js";import"./FormGroup-CNY4G8xR.js";import"./FormControlLabel-BSBqVtPb.js";import"./UploadDocumentField-ClnqJNjb.js";import"./FileUpload-CS9X0wOL.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bt06fLmn.js";import"./GridLegacy-Ix32iGX4.js";import"./ResearchProjectForm-DkDjvl2v.js";import"./TextFieldWithWordLimit-BAVCrEcg.js";import"./AuthenticatedRequirement-CWfi9-D9.js";import"./CertificationRequirement-5aulXDwQ.js";import"./TwoFactorAuthEnabledRequirement-CLECRJRT.js";import"./ValidationRequirement-BIN_7uZB.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-TxY7pkqO.js";import"./RejectDataAccessRequestModal-BWLqX8ol.js";import"./CannedRejectionDialog-CGmz0SXe.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DHjGwc95.js";import"./Checkbox-CXn5HuEC.js";import"./Grid-DHGOxpyh.js";import"./upperFirst-D4gtrvMB.js";import"./_stringToArray-CLiWWyz1.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
