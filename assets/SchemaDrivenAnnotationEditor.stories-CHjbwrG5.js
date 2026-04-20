import{jx as p}from"./iframe-CZUUdnAP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Du07KyZj.js";import"./index-Chi_LkuB.js";import"./useEntity-CGzWG93n.js";import"./pickBy-BKwcq0Ux.js";import"./isString-d6qttKaI.js";import"./_baseIteratee-Cu60_Mvy.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-C_MyS1FN.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BHKutWda.js";import"./useSchema-AoOePG65.js";import"./index-Dkx2WHXP.js";import"./enums-C-h5Jx__.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DAbWNnVh.js";import"./uniq-CoQFLPJv.js";import"./forEach-UWyboym_.js";import"./Add-DXL34-cZ.js";import"./Grid-CYH6R9jX.js";import"./ListItem-CgE_p33y.js";import"./listItemButtonClasses-DUz4wm5w.js";import"./ListItemIcon-J9uwaKFs.js";import"./MenuItem-BQBfTSFf.js";import"./ListItemText-Cp5JhMS4.js";import"./ArrowUpward-BMG3rbP5.js";import"./ContentCopy-BKtWDe7l.js";import"./FormControlLabel-Cv5LGeMa.js";import"./Checkbox-DsRD5Alo.js";import"./SwitchBase-B1xcpsp0.js";import"./FormGroup-BlHjy926.js";import"./RadioGroup-Bt65-_CX.js";import"./Radio-Dde4Awwg.js";import"./Slider-BgsdVL19.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-bHj4aTcl.js";import"./DialogBase-vGJ-9Ozq.js";import"./Close-C0cVzGCV.js";import"./HelpPopover-BVtbTHqG.js";import"./MarkdownPopover-D3m2bqb5.js";import"./LightTooltip-DSgBjgHB.js";import"./MarkdownSynapse-m6An14vR.js";import"./SkeletonButton-u1mXBMmd.js";import"./SkeletonInlineBlock-Dwwns8en.js";import"./SkeletonTable-B92SNSTz.js";import"./SkeletonParagraph-Dccn5vm_.js";import"./JsonSchemaForm-BNaHLt5c.js";import"./GridLegacy-CVqZ8Qs5.js";import"./HelpTwoTone-DninR4OZ.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-eU7pABTG.js";import"./_createAggregator-FIFYhWl-.js";import"./_baseMap-CIeYxFCy.js";import"./DateTimePicker-C_fXMDCG.js";import"./useMobilePicker-_RoP0l9W.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BAHeUo69.js";import"./index-fDzCYU54.js";import"./Chip-vSFEg4gP.js";import"./Tabs-DVMuGK4a.js";import"./KeyboardArrowRight-B5lNRpHL.js";import"./Autocomplete-Dpt9MbEp.js";import"./usePreviousProps-BYJ5T-gX.js";import"./use-deep-compare-effect.esm-DwNSeL6w.js";import"./TextWidget-DkFpLylO.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
