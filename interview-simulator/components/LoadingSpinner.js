import * as React from 'react'
import { TextStyle, Animated, Easing,Image } from 'react-native'

export const LoadingSpinner = React.memo(
  ({ color = Colors['sand'], size = FontSize['md'] - 1, fadeInDelay = 1000, ...props }: Props) => {
    const fadeInValue = new Animated.Value(0)
    const spinValue = new Animated.Value(0)

    Animated.sequence([
      Animated.delay(fadeInDelay),
      Animated.timing(fadeInValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start()

    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 360,
        duration: 300000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()

    return (
      <Animated.View
        style={{
          opacity: fadeInValue,
          transform: [{ rotate: spinValue }],
        }}
      >
               <Image
              source={require("../assets/icons/reskin/funnySkinIcon.png")}
              style={{
                resizeMode: "stretch",
                width: 100,
                height: 100,
                borderRadius: 100 / 2,
                borderColor: "white",
                borderWidth: 3
              }}
            />
      </Animated.View>
    )
  }
)

type Props = {
  color?: TextStyle['color'],
  size?: 5
}