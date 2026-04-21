import{jx as p}from"./iframe-BDH9K3aQ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DvX_v3v5.js";import"./index-Chi_LkuB.js";import"./useEntity-BCHA_6TA.js";import"./pickBy-DIU2iB-5.js";import"./isString-yINtZ7vY.js";import"./_baseIteratee-gLwaiEgY.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CsOZNg3u.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DCJbb9bm.js";import"./useSchema-DtyJ8o2A.js";import"./index-CZl4maEB.js";import"./enums-D6cq4fo8.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C6kEqMCn.js";import"./uniq-tViP_YN6.js";import"./forEach-UWyboym_.js";import"./Add-_6R3v4Kq.js";import"./Grid-DIRRIcGz.js";import"./ListItem-C5iVMFOy.js";import"./listItemButtonClasses-DxN0fm3N.js";import"./ListItemIcon-Dn_U8eJR.js";import"./MenuItem-x7e5wLEf.js";import"./ListItemText-B5OiOBrw.js";import"./ArrowUpward-BaDzroRY.js";import"./ContentCopy-B8KtTKcg.js";import"./FormControlLabel-hO8hM_0u.js";import"./Checkbox-Bh-etNab.js";import"./SwitchBase-DtmVnPYE.js";import"./FormGroup-Ccm6WI4f.js";import"./RadioGroup-B486Tz3Q.js";import"./Radio-B6e-jRet.js";import"./Slider-D8sEQjxT.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Baaf23T_.js";import"./DialogBase-B3CH9IvN.js";import"./Close-BQ3Dsdqr.js";import"./HelpPopover-rgAqoORW.js";import"./MarkdownPopover-DSGPjAkb.js";import"./LightTooltip-CH8V7Sc-.js";import"./MarkdownSynapse-BfgcgRyQ.js";import"./SkeletonButton-8Qglx0Lx.js";import"./SkeletonInlineBlock-C7j3Fduy.js";import"./SkeletonTable-DpnDnZ6A.js";import"./SkeletonParagraph-4XI-GQEQ.js";import"./JsonSchemaForm-DFsKxPFl.js";import"./GridLegacy-DAzkTeTm.js";import"./HelpTwoTone-yKvFgHSI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CsRRKJdh.js";import"./_createAggregator-CxLL64-G.js";import"./_baseMap-CoKNYOGS.js";import"./DateTimePicker-C8jTy5yy.js";import"./useMobilePicker-DdSjTMDH.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-3-1TVLl7.js";import"./index-BEXoIJDe.js";import"./Chip-DozeHiZL.js";import"./Tabs-ayJMJAAb.js";import"./KeyboardArrowRight-BaS3vh2Z.js";import"./Autocomplete-CwnIKOhs.js";import"./usePreviousProps-DxAgpis0.js";import"./use-deep-compare-effect.esm-orn8Imjr.js";import"./TextWidget-C2jmyvb8.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
