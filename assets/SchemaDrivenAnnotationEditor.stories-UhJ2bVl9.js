import{jF as T}from"./iframe-BrkRRQUD.js";import{S as C}from"./SchemaDrivenAnnotationEditor-B1jd_RcX.js";import"./index-r8ZA1smB.js";import"./useEntity-CAv0toYE.js";import"./pickBy-DKmYyX-k.js";import"./isString-9KL61HD0.js";import"./_baseIteratee-DsR7q60b.js";import"./useQueries-CZ2UZAmG.js";import"./useSuspenseQuery-CGvWjD8G.js";import"./useInfiniteQuery-Cwe-jDYH.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BoIS8-Fg.js";import"./useSchema-B_7R5H0t.js";import"./index-Bj819M1z.js";import"./enums-rrs2IQyW.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CjJA-Bxp.js";import"./uniq-DfAZrWYH.js";import"./forEach-B8iwwgef.js";import"./Add-BUL0USWO.js";import"./Grid-DcGoEfgr.js";import"./ListItem-CGN2T1I5.js";import"./listItemButtonClasses-DiphkRlI.js";import"./ListItemIcon-BQ8ypPJe.js";import"./MenuItem-BDBbE2H1.js";import"./ListItemText-DHHoLYL7.js";import"./ArrowUpward-Cs7zckJE.js";import"./ContentCopy-D-hyFoRA.js";import"./FormControlLabel-5WovY1jg.js";import"./Checkbox-C5PLq8_S.js";import"./SwitchBase-DYU8qapt.js";import"./FormGroup-DTtcAW6E.js";import"./RadioGroup-Dtc4TL5T.js";import"./Radio-CK82vZLa.js";import"./Slider-CjjjobyP.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CJLIjSN2.js";import"./DialogBase-DTN68OED.js";import"./Close-BxUb_IKw.js";import"./HelpPopover-BuRKkfXv.js";import"./MarkdownPopover-BICsFwT1.js";import"./LightTooltip-Bc7QhLtP.js";import"./MarkdownSynapse-BiQEJz-t.js";import"./SkeletonButton-CFrxD1jj.js";import"./SkeletonInlineBlock-DcZvYGLi.js";import"./SkeletonTable-Drmu1Y3r.js";import"./SkeletonParagraph-TWiIzOXd.js";import"./JsonSchemaForm-BbqTUNX1.js";import"./GridLegacy-DJvqRpnY.js";import"./HelpTwoTone-DQ5Jf8lu.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DQcpRod8.js";import"./_createAggregator-SScnDbXy.js";import"./_baseMap-DNuKpY8_.js";import"./DateTimePicker-ByT1YV2S.js";import"./useMobilePicker-BXY5M1L1.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-vBo3PNJX.js";import"./index-78Wjm31F.js";import"./Chip-BtXAVNoa.js";import"./Tabs-0d4wnnJi.js";import"./KeyboardArrowRight-CrnrEg4T.js";import"./Autocomplete-BZMCr13U.js";import"./usePreviousProps-DN30nKsU.js";import"./use-deep-compare-effect.esm-DGZRY9L-.js";import"./TextWidget-BXoJ21Ab.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Mr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Mr as __namedExportsOrder,Lr as default};
