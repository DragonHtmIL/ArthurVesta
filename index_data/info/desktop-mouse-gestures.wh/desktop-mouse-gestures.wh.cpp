// ==WindhawkMod==
// @id              desktop-mouse-gestures
// @name            Desktop Mouse Gestures
// @description     Trigger actions by dragging from screen edges in desktop.
// @version         1.0
// @author          ArthurVesta
// @include         explorer.exe
// @compilerOptions -lshell32 -luser32
// @license         MIT
// ==/WindhawkMod==

// ==WindhawkModReadme==
/*
# Desktop Mouse Gestures

This mod lets you trigger Windows actions by dragging the mouse from one of
the screen edges.

![Mouse Gestures](https://raw.githubusercontent.com/DragonHtmIL/DesktopMouseGestures/main/20261108_013812.gif)

A gesture starts only when the left mouse button is pressed inside the selected
edge detection area. You can then release the mouse button anywhere.

Available actions:

* Notifications Center
* Move Between desktops
* Quick Settings
* Start Menu
* Search Menu
* Launch custom app
* Run custom keys shortcut

For Microsoft Store apps, the custom app field also supports commands such as:
shell:AppsFolder\Microsoft.WindowsCalculator_8wekyb3d8bbwe!App

For Browser apps, the custom app field also supports url such as:
C:\Path\To\AnApp.exe --app-id=idofapp (Example based from Yandex)

[!] May need to restart Explorer after Enable or Update the mod.
*/
// ==/WindhawkModReadme==

// ==WindhawkModSettings==
/*
- topGesture:
    - topAction: "0"
      $name: From Top to Bottom
      $description: Choose what happens when dragging from the top edge to the bottom.
      $options:
        - "0": "Disabled"
        - "1": "Notifications Center"
        - "2": "Move Between desktops"
        - "3": "Quick Settings"
        - "4": "Start Menu"
        - "5": "Search Menu"
        - "6": "Launch custom provided app"
        - "7": "Custom provided keyboard shortcuts"

    - topApp: ""
      $name: Custom app for Top to Bottom
      $description: Enter an EXE path, command, or shell:AppsFolder command.

    - topKey1: "CTRL"
      $name: Key shortcut 1
      $options:
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - topKey2: ""
      $name: Key shortcut 2 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - topKey3: ""
      $name: Key shortcut 3 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - topEdgeSize: 5
      $name: Top edge detection area
      $description: Size of the top screen edge area in pixels.

- leftGesture:
    - leftAction: "0"
      $name: From Left to Right
      $description: Choose what happens when dragging from the left edge to the right.
      $options:
        - "0": "Disabled"
        - "1": "Notifications Center"
        - "2": "Move Between desktops"
        - "3": "Quick Settings"
        - "4": "Start Menu"
        - "5": "Search Menu"
        - "6": "Launch custom provided app"
        - "7": "Custom provided keyboard shortcuts"

    - leftApp: ""
      $name: Custom app for Left to Right
      $description: Enter an EXE path, command, or shell:AppsFolder command.

    - leftKey1: "CTRL"
      $name: Key shortcut 1
      $options:
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - leftKey2: ""
      $name: Key shortcut 2 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - leftKey3: ""
      $name: Key shortcut 3 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - leftEdgeSize: 5
      $name: Left edge detection area
      $description: Size of the left screen edge area in pixels.

- bottomGesture:
    - bottomAction: "0"
      $name: From Bottom to Top
      $description: Choose what happens when dragging from the bottom edge to the top.
      $options:
        - "0": "Disabled"
        - "1": "Notifications Center"
        - "2": "Move Between desktops"
        - "3": "Quick Settings"
        - "4": "Start Menu"
        - "5": "Search Menu"
        - "6": "Launch custom provided app"
        - "7": "Custom provided keyboard shortcuts"

    - bottomApp: ""
      $name: Custom app for Bottom to Top
      $description: Enter an EXE path, command, or shell:AppsFolder command.

    - bottomKey1: "CTRL"
      $name: Key shortcut 1
      $options:
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - bottomKey2: ""
      $name: Key shortcut 2 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - bottomKey3: ""
      $name: Key shortcut 3 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - bottomEdgeSize: 5
      $name: Bottom edge detection area
      $description: Size of the bottom screen edge area in pixels.

- rightGesture:
    - rightAction: "0"
      $name: From Right to Left
      $description: Choose what happens when dragging from the right edge to the left.
      $options:
        - "0": "Disabled"
        - "1": "Notifications Center"
        - "2": "Move Between desktops"
        - "3": "Quick Settings"
        - "4": "Start Menu"
        - "5": "Search Menu"
        - "6": "Launch custom provided app"
        - "7": "Custom provided keyboard shortcuts"

    - rightApp: ""
      $name: Custom app for Right to Left
      $description: Enter an EXE path, command, or shell:AppsFolder command.

    - rightKey1: "CTRL"
      $name: Key shortcut 1
      $options:
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - rightKey2: ""
      $name: Key shortcut 2 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - rightKey3: ""
      $name: Key shortcut 3 (optional)
      $options:
        - "": "None"
        - "ESC": "ESC"
        - "CTRL": "CTRL"
        - "SHIFT": "SHIFT"
        - "ALT": "ALT"
        - "WIN": "WIN"
        - "TAB": "TAB"
        - "ENTER": "ENTER"
        - "SPACE": "SPACE"
        - "BACKSPACE": "BACKSPACE"
        - "DELETE": "DELETE"
        - "LEFT": "Left Arrow"
        - "RIGHT": "Right Arrow"
        - "UP": "Up Arrow"
        - "DOWN": "Down Arrow"
        - "PRTSC": "Print Screen"
        - "A": "A"
        - "B": "B"
        - "C": "C"
        - "D": "D"
        - "E": "E"
        - "F": "F"
        - "G": "G"
        - "H": "H"
        - "I": "I"
        - "J": "J"
        - "K": "K"
        - "L": "L"
        - "M": "M"
        - "N": "N"
        - "O": "O"
        - "P": "P"
        - "Q": "Q"
        - "R": "R"
        - "S": "S"
        - "T": "T"
        - "U": "U"
        - "V": "V"
        - "W": "W"
        - "X": "X"
        - "Y": "Y"
        - "Z": "Z"
        - "F1": "F1"
        - "F2": "F2"
        - "F3": "F3"
        - "F4": "F4"
        - "F5": "F5"
        - "F6": "F6"
        - "F7": "F7"
        - "F8": "F8"
        - "F9": "F9"
        - "F10": "F10"
        - "F11": "F11"
        - "F12": "F12"

    - rightEdgeSize: 5
      $name: Right edge detection area
      $description: Size of the right screen edge area in pixels.

- gestureDistance: 100
  $name: Minimum gesture distance
  $description: How far the mouse must move before the gesture triggers.

- disableInFullscreen: true
  $name: Disable gestures in fullscreen apps
  $description: Prevent mouse gestures from starting while a fullscreen application or game is active.
*/
// ==/WindhawkModSettings==

#include <windows.h>
#include <shellapi.h>

enum Action {
    ACTION_DISABLED = 0,
    ACTION_NOTIFICATIONS = 1,
    ACTION_DESKTOPS = 2,
    ACTION_QUICK_SETTINGS = 3,
    ACTION_START_MENU = 4,
    ACTION_SEARCH = 5,
    ACTION_CUSTOM_APP = 6,
    ACTION_CUSTOM_SHORTCUT = 7
};

enum GestureDirection {
    GESTURE_NONE = 0,
    GESTURE_TOP,
    GESTURE_LEFT,
    GESTURE_BOTTOM,
    GESTURE_RIGHT
};

struct Settings {
    int topAction;
    int leftAction;
    int bottomAction;
    int rightAction;

    int topEdgeSize;
    int leftEdgeSize;
    int bottomEdgeSize;
    int rightEdgeSize;

    int gestureDistance;

    bool disableInFullscreen;

    PCWSTR topApp;
    PCWSTR leftApp;
    PCWSTR bottomApp;
    PCWSTR rightApp;

    PCWSTR topKey1;
    PCWSTR topKey2;
    PCWSTR topKey3;

    PCWSTR leftKey1;
    PCWSTR leftKey2;
    PCWSTR leftKey3;

    PCWSTR bottomKey1;
    PCWSTR bottomKey2;
    PCWSTR bottomKey3;

    PCWSTR rightKey1;
    PCWSTR rightKey2;
    PCWSTR rightKey3;
};

Settings settings;

// Mouse hook.
HHOOK g_mouseHook = nullptr;

// Current gesture information.
bool g_trackingGesture = false;
POINT g_startPoint = {};
GestureDirection g_startDirection = GESTURE_NONE;


// ------------------------------------------------------------
// Settings
// ------------------------------------------------------------

void LoadSettings() {
    settings.topAction = _wtoi(Wh_GetStringSetting(L"topGesture.topAction"));
    settings.leftAction = _wtoi(Wh_GetStringSetting(L"leftGesture.leftAction"));
    settings.bottomAction = _wtoi(Wh_GetStringSetting(L"bottomGesture.bottomAction"));
    settings.rightAction = _wtoi(Wh_GetStringSetting(L"rightGesture.rightAction"));

    settings.topEdgeSize = Wh_GetIntSetting(L"topGesture.topEdgeSize");
    settings.leftEdgeSize = Wh_GetIntSetting(L"leftGesture.leftEdgeSize");
    settings.bottomEdgeSize = Wh_GetIntSetting(L"bottomGesture.bottomEdgeSize");
    settings.rightEdgeSize = Wh_GetIntSetting(L"rightGesture.rightEdgeSize");

    settings.gestureDistance = Wh_GetIntSetting(L"gestureDistance");

    settings.disableInFullscreen = Wh_GetIntSetting(L"disableInFullscreen") != 0;

    settings.topApp = Wh_GetStringSetting(L"topGesture.topApp");
    settings.leftApp = Wh_GetStringSetting(L"leftGesture.leftApp");
    settings.bottomApp = Wh_GetStringSetting(L"bottomGesture.bottomApp");
    settings.rightApp = Wh_GetStringSetting(L"rightGesture.rightApp");

    settings.topKey1 = Wh_GetStringSetting(L"topGesture.topKey1");
    settings.topKey2 = Wh_GetStringSetting(L"topGesture.topKey2");
    settings.topKey3 = Wh_GetStringSetting(L"topGesture.topKey3");

    settings.leftKey1 = Wh_GetStringSetting(L"leftGesture.leftKey1");
    settings.leftKey2 = Wh_GetStringSetting(L"leftGesture.leftKey2");
    settings.leftKey3 = Wh_GetStringSetting(L"leftGesture.leftKey3");

    settings.bottomKey1 = Wh_GetStringSetting(L"bottomGesture.bottomKey1");
    settings.bottomKey2 = Wh_GetStringSetting(L"bottomGesture.bottomKey2");
    settings.bottomKey3 = Wh_GetStringSetting(L"bottomGesture.bottomKey3");

    settings.rightKey1 = Wh_GetStringSetting(L"rightGesture.rightKey1");
    settings.rightKey2 = Wh_GetStringSetting(L"rightGesture.rightKey2");
    settings.rightKey3 = Wh_GetStringSetting(L"rightGesture.rightKey3");
}

// ------------------------------------------------------------
// Keyboard shortcut helper
// ------------------------------------------------------------

void SendKeyCombination(
    WORD key1,
    WORD key2,
    WORD key3 = 0
) {
    INPUT inputs[6] = {};
    int count = 0;

    // Press first key.
    inputs[count].type = INPUT_KEYBOARD;
    inputs[count].ki.wVk = key1;
    count++;

    // Press second key.
    inputs[count].type = INPUT_KEYBOARD;
    inputs[count].ki.wVk = key2;
    count++;

    // Press optional third key.
    if (key3 != 0) {
        inputs[count].type = INPUT_KEYBOARD;
        inputs[count].ki.wVk = key3;
        count++;
    }

    // Release third key.
    if (key3 != 0) {
        inputs[count].type = INPUT_KEYBOARD;
        inputs[count].ki.wVk = key3;
        inputs[count].ki.dwFlags = KEYEVENTF_KEYUP;
        count++;
    }

    // Release second key.
    inputs[count].type = INPUT_KEYBOARD;
    inputs[count].ki.wVk = key2;
    inputs[count].ki.dwFlags = KEYEVENTF_KEYUP;
    count++;

    // Release first key.
    inputs[count].type = INPUT_KEYBOARD;
    inputs[count].ki.wVk = key1;
    inputs[count].ki.dwFlags = KEYEVENTF_KEYUP;
    count++;

    SendInput(count, inputs, sizeof(INPUT));
}


// ------------------------------------------------------------
// Launch custom application
// ------------------------------------------------------------

void LaunchCustomApp(PCWSTR command) {
    if (!command || !*command) {
        Wh_Log(L"Custom app command is empty");
        return;
    }

    Wh_Log(L"Launching custom app command: %s", command);

    // CreateProcessW needs a writable copy of the command.
    size_t length = wcslen(command);

    wchar_t* commandLine = new wchar_t[length + 1];
    wcscpy_s(commandLine, length + 1, command);

    STARTUPINFOW startupInfo = {};
    startupInfo.cb = sizeof(startupInfo);

    PROCESS_INFORMATION processInfo = {};

    BOOL result = CreateProcessW(
        nullptr,          // Application name is read from the command line.
        commandLine,      // Full command, including arguments.
        nullptr,
        nullptr,
        FALSE,
        0,
        nullptr,
        nullptr,
        &startupInfo,
        &processInfo
    );

    if (result) {
        CloseHandle(processInfo.hThread);
        CloseHandle(processInfo.hProcess);

        Wh_Log(L"Custom application started successfully");
    } else {
        Wh_Log(
            L"Failed to start custom application. Error: %lu",
            GetLastError()
        );
    }

    delete[] commandLine;
}


// ------------------------------------------------------------
// Perform selected action
// ------------------------------------------------------------

WORD GetVirtualKey(PCWSTR key) {
    if (!key || !*key)
        return 0;

    if (wcscmp(key, L"CTRL") == 0) return VK_CONTROL;
    if (wcscmp(key, L"SHIFT") == 0) return VK_SHIFT;
    if (wcscmp(key, L"ALT") == 0) return VK_MENU;
    if (wcscmp(key, L"WIN") == 0) return VK_LWIN;

    if (wcscmp(key, L"ESC") == 0) return VK_ESCAPE;
    if (wcscmp(key, L"TAB") == 0) return VK_TAB;
    if (wcscmp(key, L"ENTER") == 0) return VK_RETURN;
    if (wcscmp(key, L"SPACE") == 0) return VK_SPACE;
    if (wcscmp(key, L"BACKSPACE") == 0) return VK_BACK;
    if (wcscmp(key, L"DELETE") == 0) return VK_DELETE;
    if (wcscmp(key, L"INSERT") == 0) return VK_INSERT;

    if (wcscmp(key, L"LEFT") == 0) return VK_LEFT;
    if (wcscmp(key, L"RIGHT") == 0) return VK_RIGHT;
    if (wcscmp(key, L"UP") == 0) return VK_UP;
    if (wcscmp(key, L"DOWN") == 0) return VK_DOWN;

    if (wcscmp(key, L"HOME") == 0) return VK_HOME;
    if (wcscmp(key, L"END") == 0) return VK_END;
    if (wcscmp(key, L"PAGEUP") == 0) return VK_PRIOR;
    if (wcscmp(key, L"PAGEDOWN") == 0) return VK_NEXT;
    if (wcscmp(key, L"PRTSC") == 0) return VK_SNAPSHOT;

    if (wcslen(key) == 1) {
        wchar_t c = towupper(key[0]);

        if ((c >= L'A' && c <= L'Z') ||
            (c >= L'0' && c <= L'9')) {
            return static_cast<WORD>(c);
        }
    }

    if (key[0] == L'F') {
        int number = _wtoi(key + 1);
        if (number >= 1 && number <= 24)
            return VK_F1 + number - 1;
    }

    return 0;
}

void RunCustomShortcut(
    PCWSTR key1,
    PCWSTR key2,
    PCWSTR key3
) {
    WORD keys[3] = {
        GetVirtualKey(key1),
        GetVirtualKey(key2),
        GetVirtualKey(key3)
    };

    INPUT inputs[6] = {};
    int count = 0;

    // Press selected keys.
    for (int i = 0; i < 3; i++) {
        if (keys[i] == 0)
            continue;

        // Avoid pressing duplicate keys.
        bool duplicate = false;

        for (int j = 0; j < i; j++) {
            if (keys[j] == keys[i])
                duplicate = true;
        }

        if (duplicate)
            continue;

        inputs[count].type = INPUT_KEYBOARD;
        inputs[count].ki.wVk = keys[i];
        count++;
    }

    int pressedCount = count;

    // Release keys in reverse order.
    for (int i = pressedCount - 1; i >= 0; i--) {
        inputs[count].type = INPUT_KEYBOARD;
        inputs[count].ki.wVk = inputs[i].ki.wVk;
        inputs[count].ki.dwFlags = KEYEVENTF_KEYUP;
        count++;
    }

    if (count > 0) {
        UINT sent = SendInput(count, inputs, sizeof(INPUT));

        Wh_Log(
            L"Custom shortcut: sent %u of %d keyboard events",
            sent,
            count
        );
    }
}

void PerformAction(
    int action,
    GestureDirection direction,
    PCWSTR customApp,
    PCWSTR key1,
    PCWSTR key2,
    PCWSTR key3
) {
    switch (action) {
        case ACTION_NOTIFICATIONS:
            SendKeyCombination(VK_LWIN, 'N');
            break;

        case ACTION_DESKTOPS:
            if (direction == GESTURE_TOP ||
                direction == GESTURE_LEFT) {
                SendKeyCombination(VK_LWIN, VK_CONTROL, VK_LEFT);
            } else {
                SendKeyCombination(VK_LWIN, VK_CONTROL, VK_RIGHT);
            }
            break;

        case ACTION_QUICK_SETTINGS:
            SendKeyCombination(VK_LWIN, 'A');
            break;

        case ACTION_START_MENU:
        {
            INPUT input = {};
            input.type = INPUT_KEYBOARD;
            input.ki.wVk = VK_LWIN;
            SendInput(1, &input, sizeof(INPUT));

            input.ki.dwFlags = KEYEVENTF_KEYUP;
            SendInput(1, &input, sizeof(INPUT));
            break;
        }

        case ACTION_SEARCH:
            SendKeyCombination(VK_LWIN, 'S');
            break;

        case ACTION_CUSTOM_APP:
            LaunchCustomApp(customApp);
            break;

        case ACTION_CUSTOM_SHORTCUT:
            RunCustomShortcut(key1, key2, key3);
            break;

        default:
            break;
    }
}

// ------------------------------------------------------------
// Get virtual desktop boundaries.
//
// This supports multi-monitor desktops better than only using
// GetSystemMetrics(SM_CXSCREEN).
// ------------------------------------------------------------

RECT GetDesktopRect() {
    RECT rect;

    rect.left = GetSystemMetrics(SM_XVIRTUALSCREEN);
    rect.top = GetSystemMetrics(SM_YVIRTUALSCREEN);
    rect.right =
        rect.left + GetSystemMetrics(SM_CXVIRTUALSCREEN);
    rect.bottom =
        rect.top + GetSystemMetrics(SM_CYVIRTUALSCREEN);

    return rect;
}

// ------------------------------------------------------------
// Check whether the foreground application is fullscreen
// ------------------------------------------------------------

bool IsForegroundWindowFullscreen() {
    HWND foregroundWindow = GetForegroundWindow();

    if (!foregroundWindow) {
        return false;
    }

    // Ignore desktop and Explorer windows.
    HWND desktopWindow = GetDesktopWindow();
    HWND shellWindow = GetShellWindow();

    if (foregroundWindow == desktopWindow ||
        foregroundWindow == shellWindow) {
        return false;
    }

    RECT windowRect;

    if (!GetWindowRect(foregroundWindow, &windowRect)) {
        return false;
    }

    // Get the monitor that contains the foreground window.
    HMONITOR monitor = MonitorFromWindow(
        foregroundWindow,
        MONITOR_DEFAULTTONEAREST
    );

    MONITORINFO monitorInfo = {};
    monitorInfo.cbSize = sizeof(monitorInfo);

    if (!GetMonitorInfoW(monitor, &monitorInfo)) {
        return false;
    }

    RECT monitorRect = monitorInfo.rcMonitor;

    // Allow a tiny difference for borders or DPI rounding.
    const int tolerance = 2;

    return
        abs(windowRect.left - monitorRect.left) <= tolerance &&
        abs(windowRect.top - monitorRect.top) <= tolerance &&
        abs(windowRect.right - monitorRect.right) <= tolerance &&
        abs(windowRect.bottom - monitorRect.bottom) <= tolerance;
}

// ------------------------------------------------------------
// Detect which edge the gesture started from
// ------------------------------------------------------------

GestureDirection DetectEdge(POINT point) {
    RECT desktop = GetDesktopRect();

    // Top edge.
    if (point.y <= desktop.top + settings.topEdgeSize) {
        return GESTURE_TOP;
    }

    // Left edge.
    if (point.x <= desktop.left + settings.leftEdgeSize) {
        return GESTURE_LEFT;
    }

    // Bottom edge.
    if (point.y >= desktop.bottom - settings.bottomEdgeSize - 1) {
        return GESTURE_BOTTOM;
    }

    // Right edge.
    if (point.x >= desktop.right - settings.rightEdgeSize - 1) {
        return GESTURE_RIGHT;
    }

    return GESTURE_NONE;
}


// ------------------------------------------------------------
// Check whether the mouse moved in the correct direction
// ------------------------------------------------------------

bool IsValidGesture(
    GestureDirection direction,
    POINT start,
    POINT end
) {
    int distance = settings.gestureDistance;

    int deltaX = end.x - start.x;
    int deltaY = end.y - start.y;

    switch (direction) {
        case GESTURE_TOP:
            return deltaY >= distance &&
                   deltaY > abs(deltaX);

        case GESTURE_LEFT:
            return deltaX >= distance &&
                   deltaX > abs(deltaY);

        case GESTURE_BOTTOM:
            return -deltaY >= distance &&
                   -deltaY > abs(deltaX);

        case GESTURE_RIGHT:
            return -deltaX >= distance &&
                   -deltaX > abs(deltaY);

        default:
            return false;
    }
}


// ------------------------------------------------------------
// Trigger the action for a gesture
// ------------------------------------------------------------

void TriggerGesture(
    GestureDirection direction
) {
    switch (direction) {
        case GESTURE_TOP:
            PerformAction(
                settings.topAction,
                direction,
                settings.topApp,
                settings.topKey1,
                settings.topKey2,
                settings.topKey3
            );
            break;

        case GESTURE_LEFT:
            PerformAction(
                settings.leftAction,
                direction,
                settings.leftApp,
                settings.leftKey1,
                settings.leftKey2,
                settings.leftKey3
            );
            break;

        case GESTURE_BOTTOM:
            PerformAction(
                settings.bottomAction,
                direction,
                settings.bottomApp,
                settings.bottomKey1,
                settings.bottomKey2,
                settings.bottomKey3
            );
            break;

        case GESTURE_RIGHT:
            PerformAction(
                settings.rightAction,
                direction,
                settings.rightApp,
                settings.rightKey1,
                settings.rightKey2,
                settings.rightKey3
            );
            break;

        default:
            break;
    }
}


// ------------------------------------------------------------
// Low-level mouse hook
// ------------------------------------------------------------

LRESULT CALLBACK MouseHookProc(
    int nCode,
    WPARAM wParam,
    LPARAM lParam
) {
    if (nCode == HC_ACTION) {
        MSLLHOOKSTRUCT* mouseInfo =
            reinterpret_cast<MSLLHOOKSTRUCT*>(lParam);

        switch (wParam) {
            case WM_LBUTTONDOWN:
            {
                // Don't start a gesture while a fullscreen application or
                // game is active, if the option is enabled.
                if (settings.disableInFullscreen &&
                    IsForegroundWindowFullscreen()) {

                    g_trackingGesture = false;
                    g_startDirection = GESTURE_NONE;

                    break;
                }

                GestureDirection edge =
                    DetectEdge(mouseInfo->pt);

                if (edge != GESTURE_NONE) {
                    g_trackingGesture = true;
                    g_startPoint = mouseInfo->pt;
                    g_startDirection = edge;

                    Wh_Log(
                        L"Gesture started. Direction: %d",
                        edge
                    );

                    // Block only the initial click.
                    // The cursor will still be allowed to move.
                    return 1;
                }

                g_trackingGesture = false;
                g_startDirection = GESTURE_NONE;
                break;
            }

            case WM_MOUSEMOVE:
            {
                // IMPORTANT:
                // Do NOT block mouse movement.
                //
                // The original mouse-down was blocked, so Explorer should
                // not start selecting desktop icons, while the physical
                // cursor can still move normally.
                break;
            }

            case WM_LBUTTONUP:
            {
                if (g_trackingGesture) {
                    POINT endPoint = mouseInfo->pt;

                    if (IsValidGesture(
                            g_startDirection,
                            g_startPoint,
                            endPoint
                        )) {

                        Wh_Log(
                            L"Valid gesture detected. Direction: %d",
                            g_startDirection
                        );

                        TriggerGesture(g_startDirection);
                    }

                    g_trackingGesture = false;
                    g_startDirection = GESTURE_NONE;

                    // Block the matching release because we blocked
                    // the original mouse-down.
                    return 1;
                }

                break;
            }
        }
    }

    return CallNextHookEx(
        g_mouseHook,
        nCode,
        wParam,
        lParam
    );
}

// ------------------------------------------------------------
// Windhawk initialization
// ------------------------------------------------------------

BOOL Wh_ModInit() {
    Wh_Log(L"Desktop Mouse Gestures: Initializing");

    LoadSettings();

    // Get the module that actually contains MouseHookProc.
    HMODULE module = nullptr;

    if (!GetModuleHandleExW(
            GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS |
            GET_MODULE_HANDLE_EX_FLAG_UNCHANGED_REFCOUNT,
            reinterpret_cast<LPCWSTR>(&MouseHookProc),
            &module
        )) {

        Wh_Log(
            L"Failed to get module handle. Error: %lu",
            GetLastError()
        );

        return FALSE;
    }

    g_mouseHook = SetWindowsHookExW(
        WH_MOUSE_LL,
        MouseHookProc,
        module,
        0
    );

    if (!g_mouseHook) {
        Wh_Log(
            L"Failed to install mouse hook. Error: %lu",
            GetLastError()
        );

        return FALSE;
    }

    Wh_Log(L"Desktop Mouse Gestures: Initialized successfully");

    return TRUE;
}


// ------------------------------------------------------------
// Windhawk unload
// ------------------------------------------------------------

void Wh_ModUninit() {
    Wh_Log(L"Desktop Mouse Gestures: Unloading");

    if (g_mouseHook) {
        UnhookWindowsHookEx(g_mouseHook);
        g_mouseHook = nullptr;
    }

    Wh_Log(L"Desktop Mouse Gestures: Unloaded");
}


// ------------------------------------------------------------
// Settings changed
// ------------------------------------------------------------

void Wh_ModSettingsChanged() {
    Wh_Log(L"Desktop Mouse Gestures: Settings changed");

    LoadSettings();
}