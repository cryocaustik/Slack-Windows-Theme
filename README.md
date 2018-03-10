# Slack Windows Client Themes

Simple method to apply custom themes (e.g. dark theme 💜) to the Windows Slack client.

## Method

1. navigate to `%username%\AppData\Local\slack\app-3.1.0\resources\app.asar.unpacked\src\static`
2. find and open file `ssb-interop.js` with a text editor
3. paste the contents of `slack_theme.js` to the end of the file
4. customize the `tt__customCss` section as you see fit (font color, background color, etc.)
5. while in Slack client, press `cntrl+r` to reload the client
6. enjoy your retinas!


## Credit

- Core themes obtained from: [laCour/slack-night-mode](https://github.com/laCour/slack-night-mode)
- Method for attaching to client from: [foxus97 gist comment](https://gist.github.com/DrewML/0acd2e389492e7d9d6be63386d75dd99#gistcomment-2358430)