import{jG as p}from"./iframe-DtZANp-B.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B1dcfqRG.js";import"./index-Chi_LkuB.js";import"./useEntity-DS-EI8IO.js";import"./pickBy-CkrYe2Mh.js";import"./isString-DBcqTwIs.js";import"./_baseIteratee-i_0eWQoQ.js";import"./useQueries-DPg4cEVG.js";import"./useSuspenseQuery-BRkWn9u5.js";import"./useInfiniteQuery-b0TCzgLZ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BDPyUYC4.js";import"./useSchema-Cwljpd06.js";import"./index-BECxIsCe.js";import"./enums-DeCfboMw.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CqjDDkAS.js";import"./uniq-CA_-bD3V.js";import"./forEach-CWOCpBhE.js";import"./Add-CDFHFm9u.js";import"./Grid-BNHMYA5H.js";import"./ListItem-z70D7fS6.js";import"./listItemButtonClasses-CV0IPcIl.js";import"./ListItemIcon-CBnfCzqQ.js";import"./MenuItem-D40N-lEz.js";import"./ListItemText-Dy5n8wIS.js";import"./ArrowUpward-BXuX7USG.js";import"./ContentCopy-DgQ0Sl0D.js";import"./FormControlLabel-DB2ZnRYr.js";import"./Checkbox-CC1LHSjN.js";import"./SwitchBase-Dyc_-KPc.js";import"./FormGroup-CMityFCN.js";import"./RadioGroup-BQCvtnwF.js";import"./Radio-yNAyx1aq.js";import"./Slider-pGCM6RRU.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-CU9rE-_E.js";import"./DialogBase-BL9x4u9e.js";import"./Close-C8f0_ECb.js";import"./HelpPopover-C5b6a8OJ.js";import"./MarkdownPopover-DvHvm-1Y.js";import"./LightTooltip-BaTykJJr.js";import"./MarkdownSynapse-CdW0w9aw.js";import"./SkeletonButton-BbY-5M8h.js";import"./SkeletonInlineBlock-ByZd8Fsz.js";import"./SkeletonTable-kAcnUL28.js";import"./SkeletonParagraph-CHnJlCLJ.js";import"./JsonSchemaForm-Djz7hU_X.js";import"./GridLegacy-x-VFIW1c.js";import"./HelpTwoTone-CMQp7okI.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-mise_rOU.js";import"./_createAggregator-DfjFoJ8N.js";import"./_baseMap-ClbmS9Vb.js";import"./DateTimePicker-4LVgoJy3.js";import"./useMobilePicker-CtVO3mPe.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-HtWzgLz0.js";import"./index-B5Np9YOe.js";import"./Chip-gjecgf-1.js";import"./Tabs-DDz60dz5.js";import"./KeyboardArrowRight-B1v-R1Ej.js";import"./Autocomplete-B-PffK6D.js";import"./usePreviousProps-Dy5_U0RH.js";import"./use-deep-compare-effect.esm-PoAMkIBW.js";import"./TextWidget-CG10eiPH.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
