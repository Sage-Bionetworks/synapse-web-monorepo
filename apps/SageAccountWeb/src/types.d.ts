import '@mui/material/styles';
declare type CustomTypographyVariants = 'headline1' | 'headline2' | 'headline3' | 'body1' | 'body1Italic' | 'body2' | 'breadcrumb1' | 'breadcrumb2' | 'smallText1' | 'smallText2' | 'smallLink' | 'label' | 'buttonLink' | 'hintText' | 'sectionTitle' | 'subsectionHeader' | 'dataFieldKey';
declare type RecordWithCustomVariantKeys<Value> = {
    [key in CustomTypographyVariants]: Value;
};
declare module '@mui/material/styles' {
    interface TypographyVariants extends RecordWithCustomVariantKeys<React.CSSProperties> {
    }
    interface TypographyVariantsOptions extends RecordWithCustomVariantKeys<React.CSSProperties | undefined> {
    }
    interface Palette {
        tertiary: Palette['primary'];
    }
    interface PaletteOptions {
        tertiary: PaletteOptions['primary'];
    }
}
declare module '@mui/material' {
    interface Color {
        [1000]: string;
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides extends RecordWithCustomVariantKeys<true> {
    }
}
export { };

