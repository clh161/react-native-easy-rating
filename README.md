# react-native-easy-rating
[![npm package](https://img.shields.io/npm/v/react-native-easy-rating.svg?style=flat-square)](https://www.npmjs.org/package/react-native-easy-rating)

> A React Native component for rating view. Compatible with both iOS and Android.
<p align="center">
  <img src="./assets/demo_image_1.png"/>
</p>

####Tested with react-native 0.27.1

## Installation

```sh
npm install react-native-easy-rating --save
```


## Usage

### Props

| Prop | Type | Description | Required | Default |
|---|---|---|---|---|
|**`rating`**|`number`|Set initial rating|`No`|`0`|
|**`max`**|`number`|Set maximum of rating|`No`|`5`|
|**`iconWidth`**|`number`|Set width of icon|`No`|`36`|
|**`iconHeight`**|`number`|Set height of icon|`No`|`36`|
|**`iconSelected`**|`image`|Set image of selected icon|`No`|<img src="./images/icon_star_selected.png"/>|
|**`iconUnselected`**|`image`|Set image of unselected icon|`No`|<img src="./images/icon_star_unselected.png"/>|
|**`onRate`**|`function(rating)`|Trigger when rating changes|`Yes`||
|**`editable`**|`boolean`|Ability to change rating by tap|`No`|`Yes`|

### Example

```js
import  Rating from 'react-native-easy-rating'
...
<Rating
    rating={1}
    max={5}
    iconWidth={24}
    iconHeight={24}
    iconSelected={require('../../img/icon_star_selected.png')}
    iconUnselected={require('../../img/icon_star_unselected.png')}
    onRate={(rating) => this.setState({rating: rating})}/>
```
