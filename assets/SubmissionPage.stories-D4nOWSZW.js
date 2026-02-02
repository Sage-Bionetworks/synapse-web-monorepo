import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-B-rWBBOy.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BHIgDLvv.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-7mCBUMU-.js";import"./useAccessRequirements-D18Zubv0.js";import"./index-BmrJEvkQ.js";import"./_baseOrderBy--eOiBI3k.js";import"./_baseIteratee-BVfqOHkP.js";import"./_baseMap-CcdUGJ7r.js";import"./_baseEach-BBdk3TAU.js";import"./useQueries-BF3c9QfY.js";import"./useInfiniteQuery-BF0L2vpl.js";import"./groupBy-Dq7CKKwm.js";import"./_createAggregator-B_RDxbRc.js";import"./DialogBase-CPTrGtI1.js";import"./Close-CpX3wYP0.js";import"./HelpPopover-q5ekk2th.js";import"./MarkdownPopover-b-Sbeuph.js";import"./LightTooltip-BemyKtyu.js";import"./MarkdownSynapse-CjIEyYww.js";import"./SkeletonButton-C55ygy2r.js";import"./SkeletonInlineBlock-Cpev2ljV.js";import"./SkeletonTable-GTeIPnR6.js";import"./SkeletonParagraph-IppQ387m.js";import"./EntityLink-Dg0nPH0k.js";import"./useEntity-L7-UAX9e.js";import"./pickBy-BlV6ms5O.js";import"./isString-Cj7Rti5o.js";import"./useSuspenseQuery-BilXPZyB.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-M0ZItEnQ.js";import"./useGetEntityHeaders-C-85b5HH.js";import"./EntityIcon-BeHBcJAo.js";import"./ErrorChip-CqHYp_NN.js";import"./Chip-WQPXL1Rn.js";import"./UserOrTeamBadge-CthcWQEy.js";import"./UserBadge-ChgBnm4h.js";import"./useUserBundle-rX-QoUXs.js";import"./MenuItem-rdxON32h.js";import"./Card-D938tlRh.js";import"./TeamBadge-DgqaCsZR.js";import"./UnmanagedACTAccessRequirementItem-BwnzyVY_.js";import"./RequirementItem-DpKO10IA.js";import"./LockTwoTone-Dsxpu-eX.js";import"./UserSearchBoxV2-Cc3BRhcX.js";import"./useDebouncedEffect-BbFN_ivc.js";import"./use-deep-compare-effect.esm-C9UyT4bf.js";import"./uniq-CJRdgA9T.js";import"./without-BMPBLrQH.js";import"./Select-aab027f3.esm-Bk3PKLAS.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-BgAxkO_U.js";import"./SelfSignAccessRequirementItem-BncEMUz4.js";import"./DataAccessRequestAccessorsFilesForm-DKVSA5Jm.js";import"./enums-ajHqNJFU.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BWm9VIc4.js";import"./RadioGroup-DzGF0RLq.js";import"./Radio-Dx8yI8Vf.js";import"./SwitchBase-DBQd13iY.js";import"./FormGroup-iNAtjv_H.js";import"./FormControlLabel-vJNidZPz.js";import"./UploadDocumentField-Bj7Y5Sp_.js";import"./FileUpload-CoXWuQDp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-B6RNA0R5.js";import"./GridLegacy-ObhHvjrA.js";import"./ResearchProjectForm-Dy4TAeVZ.js";import"./TextFieldWithWordLimit-DCnfXT9J.js";import"./AuthenticatedRequirement-x0T2OOcN.js";import"./CertificationRequirement-dCdA52rK.js";import"./TwoFactorAuthEnabledRequirement-CR36M4Mh.js";import"./ValidationRequirement-6DfDn-gm.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CXoMQT5Q.js";import"./RejectDataAccessRequestModal-CjxVJOut.js";import"./CannedRejectionDialog-BrgT-XUI.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-CTssCfny.js";import"./Checkbox-C1HJ2Aam.js";import"./Grid-BdoL564Q.js";import"./upperFirst-14rbrisy.js";import"./_stringToArray-UQFMmfq_.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
