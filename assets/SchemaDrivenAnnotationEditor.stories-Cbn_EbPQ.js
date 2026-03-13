import{jx as p}from"./iframe-DYqeQvAZ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CTn1NkLX.js";import"./index-Chi_LkuB.js";import"./useEntity-mBsxuZXx.js";import"./pickBy-CTOx6nSH.js";import"./isString-DVM9QblG.js";import"./_baseIteratee-CwqQCSfn.js";import"./useInfiniteQuery-SfBiKEGU.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-D5yDxhUe.js";import"./useSchema-CL-67ALV.js";import"./index-Bzdnj7Yj.js";import"./enums-B7du1rR4.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-_LxsRH98.js";import"./uniq-CRer6ENb.js";import"./forEach-CWOCpBhE.js";import"./Add-Dr6VrEGG.js";import"./Grid-Dl_qCstV.js";import"./ListItem-CtB1jOmf.js";import"./listItemButtonClasses-shpiQeB_.js";import"./ListItemIcon-eskkTVOS.js";import"./MenuItem-Cqn5rY2B.js";import"./ListItemText-4eUfa8nP.js";import"./ArrowUpward-EKbjAqYX.js";import"./ContentCopy-Dx_bwQcF.js";import"./FormControlLabel-DILoqHH7.js";import"./Checkbox-C0Xf7xe7.js";import"./SwitchBase-BNafcXUF.js";import"./FormGroup-BatBknKL.js";import"./RadioGroup-Djf84trF.js";import"./Radio-KXIIYj7j.js";import"./Slider-DrMsMt8e.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-F90KYiVg.js";import"./DialogBase-D6ru6QGV.js";import"./Close-Dsj7f386.js";import"./HelpPopover-CyEsnN__.js";import"./MarkdownPopover-Z2HTRS7p.js";import"./LightTooltip-GZti0qG7.js";import"./MarkdownSynapse-C2R_2nbo.js";import"./SkeletonButton-bpCoMqPJ.js";import"./SkeletonInlineBlock-CAM6iPYb.js";import"./SkeletonTable-tbDH2wnj.js";import"./SkeletonParagraph-CY2Bzkjl.js";import"./JsonSchemaForm-CW8xTAp4.js";import"./GridLegacy-CO9xa43z.js";import"./HelpTwoTone-CJC-s9Bt.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-Bba17Ldt.js";import"./_createAggregator-ysbAhqr9.js";import"./_baseMap-BWiulIsu.js";import"./DateTimePicker-puiGwNJe.js";import"./useMobilePicker-zYtIcz6J.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CWUVZQq4.js";import"./index-DB86q32y.js";import"./Chip-40aQ4DbO.js";import"./Tabs-BKwW2lFu.js";import"./KeyboardArrowRight-CqEGYHJ0.js";import"./Autocomplete-DGblRI7b.js";import"./usePreviousProps-qB3fNTxz.js";import"./use-deep-compare-effect.esm-nCiz3OyP.js";import"./TextWidget-C4HMOVin.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
