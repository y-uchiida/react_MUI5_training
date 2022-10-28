# Box コンポーネント

様々な MUI コンポーネントの汎用ラッパーとして利用できる
たとえば、`sx` は MUI コンポーネントとして実装されていない一般 html 要素のコンポーネントには使えないが、
Box コンポーネントに `component` を設定してやれば対応できる

```tsx
{
  /* img はMUI コンポーネントではないので、sx プロパティは設定できない
   * Property 'sx' does not exist on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>'.
   */
}
<img sx={{ width: "100%" }} />;

{
  /* Box コンポーネントとして作成して、component props で実際に生成するhtml 要素を差し替えればsxが利用できる */
}
<Box component="img" sx={{ width: "100%" }}>
```
