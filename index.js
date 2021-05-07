import { Image, TouchableWithoutFeedback, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import defaultIconSelected from './images/icon_star_selected.png';
import defaultIconUnselected from './images/icon_star_unselected.png';

function Rating(props) {
  const [internalRating, setInternalRating] = useState(props.rating ?? 0);
  const rating = props.rating ?? internalRating;

  const max = props.max ?? 5;
  const editable = props.editable ?? true;
  const iconWidth = props.iconWidth ?? 36;
  const iconHeight = props.iconHeight ?? 36;
  const iconSelected = props.iconSelected ?? defaultIconSelected;
  const iconUnselected = props.iconUnselected ?? defaultIconUnselected;

  const icons = useMemo(() => {
    const ics = [];
    for (let i = 1; i <= max; i += 1) {
      ics.push(<TouchableWithoutFeedback
        disabled={!editable}
        key={i}
        style={{ height: iconHeight, width: iconWidth }}
        onPress={() => {
          setInternalRating(i);
          props.onRate?.(i);
        }}
      >
        <Image
          style={{ height: iconHeight, width: iconWidth }}
          source={rating >= i ? iconSelected : iconUnselected}
        />
      </TouchableWithoutFeedback>);
    }
    return ics;
  }, [max, props.onRate, iconHeight, iconWidth, editable, iconSelected, iconUnselected, rating]);

  return (
    <View style={[props.style, { flexDirection: 'row' }]}>
      {icons}
    </View>
  );
}

export default Rating;
