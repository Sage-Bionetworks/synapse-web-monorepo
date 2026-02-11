import{jJ as p}from"./iframe-CKkRwo5v.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DHwk89w6.js";import"./index-Chi_LkuB.js";import"./useEntity-C_pugPvR.js";import"./pickBy-DnhMagRc.js";import"./isString-Wwui1oe3.js";import"./_baseIteratee-COPrDePY.js";import"./useQueries-DAr7Xmz3.js";import"./useSuspenseQuery-vP5ehhR0.js";import"./useInfiniteQuery-D91Hmxok.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-mjXgY0Yw.js";import"./useSchema-9j2Vig8N.js";import"./index-C4DhEp0Y.js";import"./enums-wroegNAy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BM2npHyS.js";import"./uniq-DTweKclO.js";import"./forEach-CWOCpBhE.js";import"./Add-jPnd8jWW.js";import"./Grid-C82W-1WD.js";import"./ListItem-y0JfTV8V.js";import"./listItemButtonClasses-CNogcDxo.js";import"./ListItemIcon-sYzMsptd.js";import"./MenuItem-CL505aRp.js";import"./ListItemText-hQhqP4rf.js";import"./ArrowUpward-ZhoAM7wZ.js";import"./ContentCopy-B7svCVTY.js";import"./FormControlLabel-RfEoG-bp.js";import"./Checkbox-CrdVE499.js";import"./SwitchBase-BmMmO8FL.js";import"./FormGroup-B7l8KBIB.js";import"./RadioGroup-Cg2r7kxF.js";import"./Radio-B5v_2pAe.js";import"./Slider-CXXkTgDX.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CVuhYKmi.js";import"./DialogBase-DdQNaVTV.js";import"./Close-CVsFjIhS.js";import"./HelpPopover-DZFuhU9d.js";import"./MarkdownPopover-niMIJG4k.js";import"./LightTooltip-Bt97fi6r.js";import"./MarkdownSynapse-COK-Gxgq.js";import"./SkeletonButton-DLboZNuU.js";import"./SkeletonInlineBlock-DfpGMDXv.js";import"./SkeletonTable-bRkZRSb0.js";import"./SkeletonParagraph-DGFhmrY6.js";import"./JsonSchemaForm-4Unk96kx.js";import"./GridLegacy-NnHHn7UI.js";import"./HelpTwoTone-DJDF-_Zp.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CLF0uVPC.js";import"./_createAggregator-SM7kLbsx.js";import"./_baseMap-B36GknGl.js";import"./DateTimePicker-BfRVQBEL.js";import"./useMobilePicker-DmqDLC0E.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-fmj286Sl.js";import"./index-T5CXHaiH.js";import"./Chip-Dbbmbwqm.js";import"./Tabs-BcJAE--E.js";import"./KeyboardArrowRight-DQVl2Cs-.js";import"./Autocomplete-Bb29v8nk.js";import"./usePreviousProps-Cu5Ufv-Z.js";import"./use-deep-compare-effect.esm-DgxJF9xG.js";import"./TextWidget-mNJO-1ta.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
