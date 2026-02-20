import{g as d,k as u,n as t,a3 as c,d_ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-CKbLOTsP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-WIYwNVzt.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DSiZCFz1.js";import"./useAccessRequirements-D9J1E6HT.js";import"./index-Dm4n4t0Y.js";import"./_baseOrderBy-ha6mZJd5.js";import"./_baseIteratee-DG3kTKCt.js";import"./_baseMap-BlvC3fFz.js";import"./_baseEach-BW2NyVLM.js";import"./useQueries-Crmwrrll.js";import"./useInfiniteQuery-3dT2qg-d.js";import"./groupBy--E6fVYcR.js";import"./_createAggregator-BA0HPVCc.js";import"./DialogBase-Yec6-9FP.js";import"./Close-BeDMsUE7.js";import"./HelpPopover-BR9cC52u.js";import"./MarkdownPopover-6_Y0Co8e.js";import"./LightTooltip-CgnSmSvt.js";import"./MarkdownSynapse-DMmwxLiP.js";import"./SkeletonButton-8Vj3L_5j.js";import"./SkeletonInlineBlock-D5PXFjGc.js";import"./SkeletonTable-DmfimDzq.js";import"./SkeletonParagraph-Kah2Bnvf.js";import"./EntityLink-gVTrIu_P.js";import"./useEntity-CpDeexrA.js";import"./pickBy-DtAx7Zad.js";import"./isString-Z8lC2x5p.js";import"./useSuspenseQuery-uKlZGoJr.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-FcyEIsmG.js";import"./useGetEntityHeaders-DxeWA4UN.js";import"./EntityIcon-CqzGYhdP.js";import"./ErrorChip-CLnC5o7s.js";import"./Chip-CxgxE7T3.js";import"./UserOrTeamBadge-BpnM_yJD.js";import"./UserBadge-BUkR_2ZS.js";import"./useUserBundle-iM-7ZdVq.js";import"./MenuItem-BEEnz0ed.js";import"./Card-DPRsPfvm.js";import"./TeamBadge-Cjd-4bK2.js";import"./useRealmPrincipals-Dinn5eL5.js";import"./UnmanagedACTAccessRequirementItem-fqYthADZ.js";import"./RequirementItem-CASbHCdk.js";import"./LockTwoTone-BB3dGDCE.js";import"./UserSearchBoxV2-Cgh3B0TX.js";import"./useDebouncedEffect-CPNU1Huu.js";import"./use-deep-compare-effect.esm-SK-d_1QT.js";import"./uniq--fJ4fBkP.js";import"./without-Bjp07HWP.js";import"./Select-aab027f3.esm-ClEaP-mv.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BG6_XjKo.js";import"./SelfSignAccessRequirementItem-DOBvIAt1.js";import"./DataAccessRequestAccessorsFilesForm-CAPXcXY1.js";import"./enums-plsXAN29.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-Cm8KngAe.js";import"./RadioGroup-B_IZGKjJ.js";import"./Radio-ecbFYP80.js";import"./SwitchBase-XdBe4z01.js";import"./FormGroup-DhKs9vzn.js";import"./FormControlLabel-CcttKXCu.js";import"./UploadDocumentField-Db5HkFRh.js";import"./FileUpload-f6FeGMO2.js";import"./ManagedACTAccessRequirementFormWikiWrapper-h9vIqPUK.js";import"./GridLegacy-BHrvqpxA.js";import"./ResearchProjectForm-BIgsqNSg.js";import"./TextFieldWithWordLimit-BpVD6afE.js";import"./AuthenticatedRequirement-B3tqNaEx.js";import"./CertificationRequirement-BSWLph5w.js";import"./TwoFactorAuthEnabledRequirement-CRDhmf7D.js";import"./ValidationRequirement-oh646Gz0.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CPkuSD6j.js";import"./RejectDataAccessRequestModal-Uk4NZKSY.js";import"./CannedRejectionDialog-DgcX6bRg.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Cpo9FRDD.js";import"./Checkbox-7g56acu5.js";import"./Grid-Bi_dYFOR.js";import"./upperFirst-BvyZrU_H.js";import"./_stringToArray-DxbSjhtC.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
