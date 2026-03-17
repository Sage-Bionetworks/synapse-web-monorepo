import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-Bd48Phhx.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CpI43rMs.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-uMGrwMXq.js";import"./useAccessRequirements-D8EP13X3.js";import"./index-4gXpW4bf.js";import"./_baseOrderBy-pD6oys2i.js";import"./_baseIteratee-FIlUPYy6.js";import"./_baseMap-BKdhkoLq.js";import"./_baseEach-Ca-EIFRq.js";import"./useInfiniteQuery-lMwdmXJ9.js";import"./groupBy-DfInkdDG.js";import"./_createAggregator-CBSUHK6L.js";import"./DialogBase-DJeR-4bo.js";import"./Close-DEayXyHI.js";import"./HelpPopover-DCI79EJV.js";import"./MarkdownPopover-BdpxecKY.js";import"./LightTooltip-Baq7jYr-.js";import"./MarkdownSynapse-BQCReIPi.js";import"./SkeletonButton-yGLAaBDC.js";import"./SkeletonInlineBlock-BSKjVSEt.js";import"./SkeletonTable-DPwFQSrG.js";import"./SkeletonParagraph-keiL0wvn.js";import"./EntityLink-B9gEXoiY.js";import"./useEntity-xQcJ_DrW.js";import"./pickBy-CObcCQ8L.js";import"./isString-DP_DVEPW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Csn_jgox.js";import"./useGetEntityHeaders-j3Jfeowy.js";import"./EntityIcon-CI-IKxMl.js";import"./ErrorChip-D1Il5Xsy.js";import"./Chip-Cnnt6mV5.js";import"./UserOrTeamBadge-ChOHTGmA.js";import"./UserBadge-BNLsVG6W.js";import"./useUserBundle-C0wQg83z.js";import"./MenuItem-CNJlFnXk.js";import"./Card-BWa2aTBm.js";import"./TeamBadge-CKCsSXXH.js";import"./UnmanagedACTAccessRequirementItem-C1e7xC11.js";import"./RequirementItem-6zSTnwIi.js";import"./LockTwoTone-Dos2DKYk.js";import"./UserSearchBoxV2-Bo0dtOOE.js";import"./useDebouncedEffect-hUKprK7z.js";import"./use-deep-compare-effect.esm-Bh2RpSBo.js";import"./uniq-rWVkPxbm.js";import"./without-D8fKqK1Y.js";import"./Select-aab027f3.esm-D_t_k9rN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-Ddzli2zg.js";import"./SelfSignAccessRequirementItem-D3Ks4Qln.js";import"./DataAccessRequestAccessorsFilesForm-Dm7BIeoH.js";import"./enums-lrhuhatL.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-DQoQ98sE.js";import"./RadioGroup-Bk3_y20C.js";import"./Radio-BeQ_e96D.js";import"./SwitchBase-CYkmB97X.js";import"./FormGroup-D-Iny7SE.js";import"./FormControlLabel-DNMuLHGQ.js";import"./UploadDocumentField-BmQP2SfB.js";import"./FileUpload-CbC8rhsO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CfpbSSN6.js";import"./GridLegacy-CuORgUOL.js";import"./ResearchProjectForm-ChOxMQIX.js";import"./TextFieldWithWordLimit-BVoIA_72.js";import"./AuthenticatedRequirement-B2HYddd-.js";import"./CertificationRequirement-CMjIXzMx.js";import"./TwoFactorAuthEnabledRequirement-DmmK5v9L.js";import"./ValidationRequirement-FRbHjz0q.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BUXEZfh-.js";import"./RejectDataAccessRequestModal-YP9Cv_5A.js";import"./CannedRejectionDialog-DVcCr53l.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D4Di_An5.js";import"./Checkbox-CN0utVK2.js";import"./Grid-CZFhBtEB.js";import"./upperFirst-dupiQAjF.js";import"./_stringToArray-CPRNLisM.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
