import{jF as T}from"./iframe-6fxFvYFG.js";import{S as C}from"./SchemaDrivenAnnotationEditor-CSQsoCm9.js";import"./index-r8ZA1smB.js";import"./useEntity-CiSEE1ST.js";import"./pickBy-afJY1XzF.js";import"./isString-C9xQ2Al-.js";import"./_baseIteratee-DY1tQatH.js";import"./useQueries-C1Wk7ykh.js";import"./useSuspenseQuery-ilZIAiZO.js";import"./useInfiniteQuery-D3h0JCdq.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CDx_Zyyw.js";import"./useSchema-BVq4wz9v.js";import"./index-CCH90bqb.js";import"./enums-BNC1SF2Z.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Cn4IQ3HL.js";import"./uniq-Bs8U3rF1.js";import"./forEach-B8iwwgef.js";import"./Add-BJ8_UZH5.js";import"./Grid-DGlN8hhe.js";import"./ListItem-DV91SgrA.js";import"./listItemButtonClasses-DbmKHAul.js";import"./ListItemIcon-DbMlqFfZ.js";import"./MenuItem-B2VLGt4Y.js";import"./ListItemText-CS6hsq-n.js";import"./ArrowUpward-BGU5NHwA.js";import"./ContentCopy-BIomWS9h.js";import"./FormControlLabel-D4CQ3AYq.js";import"./Checkbox-CHQ5V6dI.js";import"./SwitchBase-Bvt5w2g0.js";import"./FormGroup-p2ZBI5ND.js";import"./RadioGroup-DxpXxn2A.js";import"./Radio-BFNfi9Ft.js";import"./Slider-CN3q7vU7.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-D7CL9Hbl.js";import"./DialogBase-CDVzPJD1.js";import"./Close--BbnJHAr.js";import"./HelpPopover-CS2yi4Iw.js";import"./MarkdownPopover-BT53YGTG.js";import"./LightTooltip-B_bCqVrh.js";import"./MarkdownSynapse-BiQ8eplM.js";import"./SkeletonButton-CwN3sKyQ.js";import"./SkeletonInlineBlock-DeCoWgUQ.js";import"./SkeletonTable-B0KdXxpl.js";import"./SkeletonParagraph-P8Ugt_HA.js";import"./JsonSchemaForm-BWsnIs1d.js";import"./GridLegacy-DRXASug7.js";import"./HelpTwoTone-CwbLdapY.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BvfDOmTk.js";import"./_createAggregator-BOFEHp5k.js";import"./_baseMap-Rk7cewzM.js";import"./DateTimePicker-DOK0E81T.js";import"./useMobilePicker-Du3mnEIx.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CZrav3XZ.js";import"./index-CP3LG1g1.js";import"./Chip-BwWvwcwU.js";import"./Tabs-C2_iat_8.js";import"./KeyboardArrowRight-Cp3GFnnw.js";import"./Autocomplete-COKRJiZM.js";import"./usePreviousProps-DyzcoV3l.js";import"./use-deep-compare-effect.esm-6HhN3vUK.js";import"./TextWidget-xNw6pSZW.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Lr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
