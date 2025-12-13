// Zum mappen von classname auf die style Prop zum verwenden von Expo Image

import { cssInterop } from "nativewind";
import { Image as ExpoImage } from "expo-image";

export const Image = cssInterop(ExpoImage, {
    className: "style",
});
