import{g as u,k as d,n as t,a1 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-BVIZDvjc.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CrhHsmmA.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DxlVstzq.js";import"./useAccessRequirements-BPE-2Pul.js";import"./index-DNB6jgYr.js";import"./_baseOrderBy-DkKW-f5Q.js";import"./_baseIteratee-D9EuEOo0.js";import"./_baseMap-Bi6B3sHX.js";import"./_baseEach-IrID1Gdl.js";import"./useInfiniteQuery-BSt_-lE2.js";import"./groupBy-BVQ3r91S.js";import"./_createAggregator-Jh2MOTj4.js";import"./DialogBase-S6GlCR1h.js";import"./Close-B2iBzLNH.js";import"./HelpPopover-D_ahQJhV.js";import"./MarkdownPopover-BEAyCTTW.js";import"./LightTooltip-GG2U7cEt.js";import"./MarkdownSynapse-C1-7S77D.js";import"./SkeletonButton-D1SYxzVe.js";import"./SkeletonInlineBlock-CEdkX1JK.js";import"./SkeletonTable-CtaVYpmw.js";import"./SkeletonParagraph-BSFvRjJJ.js";import"./EntityLink-BValSIug.js";import"./useEntity-Bn24goiK.js";import"./pickBy-DEaar3Eq.js";import"./isString-xAVC3jrr.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-N2Gqs-EN.js";import"./useGetEntityHeaders-CYuq30kJ.js";import"./EntityIcon-DAzVWQJ-.js";import"./ErrorChip-yw65Glsn.js";import"./Chip-Bzu_y-sk.js";import"./UserOrTeamBadge-xKlr88Va.js";import"./UserBadge-BloHpBvi.js";import"./useUserBundle-BViq3gOv.js";import"./MenuItem-CO-Q0A-K.js";import"./Card-BGbetZvK.js";import"./TeamBadge-om4wrZOC.js";import"./UnmanagedACTAccessRequirementItem-B6CkILXz.js";import"./RequirementItem-DX3yDFWz.js";import"./LockTwoTone-DSGPfNp1.js";import"./UserSearchBoxV2-BwzKOHhv.js";import"./useDebouncedEffect-Fnh_7F32.js";import"./use-deep-compare-effect.esm-B8nksVgc.js";import"./uniq-NUrNodLE.js";import"./without-rpomXa5o.js";import"./Select-aab027f3.esm-BMBgQj1Y.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CSM7Rw1_.js";import"./SelfSignAccessRequirementItem-DUBWkCov.js";import"./DataAccessRequestAccessorsFilesForm-QUsB6vst.js";import"./enums-DcJU6bMW.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Dmp2LWBd.js";import"./RadioGroup-Bc3Ih2lQ.js";import"./Radio-Bw7NFD0U.js";import"./SwitchBase-uF1flSX8.js";import"./FormGroup-RwRqCx7S.js";import"./FormControlLabel-C7grxvps.js";import"./UploadDocumentField-Df_SrELS.js";import"./FileUpload-HQuCIRwc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-dJ03xn9e.js";import"./GridLegacy-Bd2GH6jD.js";import"./ResearchProjectForm-I2FCn-sY.js";import"./TextFieldWithWordLimit-CRdc78Tm.js";import"./AuthenticatedRequirement-BuQUTqGh.js";import"./CertificationRequirement-8eV5sC3H.js";import"./TwoFactorAuthEnabledRequirement-C3Z3cXZj.js";import"./ValidationRequirement-wXOYL0J7.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-vRHznabN.js";import"./RejectDataAccessRequestModal-C6wz5skr.js";import"./CannedRejectionDialog-D1vOZLTN.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-D-x0uIwM.js";import"./Checkbox-BIzsyZ1H.js";import"./Grid-BWKWw_LY.js";import"./upperFirst-KecrI_kz.js";import"./_stringToArray-BB2Gjbo6.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
