import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,kt as i,ku as E,H as s,kv as _,p as m,kw as I,kx as S,kc as O}from"./iframe-DOA--ypP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-JzimsRxX.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-_30XAX0v.js";import"./useAccessRequirements-BDvRpZ_H.js";import"./index-gKWz_61H.js";import"./_baseOrderBy-Bdpj--zw.js";import"./_baseIteratee-DP1eEInn.js";import"./_baseMap-CMMBPE8F.js";import"./_baseEach-JG6bUIyt.js";import"./useQueries-ms_hA1-B.js";import"./useInfiniteQuery-TrFnHSG6.js";import"./groupBy-CeBz9jzr.js";import"./_createAggregator-BP4J_q2l.js";import"./DialogBase-COBCl3WL.js";import"./Close-SOWXhUL2.js";import"./HelpPopover-CQR-J_g5.js";import"./MarkdownPopover-ByIhHE6X.js";import"./LightTooltip-Cp9tv2pP.js";import"./MarkdownSynapse-CorLAqOX.js";import"./SkeletonButton-SLwBY3oR.js";import"./SkeletonInlineBlock-BSyES9P5.js";import"./SkeletonTable-BN8TQIoy.js";import"./SkeletonParagraph-CKHoRTTC.js";import"./EntityLink-BsP9jwHO.js";import"./useEntity-CbdSqMq0.js";import"./pickBy-DE-dR2QS.js";import"./isString-VW1VaUU-.js";import"./useSuspenseQuery-CH8JGQoS.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-kCPWgBXC.js";import"./useGetEntityHeaders-CK6NTC-o.js";import"./EntityIcon-D5xZenXw.js";import"./ErrorChip-CpxllZj2.js";import"./Chip-B3zCMCcx.js";import"./UserOrTeamBadge-DcHJpLF_.js";import"./UserBadge-B-bcdv8r.js";import"./useUserBundle-CMLYFODb.js";import"./MenuItem-BXWiBucH.js";import"./Card-Cb051pi6.js";import"./TeamBadge-DoIL39Pq.js";import"./UnmanagedACTAccessRequirementItem-1EJbxNAY.js";import"./RequirementItem-CMwrdMyv.js";import"./LockTwoTone-BnOcSnac.js";import"./UserSearchBoxV2-DdQdhllg.js";import"./useDebouncedEffect-JBIkOOLE.js";import"./use-deep-compare-effect.esm-Dy9g7tgW.js";import"./uniq-CZc5lcrU.js";import"./without-BhKwemxP.js";import"./Select-aab027f3.esm-BRxx8-co.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CSrddVP5.js";import"./SelfSignAccessRequirementItem-CwiB75pA.js";import"./DataAccessRequestAccessorsFilesForm-B3A-UBDv.js";import"./enums-BcOReSNy.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-CPBBSkt3.js";import"./RadioGroup-DZpQIN7v.js";import"./Radio-Ba-JRI7Q.js";import"./SwitchBase-Bv3lYZre.js";import"./FormGroup-C7GAOV4H.js";import"./FormControlLabel-Be7cb8-z.js";import"./UploadDocumentField-IJP7kUUI.js";import"./FileUpload-BowO54ZC.js";import"./ManagedACTAccessRequirementFormWikiWrapper-GjK6AlPq.js";import"./GridLegacy-vymQ_lBE.js";import"./ResearchProjectForm-BMAkxovh.js";import"./TextFieldWithWordLimit-QUfkQF-H.js";import"./AuthenticatedRequirement-DCyg-QzR.js";import"./CertificationRequirement-D2b-twZ8.js";import"./TwoFactorAuthEnabledRequirement-D1Y7T95-.js";import"./ValidationRequirement-DH6_SMRx.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-CjR3P1DI.js";import"./RejectDataAccessRequestModal-CqgiplF_.js";import"./CannedRejectionDialog-D2q33apA.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-Bx9ardy9.js";import"./Checkbox-yVjGcUBI.js";import"./Grid-37fxI_NR.js";import"./upperFirst-DXFyXPvl.js";import"./_stringToArray-CS17RR0A.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
