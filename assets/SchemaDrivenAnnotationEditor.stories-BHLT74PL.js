import{jx as p}from"./iframe-B7gyTvXJ.js";import{S as a}from"./SchemaDrivenAnnotationEditor-DH_PpBFd.js";import"./index-Chi_LkuB.js";import"./useEntity-B9e80l0L.js";import"./pickBy-8ftCar9P.js";import"./isString-DHmHBQ1y.js";import"./_baseIteratee-XgjUyU1H.js";import"./useInfiniteQuery-Cp7Cpj3Z.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DIG05F37.js";import"./useSchema-C7W-nykh.js";import"./index-4CmomcRT.js";import"./enums-SAfse8Cx.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-D6h0LkgA.js";import"./uniq-dO9anJPL.js";import"./forEach-CWOCpBhE.js";import"./Add-RNn1evQP.js";import"./Grid-DuwlkHi3.js";import"./ListItem-BrhDRM0I.js";import"./listItemButtonClasses-buXogD7e.js";import"./ListItemIcon-DNTFrjSz.js";import"./MenuItem-Dou85YW3.js";import"./ListItemText-DfSvqZC_.js";import"./ArrowUpward-BovgugeQ.js";import"./ContentCopy-t_YzDc4m.js";import"./FormControlLabel-Bou_0ZQR.js";import"./Checkbox-Bx85pmu-.js";import"./SwitchBase--Gsf_r-d.js";import"./FormGroup-zuN1GtfJ.js";import"./RadioGroup-B4KNPfiB.js";import"./Radio-CRyyzhzR.js";import"./Slider-CXBY59Zq.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-B3QhZ0u5.js";import"./DialogBase--rdhqJoF.js";import"./Close-BtEQAkrf.js";import"./HelpPopover-CgJi15Pc.js";import"./MarkdownPopover-CtJuHvPt.js";import"./LightTooltip-DabWC6y6.js";import"./MarkdownSynapse-27_wa5xd.js";import"./SkeletonButton-BISD75XD.js";import"./SkeletonInlineBlock-w4q-zSuw.js";import"./SkeletonTable-DjMRvgKw.js";import"./SkeletonParagraph-DmG5QWjf.js";import"./JsonSchemaForm-DB9OQgPP.js";import"./GridLegacy-B65Fb4E2.js";import"./HelpTwoTone-DTssj5qA.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-pnB2cFPO.js";import"./_createAggregator-Gj7rO-ZD.js";import"./_baseMap-DOtyuz8m.js";import"./DateTimePicker-BQrU5My1.js";import"./useMobilePicker-BOlFBuSh.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DkUah7Gt.js";import"./index-WdAvK5aU.js";import"./Chip-CZ04a0tX.js";import"./Tabs-i4Y6Eu5o.js";import"./KeyboardArrowRight-Y7isli1G.js";import"./Autocomplete-DzNYU7ih.js";import"./usePreviousProps-DBkndVCf.js";import"./use-deep-compare-effect.esm-CaCjzTGw.js";import"./TextWidget-jw_DiUox.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
