import{g as d,k as u,n as t,a3 as c,dN as R,b as e,km as i,kn as E,H as s,ko as _,p as m,kp as I,kq as S,k5 as O}from"./iframe-CZFJJ8mF.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-QWiM26vP.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B8cI9eZQ.js";import"./useAccessRequirements-Cj1szXFO.js";import"./index-DHCSsY1o.js";import"./_baseOrderBy-DJNOF7pH.js";import"./_baseIteratee-rX9r8SJC.js";import"./_baseMap-CqAkTHGS.js";import"./_baseEach-m_YP-tTO.js";import"./useInfiniteQuery-kARObAi9.js";import"./groupBy-CPVR9Ku1.js";import"./_createAggregator-CVJq-d0C.js";import"./DialogBase-DDBsPCb6.js";import"./Close-wucZufu-.js";import"./HelpPopover-C73Dk8f0.js";import"./MarkdownPopover-By4CdHrM.js";import"./LightTooltip-DVNwweRq.js";import"./MarkdownSynapse-E3IF_o1S.js";import"./SkeletonButton-1FI8gwoL.js";import"./SkeletonInlineBlock-CK8FFc-3.js";import"./SkeletonTable-Q3nUli7s.js";import"./SkeletonParagraph-DvXQwRCq.js";import"./EntityLink-yskpU4wn.js";import"./useEntity-adVF4VGo.js";import"./pickBy-CgyhEFoJ.js";import"./isString-C9vid2vV.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CoaMPWn6.js";import"./useGetEntityHeaders-BOKMnKdX.js";import"./EntityIcon-I87dLNKF.js";import"./ErrorChip-CVR39Zqg.js";import"./Chip-BSOTX2SF.js";import"./UserOrTeamBadge-D5ZGc1qy.js";import"./UserBadge-CErUOSm-.js";import"./useUserBundle-d_Y8_V2h.js";import"./MenuItem-DISZCm2g.js";import"./Card-ak_L_vjx.js";import"./TeamBadge-CmUccRd6.js";import"./UnmanagedACTAccessRequirementItem-BahyPXmP.js";import"./RequirementItem-BHhtKYe9.js";import"./LockTwoTone-vn4cj_96.js";import"./UserSearchBoxV2-BChYP0Re.js";import"./useDebouncedEffect-CtoeOd3a.js";import"./use-deep-compare-effect.esm-fzmHI-m-.js";import"./uniq-DmKKWqRk.js";import"./without-DxE4YRMh.js";import"./Select-aab027f3.esm-DpVZwbkN.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CgGFKkFU.js";import"./SelfSignAccessRequirementItem-B1h5TGYe.js";import"./DataAccessRequestAccessorsFilesForm-OnvHhrm9.js";import"./enums-AxUjpTF7.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BbO1QW6x.js";import"./RadioGroup-CtlMFrCJ.js";import"./Radio-XYR_SPYE.js";import"./SwitchBase-BoCiOYwh.js";import"./FormGroup-DbUj_wjG.js";import"./FormControlLabel-BNgfCzjp.js";import"./UploadDocumentField-R4V_4R_6.js";import"./FileUpload-CX7E2SXO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-uW-bPtsD.js";import"./GridLegacy-X15tgaJk.js";import"./ResearchProjectForm-CQnO1-SD.js";import"./TextFieldWithWordLimit-BEstcKk9.js";import"./AuthenticatedRequirement-BykDxWyH.js";import"./CertificationRequirement-qg2yCP4u.js";import"./TwoFactorAuthEnabledRequirement-VqIuof7U.js";import"./ValidationRequirement-o3DudFH3.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Ddj4fFga.js";import"./RejectDataAccessRequestModal-Dj2g0j70.js";import"./CannedRejectionDialog-CguEiqT4.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CGBNjPCW.js";import"./Checkbox-DFX9Y3-H.js";import"./Grid-B-_g8vQZ.js";import"./upperFirst-CTOAMEmR.js";import"./_stringToArray-Dwvglf_m.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
