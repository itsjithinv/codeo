<p align="left">
    <img src="https://raw.githubusercontent.com/itsjithinv/codeo/main/codeo-dark.png" width="80" />
    <h1 align="left">Codeo</h1>
</p>

![VS Code Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/JithinVijayan.codeo)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/JithinVijayan.codeo)
[![Preview in vscode.dev](https://img.shields.io/badge/preview%20in-vscode.dev-blue)](https://vscode.dev/theme/JithinVijayan.codeo)


Fuel your late-night coding sessions with **Codeo**, a meticulously crafted Visual Studio Code theme designed to boost productivity and reduce eye strain. Perfect for developers who value accessibility, Codeo’s vibrant yet balanced color palette ensures readability for everyone.

Key features:
- ✨ Optimized for low-light environments to keep you coding comfortably through the night.
- ✨ Thoughtfully designed contrasts for enhanced focus and reading comprehension.
- ✨ A touch of style with colors that dazzle without overwhelming.

Let **Codeo** light up your editor with a theme that’s as functional as it is beautiful. 🌙💻

# Codeo

![Preview](preview.png)

# Installation

1.  Install [Visual Studio Code](https://code.visualstudio.com/)
2.  Launch Visual Studio Code
3.  Choose **Extensions** from menu
4.  Search for `codeo`
5.  Click **Install** to install it
6.  Click **Reload** to reload the Code
7.  From the menu bar click: Code > Preferences > Color Theme > **Codeo**

## Disable Italics

If you wish to disable italics, there is now a no-italic theme available. You will have access to both, select **Codeo No Italics** as your color theme.

## Separate the Editor from the Sidebar

This theme uses contrast sparingly so that when it's applied, it's more meaningful. This can help reduce noise and improve your ability to scan. However, some of the decisions may not work for everyone. One such decision that some disagree on is whether or not to have a separation between the editor and sidebar, and the amount of contrast. If you wish for this to have more visual significance, please paste this into your user settings preferences. These are my recommendations for these settings but you can use whatever colors you wish. ☺️

```
"workbench.colorCustomizations": {
  "[Codeo]": {
    "activityBar.background": "#000C1D",
    "activityBar.border": "#102a44",
    "editorGroup.border": "#102a44",
    "sideBar.background": "#001122",
    "sideBar.border": "#102a44",
    "sideBar.foreground": "#8BADC1"
  },
  "[Codeo (No Italics)]": {
    "activityBar.background": "#000C1D",
    "activityBar.border": "#102a44",
    "editorGroup.border": "#102a44",
    "sideBar.background": "#001122",
    "sideBar.border": "#102a44",
    "sideBar.foreground": "#8BADC1"
  }
},
```

## Preferences shown in the preview

The font in the preview image is Dank Mono, [available here](https://philpl.gumroad.com/l/dank-mono). Editor settings to activate font ligatures:

```
"editor.fontFamily": "Dank Mono",
"editor.fontLigatures": true,
```
