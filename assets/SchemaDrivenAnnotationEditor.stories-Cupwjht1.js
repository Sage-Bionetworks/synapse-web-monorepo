import{jH as p}from"./iframe-9zwml_ZL.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BSZpfCEU.js";import"./index-Chi_LkuB.js";import"./useEntity-DWqu37_A.js";import"./pickBy-BWz3d5Ni.js";import"./isString-ByvIj2fE.js";import"./_baseIteratee-wuXEnZXa.js";import"./useQueries-asxxJCv1.js";import"./useSuspenseQuery-DROjoE-r.js";import"./useInfiniteQuery-BQlxA6Iu.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-SAdnotM0.js";import"./useSchema-B1eCutO1.js";import"./index-CAGOi1QT.js";import"./enums-BwHpvN7s.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C2lZPHvD.js";import"./uniq-DD5l1ddz.js";import"./forEach-CWOCpBhE.js";import"./Add-DWW-cRQh.js";import"./Grid-BP7miAi3.js";import"./ListItem-COyOXpqD.js";import"./listItemButtonClasses-BHTt-fvf.js";import"./ListItemIcon-CW6blNv-.js";import"./MenuItem-DDbuquWO.js";import"./ListItemText-D8fNyi3T.js";import"./ArrowUpward-2PS_kAsD.js";import"./ContentCopy-D3wGyW5z.js";import"./FormControlLabel-BWxHVIis.js";import"./Checkbox-DJRKRmmX.js";import"./SwitchBase-DVj3vtTj.js";import"./FormGroup-DovdN09M.js";import"./RadioGroup-7oSNRWey.js";import"./Radio-6WjF00Am.js";import"./Slider-B9TudBiX.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-_IRTHH0j.js";import"./DialogBase-Hity4xAw.js";import"./Close-Bx_JZLf8.js";import"./HelpPopover-Cf3W3rHJ.js";import"./MarkdownPopover-BsgLS8bs.js";import"./LightTooltip-BlBY8chN.js";import"./MarkdownSynapse-eByBmLQG.js";import"./SkeletonButton-C8wU0a4y.js";import"./SkeletonInlineBlock-D9CRPwvT.js";import"./SkeletonTable-CtHOf3Y6.js";import"./SkeletonParagraph-jYvf1dwm.js";import"./JsonSchemaForm-CjbMbXmn.js";import"./GridLegacy-DRAv0uft.js";import"./HelpTwoTone-BFhIB7cv.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-SUBlP1T1.js";import"./_createAggregator-dIoN45EJ.js";import"./_baseMap-BDolchDL.js";import"./DateTimePicker-CJEs4iv7.js";import"./useMobilePicker-DbB5wMA3.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D8LtOSth.js";import"./index-qxRvCYco.js";import"./Chip-D5tNn4lG.js";import"./Tabs-BqvBwKHk.js";import"./KeyboardArrowRight-B6xAd100.js";import"./Autocomplete-Bm0158gu.js";import"./usePreviousProps-Bp904u-r.js";import"./use-deep-compare-effect.esm-BS58VsrM.js";import"./TextWidget-C4t2_Hjf.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const br=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,br as __namedExportsOrder,qr as default};
