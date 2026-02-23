import{jF as p}from"./iframe-D92BdoG9.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DJLFOcec.js";import"./index-Chi_LkuB.js";import"./useEntity-XJ3PPFz3.js";import"./pickBy-BadgPrJW.js";import"./isString-BpKkdU6U.js";import"./_baseIteratee-CHqDSNyX.js";import"./useQueries-B2gtnRyW.js";import"./useSuspenseQuery-B_1ZDlRS.js";import"./useInfiniteQuery-wn2juHd0.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BO4ly07m.js";import"./useSchema-XE92_gLT.js";import"./index-CN8Mk9nX.js";import"./enums-D16CJe00.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Ot8mX9XG.js";import"./uniq-DjBXqiF7.js";import"./forEach-CWOCpBhE.js";import"./Add-DiGV07LP.js";import"./Grid-BmWkcZL3.js";import"./ListItem-DEV60ndk.js";import"./listItemButtonClasses-BBgB7kdh.js";import"./ListItemIcon-aZik1-kh.js";import"./MenuItem-BJFdqxGb.js";import"./ListItemText-CO0tPVHV.js";import"./ArrowUpward-m82xHk6R.js";import"./ContentCopy-CU2M4Bym.js";import"./FormControlLabel-lXpCaRp3.js";import"./Checkbox-Dd-GqwcY.js";import"./SwitchBase-C-CWJzfm.js";import"./FormGroup-CYqDjnEH.js";import"./RadioGroup-B4c40IYI.js";import"./Radio-BhaLOb8J.js";import"./Slider-M29-ETOo.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog--5BBCv73.js";import"./DialogBase-7QNHfM8i.js";import"./Close-CMNaFelZ.js";import"./HelpPopover-DwSVnQpf.js";import"./MarkdownPopover-DYuidQle.js";import"./LightTooltip-DHXuYbNh.js";import"./MarkdownSynapse-BXkVd7Pm.js";import"./SkeletonButton-DkZdiJnq.js";import"./SkeletonInlineBlock-BoREPhEN.js";import"./SkeletonTable-DmBSaFM1.js";import"./SkeletonParagraph-BlcJcRxn.js";import"./JsonSchemaForm-Cfp0Q6tq.js";import"./GridLegacy-Ek-t45Oo.js";import"./HelpTwoTone-BYr4rHHL.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BB3i2P8R.js";import"./_createAggregator-CstjyadL.js";import"./_baseMap-PntIsZSQ.js";import"./DateTimePicker-rGsvKbfC.js";import"./useMobilePicker-DMWrPT4o.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-cVFlk2CZ.js";import"./index-CYdrGrZN.js";import"./Chip-CniQq1ch.js";import"./Tabs-CG42ed2l.js";import"./KeyboardArrowRight-Bobd3mou.js";import"./Autocomplete-v9048f5a.js";import"./usePreviousProps-CBLlnvI5.js";import"./use-deep-compare-effect.esm-BmxS3Z7I.js";import"./TextWidget-CogX1v9p.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
