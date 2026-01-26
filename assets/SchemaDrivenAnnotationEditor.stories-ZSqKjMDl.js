import{jG as p}from"./iframe-BZ6Cksnd.js";import{S as a}from"./SchemaDrivenAnnotationEditor-BjMMVmk2.js";import"./index-Chi_LkuB.js";import"./useEntity-G_TXiFsJ.js";import"./pickBy-BNVHpo-c.js";import"./isString-CQsMPZlF.js";import"./_baseIteratee-MHolBcN4.js";import"./useQueries-Dko-e5-x.js";import"./useSuspenseQuery-BArtp2Wi.js";import"./useInfiniteQuery-Cab2Nvsr.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-r_DKGK-Q.js";import"./useSchema-Qf3MtX4F.js";import"./index-kgaiScbE.js";import"./enums-BfljZszV.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Dx2X7r9r.js";import"./uniq-ChJWkOkZ.js";import"./forEach-CWOCpBhE.js";import"./Add-CBDnBpaM.js";import"./Grid-gDFBYhCk.js";import"./ListItem-BT6nkyPP.js";import"./listItemButtonClasses-d2SUOwj6.js";import"./ListItemIcon-CHa7dy_u.js";import"./MenuItem-BRVKaq9N.js";import"./ListItemText-CfO1AxaJ.js";import"./ArrowUpward-BWvpkSyP.js";import"./ContentCopy-BmB1Kkl_.js";import"./FormControlLabel-BlbED8cv.js";import"./Checkbox-DacBKnfp.js";import"./SwitchBase-DuQ6Nlg7.js";import"./FormGroup-CZp5TQcW.js";import"./RadioGroup-DnKhwnd_.js";import"./Radio-Ct6Cl-cM.js";import"./Slider-ClSFQx8Z.js";import"./visuallyHidden-Dan1xhjv.js";import"./index-C148XJoK.js";import"./ConfirmationDialog-BF42zmYQ.js";import"./DialogBase-DRojLOwK.js";import"./Close-DjUjyOYX.js";import"./HelpPopover-C2Z3UJR4.js";import"./MarkdownPopover-B8e90Ko7.js";import"./LightTooltip-Bs22fiBY.js";import"./MarkdownSynapse-DRGuoN53.js";import"./SkeletonButton-eBqXNQMI.js";import"./SkeletonInlineBlock-CaEvhC-d.js";import"./SkeletonTable-BgNPNqlP.js";import"./SkeletonParagraph-DuP-_ghR.js";import"./JsonSchemaForm-CyRI4Fs5.js";import"./GridLegacy-BhNZp9H7.js";import"./HelpTwoTone-OZL14JiP.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-CnqgaP8C.js";import"./_createAggregator-BkuSEEZL.js";import"./_baseMap-DChNRkmg.js";import"./DateTimePicker-Dm6fdaqL.js";import"./useMobilePicker-SzWMcyVu.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-b8rmBexF.js";import"./index-DT9MyxYS.js";import"./Chip-CRcycbBa.js";import"./Tabs-CmhFSkTc.js";import"./KeyboardArrowRight-CJUy9482.js";import"./Autocomplete-Bo2TOJ1L.js";import"./usePreviousProps-BOCDsbRu.js";import"./use-deep-compare-effect.esm-BqdL8QU0.js";import"./TextWidget-MaZDRulH.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,qr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
