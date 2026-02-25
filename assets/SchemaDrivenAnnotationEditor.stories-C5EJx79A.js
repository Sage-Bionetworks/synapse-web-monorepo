import{jF as p}from"./iframe-C0jSrR5c.js";import{S as a}from"./SchemaDrivenAnnotationEditor-o0gigv2I.js";import"./index-Chi_LkuB.js";import"./useEntity-EZ3XPIs0.js";import"./pickBy-SdRtXwSN.js";import"./isString-DxWdCZf8.js";import"./_baseIteratee-v5Xqf9Y2.js";import"./useQueries-BEt-pfoU.js";import"./useSuspenseQuery-CHrCTvKw.js";import"./useInfiniteQuery-Dm7YsOQW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-De80g6tx.js";import"./useSchema-BGhcTbJo.js";import"./index-B8NOcV0i.js";import"./enums-BfiRLUSW.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C3bTbgFj.js";import"./uniq-DihkiDja.js";import"./forEach-CWOCpBhE.js";import"./Add-DtLdx5_e.js";import"./Grid-Bt5rSoGM.js";import"./ListItem-FrRRWul4.js";import"./listItemButtonClasses-BVYTYtx4.js";import"./ListItemIcon-Bxh2oKS3.js";import"./MenuItem-f2MANGxO.js";import"./ListItemText-COxgoNMn.js";import"./ArrowUpward-BttC03xr.js";import"./ContentCopy-qXsSsVT-.js";import"./FormControlLabel-CSkgcZCy.js";import"./Checkbox-CJXQl7g0.js";import"./SwitchBase-Bbxsa0TU.js";import"./FormGroup-7qIFK8z3.js";import"./RadioGroup-DmndWy01.js";import"./Radio-DNvuhsiL.js";import"./Slider-DZT4ufaJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BQA9hOtu.js";import"./DialogBase-DJJeOMKc.js";import"./Close-DWJA7LvA.js";import"./HelpPopover-k-mGSl5L.js";import"./MarkdownPopover-HA7m-95B.js";import"./LightTooltip-C3dz3Fkz.js";import"./MarkdownSynapse-EAeKywnO.js";import"./SkeletonButton-Da-HHa43.js";import"./SkeletonInlineBlock-kvwMQbuJ.js";import"./SkeletonTable-83ELoSn8.js";import"./SkeletonParagraph-C_qcfR_9.js";import"./JsonSchemaForm-BfEVIGvx.js";import"./GridLegacy-4RcJvnVH.js";import"./HelpTwoTone-BQG1VuPe.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-nZhDlPgf.js";import"./_createAggregator-CRgMuUIF.js";import"./_baseMap-9KwVBg8u.js";import"./DateTimePicker-DpFg5ZVA.js";import"./useMobilePicker-ClzpJM6i.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DzCyIo6K.js";import"./index-BLHQs1Hh.js";import"./Chip-DsSr72e_.js";import"./Tabs-CGGHjNdv.js";import"./KeyboardArrowRight-Bh21tQxf.js";import"./Autocomplete-xjWGGlV9.js";import"./usePreviousProps-Bc5HS6d5.js";import"./use-deep-compare-effect.esm-DLipLYZw.js";import"./TextWidget-KXko2T30.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Er={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
