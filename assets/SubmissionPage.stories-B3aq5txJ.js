import{g as d,k as u,n as t,a3 as c,dN as R,b as e,km as i,kn as E,H as s,ko as _,p as m,kp as I,kq as S,k5 as O}from"./iframe-B7KGf7-k.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-_Les5QQZ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-sKw4riD-.js";import"./useAccessRequirements-C16fleld.js";import"./index-bUombD9c.js";import"./_baseOrderBy-Dwvk5Ids.js";import"./_baseIteratee-DRGNglyf.js";import"./_baseMap-cJAH5Rrm.js";import"./_baseEach-1iQAkd9B.js";import"./useInfiniteQuery-DoSxFn_y.js";import"./groupBy-BYD595ZZ.js";import"./_createAggregator-a_73x7T4.js";import"./DialogBase-D0__VBEg.js";import"./Close-T1I-2ajn.js";import"./HelpPopover-rsd36_y9.js";import"./MarkdownPopover-CgOyBUHV.js";import"./LightTooltip-BjN2xTIz.js";import"./MarkdownSynapse-1Rv7JxA3.js";import"./SkeletonButton-DY-_GYdD.js";import"./SkeletonInlineBlock-C6U7Upal.js";import"./SkeletonTable-DLLgVxsK.js";import"./SkeletonParagraph-D-OkfrQQ.js";import"./EntityLink-B8G6GcB6.js";import"./useEntity-BEZrwshI.js";import"./pickBy-DA-_w30I.js";import"./isString-Cj2KjwPP.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DzCWwzL7.js";import"./useGetEntityHeaders-BbaRgZNW.js";import"./EntityIcon-KjQ62OTa.js";import"./ErrorChip-Dt1AJr5o.js";import"./Chip-BchH_Wga.js";import"./UserOrTeamBadge-B2_L-lsY.js";import"./UserBadge-O_YNKCQM.js";import"./useUserBundle-Dv5e5E2c.js";import"./MenuItem-BFpLBTs1.js";import"./Card-FkpFOr7A.js";import"./TeamBadge-DkbqZHoj.js";import"./UnmanagedACTAccessRequirementItem-DlIJ81WF.js";import"./RequirementItem-DMC_AsvP.js";import"./LockTwoTone--ELyyVC8.js";import"./UserSearchBoxV2-DGGu5VOX.js";import"./useDebouncedEffect-BERLuVjT.js";import"./use-deep-compare-effect.esm-CdPym0xJ.js";import"./uniq-v1kE_RCi.js";import"./without-BwFRkplG.js";import"./Select-aab027f3.esm-DBxLl7Lu.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C67M-34c.js";import"./SelfSignAccessRequirementItem-Czxvzecq.js";import"./DataAccessRequestAccessorsFilesForm-BfU6mPXZ.js";import"./enums-6tO5SZLZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Bx4KT_Dg.js";import"./RadioGroup-uqtS-AGF.js";import"./Radio-DVH_4n43.js";import"./SwitchBase-N3lkwIv1.js";import"./FormGroup--m3vpaw8.js";import"./FormControlLabel-reBugk4M.js";import"./UploadDocumentField-CAV2UMfo.js";import"./FileUpload-CkyAkzKb.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BF-gfHZh.js";import"./GridLegacy-CZJEK4cy.js";import"./ResearchProjectForm-DaiJNgsT.js";import"./TextFieldWithWordLimit-Df6YIMqi.js";import"./AuthenticatedRequirement-CBM7UMEI.js";import"./CertificationRequirement-BaVmomCY.js";import"./TwoFactorAuthEnabledRequirement-BzQkgJMW.js";import"./ValidationRequirement-CKlj8sdC.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-iYTsS_Lo.js";import"./RejectDataAccessRequestModal-wCczNRoT.js";import"./CannedRejectionDialog-BdjnpYKu.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CfHwuMwA.js";import"./Checkbox-BtT9IXA1.js";import"./Grid-BRTWVYn9.js";import"./upperFirst-CRfV52pe.js";import"./_stringToArray-DitouZPj.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
