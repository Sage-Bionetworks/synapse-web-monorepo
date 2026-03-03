import{g as d,k as u,n as t,a3 as c,dN as R,b as e,kn as i,ko as E,H as s,kp as _,p as m,kq as I,kr as S,k6 as O}from"./iframe-DfdWKLuQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CXjIKHIq.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bp0pmYAW.js";import"./useAccessRequirements-D1eSOeAC.js";import"./index-DlfLpHsv.js";import"./_baseOrderBy-DqhbtYPP.js";import"./_baseIteratee-ia3s08Hl.js";import"./_baseMap-UfbSF71S.js";import"./_baseEach-IGzmzClt.js";import"./useInfiniteQuery-CHkRkowF.js";import"./groupBy-C6rXI8DM.js";import"./_createAggregator-CfpwISmq.js";import"./DialogBase-C0Kwo-PX.js";import"./Close-j69RghhX.js";import"./HelpPopover-BffLbhJu.js";import"./MarkdownPopover-CRAHYrd0.js";import"./LightTooltip-C0MMxyxM.js";import"./MarkdownSynapse-Du9C6_rv.js";import"./SkeletonButton-JUuEaAKJ.js";import"./SkeletonInlineBlock-D4AECgOc.js";import"./SkeletonTable-D3TOZVyi.js";import"./SkeletonParagraph-Dis-ZodA.js";import"./EntityLink-B7U9a1Hj.js";import"./useEntity-Df_f9W_E.js";import"./pickBy-Cgbc8mxH.js";import"./isString-DjFKr_Gd.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-b4fxNz-e.js";import"./useGetEntityHeaders-Bdgkt70O.js";import"./EntityIcon-CuWkY9dv.js";import"./ErrorChip-BbVVAYQ9.js";import"./Chip-Dty2JNCX.js";import"./UserOrTeamBadge-CMcSWIv1.js";import"./UserBadge-CCI5HOlo.js";import"./useUserBundle-7JcHSU6U.js";import"./MenuItem-Q13c39O4.js";import"./Card-BIQF_LNz.js";import"./TeamBadge-DB4CROO8.js";import"./UnmanagedACTAccessRequirementItem-BS8cJjSU.js";import"./RequirementItem-bXvqOjZU.js";import"./LockTwoTone-CSBd84_P.js";import"./UserSearchBoxV2-klq2G-UL.js";import"./useDebouncedEffect-BTrNW3gl.js";import"./use-deep-compare-effect.esm-BkM0OYXx.js";import"./uniq-sDeDreTb.js";import"./without-zEOWz5l0.js";import"./Select-aab027f3.esm-CcQT3t-7.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C7qthH7H.js";import"./SelfSignAccessRequirementItem-DsdpPTz2.js";import"./DataAccessRequestAccessorsFilesForm-BrI8QVxF.js";import"./enums-Byb20kTh.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-D4DpQKH-.js";import"./RadioGroup-CxEtdXBa.js";import"./Radio-Dm8zOldl.js";import"./SwitchBase-DT6HJlt8.js";import"./FormGroup-D1z2jjPP.js";import"./FormControlLabel-pZPKWJmG.js";import"./UploadDocumentField-Di3r8N_D.js";import"./FileUpload-DvpWHBSX.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BaQVoLXM.js";import"./GridLegacy-_4qBvqdH.js";import"./ResearchProjectForm-BFqQa1E0.js";import"./TextFieldWithWordLimit-DZGH1fZM.js";import"./AuthenticatedRequirement-B9BtqnA3.js";import"./CertificationRequirement-DXATL6s-.js";import"./TwoFactorAuthEnabledRequirement-CpJR8IKj.js";import"./ValidationRequirement-KX9KhSPt.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-mR8ZT3Po.js";import"./RejectDataAccessRequestModal-C2MY80da.js";import"./CannedRejectionDialog-qtqiRVDz.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CEwS0nhH.js";import"./Checkbox-Dj9Jd6iZ.js";import"./Grid-g2Huy5x_.js";import"./upperFirst-DPpK7-2G.js";import"./_stringToArray-DKfPsC0P.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
