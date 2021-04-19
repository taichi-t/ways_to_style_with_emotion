例 
```const commonIconStyles = (styleProps) => ({

  …(styleProps.size === ‘small’ && {
    ‘& > *:nth-of-type(1)’: {
      fontSize: 18,
    },
  }),
```
> https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Button/Button.js


**& > *** 
子から孫全てと思っていたが違った。
隣接する子要素全てにスタイルを適用する。子要素でクラスを指定されている場合、負ける。

 **& > *:nth-of-type(n)**
上と一緒だけど、詳細度が少し強くなる。子要素自体にクラスでスタイルが指定されている場合、上書きする。

 **& > *:nth-of-type(1)**
1nだから、全部と思っていたが、子要素一番目のスタイルだけ上書きする

 **& > *:nth-of-type(1n)**
子要素全て

**& .text**
親要素の中にある子孫要素のtextクラス全てに適応する。
これ孫にスタイルを指定していても上書きされる強めのセレクター

**&.text(スペースなし)**
例
```
const Container = styled(‘div’)`
  &.red > .red {
    color: red;
  }
`;
```

親要素が.redクラスを持っている時だけ、.redクラスを持った子要素のは文字が赤くなる

  **&:nth-of-type(1)** 
これはusecaseが思いつかない、自身の要素に対してクラスを付与する
例
```
const Container = styled(‘div’)`
 background-color: blue;
  &:nth-of-type(1) {
    background-color: red;
  }
`;
```

この場合nthに対してのスタイルが適用される。詳細どが強めだから

**& :nth-of-type(1n)**
親以下の全ての子孫要素に適応されるみたい。なんでだ
**& > :nth-of-type(1n)**
子要素のみ
**& > *:nth-of-type(1n)**
子要素のみ

基本Class指定している場合*⇦で上書きしようとしても効かない

**Emotionメモ**
```
const Container = styled(‘div’)`
  .red{
    color: red;
  }
`;
```
これだとクラスがそもそも生成されない