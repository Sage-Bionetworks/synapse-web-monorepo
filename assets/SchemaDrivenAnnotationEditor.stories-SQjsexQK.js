import{jF as T}from"./iframe-mfaqAuKn.js";import{S as C}from"./SchemaDrivenAnnotationEditor-D6N6gbSP.js";import"./index-r8ZA1smB.js";import"./useEntity-CMPy2fyR.js";import"./pickBy-yTL7T7iJ.js";import"./isString-CpEOJJ0O.js";import"./_baseIteratee-DEOpNloE.js";import"./useQueries-CXO38aGV.js";import"./useSuspenseQuery-Ck8XhOTY.js";import"./useInfiniteQuery-CFl_zl7K.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DbTK85fi.js";import"./useSchema-BIaxPWqC.js";import"./index-5PTQj948.js";import"./enums-DJxiK91A.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-_IDFhxIe.js";import"./uniq-4uLo8lp5.js";import"./forEach-B8iwwgef.js";import"./Add-2ioAddHa.js";import"./Grid-Dx1aGtKO.js";import"./ListItem-DFyHUYuQ.js";import"./listItemButtonClasses-BwnT3NXq.js";import"./ListItemIcon-DyyxoP7b.js";import"./MenuItem-Ce4v9NmO.js";import"./ListItemText-ClK5-Ghe.js";import"./ArrowUpward-CI_lcxsc.js";import"./ContentCopy-CKmkZaAk.js";import"./FormControlLabel-phRtYxCJ.js";import"./Checkbox-BXDlWSV_.js";import"./SwitchBase-N2YArUPS.js";import"./FormGroup-wt8T43Qe.js";import"./RadioGroup-_IbP135o.js";import"./Radio-CerFtbUo.js";import"./Slider-wofD0Uwx.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-DK1C4L_H.js";import"./DialogBase-BA7H051B.js";import"./Close-YScbRJtZ.js";import"./HelpPopover-CYTH5UW2.js";import"./MarkdownPopover-B-BPuZn1.js";import"./LightTooltip-BuyZuxhp.js";import"./MarkdownSynapse-ChHwalJV.js";import"./SkeletonButton-Df6Re1Ke.js";import"./SkeletonInlineBlock-B--4faiZ.js";import"./SkeletonTable-CQAWTA0x.js";import"./SkeletonParagraph-BK2WyijI.js";import"./JsonSchemaForm-Cnd9HRUd.js";import"./GridLegacy-CQP-_3_d.js";import"./HelpTwoTone-CqzCe9DY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-wKISzIui.js";import"./_createAggregator-D2l_exp5.js";import"./_baseMap-1AzMXr6e.js";import"./DateTimePicker-ArvK521t.js";import"./useMobilePicker-NSVXNubP.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-DD_Sxn2L.js";import"./index-D3AHZnx8.js";import"./Chip-BGU9tTve.js";import"./Tabs-DHAglMAr.js";import"./KeyboardArrowRight-BqihLUIv.js";import"./Autocomplete-DJ7gaHb7.js";import"./usePreviousProps-CqXvmQnd.js";import"./use-deep-compare-effect.esm-BVXF_Pc-.js";import"./TextWidget-CWUbTzV6.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
