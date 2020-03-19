import React, {useState} from 'react';
import {View} from 'react-native';

import {Button} from '@ui-kitten/components';

const isolatedListItem = ({styles, index, item}) => {
  const [state, setState] = useState(false);
  return (
    <View>
      {/* <ButtonGroup appearance="outline"> */}
      <Button
        onPress={() => {
          '';
        }}>
        Remover
      </Button>
      <Button disabled={false} onPress={() => setState(true)}>
        Equipar
      </Button>
      {/* </ButtonGroup> */}
    </View>
  );
};

export default isolatedListItem;
