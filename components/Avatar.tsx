import { Image, StyleSheet, View } from 'react-native';

type AvatarProps = {
  uri: string;
  size?: number;
  highlighted?: boolean;
};

export function Avatar({ uri, size = 44, highlighted = false }: AvatarProps) {
  return (
    <View
      style={[
        styles.ring,
        {
          width: size + 8,
          height: size + 8,
          borderRadius: (size + 8) / 2,
          borderColor: highlighted ? '#C13584' : 'transparent',
        },
      ]}>
      <View
        style={[
          styles.innerRing,
          {
            width: size + 3,
            height: size + 3,
            borderRadius: (size + 3) / 2,
          },
        ]}>
        <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerRing: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  ring: {
    alignItems: 'center',
    backgroundColor: '#FCAF45',
    borderWidth: 2,
    justifyContent: 'center',
  },
});
