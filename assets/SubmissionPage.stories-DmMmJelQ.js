import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-ggb9BT7g.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BU7fdGXY.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CMxX7NRJ.js";import"./useAccessRequirements-DsK5rV9c.js";import"./index-BsBFOmKs.js";import"./_baseOrderBy-CfUmSi1e.js";import"./_baseIteratee-CI8yA5In.js";import"./_baseMap-Cn5NpepV.js";import"./_baseEach-CoSYQq5s.js";import"./useInfiniteQuery-Dmqb6E3U.js";import"./groupBy-DKCQtifE.js";import"./_createAggregator-Bj120dgK.js";import"./DialogBase-De2IOlxW.js";import"./Close-DUdLCtLc.js";import"./HelpPopover-C6C-iAVu.js";import"./MarkdownPopover-DpZurWOd.js";import"./LightTooltip-DB2Zm8A-.js";import"./MarkdownSynapse-CcYYvyZJ.js";import"./SkeletonButton-CUOVs3Oy.js";import"./SkeletonInlineBlock-C6q-RqyQ.js";import"./SkeletonTable-ByepoAwi.js";import"./SkeletonParagraph-CEmjW8Ho.js";import"./EntityLink-Baok0R8Q.js";import"./useEntity-BC65UzsD.js";import"./pickBy-D-qc39wb.js";import"./isString-Ca1WffPe.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-2ZWPNYoN.js";import"./useGetEntityHeaders-CByoqE-r.js";import"./EntityIcon-9fsO60EH.js";import"./ErrorChip-CowdkZyJ.js";import"./Chip-CisBGjg3.js";import"./UserOrTeamBadge-BkrIDI6W.js";import"./UserBadge-DEEeycwe.js";import"./useUserBundle-t5nTyqdV.js";import"./MenuItem-Dz7N7FME.js";import"./Card-BrUEDoBm.js";import"./TeamBadge-DTiexQIO.js";import"./UnmanagedACTAccessRequirementItem-Dr43eUnR.js";import"./RequirementItem-Di2WruqO.js";import"./CheckTwoTone-BBcB-XK3.js";import"./ManagedACTAccessRequirementItemView-CWtIlO27.js";import"./SelfSignAccessRequirementItem-966_-pyx.js";import"./DataAccessRequestAccessorsFilesForm-CR7pX1Uw.js";import"./enums-C_tzwEcf.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-Di3nnV3P.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-6lDR9ibd.js";import"./UserSearchBox-ACWjhcna.js";import"./useDebouncedEffect-DvMOZyrV.js";import"./Autocomplete-YprHJKih.js";import"./usePreviousProps-CuVqs5w7.js";import"./RadioGroup-CTZ1Wqa_.js";import"./Radio-BaviI14-.js";import"./SwitchBase-Cb1YcC8J.js";import"./FormGroup-Clktikys.js";import"./FormControlLabel-CAUCzVir.js";import"./UploadDocumentField-CTTwgqS0.js";import"./FileUpload-Cl-Yc4l0.js";import"./ManagedACTAccessRequirementFormWikiWrapper-C5p4GCRS.js";import"./GridLegacy-DJP9Nhc0.js";import"./ResearchProjectForm-DvG6y0EU.js";import"./TextFieldWithWordLimit-BAb_A5pI.js";import"./AuthenticatedRequirement-DPLPa6a_.js";import"./CertificationRequirement-RANVhUQR.js";import"./TwoFactorAuthEnabledRequirement-Cr1qUXLC.js";import"./ValidationRequirement-CeCx38dS.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Bx1fA8xZ.js";import"./RejectDataAccessRequestModal-D5ldMIgU.js";import"./CannedRejectionDialog-hsy1b1or.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Csdoq0fQ.js";import"./Checkbox-Dsv8Lvn8.js";import"./Grid-BTHwFXUN.js";import"./upperFirst-BQgGVOiA.js";import"./_stringToArray-DY_tWekW.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Je=["Demo","DemoError"];export{o as Demo,n as DemoError,Je as __namedExportsOrder,xe as default};
