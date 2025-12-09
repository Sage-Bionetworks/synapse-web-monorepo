import{jF as T}from"./iframe-k0ljdA_F.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CfUXKzoO.js";import"./index-r8ZA1smB.js";import"./useEntity-CytXVVg8.js";import"./pickBy-DYc9HKD3.js";import"./isString-BujeJhfD.js";import"./_baseIteratee-Ddi5dsAL.js";import"./useQueries-C37mXx1b.js";import"./useSuspenseQuery-Cfzbe5_g.js";import"./useInfiniteQuery-Cnf3ehf_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DA2NKXEk.js";import"./useSchema-GiZdFBQ1.js";import"./index-CP25EnNC.js";import"./enums-B9821FiY.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C4Ciw_0t.js";import"./uniq-DHKBvVd7.js";import"./forEach-B8iwwgef.js";import"./Add-BCJnISNU.js";import"./Grid-DNfAXZdo.js";import"./ListItem-Bw4H9O-d.js";import"./listItemButtonClasses-CAkmNDe4.js";import"./ListItemIcon-ClYnXCfG.js";import"./MenuItem-CVgChaV5.js";import"./ListItemText-Cn_H4JuY.js";import"./ArrowUpward-Db68vELg.js";import"./ContentCopy-CsK_xt9D.js";import"./FormControlLabel-5sMiV1K8.js";import"./Checkbox-DcsQ_J_q.js";import"./SwitchBase-DWQpQoJJ.js";import"./FormGroup-BOm7VGe-.js";import"./RadioGroup-UKvSMT5X.js";import"./Radio-D2WCg6Rf.js";import"./Slider-BcbHChXm.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-C7naKC_4.js";import"./DialogBase-c3ATuGjo.js";import"./Close-B2VeJ_9n.js";import"./HelpPopover-CNpAlynd.js";import"./MarkdownPopover-DByvkR9q.js";import"./LightTooltip-DSQf6_14.js";import"./MarkdownSynapse-Bd3GMcDJ.js";import"./SkeletonButton-DocMgp-F.js";import"./SkeletonInlineBlock-D4J3mBmr.js";import"./SkeletonTable-C0DTQRTT.js";import"./SkeletonParagraph-BXN5laEg.js";import"./JsonSchemaForm-BC_-fAoi.js";import"./GridLegacy-CQjHRPuO.js";import"./HelpTwoTone-DN4MCS0y.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CId21Tx9.js";import"./_createAggregator-C0dsLA40.js";import"./_baseMap-CbuWwOmP.js";import"./DateTimePicker-BvIz0_dK.js";import"./useMobilePicker-8TgbSrqf.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-BmQ5yXny.js";import"./index-C-u29sTD.js";import"./Chip-DuFcu8oc.js";import"./Tabs-xSnI3lFH.js";import"./KeyboardArrowRight-nE3du2VW.js";import"./Autocomplete-CSFqgRY1.js";import"./usePreviousProps-DL4rC1NY.js";import"./use-deep-compare-effect.esm-D5RgLp7I.js";import"./TextWidget-B7UF6DM2.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
