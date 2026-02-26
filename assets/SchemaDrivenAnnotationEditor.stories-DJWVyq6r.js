import{jF as p}from"./iframe-DH1YdleT.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CzMl11ZR.js";import"./index-Chi_LkuB.js";import"./useEntity-DEkwM25s.js";import"./pickBy-uho7WKk-.js";import"./isString-CTOdevqw.js";import"./_baseIteratee-CLehzhMb.js";import"./useQueries-XWhg4h1g.js";import"./useSuspenseQuery-D4jnvJmQ.js";import"./useInfiniteQuery-Bhyhxg2I.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-1Chtb2OR.js";import"./useSchema-CedHDCjI.js";import"./index-grwf4mPn.js";import"./enums-BGhh4pk1.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DQFyXxgw.js";import"./uniq-czhcTCBH.js";import"./forEach-CWOCpBhE.js";import"./Add-DSr63dU2.js";import"./Grid-CXhMZxyr.js";import"./ListItem-BX16DSbY.js";import"./listItemButtonClasses-akTatWV3.js";import"./ListItemIcon-DUkA4reY.js";import"./MenuItem-5x6MCJW5.js";import"./ListItemText-CH5ObuUs.js";import"./ArrowUpward-CFFxUwFD.js";import"./ContentCopy-CxkhYoSk.js";import"./FormControlLabel-tI4J41QQ.js";import"./Checkbox-CguI3AHg.js";import"./SwitchBase-BIcw7t5n.js";import"./FormGroup-Bi6VsHGp.js";import"./RadioGroup-D596BaZ9.js";import"./Radio-DMlSc6G4.js";import"./Slider-DK-aoK9_.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-SNOhH4NP.js";import"./DialogBase-D5LKNQOh.js";import"./Close-DCSUXUpP.js";import"./HelpPopover-CTeHImmX.js";import"./MarkdownPopover-DFqTBoMm.js";import"./LightTooltip-CZ16DjXG.js";import"./MarkdownSynapse-BUNA2qa9.js";import"./SkeletonButton-COeTp7fr.js";import"./SkeletonInlineBlock-CPHdUQ8C.js";import"./SkeletonTable-DicgxcdD.js";import"./SkeletonParagraph-Dq5xJIxI.js";import"./JsonSchemaForm-DqwWOoK0.js";import"./GridLegacy-D6LNhPTA.js";import"./HelpTwoTone-l7js8UOp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BRh7Jt_4.js";import"./_createAggregator-DDAb2Rdx.js";import"./_baseMap-H-FWeyn0.js";import"./DateTimePicker-p3rMW7cq.js";import"./useMobilePicker-B8t_symO.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CYMXBJQL.js";import"./index-Dk8XyrUc.js";import"./Chip-F_DZPuno.js";import"./Tabs-E0K3283D.js";import"./KeyboardArrowRight-W_X2EyNS.js";import"./Autocomplete-DuUEuS_Z.js";import"./usePreviousProps-DK0Vvr2K.js";import"./use-deep-compare-effect.esm-Cu7ZlfFJ.js";import"./TextWidget-BRSdyZXj.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const qr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,qr as __namedExportsOrder,Er as default};
