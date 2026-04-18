import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BFoBHJbY.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-B-s6SYH3.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Bltf5gLw.js";import"./useAccessRequirements-BtRiHSUy.js";import"./index-CIW1_OvL.js";import"./_baseOrderBy-r5YVf0a0.js";import"./_baseIteratee-B7mx-Nnp.js";import"./_baseMap-BdAxBLP1.js";import"./_baseEach-Ct7kGFnH.js";import"./useInfiniteQuery-COrQrVed.js";import"./groupBy-RhBqhpl0.js";import"./_createAggregator-4lTAn3Tn.js";import"./DialogBase-BYig5ial.js";import"./Close-C6cmQXhi.js";import"./HelpPopover-C6OrfbQU.js";import"./MarkdownPopover-Dm2f1BST.js";import"./LightTooltip-Dnju38Ge.js";import"./MarkdownSynapse-CTY9rgWg.js";import"./SkeletonButton-RWaImhZL.js";import"./SkeletonInlineBlock-BH9IFr_J.js";import"./SkeletonTable-DpdP1ZU-.js";import"./SkeletonParagraph-CxOMNOR8.js";import"./EntityLink-DwwJ60Rr.js";import"./useEntity--0S7JxW-.js";import"./pickBy-DU6VSHZ0.js";import"./isString-xpqwFCDW.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Bm-63_Lb.js";import"./useGetEntityHeaders-B4ryG3-7.js";import"./EntityIcon-BWvai-uH.js";import"./ErrorChip-8jqqEBZW.js";import"./Chip-nCILZLDf.js";import"./UserOrTeamBadge-Bttfq-If.js";import"./UserBadge-B3b4GgS8.js";import"./useUserBundle-DpjLlelW.js";import"./MenuItem-BjmuKOgF.js";import"./Card-CxnVE_mX.js";import"./TeamBadge-D-kXmpwb.js";import"./UnmanagedACTAccessRequirementItem-CXcqxsOn.js";import"./RequirementItem-DWFThOFQ.js";import"./CheckTwoTone-hsGa22CQ.js";import"./ManagedACTAccessRequirementItemView-jsRdW6Ac.js";import"./SelfSignAccessRequirementItem-B0Q5cX4z.js";import"./DataAccessRequestAccessorsFilesForm-BAUjx5Ti.js";import"./enums-D2Z2Pgvo.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BlRK7NIb.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-Fl7tx4an.js";import"./UserSearchBox-CNPKvi4x.js";import"./useDebouncedEffect-C1CNfVQY.js";import"./Autocomplete-CijFYWna.js";import"./usePreviousProps-wXzT0qgu.js";import"./RadioGroup-CumAG3os.js";import"./Radio-DMjntJGy.js";import"./SwitchBase-B0zHafXA.js";import"./FormGroup-4JO5xl3B.js";import"./FormControlLabel-D6wGKDYf.js";import"./UploadDocumentField-Bs5X7ZNx.js";import"./FileUpload-rXS6iBVL.js";import"./ManagedACTAccessRequirementFormWikiWrapper-EDggHeuK.js";import"./GridLegacy-Bp6zsc0w.js";import"./ResearchProjectForm-BSqOllYr.js";import"./TextFieldWithWordLimit-Oe2VJ4Ip.js";import"./AuthenticatedRequirement-UGgfGtXG.js";import"./CertificationRequirement-GR0YOONq.js";import"./TwoFactorAuthEnabledRequirement-B1CK2X7_.js";import"./ValidationRequirement-B4RBDUYa.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BGOYHIBR.js";import"./RejectDataAccessRequestModal-DgyCXr3r.js";import"./CannedRejectionDialog-x4jFTNEU.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DQ7ZhkXi.js";import"./Checkbox-DTqXBUmS.js";import"./Grid-CRNahgZ3.js";import"./upperFirst-BfqdkeOL.js";import"./_stringToArray-B2kzvaFz.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
