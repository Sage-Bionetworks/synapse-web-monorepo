import{ju as p}from"./iframe-DrwjMxxV.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Bsvai-dM.js";import"./index-Chi_LkuB.js";import"./useEntity-CiC2Lmxg.js";import"./pickBy-ChSifmeA.js";import"./isString-CpD0Bh8x.js";import"./_baseIteratee-Bg4XJGB0.js";import"./useInfiniteQuery-CwESqI_x.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--2s-X5In.js";import"./useSchema-BgSkFK8l.js";import"./index-CP3M0U5-.js";import"./enums-S3JwEuYL.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dv1BcOvK.js";import"./uniq-CRAp08W0.js";import"./forEach-CWOCpBhE.js";import"./Add-sZ6vKZSJ.js";import"./Grid-DvvRnRVN.js";import"./ListItem-C2PKEgB-.js";import"./listItemButtonClasses-BZPHIOd3.js";import"./ListItemIcon-1LFh2z1-.js";import"./MenuItem-DjrjGQIr.js";import"./ListItemText-Dn8iWF1Y.js";import"./ArrowUpward-C7aY-WIv.js";import"./ContentCopy-CqIirUnj.js";import"./FormControlLabel-BMJLeEQT.js";import"./Checkbox-S2lGeQb3.js";import"./SwitchBase-D8cW9WMJ.js";import"./FormGroup-DuZ9xrQw.js";import"./RadioGroup-C7d0ejI4.js";import"./Radio-gzHzETCN.js";import"./Slider-Bj2QCNho.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B4VjD6Ag.js";import"./DialogBase-nWKWc-JJ.js";import"./Close-CigZT9Cr.js";import"./HelpPopover-B9CXRuRH.js";import"./MarkdownPopover-DnCXWrW5.js";import"./LightTooltip-CaqdPU_H.js";import"./MarkdownSynapse-CBAvDJdh.js";import"./SkeletonButton-B0AmZCB5.js";import"./SkeletonInlineBlock-CN425wR7.js";import"./SkeletonTable-hPiR5C1z.js";import"./SkeletonParagraph-zDUPBNGu.js";import"./JsonSchemaForm-D5YewBBc.js";import"./GridLegacy-xPvVBY50.js";import"./HelpTwoTone-CyTTUlZm.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DIEd1iW1.js";import"./_createAggregator-CZwDc77U.js";import"./_baseMap-0JApKS8Z.js";import"./DateTimePicker-D3fIPwYU.js";import"./useMobilePicker-BI2IZsZ9.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-XlOafEil.js";import"./index-DLIz_4HG.js";import"./Chip-CXid-GSQ.js";import"./Tabs-CEqXyl38.js";import"./KeyboardArrowRight-CKP8-ln5.js";import"./Autocomplete-Bx8jBSEq.js";import"./usePreviousProps-D4rTBGeb.js";import"./use-deep-compare-effect.esm-EYp_W6bt.js";import"./TextWidget-BOegNUHQ.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
