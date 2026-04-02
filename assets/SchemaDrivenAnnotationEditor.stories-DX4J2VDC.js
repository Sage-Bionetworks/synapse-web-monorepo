import{jx as p}from"./iframe-DPduZJWc.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BnTi6l8T.js";import"./index-Chi_LkuB.js";import"./useEntity-B7GWjYKE.js";import"./pickBy-BjVoKohw.js";import"./isString-DiLk9f6z.js";import"./_baseIteratee-BLVygEfb.js";import"./useInfiniteQuery-B39iFfDz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DcvUE9Q3.js";import"./useSchema-B9T21RCw.js";import"./index-Cyoz7O5t.js";import"./enums-DvEmqR6Z.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-1m_fayOA.js";import"./uniq-DV-Xgi6k.js";import"./forEach-UWyboym_.js";import"./Add-CERvE2Nb.js";import"./Grid-BFgV-dQk.js";import"./ListItem-ByXdA_an.js";import"./listItemButtonClasses-243dWRtx.js";import"./ListItemIcon-DB9L7Xjk.js";import"./MenuItem-1gOTYJyP.js";import"./ListItemText-DdUg5Ghx.js";import"./ArrowUpward-Cer2UZn5.js";import"./ContentCopy-eC11IF42.js";import"./FormControlLabel-BpkEw7nL.js";import"./Checkbox-Ds1rV2cF.js";import"./SwitchBase-Fu9-MOwD.js";import"./FormGroup-DBwMX7Of.js";import"./RadioGroup-DGUX2nCv.js";import"./Radio-Bx-ZEiUl.js";import"./Slider-CqebIO4r.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-LpXAB-ow.js";import"./DialogBase-6R3r0e7Y.js";import"./Close-BuwZ34Px.js";import"./HelpPopover-DelJm9J0.js";import"./MarkdownPopover-DPdOVRGX.js";import"./LightTooltip-CxIVI24Y.js";import"./MarkdownSynapse-C1S9WvZX.js";import"./SkeletonButton-CKk23r94.js";import"./SkeletonInlineBlock-DbjHmb1S.js";import"./SkeletonTable-BeG2UwMn.js";import"./SkeletonParagraph-D5PcDpGR.js";import"./JsonSchemaForm-BpdDOtrh.js";import"./GridLegacy-CnBOQiKC.js";import"./HelpTwoTone-CWWS7Q77.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DXXHUlzk.js";import"./_createAggregator-BLbYlQxB.js";import"./_baseMap-14uFFhMQ.js";import"./DateTimePicker-BBWGXHY0.js";import"./useMobilePicker-CyYXUH03.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-D_2Vn6ul.js";import"./index-B0RvRGln.js";import"./Chip-CpsfZ-DY.js";import"./Tabs-DXLGEmcR.js";import"./KeyboardArrowRight-BH4SzDjk.js";import"./Autocomplete-DRLfgFqZ.js";import"./usePreviousProps-FJqFTEkp.js";import"./use-deep-compare-effect.esm-B4WO_muK.js";import"./TextWidget-CR1n5Y1p.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
