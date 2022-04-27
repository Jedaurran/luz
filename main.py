while True:

    luz = str(input.light_level())

    if input.light_level() > 200:
        basic.show_icon(IconNames.UMBRELLA)
        basic.show_string(luz)
    elif input.light_level() > 100 and input.light_level() <= 200:
            basic.show_icon(IconNames.HOUSE)
            basic.show_string(luz)
    else:
            basic.show_icon(IconNames.GHOST)
            basic.show_string(luz)

