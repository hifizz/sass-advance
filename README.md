# sass-advance
SASS advance is a project help you understand sass & write better sass code.

## Base
@extend 意为拓展
@include 意为引用

## mixin 
把一坨代码放到你想重复的地方

## placeholder
把一坨代码写好，引用它，你的标签

## function
可以有返回值


## 条件判断

@if

```scss
$lte7:true !default; //是否兼容ie6,7 
$size: small;
$huge: 'abc';

// inline-block 
// ie6-7 *display: inline;*zoom:1; 
@mixin inline-block {
  display: inline-block;
  @if $lte7 { 
    *display: inline;*zoom:1; 
  }
  @else {
    display: flex;
  }
  
  @if $size == 'small' {
    
  } @else {
  
  }
  
  @if $huge != 'abc' {
          
  } @else {
    
  }
}
```

## 循环

@for 

@for $var from through 和@for $var from to
through 包含最后这个值，to 不包含

```scss
@for $i from 1 through 3 {
  .item-#{$i} {
    width: 2rem * $i;
  }
}

@for $i from 1 to 4 {
  .item-#{$i} {
    height: .1rem * $i;
  }
}
```

@each 
```scss
@each $imageName in frame1, frame2, frame3, frame4, frame5 {
  .#{$imageName}-icon {
    background: url('./image/#{$imageName}.png');
  }
  .#{$imageName}-icon-active {
    background: url('./image/#{$imageName}-active.png');
  }
}

$images: frame1, frame2, frame3, frame4, frame5;

@each $imageName in $images {
  .#{$imageName}-icon {
    background: url('./image/#{$imageName}.png');
  }
  .#{$imageName}-icon-active {
    background: url('./image/#{$imageName}-active.png');
  }
}

```

@while 

```scss
$types: 4;
$type-width: 20px;

@while $types > 0 {
  .while-#{$types} {
    width: $types-width + $types;
  }
  $types: $types - 1;
}
```

## compare mixin & placeholder & function

**Mixin**

**placeholder**
**class vs placeholder**
**function**

## other

### 如何将你的scss文件发到npm包

- 建立repo
- publish 到 npm
- npm install 
- 项目中引用 @import('node_module/coolScss/index.scss');

## 阅读文章：
[sass揭秘之@mixin，%，@function](http://www.w3cplus.com/preprocessor/sass-mixins-function-placeholder.html)
[Sass控制命令：@if,@for,@each和@while](http://www.w3cplus.com/preprocessor/Sass-control-directives-if-for-each-while.html)
[sass 中文文档](https://www.sass.hk/docs/)

