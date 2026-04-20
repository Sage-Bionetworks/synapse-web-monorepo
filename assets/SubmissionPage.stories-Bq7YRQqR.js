import{z as u,b as e,o as d,s,kq as i,kr as c,H as t,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-DI_DW6I7.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CVlvnLiQ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-qikIbjhF.js";import"./useAccessRequirements-D-YpzNsU.js";import"./index-CEkoI5OI.js";import"./_baseOrderBy-BahF1Hke.js";import"./_baseIteratee-Knl8sh69.js";import"./_baseMap-j0m5X6QJ.js";import"./_baseEach-Bgov8v5P.js";import"./useInfiniteQuery-CYDJs5Ir.js";import"./groupBy-prypc2IO.js";import"./_createAggregator-CQ3ILDc-.js";import"./DialogBase-vDTKWkBt.js";import"./Close-BlF01rCL.js";import"./HelpPopover-D9eTDHf2.js";import"./MarkdownPopover-3GY4ND-o.js";import"./LightTooltip-BJTLvyTt.js";import"./MarkdownSynapse-CFMaEATT.js";import"./SkeletonButton-VuyYmUxo.js";import"./SkeletonInlineBlock-2jyq21QW.js";import"./SkeletonTable-B1K8a5wm.js";import"./SkeletonParagraph-iVrUoPVl.js";import"./EntityLink-C0KK1rmh.js";import"./useEntity-6wYGzW2q.js";import"./pickBy-CjS8Fah4.js";import"./isString-DV1AhwPZ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-FFO2dtCF.js";import"./useGetEntityHeaders-CysJjTeQ.js";import"./EntityIcon-DF3gG6Mm.js";import"./ErrorChip-CJ5unkUf.js";import"./Chip-BtT8gxc3.js";import"./UserOrTeamBadge-DgJ6dgGE.js";import"./UserBadge-Dcp1qyfD.js";import"./useUserBundle-sgovs3e8.js";import"./MenuItem-D7FiHfrS.js";import"./Card-DSTJfyTC.js";import"./TeamBadge-NcL1MgIe.js";import"./UnmanagedACTAccessRequirementItem-CWROAoib.js";import"./RequirementItem-BEelB9p9.js";import"./CheckTwoTone-DTiKc3W5.js";import"./ManagedACTAccessRequirementItemView-CMBZphF2.js";import"./SelfSignAccessRequirementItem-D1DNF4CM.js";import"./DataAccessRequestAccessorsFilesForm-2U9E2q66.js";import"./enums-BVT63rrr.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-5UxHrZnC.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-TShE-J9q.js";import"./UserSearchBox-CMfr07Cz.js";import"./useDebouncedEffect-DBLZTGBm.js";import"./Autocomplete-wzFdhmOr.js";import"./usePreviousProps-CRw8wBaq.js";import"./RadioGroup-CMfF6N69.js";import"./Radio-lTxFkRWZ.js";import"./SwitchBase-CgMZiCSG.js";import"./FormGroup-BXw1bb14.js";import"./FormControlLabel-DJ3CxxVI.js";import"./UploadDocumentField-DeEjr253.js";import"./FileUpload-DocQXY5a.js";import"./ManagedACTAccessRequirementFormWikiWrapper-zLHKH8sQ.js";import"./GridLegacy-CWdyMSKH.js";import"./ResearchProjectForm-Do4vMzdX.js";import"./TextFieldWithWordLimit-DAGaetv4.js";import"./AuthenticatedRequirement-DpVP7z0w.js";import"./CertificationRequirement-CPm0REZ8.js";import"./TwoFactorAuthEnabledRequirement-DGZj7433.js";import"./ValidationRequirement-Dx1AhU_w.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BOyABfiS.js";import"./RejectDataAccessRequestModal-eyHbFTIb.js";import"./CannedRejectionDialog-WuvPkRDB.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-BT2-p3SP.js";import"./Checkbox-CN4UXvGM.js";import"./Grid-DYavEcIp.js";import"./upperFirst-DjDG576Y.js";import"./_stringToArray-DJ-4RCQb.js";const xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),s.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return t.json(a,{status:200})}),s.get(`${e}${R(":id")}`,()=>t.json(m,{status:200})),s.get(`${e}${E(":id")}`,()=>t.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),s.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>t.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),s.put(`${e}${i(":id")}`,async({request:r})=>t.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[s.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return t.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
