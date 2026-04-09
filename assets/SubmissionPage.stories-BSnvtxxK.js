import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-CtlQt718.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-D1FLJZHN.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-DjO7VNcp.js";import"./useAccessRequirements-BU8cqQkl.js";import"./index-BsLL2bsx.js";import"./_baseOrderBy-D43qNHlx.js";import"./_baseIteratee-5SXEVFtE.js";import"./_baseMap-C_NrU3Xc.js";import"./_baseEach-bdqG_XRQ.js";import"./useInfiniteQuery-DXgfUMVI.js";import"./groupBy-CmksZASO.js";import"./_createAggregator-BkktEQDS.js";import"./DialogBase-DOt-OwDb.js";import"./Close-DmDKZefQ.js";import"./HelpPopover-Gion91DD.js";import"./MarkdownPopover-CoOreYFS.js";import"./LightTooltip-D8qugsOL.js";import"./MarkdownSynapse-BuD1xjPB.js";import"./SkeletonButton-i4oTWqaB.js";import"./SkeletonInlineBlock-BaHv_pCV.js";import"./SkeletonTable-DCMQwvPd.js";import"./SkeletonParagraph-CUgZcOgo.js";import"./EntityLink-ChyMX9jP.js";import"./useEntity-DfGflDdN.js";import"./pickBy-C0p9iO4a.js";import"./isString-C2AiwGPF.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DMU1fAY0.js";import"./useGetEntityHeaders-DSEEohTj.js";import"./EntityIcon-B6jUu3LO.js";import"./ErrorChip-CF2-34mX.js";import"./Chip-DpB8aqC-.js";import"./UserOrTeamBadge-D2JHJ8rD.js";import"./useUserGroupHeader-WUxLdYmZ.js";import"./TeamBadge-9WR-V1XA.js";import"./UserBadge-ymB3hH6I.js";import"./useUserBundle-DrrIAhkW.js";import"./MenuItem-C_5zSBh4.js";import"./Card-DRwr6nyE.js";import"./UnmanagedACTAccessRequirementItem-Dwf-wiFy.js";import"./RequirementItem-D6kTEDOH.js";import"./LockTwoTone-Dt-3ffVd.js";import"./ManagedACTAccessRequirementItemView-CPVNt3ww.js";import"./SelfSignAccessRequirementItem-D5QrLFRO.js";import"./DataAccessRequestAccessorsFilesForm-qCpJ-JQa.js";import"./enums-C0lV3fIZ.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-C1NB3-jb.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CmMmsaqS.js";import"./UserSearchBox-DjaMua0n.js";import"./useDebouncedEffect-C2ajLuGx.js";import"./Autocomplete-Cv4xJ-eN.js";import"./usePreviousProps-Bsuk01gy.js";import"./RadioGroup-Cl2JfzEG.js";import"./Radio-jmkl_VXV.js";import"./SwitchBase-5wWbJqUY.js";import"./FormGroup-CCXp211K.js";import"./FormControlLabel-TNPBDvq0.js";import"./UploadDocumentField-DcSh2iSz.js";import"./FileUpload-vKnSnBkt.js";import"./ManagedACTAccessRequirementFormWikiWrapper-w_6JFTmA.js";import"./GridLegacy-C2srbSl9.js";import"./ResearchProjectForm-BXhDKj4k.js";import"./TextFieldWithWordLimit-ywLwFM1W.js";import"./AuthenticatedRequirement-CULgbOFS.js";import"./CertificationRequirement-BglcKPy8.js";import"./TwoFactorAuthEnabledRequirement-DV8viM8f.js";import"./ValidationRequirement-CVugibva.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BotNMOBd.js";import"./RejectDataAccessRequestModal-B0Sg2aQE.js";import"./CannedRejectionDialog-B5G6iOnR.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-Dh4tlHv0.js";import"./Checkbox-BdJ4Kw1X.js";import"./Grid-DbCly3S7.js";import"./upperFirst-B_jJfSge.js";import"./_stringToArray-CAHk57wi.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
