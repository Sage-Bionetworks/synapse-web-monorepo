import{jJ as T}from"./iframe-D6eR7C50.js";import{S as C}from"./SchemaDrivenAnnotationEditor-C9VZjcj9.js";import"./index-r8ZA1smB.js";import"./useEntity-DNufQQQW.js";import"./pickBy-x-ae5_pl.js";import"./isString-DZzqsFzJ.js";import"./_baseIteratee-Bwsp8yIO.js";import"./useQueries-CD6DplQM.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CffjsQaC.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-CHdBFY-B.js";import"./useSchema-D_m4DVKw.js";import"./index-ovTsymcx.js";import"./enums-BCf7Oar7.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-C_cqjCnk.js";import"./uniq--Rsa_ofS.js";import"./forEach-B8iwwgef.js";import"./Grid-Bakrs6vU.js";import"./ListItem-B7f8JJoW.js";import"./listItemButtonClasses-BIwRHTid.js";import"./ListItemIcon-Dy6Cchua.js";import"./MenuItem-UfkvjnI3.js";import"./ListItemText-JJ288Nby.js";import"./ArrowUpward-9p6LnTvE.js";import"./ContentCopy-ClbjZVqp.js";import"./FormControlLabel-BRDNXXw1.js";import"./Checkbox-BLKUvkpE.js";import"./SwitchBase-CYMouBrc.js";import"./FormGroup-ah1sm0cZ.js";import"./RadioGroup-DAiYdEQJ.js";import"./Radio-6tuXV9rB.js";import"./Slider-CWr7Y8Vj.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-FZZd4L0v.js";import"./DialogBase-CGoUFCyI.js";import"./Close-B4yr33wu.js";import"./HelpPopover-BNtCkWxN.js";import"./MarkdownPopover-Bd8pVsTv.js";import"./LightTooltip-DyvHiMMn.js";import"./MarkdownSynapse-CDGiSRnF.js";import"./SkeletonButton-Btmr7__Y.js";import"./SkeletonInlineBlock-DkWMHFrC.js";import"./SkeletonTable-CT4J_TKG.js";import"./SkeletonParagraph-BWm0oiG8.js";import"./JsonSchemaForm-r8QZXdm9.js";import"./GridLegacy-DpdR0vbs.js";import"./HelpTwoTone-XsZ-wxq6.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./groupBy-hJ3QlSp3.js";import"./_createAggregator-rT442lJB.js";import"./_baseMap-3-lUIYqN.js";import"./DateTimePicker-BO8m9xCI.js";import"./useMobilePicker-gFXz4szQ.js";import"./index-C-_p9hnQ.js";import"./index-Chjiymov.js";import"./InputAdornment-CrE8WHFU.js";import"./index-CabImiDI.js";import"./Chip-Boc7yQYh.js";import"./Tabs-B2OW2xEw.js";import"./KeyboardArrowRight-DxNOI6w1.js";import"./Autocomplete-ClI0svSC.js";import"./usePreviousProps-CX07kGfA.js";import"./use-deep-compare-effect.esm-BZrDoxNT.js";import"./TextWidget-mmx7_y5q.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Jr={title:"Synapse/SchemaDrivenAnnotationEditor",component:C,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${T.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};var p,a,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
