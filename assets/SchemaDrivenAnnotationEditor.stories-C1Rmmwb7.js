import{jG as p}from"./iframe-C7rwSIbr.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D6SX87jR.js";import"./index-Chi_LkuB.js";import"./useEntity-CKCkIYWj.js";import"./pickBy-xqbS2Hav.js";import"./isString-D10AZ56B.js";import"./_baseIteratee-RvX3gnAq.js";import"./useQueries-Ch1NNzV5.js";import"./useSuspenseQuery-SFMk3h0j.js";import"./useInfiniteQuery-B_4JrFtn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CWXhfopj.js";import"./useSchema-61HHw0oN.js";import"./index-hYdihuMp.js";import"./enums-CXGwG4Vy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-B7tQAwJE.js";import"./uniq-CuRUC0sc.js";import"./forEach-CWOCpBhE.js";import"./Add-BhZ_ExR-.js";import"./Grid-Chh7U9I0.js";import"./ListItem-8rqI6aFs.js";import"./listItemButtonClasses-2rTXFjyQ.js";import"./ListItemIcon-C2yLBDfk.js";import"./MenuItem-GxwqXfxd.js";import"./ListItemText-85Kr33mY.js";import"./ArrowUpward-BcNwBH74.js";import"./ContentCopy-CCNt6cKL.js";import"./FormControlLabel-BfYoWgTN.js";import"./Checkbox-F7R52Ayc.js";import"./SwitchBase-CdhWNWQs.js";import"./FormGroup-DlnhovkY.js";import"./RadioGroup-BNh3afxN.js";import"./Radio-B1QfFUuf.js";import"./Slider-DXfP4xJT.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-Cjq7hfr8.js";import"./DialogBase-BuNrYOj6.js";import"./Close-DPgD_Lcy.js";import"./HelpPopover-D7lY4hER.js";import"./MarkdownPopover-DNfQ1GsD.js";import"./LightTooltip-CBY_GmRv.js";import"./MarkdownSynapse-C_a4bb2e.js";import"./SkeletonButton-5OEfN7I-.js";import"./SkeletonInlineBlock-9crGgDl7.js";import"./SkeletonTable-Dj6LF7El.js";import"./SkeletonParagraph-DljX6hdA.js";import"./JsonSchemaForm-BG1bdYfP.js";import"./GridLegacy-BH_zNaZx.js";import"./HelpTwoTone-C1UZtgHz.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-hVp1ZO68.js";import"./_createAggregator-RZ7ifyTG.js";import"./_baseMap-DlS14YDy.js";import"./DateTimePicker-ewKEgoJ5.js";import"./useMobilePicker-BIfjLeSQ.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CM8vshmv.js";import"./index-Di-Cz18U.js";import"./Chip-CdXxtxxp.js";import"./Tabs-DFkKhjCr.js";import"./KeyboardArrowRight-CI21MdBu.js";import"./Autocomplete-B24Urf16.js";import"./usePreviousProps-BO04T922.js";import"./use-deep-compare-effect.esm-0TBSbA1r.js";import"./TextWidget-CI-tVaBR.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
