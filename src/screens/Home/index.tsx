import { View } from "react-native";
import { styles, VIDEO_HEIGHT } from "./styles";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation"
import { useCallback } from "react";

export function Home(){
    const onFullScreenChange = useCallback((isFullScreen: boolean) => {
        if (isFullScreen) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }else{
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }

    }, []);
    return(
        <View style={styles.container} >
            <YoutubeIframe 
                videoId="eKumVFvGHFA"
                height={VIDEO_HEIGHT}
                onFullScreenChange={onFullScreenChange}
            />
        </View>
    );
}