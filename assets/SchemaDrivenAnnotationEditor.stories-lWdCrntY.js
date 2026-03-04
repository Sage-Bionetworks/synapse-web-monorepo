import{ju as p}from"./iframe-E5Ka0mIZ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Cmg1Md-D.js";import"./index-Chi_LkuB.js";import"./useEntity-KCwb7Xcv.js";import"./pickBy-CA13yUMQ.js";import"./isString-BHWtDWMA.js";import"./_baseIteratee-D6PNAt1_.js";import"./useInfiniteQuery-DcuDXesA.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CrDwVx5c.js";import"./useSchema-FhFyowaf.js";import"./index-DBD68gRB.js";import"./enums-D4jZWdEk.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C0RJNqJx.js";import"./uniq-C-hXHVR1.js";import"./forEach-CWOCpBhE.js";import"./Add-3GLBG0AA.js";import"./Grid-Dn4fGAyj.js";import"./ListItem-e7EjZo7L.js";import"./listItemButtonClasses-BOPKPtWT.js";import"./ListItemIcon-6k7Rt9SB.js";import"./MenuItem-DBqDOy7_.js";import"./ListItemText-CNUpR_xA.js";import"./ArrowUpward-C0Y4dBwC.js";import"./ContentCopy-BSB7yfUV.js";import"./FormControlLabel-CdVbVsO6.js";import"./Checkbox-CJ7-gE9x.js";import"./SwitchBase-CCwNSBco.js";import"./FormGroup-D1JCRekM.js";import"./RadioGroup-DifdY4wf.js";import"./Radio-fOhKhVeM.js";import"./Slider-BHGarhRA.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-ZdQ-24Ic.js";import"./DialogBase-JVTM_oQl.js";import"./Close-EPxz31Ms.js";import"./HelpPopover-CvoNF05b.js";import"./MarkdownPopover-DD6HYN95.js";import"./LightTooltip-B5aPrNqD.js";import"./MarkdownSynapse-BDwlDcaF.js";import"./SkeletonButton-kIjuP8ut.js";import"./SkeletonInlineBlock-C_4IQROm.js";import"./SkeletonTable-Crx1Nozv.js";import"./SkeletonParagraph-9oETCVT4.js";import"./JsonSchemaForm-DhPXmDci.js";import"./GridLegacy-C9PCq83K.js";import"./HelpTwoTone-DKTtHc2b.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-HsI6D_yx.js";import"./_createAggregator-Dp3u85SY.js";import"./_baseMap-DSEb_IbP.js";import"./DateTimePicker-BzmQ4XXo.js";import"./useMobilePicker-CyRZtjHb.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CMwUWjJT.js";import"./index-Cv8vAGy5.js";import"./Chip-Bk7-WqYd.js";import"./Tabs-Xin4TCvq.js";import"./KeyboardArrowRight-CFkKzKUm.js";import"./Autocomplete-CZFpr1MT.js";import"./usePreviousProps-BpJsEKbj.js";import"./use-deep-compare-effect.esm-C1Ytdmry.js";import"./TextWidget-dyoZcAzH.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};
