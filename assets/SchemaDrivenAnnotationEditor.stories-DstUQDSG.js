import{jG as p}from"./iframe-4beS0gqZ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CW7V1AY9.js";import"./index-Chi_LkuB.js";import"./useEntity-CCW2T7nm.js";import"./pickBy-Ch8IJYmc.js";import"./isString-DrznTeW8.js";import"./_baseIteratee-BmxS9WAT.js";import"./useQueries-D3UXgcMQ.js";import"./useSuspenseQuery-DcbESSKQ.js";import"./useInfiniteQuery-BMIQmsjh.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DFpyvJ5c.js";import"./useSchema-5K2wq-cH.js";import"./index-D_JrqlDu.js";import"./enums-o_-ewK6h.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C7tOoOBF.js";import"./uniq-B7kIYLGP.js";import"./forEach-CWOCpBhE.js";import"./Add-BPAZ7m5J.js";import"./Grid-BXs150NI.js";import"./ListItem-BB4x_Hd2.js";import"./listItemButtonClasses-uayquW46.js";import"./ListItemIcon-B4gJPOXu.js";import"./MenuItem-rOQE2nSk.js";import"./ListItemText-Ci0usjoe.js";import"./ArrowUpward-CP_QEPp7.js";import"./ContentCopy-BuWKrgKu.js";import"./FormControlLabel-Chk4z1Xm.js";import"./Checkbox-32zvS2Va.js";import"./SwitchBase-Dp3MNZXr.js";import"./FormGroup-Cml3BbfA.js";import"./RadioGroup-CU93VMeb.js";import"./Radio-B5vdngma.js";import"./Slider-BJJw9zND.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DiR-POnZ.js";import"./DialogBase-EyEbalB9.js";import"./Close-Di6LJuIZ.js";import"./HelpPopover-CrWRb3n8.js";import"./MarkdownPopover-DsiU9Oei.js";import"./LightTooltip-Bs_25L1-.js";import"./MarkdownSynapse-D_Ohq5Ke.js";import"./SkeletonButton-C4MVharh.js";import"./SkeletonInlineBlock-DJy2BwKW.js";import"./SkeletonTable-BUzuull8.js";import"./SkeletonParagraph-D8WDF9hI.js";import"./JsonSchemaForm-DEGQFPdl.js";import"./GridLegacy-ZgBv7Ris.js";import"./HelpTwoTone-CmmWLbs7.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Dv7sXxns.js";import"./_createAggregator-hFqdriG_.js";import"./_baseMap-9rlWQfeU.js";import"./DateTimePicker-B_glK6u0.js";import"./useMobilePicker-Dyi-QtVu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-mvHZWRNu.js";import"./index-CK_NCQ6g.js";import"./Chip-DN1AmnB5.js";import"./Tabs-Camj93qY.js";import"./KeyboardArrowRight-CVGwcAb4.js";import"./Autocomplete-DGDO1Hlr.js";import"./usePreviousProps-BZlmNWgp.js";import"./use-deep-compare-effect.esm-DZQaImun.js";import"./TextWidget-CTaRSi6e.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
