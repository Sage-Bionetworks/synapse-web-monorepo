import{jJ as T}from"./iframe-mGy2Wk6y.js";import{S as C}from"./SchemaDrivenAnnotationEditor-Dmb7Pdlx.js";import"./index-r8ZA1smB.js";import"./useEntity-CTXea8wh.js";import"./pickBy-FREIJ5sY.js";import"./isString-Drlyh7OZ.js";import"./_baseIteratee-B87rLCNJ.js";import"./useQueries-DkOcIflI.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-BfuuwBv9.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DSEth7sM.js";import"./useSchema-qLdP2N06.js";import"./index-D6bbeHS9.js";import"./enums-CTzhWsRl.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CDQIHyBg.js";import"./uniq-owFX0wPL.js";import"./forEach-B8iwwgef.js";import"./Grid-DHByANVC.js";import"./ListItem-CMv-rZtg.js";import"./listItemButtonClasses-BVqC1a8a.js";import"./ListItemIcon-CXIaUyKN.js";import"./MenuItem-OonJkNvT.js";import"./ListItemText-BjzqLVqC.js";import"./ArrowUpward-CKQWPJ86.js";import"./ContentCopy-DGzkAEgK.js";import"./FormControlLabel-w7O-liTB.js";import"./Checkbox-U16cDoFV.js";import"./SwitchBase-0JJlcDJX.js";import"./FormGroup-D09-Bt8f.js";import"./RadioGroup-aHpcKJ0n.js";import"./Radio-CBX5G-09.js";import"./Slider-BeAvCjUE.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Ca4CsGOZ.js";import"./DialogBase-Cu5joM36.js";import"./Close-DxD9H32T.js";import"./HelpPopover-CiiiUNoD.js";import"./MarkdownPopover-BSD3N8yp.js";import"./LightTooltip-CLAvFJUE.js";import"./MarkdownSynapse-BKRl9ICh.js";import"./SkeletonButton-D8FF59H8.js";import"./SkeletonInlineBlock-DsW0TT6X.js";import"./SkeletonTable-kLNdUUmz.js";import"./SkeletonParagraph-D3sTCCy6.js";import"./JsonSchemaForm-B_Zndga7.js";import"./GridLegacy-C_b13dml.js";import"./HelpTwoTone-D96pskB7.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DKmpt1Lj.js";import"./_createAggregator-CnAvzjW4.js";import"./_baseMap-CbP99YWG.js";import"./DateTimePicker-B0LvxL6Q.js";import"./useMobilePicker-FISV3ASc.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-4gf08juH.js";import"./index-DiAJBedM.js";import"./Chip-DXX-HH6K.js";import"./Tabs-2fQZwrHj.js";import"./KeyboardArrowRight-DSbQoq5I.js";import"./Autocomplete-BjiMn2sI.js";import"./usePreviousProps-BY0gG7I9.js";import"./use-deep-compare-effect.esm-C-7vAf0E.js";import"./TextWidget-BHULFNv1.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
