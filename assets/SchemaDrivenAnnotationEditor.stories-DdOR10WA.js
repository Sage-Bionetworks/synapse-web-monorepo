import{jG as p}from"./iframe-CV5uF1_e.js";import{S as a}from"./SchemaDrivenAnnotationEditor-ucxhCvsP.js";import"./index-Chi_LkuB.js";import"./useEntity-K0J7SxVO.js";import"./pickBy-CCxuAjeM.js";import"./isString-DmYfii3A.js";import"./_baseIteratee-DKiQefv_.js";import"./useQueries-NxuMdxZj.js";import"./useSuspenseQuery-CGczKAJn.js";import"./useInfiniteQuery-oU30NX3B.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-4JZ_nBvJ.js";import"./useSchema-BRJkT-P4.js";import"./index-DN7yTPeo.js";import"./enums-CIkk4jIk.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BBarx7fo.js";import"./uniq-L1qv973h.js";import"./forEach-CWOCpBhE.js";import"./Add-BkJNOkgE.js";import"./Grid-Pr30XWBi.js";import"./ListItem-eNRkFcKE.js";import"./listItemButtonClasses-zWm1TryB.js";import"./ListItemIcon-C1mzCABT.js";import"./MenuItem-BzuAhGLX.js";import"./ListItemText-x1VHO9uL.js";import"./ArrowUpward-BANOQ8q0.js";import"./ContentCopy-Cq8I4Q2y.js";import"./FormControlLabel-BDjFPPQX.js";import"./Checkbox-C2-C51xv.js";import"./SwitchBase-DGbLlKb7.js";import"./FormGroup-DsD0HsQw.js";import"./RadioGroup-DWaSmKKp.js";import"./Radio-DRToH1H2.js";import"./Slider-CyQRq62P.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-D2HwlyP0.js";import"./DialogBase-BBjGlBIj.js";import"./Close-BXWZan39.js";import"./HelpPopover-jZCDiU0J.js";import"./MarkdownPopover-DuJ5uVW5.js";import"./LightTooltip-CPpYn2Kh.js";import"./MarkdownSynapse-DKo3fnwU.js";import"./SkeletonButton-CpwnNhlN.js";import"./SkeletonInlineBlock-CfS9comD.js";import"./SkeletonTable-Dkaqgxy9.js";import"./SkeletonParagraph-CfoCBxY5.js";import"./JsonSchemaForm-CJg0KUps.js";import"./GridLegacy-T8o6rqLU.js";import"./HelpTwoTone-B1rI8eA7.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DnFZg5Tz.js";import"./_createAggregator-DmX5a-7B.js";import"./_baseMap-CndHGrEy.js";import"./DateTimePicker-b9045yvT.js";import"./useMobilePicker-CeN1p8MY.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BQG2wuEQ.js";import"./index-Lq8AZYKI.js";import"./Chip-KBD8jJOF.js";import"./Tabs-BcUS44k5.js";import"./KeyboardArrowRight-HZca2CH0.js";import"./Autocomplete-CyxKJQRv.js";import"./usePreviousProps-CirsVsge.js";import"./use-deep-compare-effect.esm-BeIpRdZO.js";import"./TextWidget-DfCudz7z.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
