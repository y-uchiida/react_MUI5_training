# テーマのカスタマイズ

MUI がデフォルトで Material UI の見栄えを実装したテーマを提供しているが、それを上書きや拡張をして利用したい場合がある  
その場合は、createTheme でテーマを作成する  
差分のみ記述すればよいので、記述量は多くない

## MUI コンポーネントのバリアントを修正する

```tsx
/* このコンポーネントに適用するテーマを作成する
 * MUIが用意しているデフォルトのテーマを読み込んでいるので、
 * それを上書きする形で記述できる
 */
const theme = createTheme({
  /* コンポーネントのスタイル設定を上書きする */
  components: {
    /* MUI に含まれる内容はMuiXXXXXの形式で名称を指定する */
    MuiTypography: {
      variants: [
        {
          /* Typography コンポーネントで body2 バリアントを指定した際のfont-size を11に上書きする */
          props: { variant: "body2" },
          style: { fontSize: 11 },
        },
      ],
    },
  },
});

export const SampleComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2">font-size 11</Typography>
    </ThemeProvider>
  );
};
```

## MUI コンポーネントに新しいバリアントを追加する

TypeScript を使っている場合、定義されていないバリアント名を createTheme で利用するとエラーになる  
あらかじめ、モジュール拡張でバリアント名を追加しておく

```tsx
/* Typography コンポーネントを読み込みしておく */
import { Typography } from "@mui/material";

/* Typography コンポーネントでbody3 バリアントを利用するため、
 * モジュール拡張でバリアントを追加しておく
 */
declare module "@mui/material/Typography" {
  /* interface は、 <MUIコンポーネント名>PropsVariantOverrides */
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

/* このコンポーネントに適用するテーマを作成する
 * MUIが用意しているデフォルトのテーマを読み込んでいるので、
 * それを上書きする形で記述できる
 */
const theme = createTheme({
  /* コンポーネントのスタイル設定を上書きする */
  components: {
    /* MUI に含まれる内容はMuiXXXXXの形式で名称を指定する */
    MuiTypography: {
      variants: [
        {
          /* Typography コンポーネントで body3 バリアントを指定した際のfont-size を9に設定する */
          props: { variant: "body3" },
          style: { fontSize: 9 },
        },
      ],
    },
  },
});

export const SampleComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="body2">font-size 11</Typography>
    </ThemeProvider>
  );
};
```

## 参考

- Theming:  
  https://mui.com/material-ui/customization/theming/

- Theme Components:  
  https://mui.com/material-ui/customization/theme-components/

- Module augmentation (TypeScript Document):  
  https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
