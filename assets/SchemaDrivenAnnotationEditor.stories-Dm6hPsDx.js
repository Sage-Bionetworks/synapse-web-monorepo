import{jJ as T}from"./iframe-CQAvee5F.js";import{S as C}from"./SchemaDrivenAnnotationEditor-C2jHcco-.js";import"./index-r8ZA1smB.js";import"./useEntity-DK8472fX.js";import"./pickBy-DOjwenqt.js";import"./isString-By3SdYtK.js";import"./_baseIteratee-Cl9aDW9N.js";import"./useQueries-DVF01cqS.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Dh-acjx4.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-Blj-MaJb.js";import"./useSchema-nLM-iaWb.js";import"./index-Dn6TX9jZ.js";import"./enums-eZ-GU6tI.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Bhh-05-4.js";import"./uniq-D0pi3ffb.js";import"./forEach-B8iwwgef.js";import"./Grid-BJFbT69z.js";import"./ListItem-BQK2fAKD.js";import"./listItemButtonClasses-4LElYcsT.js";import"./ListItemIcon-Bwho_rjQ.js";import"./MenuItem-CHCA8JKh.js";import"./ListItemText-CwZDrYp4.js";import"./ArrowUpward-BthLdMnv.js";import"./ContentCopy-Cc6EeCN5.js";import"./FormControlLabel-CfYT5tSK.js";import"./Checkbox-B9l7tm8b.js";import"./SwitchBase-4nAtzau0.js";import"./FormGroup-G72LexTM.js";import"./RadioGroup-DMENGTda.js";import"./Radio-pvaSUjJI.js";import"./Slider-DZLA40Zm.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-ClzkjvZo.js";import"./DialogBase-A7SeZij4.js";import"./Close-BdW4XSEx.js";import"./HelpPopover-DL3O30BL.js";import"./MarkdownPopover-CxnxngRT.js";import"./LightTooltip-DUFjrAlt.js";import"./MarkdownSynapse-CHoFalek.js";import"./SkeletonButton-BbTQsPlY.js";import"./SkeletonInlineBlock-QfDnwJMw.js";import"./SkeletonTable-n8bsuBVZ.js";import"./SkeletonParagraph-BHKzvjmx.js";import"./JsonSchemaForm-6KiaE9MN.js";import"./GridLegacy-Dnxc1oSU.js";import"./HelpTwoTone-DhPLkFUF.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BhTNA55G.js";import"./_createAggregator-zGBbcbMe.js";import"./_baseMap-C8e87bzq.js";import"./DateTimePicker-CPv6ybkv.js";import"./useMobilePicker-BQU12qjh.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-D58XGx7V.js";import"./index-Cqst0OBx.js";import"./Chip-yjRG6i6C.js";import"./Tabs-DoJPRyuK.js";import"./KeyboardArrowRight-rUPzalgQ.js";import"./Autocomplete-DaoHHk0Z.js";import"./usePreviousProps-wNUX2g6d.js";import"./use-deep-compare-effect.esm-DC102v78.js";import"./TextWidget-DdsjVFZX.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
