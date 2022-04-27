let luz: string;
while (true) {
    luz = "" + input.lightLevel()
    if (input.lightLevel() > 200) {
        basic.showIcon(IconNames.Umbrella)
        basic.showString(luz)
    } else if (input.lightLevel() > 100 && input.lightLevel() <= 200) {
        basic.showIcon(IconNames.House)
        basic.showString(luz)
    } else {
        basic.showIcon(IconNames.Ghost)
        basic.showString(luz)
    }
    
}
