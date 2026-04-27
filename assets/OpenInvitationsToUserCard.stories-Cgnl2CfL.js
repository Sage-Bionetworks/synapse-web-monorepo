import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-Bxo1Isko.js";import{Dt as r,Ot as i,in as a,rn as o}from"./TextField-BrxDFlyn.js";import{t as s}from"./jsx-runtime-CR4qI0Ep.js";import{$ as ee,Wt as c,_ as l,_t as u,g as d,gt as te,mt as ne,t as re,y as f}from"./esm-Bc_ZnX0H.js";import{Tn as p,xn as m}from"./SynapseClient-BzG4sNth.js";import{Nn as h,t as g}from"./esm-D6QtY4ss.js";import{E as _,O as v,d as y,f as b,m as x,u as S}from"./useLogin-B4_JdNRT.js";import{i as ie,r as C}from"./ToastMessage-Rbb4Tsju.js";import{r as ae,t as w}from"./mock_user_profile-NKYbA1Kn.js";import{a as T,o as E,s as D}from"./mockTeam-7Xj89NnP.js";import{n as O,t as k}from"./teamHandlers-BEScjAwW.js";import{n as A,t as j}from"./UserBadge-D6x7nEDg.js";import{n as M,t as N}from"./UserOrTeamBadge-B4anohz-.js";var P,F,I,L=e((()=>{P=`You have successfully joined the team.`,F=`An error occurred while trying to join the team.`,I=`An error occurred while trying to decline the invitation.`})),R,z,B,V,H=e((()=>{R=`_row_qlg9p_1`,z=`_invitationMessage_qlg9p_7`,B=`_teamName_qlg9p_19`,V={row:R,invitationMessage:z,teamName:B}}));function U(e){let{invitation:t}=e,{mutate:n,isPending:r}=y({onSuccess:()=>{C(P,`success`)},onError:e=>{C(e.message,`danger`,{title:F})}}),{mutate:a,isPending:o}=b({onSuccess:()=>{C(`Invitation dismissed.`,`info`)},onError:e=>{C(e.message,`danger`,{title:I})}});return(0,K.jsxs)(`div`,{className:V.row,children:[(0,K.jsx)(`span`,{className:V.teamName,children:(0,K.jsx)(N,{principalId:t.teamId})}),(0,K.jsx)(`div`,{className:V.invitationMessage,children:t.message&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(f,{title:(0,K.jsxs)(K.Fragment,{children:[`Message from`,` `,(0,K.jsx)(j,{userId:t.createdBy,showFullName:!0,showCardOnHover:!1,disableLink:!0})]}),children:(0,K.jsx)(h,{sx:{color:`grey.700`}})}),(0,K.jsx)(i,{variant:`body2`,color:`text.secondary`,children:t.message})]})}),(0,K.jsx)(u,{variant:`contained`,color:`primary`,loading:r,disabled:o,onClick:()=>{n({teamId:t.teamId,userId:t.inviteeId})},children:`Join`}),(0,K.jsx)(u,{variant:`outlined`,loading:o,disabled:r,onClick:()=>{a({membershipInvitation:t})},children:`Decline`})]},t.id)}function W(e){let{cardProps:t}=e,{data:n}=v(),{data:r,isLoading:a}=x(n?.ownerId,{enabled:!!n?.ownerId}),s=(0,G.useRef)(0);return s.current=Math.max(s.current,r?.length??0),s.current==0&&(a||!r||r.length===0)?null:(0,K.jsxs)(ne,{...t,children:[(0,K.jsx)(i,{variant:`headline3`,gutterBottom:!0,children:`Pending Team Invitations`}),(0,K.jsx)(i,{variant:`body1`,gutterBottom:!0,children:`You have been invited to join the following team(s). New content may be visible to you after you accept a team invitation.`}),r&&r.length>0?(0,K.jsx)(l,{component:o,divider:(0,K.jsx)(ee,{flexItem:!0}),spacing:2,mt:2,children:r.map(e=>(0,K.jsx)(c,{children:(0,K.jsx)(U,{invitation:e})},e.id))}):(0,K.jsx)(i,{variant:`body1Italic`,align:`center`,color:`text.secondary`,mt:2,children:`You have no pending team invitations.`})]})}var G,K,q=e((()=>{ie(),A(),M(),S(),_(),g(),re(),te(),d(),r(),G=t(n(),1),a(),L(),H(),K=s();try{W.displayName=`OpenInvitationsToUserCard`,W.__docgenInfo={description:`Shows a card of the open team membership invitations for the current user, if any exist. If no invitations exist, nothing is shown.`,displayName:`OpenInvitationsToUserCard`,filePath:`/home/runner/work/synapse-web-monorepo/synapse-web-monorepo/packages/synapse-react-client/src/features/team/invitation/components/OpenInvitationsToUserCard.tsx`,methods:[],props:{cardProps:{defaultValue:null,declarations:[{fileName:`synapse-react-client/src/features/team/invitation/components/OpenInvitationsToUserCard.tsx`,name:`TypeLiteral`}],description:``,name:`cardProps`,required:!1,tags:{},type:{name:`CardProps`}}},tags:{}}}catch{}})),J,Y,X,Z,Q,$;e((()=>{q(),O(),ae(),D(),p(),J={title:`Features/Team/OpenInvitationsToUser`,component:W,parameters:{stack:`mock`},args:{cardProps:{sx:{p:4}}}},Y={parameters:{msw:{handlers:{team:k(m,[{id:`invitation-1`,createdOn:new Date().toISOString(),createdBy:String(w),teamId:String(T),inviteeId:`999`,message:`Come join my cool team so we can submit to the challenge together!`},{id:`invitation-2`,createdOn:new Date().toISOString(),createdBy:String(w),teamId:String(E),inviteeId:`999`,message:`We would love to have you on our research team!`}])}}}},X={parameters:{msw:{handlers:{team:k(m,[])}}}},Z={parameters:{msw:{handlers:{team:k(m,[{id:`invitation-1`,createdOn:new Date().toISOString(),createdBy:String(w),teamId:String(T),inviteeId:`999`,message:`Join our team!`}])}}}},Q={parameters:{msw:{handlers:{team:k(m,[{id:`invitation-1`,createdOn:new Date().toISOString(),createdBy:String(w),teamId:String(T),inviteeId:`999`}])}}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [{
          id: 'invitation-1',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_4),
          inviteeId: String(MOCK_USER_ID),
          message: 'Come join my cool team so we can submit to the challenge together!'
        }, {
          id: 'invitation-2',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_5),
          inviteeId: String(MOCK_USER_ID),
          message: 'We would love to have you on our research team!'
        }])
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [])
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [{
          id: 'invitation-1',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_4),
          inviteeId: String(MOCK_USER_ID),
          message: 'Join our team!'
        }])
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: {
        team: getAllTeamHandlers(MOCK_REPO_ORIGIN, [{
          id: 'invitation-1',
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID_2),
          teamId: String(MOCK_TEAM_ID_4),
          inviteeId: String(MOCK_USER_ID)
        }])
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`WithPendingInvitations`,`WithNoInvitations`,`WithSingleInvitation`,`WithInvitationNoMessage`]}))();export{Q as WithInvitationNoMessage,X as WithNoInvitations,Y as WithPendingInvitations,Z as WithSingleInvitation,$ as __namedExportsOrder,J as default};