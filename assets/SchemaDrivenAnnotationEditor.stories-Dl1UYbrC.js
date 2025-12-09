import{jF as T}from"./iframe-BUOdsTSh.js";import{S as C}from"./SchemaDrivenAnnotationEditor-S5NhDaJ4.js";import"./index-r8ZA1smB.js";import"./useEntity-U-3a_1Bs.js";import"./pickBy-D4pEibDA.js";import"./isString-Bij-w0kH.js";import"./_baseIteratee-ikfqENkb.js";import"./useQueries-Cj0FJGxA.js";import"./useSuspenseQuery-BjDE67iy.js";import"./useInfiniteQuery-BQSNFCnR.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO7k6330.js";import"./useSchema-BObkJHmb.js";import"./index-BEsfbN4d.js";import"./enums-C6Ef294A.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-kMjIUVBO.js";import"./uniq-BuRCLPCx.js";import"./forEach-B8iwwgef.js";import"./Add-BbEKLg1c.js";import"./Grid-CtZSHvS3.js";import"./ListItem-BDT3a6Ww.js";import"./listItemButtonClasses-BFI_lEVh.js";import"./ListItemIcon-B4WtWpRP.js";import"./MenuItem-8DBEXON1.js";import"./ListItemText-Dor50Png.js";import"./ArrowUpward-B_D4w7yD.js";import"./ContentCopy-Dnxjf2p1.js";import"./FormControlLabel-CpRmCTlY.js";import"./Checkbox--dbCoq3l.js";import"./SwitchBase-B4zG1gGP.js";import"./FormGroup-CYLGsA33.js";import"./RadioGroup-B5MG_GZR.js";import"./Radio-DI7hqRFd.js";import"./Slider-DFopEGll.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CbO0lTFx.js";import"./DialogBase-DQg2Vi5e.js";import"./Close-U8nFtaRM.js";import"./HelpPopover-6NrJABUY.js";import"./MarkdownPopover-Di4SlQgS.js";import"./LightTooltip-Da_PEhJu.js";import"./MarkdownSynapse-DqCsA8Jf.js";import"./SkeletonButton-ByACKKgg.js";import"./SkeletonInlineBlock-BZZZqUCg.js";import"./SkeletonTable-CSizy4er.js";import"./SkeletonParagraph-DiZBwklZ.js";import"./JsonSchemaForm-DfiM-LaD.js";import"./GridLegacy-cfp-QTIK.js";import"./HelpTwoTone-CrVl4tel.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-B-kVIWdc.js";import"./_createAggregator-CAZ8qf_X.js";import"./_baseMap-Ct-pV0We.js";import"./DateTimePicker-C6VPfO8H.js";import"./useMobilePicker-Dsoa8IjY.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-wAzON35C.js";import"./index-Dy3y5VXk.js";import"./Chip-D1GuGoQD.js";import"./Tabs-BI89iB3Y.js";import"./KeyboardArrowRight-IvTdeaDy.js";import"./Autocomplete-D8kWbQ61.js";import"./usePreviousProps-CoDl5yeK.js";import"./use-deep-compare-effect.esm-CX0zEpmN.js";import"./TextWidget-Bxmh0F9l.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
