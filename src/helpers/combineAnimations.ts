import type { Animation } from "@/models/Animation";

interface IAnimationOptions {
    keyframesPerSecond: number;
}

export function combineAnimations(animations: Animation[], options: IAnimationOptions) {

    if (!options) {
        throw new Error("Options are required");
    }

    const declarations = animations.map(animation => {
        // get name and keyframe from animation
        const { name, keyframe, totalDuration } = animation;

        // string for css animation with name delay and duration
        const animationString = `${name} ${totalDuration / options.keyframesPerSecond}s linear ${keyframe / options.keyframesPerSecond}s`

        return animationString;
    }).join(", ");

    const css = animations.map(animation => animation.keyframesCss).join("\n");

    return {
        declarations,
        css
    };
}