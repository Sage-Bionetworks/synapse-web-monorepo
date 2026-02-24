import{jF as p}from"./iframe-but96Lfh.js";import{S as a}from"./SchemaDrivenAnnotationEditor-D-_UB1Lg.js";import"./index-Chi_LkuB.js";import"./useEntity-CDZqllH5.js";import"./pickBy-C6AaX3IH.js";import"./isString-BV20c6FH.js";import"./_baseIteratee-VsZNO4js.js";import"./useQueries-AfBCkaaZ.js";import"./useSuspenseQuery-HIpnOhi4.js";import"./useInfiniteQuery-Dpy_V3ju.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BXwyf35G.js";import"./useSchema-D0YvGHvE.js";import"./index-BOD0cH_y.js";import"./enums-CBiR3YrE.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BygoLUG-.js";import"./uniq-HKxiDTCm.js";import"./forEach-CWOCpBhE.js";import"./Add-BBGwwcJ6.js";import"./Grid-BgLOPLBo.js";import"./ListItem-DD3ZX6mL.js";import"./listItemButtonClasses-VEW-oVva.js";import"./ListItemIcon-LXOFBY8A.js";import"./MenuItem-BvQCkNiO.js";import"./ListItemText-CvIrXITg.js";import"./ArrowUpward-EEVldcYG.js";import"./ContentCopy-B6h6q08h.js";import"./FormControlLabel-DkicdPWo.js";import"./Checkbox-C-oCYhji.js";import"./SwitchBase-CkGWbtOJ.js";import"./FormGroup-D1uqVMGX.js";import"./RadioGroup-xyPKYYB3.js";import"./Radio-BfZh9NMG.js";import"./Slider-BPPWkwXI.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-FXSIJylJ.js";import"./DialogBase-DSLNZs-A.js";import"./Close-CnPFHJzh.js";import"./HelpPopover-DJt2W7Ho.js";import"./MarkdownPopover-BsvfqRJd.js";import"./LightTooltip-C4VFVSMC.js";import"./MarkdownSynapse-WMpHNlyQ.js";import"./SkeletonButton-XqPM6IMR.js";import"./SkeletonInlineBlock-CsI4ERDm.js";import"./SkeletonTable-CiaLgFbO.js";import"./SkeletonParagraph-k5_8qyuU.js";import"./JsonSchemaForm-BI0l9HN1.js";import"./GridLegacy-D-Nk8s4a.js";import"./HelpTwoTone-DW3PU01T.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-D5RvqH7A.js";import"./_createAggregator-DieCQhre.js";import"./_baseMap-DDkvOKK5.js";import"./DateTimePicker-er4hkqku.js";import"./useMobilePicker-CaE4C30c.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DCI0twhl.js";import"./index-DM_ZQyY8.js";import"./Chip-DMb_4koX.js";import"./Tabs-CN6w8gwf.js";import"./KeyboardArrowRight-B8UVeqZP.js";import"./Autocomplete-DZjMV0_n.js";import"./usePreviousProps-UuqkQB2d.js";import"./use-deep-compare-effect.esm-B7xZFsRA.js";import"./TextWidget-CdD6MXHM.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
