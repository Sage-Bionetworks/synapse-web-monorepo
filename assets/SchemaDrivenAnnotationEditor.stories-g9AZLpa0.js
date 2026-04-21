import{jx as p}from"./iframe-B_8Pbtyy.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D10kMJuR.js";import"./index-Chi_LkuB.js";import"./useEntity-gwfQDJ2O.js";import"./pickBy-D6O8tNUX.js";import"./isString-CBVhzxBm.js";import"./_baseIteratee-DMyCki3z.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-EmhrFgDQ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-kdbYsuxm.js";import"./useSchema-DbfxCkZ6.js";import"./index-H75D54dK.js";import"./enums-B8Z4mPPd.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-23nGJqXf.js";import"./uniq-DBkdfYrk.js";import"./forEach-UWyboym_.js";import"./Add-w3sS_zSw.js";import"./Grid-DGMh7hSD.js";import"./ListItem-C6Q0anwA.js";import"./listItemButtonClasses-BrtwA7kB.js";import"./ListItemIcon-eqelwYn2.js";import"./MenuItem-B5j_dwt3.js";import"./ListItemText-BK5sFC1J.js";import"./ArrowUpward-BdvncECh.js";import"./ContentCopy-C02hpEhE.js";import"./FormControlLabel-Dkt0Kpn_.js";import"./Checkbox-DCx96Ow5.js";import"./SwitchBase-CoXKjNiI.js";import"./FormGroup-DDlgUjrx.js";import"./RadioGroup-DRRY0zGy.js";import"./Radio-B3nv9QSc.js";import"./Slider-BB12C77F.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cj7M6sK5.js";import"./DialogBase-BsBgus9N.js";import"./Close-DmraeU9A.js";import"./HelpPopover-DFhkNVag.js";import"./MarkdownPopover-CqCpxQwy.js";import"./LightTooltip-DL-di1QQ.js";import"./MarkdownSynapse-HYoIGTcS.js";import"./SkeletonButton-C2boYaKt.js";import"./SkeletonInlineBlock-ChbxFlxk.js";import"./SkeletonTable-DZYgPiW7.js";import"./SkeletonParagraph-CanILnI9.js";import"./JsonSchemaForm-FGlYb8h7.js";import"./GridLegacy-BAuhXIPQ.js";import"./HelpTwoTone-4JK9sIjQ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dp1rQtCZ.js";import"./_createAggregator-DVL2uQhn.js";import"./_baseMap-CVbt9Ewa.js";import"./DateTimePicker-b5ljzdYY.js";import"./useMobilePicker-C0iO9erd.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DfZEFC2p.js";import"./index-C8E9GuLP.js";import"./Chip-CrOe6yxn.js";import"./Tabs-Dtc7DjdH.js";import"./KeyboardArrowRight-DV58-re5.js";import"./Autocomplete-BwejXa9T.js";import"./usePreviousProps-Bh7W6lyD.js";import"./use-deep-compare-effect.esm-pRqMPqKS.js";import"./TextWidget-BxXJ0KUC.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};
