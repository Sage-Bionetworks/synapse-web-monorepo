import{jB as T}from"./iframe-DkJtXMGY.js";import{S as C}from"./SchemaDrivenAnnotationEditor-ahYb2L0A.js";import"./index-r8ZA1smB.js";import"./useEntity-CO16wdW2.js";import"./pickBy-TCGe6MDQ.js";import"./isString-BGlEt5YE.js";import"./_baseIteratee-fqRe5hEX.js";import"./useQueries-Z-3gwq5U.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-iYy68X6j.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-B1ApGHDu.js";import"./useSchema-BURBpdhN.js";import"./index-BYpz4R5I.js";import"./enums-DEEgdRlW.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-BWCq4nkB.js";import"./uniq-BY50vU0D.js";import"./forEach-B8iwwgef.js";import"./Grid-CVeqhvD2.js";import"./ListItem-CU_IxpDS.js";import"./listItemButtonClasses-CsxA2vb9.js";import"./ListItemIcon-CKBraPLc.js";import"./MenuItem-__VZzdvD.js";import"./ListItemText-CZ27qOtB.js";import"./ArrowUpward-CDeIUYL5.js";import"./ContentCopy-VQO8hClA.js";import"./FormControlLabel-BtRUWfK0.js";import"./Checkbox-1S1SsZEO.js";import"./SwitchBase-LVCk0Af2.js";import"./FormGroup-DCl1RDUc.js";import"./RadioGroup-CGXPC58P.js";import"./Radio-DnYOEHwV.js";import"./Slider-zoiZ_8eO.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DYXCYbxt.js";import"./DialogBase-buJoyvfa.js";import"./Close-BlNc4-DS.js";import"./HelpPopover-Bw54_hwN.js";import"./MarkdownPopover-HbQMpPTM.js";import"./LightTooltip-DemkIWEH.js";import"./MarkdownSynapse-Cj88j8IZ.js";import"./SkeletonButton-Wvy1B_g_.js";import"./SkeletonInlineBlock-BZs9NYqd.js";import"./SkeletonTable-Boy2sN_O.js";import"./SkeletonParagraph-D2M_qyIo.js";import"./JsonSchemaForm-DKYLsf2n.js";import"./GridLegacy-kxAEsx-9.js";import"./HelpTwoTone-BtgvyVn6.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-CDC241_8.js";import"./_createAggregator-yAzaqnfe.js";import"./_baseMap-lB5D5faS.js";import"./DateTimePicker-BR4MscyF.js";import"./useMobilePicker-BQTbo9ri.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-C08nIKom.js";import"./index-BhkdXidL.js";import"./Chip-C5Eg6zQf.js";import"./Tabs-NNsgGg1P.js";import"./KeyboardArrowRight-DbHT7G6L.js";import"./Autocomplete-D8JJjyd7.js";import"./usePreviousProps-B2s_NTFp.js";import"./use-deep-compare-effect.esm-aTxZvlU9.js";import"./TextWidget-DRGRa_yI.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Kr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...(m=(a=r.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var c,d,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...(y=(d=e.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var S,l,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...(A=(l=o.parameters)==null?void 0:l.docs)==null?void 0:A.source}}};var f,v,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var E,q,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Lr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Lr as __namedExportsOrder,Kr as default};
