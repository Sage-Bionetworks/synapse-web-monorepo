import{jJ as T}from"./iframe-BZoqbf8T.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Cd5d2HKA.js";import"./index-r8ZA1smB.js";import"./useEntity-DYsdQDgR.js";import"./pickBy-KIS95m-A.js";import"./isString-Bq9Em4Mr.js";import"./_baseIteratee-x9q7dVdV.js";import"./useQueries-V-XKKRJy.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-DDBDj7dn.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BF5-pJwy.js";import"./useSchema-ufWoDB2I.js";import"./index-BDZEjZxN.js";import"./enums-BYHBoqUy.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-o2iNJkzb.js";import"./uniq-BadwzQtJ.js";import"./forEach-B8iwwgef.js";import"./Grid-KGWSaruy.js";import"./ListItem-CnBJ0S4C.js";import"./listItemButtonClasses-Cd7AdLZO.js";import"./ListItemIcon-C21GAVvP.js";import"./MenuItem-97gDT1Wf.js";import"./ListItemText-C0Xu6Bpx.js";import"./ArrowUpward-DCNemEjh.js";import"./ContentCopy-BRDYp8Va.js";import"./FormControlLabel-DbZXuN4t.js";import"./Checkbox-Bj9CoxMt.js";import"./SwitchBase-b-Epk7F3.js";import"./FormGroup-C-mD4jOJ.js";import"./RadioGroup-CnSaVFMF.js";import"./Radio-Bqg0OkXP.js";import"./Slider-ZXWHs2HW.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-BvotHdXo.js";import"./DialogBase-CcQFp5O5.js";import"./Close-BmiGShPN.js";import"./HelpPopover-JjpkA04K.js";import"./MarkdownPopover-UFqyqYVS.js";import"./LightTooltip-C01xIOBo.js";import"./MarkdownSynapse-BhKULhlF.js";import"./SkeletonButton-CNv8YWby.js";import"./SkeletonInlineBlock-CT4iLvxR.js";import"./SkeletonTable-Cbhot3O8.js";import"./SkeletonParagraph-BxFUaFhk.js";import"./JsonSchemaForm-DIkNiNeQ.js";import"./GridLegacy-B3M6YblN.js";import"./HelpTwoTone-CBAI1ksn.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-U78t9lNv.js";import"./_createAggregator-BtINjljN.js";import"./_baseMap-BD2hY9d2.js";import"./DateTimePicker-DIGQjyHQ.js";import"./useMobilePicker-D9-NGYSB.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-M7pSpk5G.js";import"./index-DD9jDIum.js";import"./Chip-DWh3L3o0.js";import"./Tabs-DL1ukq3V.js";import"./KeyboardArrowRight-DT-Vks8D.js";import"./Autocomplete-cb7TQ8v-.js";import"./usePreviousProps-Dkn6w4t9.js";import"./use-deep-compare-effect.esm-DsSeDtiF.js";import"./TextWidget-BmJXEFQF.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(q=s.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};const Kr=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Kr as __namedExportsOrder,Jr as default};
