import{o as e,u as t}from"./preload-helper-CsHsquCd.js";import{t as n}from"./react-BXiJfEW5.js";import{pn as r}from"./TextField-DshmLCH7.js";import{t as i}from"./jsx-runtime-l3w3GfrB.js";import{E as a,L as o,O as s,S as c,h as l,t as u,w as d,wn as f}from"./esm-BSTH_Qsy.js";import{tn as p,x as m}from"./SynapseConstants-C6NyDJfS.js";import{a as h,b as g,i as _,x as v,y}from"./CardContainerLogic-61LtmTiv.js";import{a as b,o as x}from"./ShareThisPage-CfRyxsaP.js";import{n as S,t as C}from"./GenericCardIcon-DwZgR4hJ.js";import{n as w,t as T}from"./GenericCard-v6FAOncC.js";function E(e){let t=(0,k.useRef)(null);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(_,{...e,downloadConfirmationContainer:t}),(0,A.jsx)(`div`,{ref:t})]})}function D(e){let{example:t,actionButtonStyle:n=`chip`}=e,r=(0,k.useRef)(null);return(0,A.jsxs)(b.Provider,{value:n,children:[(0,A.jsx)(T,{type:m,title:t.title,description:t.description,icon:(0,A.jsx)(C,{type:m,useTypeForIcon:!0}),cardTopButtons:(0,A.jsx)(_,{entityId:j,name:t.title,hosting:t.hosting,repository:t.repository,externalUrl:t.externalUrl,downloadConfirmationContainer:r}),labels:[{columnDisplayName:`Disease Focus`,value:`Neurofibromatosis type 1`},{columnDisplayName:`Assay`,value:`RNA-seq`},{columnDisplayName:`Files`,value:`128`}]}),(0,A.jsx)(`div`,{ref:r})]})}function O(e,t=`chip`){return(0,A.jsx)(D,{example:e,actionButtonStyle:t})}var k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;e((()=>{u(),k=t(n(),1),w(),S(),x(),p(),v(),h(),A=i(),j=`syn123`,M=`Example NF dataset`,N={synapse:{hosting:`synapse`,title:`NF1 Patient-Derived Cell Line Atlas`,description:`Whole-genome and RNA sequencing of patient-derived NF1 cell lines, stored in Synapse-managed storage and downloadable through any Synapse client.`},externalCloud:{hosting:`external-cloud`,title:`Plexiform Neurofibroma Imaging Collection`,description:`High-resolution MRI volumes hosted in a collaborator-owned cloud bucket. Files download exactly like Synapse-hosted data, but live outside Sage-managed storage.`},externalDownload:{hosting:`external-download`,repository:`GEO`,externalUrl:`https://www.ncbi.nlm.nih.gov/geo/`,title:`Schwann Cell Transcriptome Series`,description:`Expression series indexed in Synapse but downloaded directly from GEO. Fully downloadable through Synapse clients, though transfer speed depends on the external server.`},externalAccess:{hosting:`external-access`,repository:`dbGaP`,externalUrl:`https://www.ncbi.nlm.nih.gov/gap/`,title:`NF1 Germline Variation Study (Controlled Access)`,description:`Records describing controlled-access whole-genome data held in dbGaP. The data cannot be downloaded through Synapse and must be requested through the external access process.`},mixed:{hosting:`mixed`,repository:`dbGaP`,title:`Multi-Omics NF1 Cohort (Open + Controlled)`,description:`Processed expression and imaging files are downloadable from Synapse, while the raw germline sequencing for the same samples is controlled-access in dbGaP. Download retrieves the Synapse-available files; the rest is requested separately.`},unavailable:{hosting:`unavailable`,title:`NF Registry Cohort (Record Only)`,description:`A discovery record describing a cohort whose data is not available for download through Synapse, with no external repository to link to. No download or access action is offered.`}},P={title:`Explore/DatasetHosting`,component:_,args:{isAuthenticated:!0},parameters:{layout:`padded`}},F=[{field:`hosting`,kind:`Controlled (6 values)`,affectsBehavior:`Yes — the only field that does`,example:`external-download`},{field:`repository`,kind:`Free text`,affectsBehavior:`No — display label only`,example:`GEO, Zenodo, Smith Lab Server…`},{field:`externalUrl`,kind:`Free text`,affectsBehavior:`No — link target for external-access`,example:`https://www.ncbi.nlm.nih.gov/gap/`}],I={render:()=>(0,A.jsxs)(o,{gap:3,sx:{maxWidth:820},children:[(0,A.jsxs)(f,{children:[(0,A.jsx)(r,{variant:`headline3`,sx:{mb:1},children:`Dataset hosting — data model`}),(0,A.jsx)(r,{variant:`body1`,sx:{color:`text.secondary`},children:`One button per dataset communicates how it is hosted and performs the right action. It is driven by three annotation values:`})]}),(0,A.jsxs)(s,{size:`small`,children:[(0,A.jsx)(c,{children:(0,A.jsxs)(l,{children:[(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`Annotation`})}),(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`Kind`})}),(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`Drives behavior?`})}),(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`Example`})})]})}),(0,A.jsx)(a,{children:F.map(e=>(0,A.jsxs)(l,{children:[(0,A.jsx)(d,{children:(0,A.jsx)(`code`,{children:e.field})}),(0,A.jsx)(d,{children:e.kind}),(0,A.jsx)(d,{children:e.affectsBehavior}),(0,A.jsx)(d,{children:e.example})]},e.field))})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(r,{variant:`body1`,sx:{display:`block`,mb:1,fontWeight:700},children:`The six hosting values`}),(0,A.jsxs)(s,{size:`small`,children:[(0,A.jsx)(c,{children:(0,A.jsxs)(l,{children:[(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`hosting`})}),(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`Downloadable?`})}),(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`Button style`})}),(0,A.jsx)(d,{children:(0,A.jsx)(`strong`,{children:`Chip style`})})]})}),(0,A.jsx)(a,{children:Object.keys(y).map(e=>{let t=y[e],n=t.label.includes(`{repository}`)?e===`external-access`?`dbGaP`:`GEO`:void 0,r=t=>(0,A.jsx)(b.Provider,{value:t,children:(0,A.jsx)(E,{entityId:j,name:M,hosting:e,repository:n,externalUrl:`https://example.org/`})});return(0,A.jsxs)(l,{children:[(0,A.jsx)(d,{children:(0,A.jsx)(`code`,{children:e})}),(0,A.jsx)(d,{children:t.downloadable?`Yes`:`No`}),(0,A.jsx)(d,{children:r(`button`)}),(0,A.jsx)(d,{children:r(`chip`)})]},e)})})]})]})]})},L={name:`All Flavors - Chip Style`,render:()=>(0,A.jsx)(o,{gap:4,sx:{maxWidth:900},children:Object.values(N).map(e=>{let t=y[e.hosting];return(0,A.jsxs)(f,{children:[(0,A.jsxs)(o,{direction:`row`,gap:1,alignItems:`baseline`,sx:{mb:1},children:[(0,A.jsx)(r,{variant:`overline`,sx:{fontWeight:700},children:e.hosting}),(0,A.jsxs)(r,{variant:`body2`,sx:{color:`text.secondary`},children:[t.downloadable?`Downloadable through Synapse`:`Not downloadable — access handled externally`,t.tooltip?` · ${g(t.tooltip,e.repository)}`:``]})]}),O(e)]},e.hosting)})})},R={name:`All Flavors - Button Style`,render:()=>(0,A.jsx)(o,{gap:4,sx:{maxWidth:900},children:Object.values(N).map(e=>(0,A.jsxs)(f,{children:[(0,A.jsx)(r,{variant:`overline`,sx:{fontWeight:700},children:e.hosting}),O(e,`button`)]},e.hosting))})},z={args:{isAuthenticated:!1},render:()=>(0,A.jsx)(o,{gap:4,sx:{maxWidth:900},children:[N.synapse,N.externalAccess,N.unavailable].map(e=>(0,A.jsxs)(f,{children:[(0,A.jsx)(r,{variant:`overline`,sx:{fontWeight:700},children:e.hosting}),O(e)]},e.hosting))})},B={render:()=>O(N.synapse)},V={render:()=>O({hosting:``,title:`Legacy NF Dataset (no hosting annotation)`,description:`This row has no hosting value. The card treats it as Synapse-hosted: the standard Download control.`})},H={render:()=>O(N.externalCloud)},U={render:()=>O(N.externalDownload)},W={render:()=>O(N.externalAccess)},G={render:()=>O(N.mixed)},K={render:()=>O(N.unavailable)},q={render:()=>(0,A.jsxs)(o,{gap:3,sx:{maxWidth:720},children:[(0,A.jsxs)(f,{children:[(0,A.jsx)(r,{variant:`body1`,sx:{fontWeight:700,mb:1},children:`external-download — any repository, still a download`}),(0,A.jsx)(o,{direction:`row`,gap:2,flexWrap:`wrap`,alignItems:`center`,children:[`GEO`,`ENA`,`Zenodo`,`figshare`,`Smith Lab Server`].map(e=>(0,A.jsx)(E,{entityId:j,name:M,hosting:`external-download`,repository:e},e))})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(r,{variant:`body1`,sx:{fontWeight:700,mb:1},children:`external-access — any repository, still an external link`}),(0,A.jsx)(o,{direction:`row`,gap:2,flexWrap:`wrap`,alignItems:`center`,children:[`dbGaP`,`EGA`,`JGA`,`Some Other Archive`].map(e=>(0,A.jsx)(E,{name:M,hosting:`external-access`,repository:e,externalUrl:`https://example.org/`},e))})]}),(0,A.jsxs)(f,{children:[(0,A.jsx)(r,{variant:`body1`,sx:{fontWeight:700,mb:1},children:`No repository provided — graceful generic label`}),(0,A.jsxs)(o,{direction:`row`,gap:2,flexWrap:`wrap`,alignItems:`center`,children:[(0,A.jsx)(E,{entityId:j,name:M,hosting:`external-download`}),(0,A.jsx)(E,{name:M,hosting:`external-access`,externalUrl:`https://example.org/`})]})]})]})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap={3} sx={{
    maxWidth: 820
  }}>
      <Box>
        <Typography variant="headline3" sx={{
        mb: 1
      }}>
          Dataset hosting — data model
        </Typography>
        <Typography variant="body1" sx={{
        color: 'text.secondary'
      }}>
          One button per dataset communicates how it is hosted and performs the
          right action. It is driven by three annotation values:
        </Typography>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Annotation</strong>
            </TableCell>
            <TableCell>
              <strong>Kind</strong>
            </TableCell>
            <TableCell>
              <strong>Drives behavior?</strong>
            </TableCell>
            <TableCell>
              <strong>Example</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MODEL_ROWS.map(row => <TableRow key={row.field}>
              <TableCell>
                <code>{row.field}</code>
              </TableCell>
              <TableCell>{row.kind}</TableCell>
              <TableCell>{row.affectsBehavior}</TableCell>
              <TableCell>{row.example}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
      <Box>
        <Typography variant="body1" sx={{
        display: 'block',
        mb: 1,
        fontWeight: 700
      }}>
          The six hosting values
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>hosting</strong>
              </TableCell>
              <TableCell>
                <strong>Downloadable?</strong>
              </TableCell>
              <TableCell>
                <strong>Button style</strong>
              </TableCell>
              <TableCell>
                <strong>Chip style</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(Object.keys(DATASET_HOSTING_CONFIG) as (keyof typeof DATASET_HOSTING_CONFIG)[]).map(key => {
            const config = DATASET_HOSTING_CONFIG[key];
            const repository = config.label.includes('{repository}') ? key === 'external-access' ? 'dbGaP' : 'GEO' : undefined;
            const button = (style: CardActionButtonStyle) => <CardActionButtonStyleContext.Provider value={style}>
                  <DemoDownloadButton entityId={MOCK_DATASET_ID} name={MOCK_DATASET_NAME} hosting={key} repository={repository} externalUrl="https://example.org/" />
                </CardActionButtonStyleContext.Provider>;
            return <TableRow key={key}>
                  <TableCell>
                    <code>{key}</code>
                  </TableCell>
                  <TableCell>{config.downloadable ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{button('button')}</TableCell>
                  <TableCell>{button('chip')}</TableCell>
                </TableRow>;
          })}
          </TableBody>
        </Table>
      </Box>
    </Stack>
}`,...I.parameters?.docs?.source},description:{story:`Reviewer-facing summary of the data model: which annotation is controlled vs.
free text, and which one actually drives behavior.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'All Flavors - Chip Style',
  render: () => <Stack gap={4} sx={{
    maxWidth: 900
  }}>
      {Object.values(EXAMPLES).map(example => {
      const config = DATASET_HOSTING_CONFIG[example.hosting];
      return <Box key={example.hosting}>
            <Stack direction="row" gap={1} alignItems="baseline" sx={{
          mb: 1
        }}>
              <Typography variant="overline" sx={{
            fontWeight: 700
          }}>
                {example.hosting}
              </Typography>
              <Typography variant="body2" sx={{
            color: 'text.secondary'
          }}>
                {config.downloadable ? 'Downloadable through Synapse' : 'Not downloadable — access handled externally'}
                {config.tooltip ? \` · \${fillRepository(config.tooltip, example.repository)}\` : ''}
              </Typography>
            </Stack>
            {renderDatasetCard(example)}
          </Box>;
    })}
    </Stack>
}`,...L.parameters?.docs?.source},description:{story:`All six dataset flavors stacked, each annotated with what the user sees and why.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'All Flavors - Button Style',
  render: () => <Stack gap={4} sx={{
    maxWidth: 900
  }}>
      {Object.values(EXAMPLES).map(example => <Box key={example.hosting}>
          <Typography variant="overline" sx={{
        fontWeight: 700
      }}>
            {example.hosting}
          </Typography>
          {renderDatasetCard(example, 'button')}
        </Box>)}
    </Stack>
}`,...R.parameters?.docs?.source},description:{story:"The same hosting types rendered with `actionButtonStyle: 'button'` — the default,\ncompact `GenericCardActionButton` look. Portals choose `'chip'` (above) or\n`'button'` (here) per card configuration.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false
  },
  render: () => <Stack gap={4} sx={{
    maxWidth: 900
  }}>
      {[EXAMPLES.synapse, EXAMPLES.externalAccess, EXAMPLES.unavailable].map(example => <Box key={example.hosting}>
            <Typography variant="overline" sx={{
        fontWeight: 700
      }}>
              {example.hosting}
            </Typography>
            {renderDatasetCard(example)}
          </Box>)}
    </Stack>
}`,...z.parameters?.docs?.source},description:{story:`Signed out: the download button stays clickable; clicking it flips the button
to a red "Sign in to download" call-to-action (which opens the sign-in modal in
the app), rather than greying out. External-access (a plain link-out) and
unavailable are unaffected by auth.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => renderDatasetCard(EXAMPLES.synapse)
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => renderDatasetCard({
    hosting: '' as DatasetHostingType,
    title: 'Legacy NF Dataset (no hosting annotation)',
    description: 'This row has no hosting value. The card treats it as Synapse-hosted: the standard Download control.'
  })
}`,...V.parameters?.docs?.source},description:{story:"A dataset whose `hosting` annotation is blank (the common case for legacy /\nSynapse-hosted rows). It falls back to the default `synapse` treatment: the\nstandard Download control — identical to `SynapseHosted`.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => renderDatasetCard(EXAMPLES.externalCloud)
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => renderDatasetCard(EXAMPLES.externalDownload)
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => renderDatasetCard(EXAMPLES.externalAccess)
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => renderDatasetCard(EXAMPLES.mixed)
}`,...G.parameters?.docs?.source},description:{story:`A dataset whose files live in more than one location — some downloadable through
Synapse, some controlled externally. Download stays the primary action (it
retrieves the Synapse-available subset); the label ("Download available files")
and tooltip flag that the rest must be obtained separately from the repository.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => renderDatasetCard(EXAMPLES.unavailable)
}`,...K.parameters?.docs?.source},description:{story:`A discovery record whose data is not downloadable through Synapse and has no
external repository to link to (distinct from external-access). The card shows
a neutral, non-actionable "Not available for download" button — no download, no link.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap={3} sx={{
    maxWidth: 720
  }}>
      <Box>
        <Typography variant="body1" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          external-download — any repository, still a download
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
          {['GEO', 'ENA', 'Zenodo', 'figshare', 'Smith Lab Server'].map(repository => <DemoDownloadButton key={repository} entityId={MOCK_DATASET_ID} name={MOCK_DATASET_NAME} hosting="external-download" repository={repository} />)}
        </Stack>
      </Box>
      <Box>
        <Typography variant="body1" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          external-access — any repository, still an external link
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
          {['dbGaP', 'EGA', 'JGA', 'Some Other Archive'].map(repository => <DemoDownloadButton key={repository} name={MOCK_DATASET_NAME} hosting="external-access" repository={repository} externalUrl="https://example.org/" />)}
        </Stack>
      </Box>
      <Box>
        <Typography variant="body1" sx={{
        fontWeight: 700,
        mb: 1
      }}>
          No repository provided — graceful generic label
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
          <DemoDownloadButton entityId={MOCK_DATASET_ID} name={MOCK_DATASET_NAME} hosting="external-download" />
          <DemoDownloadButton name={MOCK_DATASET_NAME} hosting="external-access" externalUrl="https://example.org/" />
        </Stack>
      </Box>
    </Stack>
}`,...q.parameters?.docs?.source},description:{story:"`repository` is free text — whatever the curator enters renders verbatim in the\nlabel and tooltip. The same `hosting` value works with any repository name; only\n`hosting` decides whether it's a download or an external-access link.",...q.parameters?.docs?.description}}},J=[`Overview`,`AllFlavors`,`ButtonStyle`,`SignedOut`,`SynapseHosted`,`BlankHosting`,`ExternalCloudBucket`,`ExternalDownloadable`,`ExternalAccessOnly`,`MixedSources`,`Unavailable`,`FreeTextRepository`]}))();export{L as AllFlavors,V as BlankHosting,R as ButtonStyle,W as ExternalAccessOnly,H as ExternalCloudBucket,U as ExternalDownloadable,q as FreeTextRepository,G as MixedSources,I as Overview,z as SignedOut,B as SynapseHosted,K as Unavailable,J as __namedExportsOrder,P as default};