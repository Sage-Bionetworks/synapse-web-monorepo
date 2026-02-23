import{jF as p}from"./iframe-DUgvw_e1.js";import{S as a}from"./SchemaDrivenAnnotationEditor-zSteMogw.js";import"./index-Chi_LkuB.js";import"./useEntity-D5Wm4qKm.js";import"./pickBy-CfLXoUS2.js";import"./isString-BaxO8cnH.js";import"./_baseIteratee-DEPznUuf.js";import"./useQueries-CSyyVGU0.js";import"./useSuspenseQuery-ox9OnZJk.js";import"./useInfiniteQuery-DR51fsMw.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DjR-jaM9.js";import"./useSchema-DopDPMKb.js";import"./index-DlvF-R1G.js";import"./enums-CEIjLvSD.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-DYGtEyDy.js";import"./uniq-4I4fGcu8.js";import"./forEach-CWOCpBhE.js";import"./Add-B0lZ0GPi.js";import"./Grid-CBalzoNK.js";import"./ListItem-C_qSr9er.js";import"./listItemButtonClasses-S1QST8yn.js";import"./ListItemIcon-DxPLAXtY.js";import"./MenuItem-DFV-o_UX.js";import"./ListItemText-BsbWB1X9.js";import"./ArrowUpward-CupdpZdv.js";import"./ContentCopy-ezboINGw.js";import"./FormControlLabel-B9NBpo6a.js";import"./Checkbox-PIprMSav.js";import"./SwitchBase-BVmFI5tz.js";import"./FormGroup-DTxPkf0s.js";import"./RadioGroup-PgMCeIGk.js";import"./Radio-DJaDrtli.js";import"./Slider-B4oCB4Q4.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Bvq2Xms7.js";import"./DialogBase-0-bDisQA.js";import"./Close-BEr3H63z.js";import"./HelpPopover-BS0U5Svz.js";import"./MarkdownPopover-8PnwzX9y.js";import"./LightTooltip-pkrnltrn.js";import"./MarkdownSynapse-C3JndqNi.js";import"./SkeletonButton-CHYteE0_.js";import"./SkeletonInlineBlock-C0f092qz.js";import"./SkeletonTable-wy_brudp.js";import"./SkeletonParagraph-zF20ua7-.js";import"./JsonSchemaForm-D7LEAJ62.js";import"./GridLegacy-CzbNvx7s.js";import"./HelpTwoTone-DxIC7asM.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BqtP3Yrr.js";import"./_createAggregator-CuroeDcY.js";import"./_baseMap-CaX1bcDJ.js";import"./DateTimePicker-D4G8UhMi.js";import"./useMobilePicker-C9-BsSkP.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BWCAJJLH.js";import"./index-D5BySe1V.js";import"./Chip-D6AY4yga.js";import"./Tabs-kle07j-a.js";import"./KeyboardArrowRight-QUuPGn6d.js";import"./Autocomplete-Ybl-tjpl.js";import"./usePreviousProps-DoM5V-Eb.js";import"./use-deep-compare-effect.esm-CjYY6bBe.js";import"./TextWidget-B1OBrhJa.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
