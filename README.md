# vscode-theme<!-- omit in toc -->
A tiny command-line switcher that applies VSCode UI color themes to either your workspace (`.vscode/settings.json`) or your global VSCode settings — with automatic backup of any existing `workbench.colorCustomizations` and a clean reset.

Ships with a set of dark and light themes out of the box ([.vscode-themes/](.vscode-themes/)), including a Catppuccin-inspired dark/light pair (`frappe-teal` / `dawn-teal`) sharing a teal accent. Drop any other `<name>.json` file into your theme directory to add more.

> 日本語版: [README.ja.md](README.ja.md)

---

- [Theme previews](#theme-previews)
- [Using themes as workspace identity markers](#using-themes-as-workspace-identity-markers)
- [Installation](#installation)
  - [macOS / Linux (bash / zsh)](#macos--linux-bash--zsh)
  - [Windows (PowerShell)](#windows-powershell)
- [Usage](#usage)
- [How it works](#how-it-works)
- [Files](#files)
- [Version](#version)
  - [How the version flows](#how-the-version-flows)

## Theme previews

<style>
.vsc-card .sb-item { cursor: pointer; transition: background .08s ease, color .08s ease; }
.vsc-card .sb-item:not(.sb-active):hover { background: var(--hvr-bg); color: var(--hvr-fg); }
.vsc-card .tab-inactive { cursor: pointer; transition: background .08s ease, color .08s ease; }
.vsc-card .tab-inactive:hover { background: var(--hvr-bg); color: var(--hvr-fg); }
</style>

### A &mdash; Navy + orange<!-- omit in toc -->


> Dark navy background with orange accents.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Navy + orange theme preview">
  <defs><clipPath id="ca-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ca-clip)">
    <rect width="640" height="296" fill="#0a1628"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#1a2d4a"><title>titleBar.activeBackground &#8212; #1a2d4a</title></rect>
    <rect y="26" width="640" height="2" fill="#FF9900"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a7a9a"><title>titleBar.inactiveForeground &#8212; #5a7a9a</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#0f1e33"><title>activityBar.background &#8212; #0f1e33</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#FF9900"><title>activityBar.foreground &#8212; #FF9900</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#3a5a7a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a5a7a</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#3a5a7a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a5a7a</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#0d1b2e"><title>sideBar.background &#8212; #0d1b2e</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#1e3050"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#FF9900"><title>sideBarTitle.foreground &#8212; #FF9900</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#FF9900" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #FF9900</title></rect>
    <text x="58" y="69" font-size="11" fill="#FF9900"><title>list.activeSelectionForeground &#8212; #FF9900</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#8aa4c8"><title>sideBar.foreground &#8212; #8aa4c8</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#8aa4c8"><title>sideBar.foreground &#8212; #8aa4c8</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a1628"><title>editor.background &#8212; #0a1628</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#0d1b2e"><title>editorGroupHeader.tabsBackground &#8212; #0d1b2e</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#1e3050"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a1628"><title>tab.activeBackground &#8212; #0a1628</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#FF9900"><title>tab.activeBorderTop &#8212; #FF9900</title></rect>
    <text x="210" y="44" font-size="11" fill="#c8d8f0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#5a7a9a"><title>tab.inactiveForeground &#8212; #5a7a9a</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#2a3f5a"><title>editorLineNumber.foreground &#8212; #2a3f5a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#FF9900">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c8d8f0">: {</text>
    <text x="216" y="92" font-size="11" fill="#2a3f5a">2</text>
    <text x="246" y="92" font-size="11" fill="#FF9900">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c8d8f0">:</text>
    <text x="424" y="92" font-size="11" fill="#FF9900"><title>textLink.foreground &#8212; #FF9900</title>&quot;#1a2d4a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#2a3f5a">3</text>
    <text x="232" y="111" font-size="11" fill="#c8d8f0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#080f1e"><title>panel.background &#8212; #080f1e</title></rect>
    <rect y="203" width="640" height="1" fill="#1e3050"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a"><title>panelTitle.inactiveForeground &#8212; #2a3f5a</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c8d8f0"><title>panelTitle.activeForeground &#8212; #c8d8f0</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#FF9900"><title>panelTitle.activeBorder &#8212; #FF9900</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c8d8f0"><title>terminal.foreground &#8212; #c8d8f0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set navy-orange</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#0DBC79"><title>terminal.ansiGreen &#8212; #0DBC79</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c8d8f0">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#c8d8f0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#FF9900"><title>terminalCursor.foreground &#8212; #FF9900</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#1a2d4a"><title>statusBar.background &#8212; #1a2d4a</title></rect>
    <rect y="274" width="640" height="1" fill="#FF9900" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#c8d8f0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c8d8f0" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `navy-orange`  
**Accent:** `#FF9900` &middot; **Background:** `#0a1628` &middot; **Title bar:** `#1a2d4a`

---

### B &mdash; Squid ink + yellow<!-- omit in toc -->


> Deep squid-ink background with gold yellow accents.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Squid ink + yellow theme preview">
  <defs><clipPath id="cb-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cb-clip)">
    <rect width="640" height="296" fill="#161e28"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#232f3e"><title>titleBar.activeBackground &#8212; #232f3e</title></rect>
    <rect y="26" width="640" height="2" fill="#FFD700"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a7080"><title>titleBar.inactiveForeground &#8212; #5a7080</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1a2330"><title>activityBar.background &#8212; #1a2330</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#FFD700"><title>activityBar.foreground &#8212; #FFD700</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#445566" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #445566</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#445566" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #445566</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#1e2a38"><title>sideBar.background &#8212; #1e2a38</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#263040"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#FFD700"><title>sideBarTitle.foreground &#8212; #FFD700</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#FFD700" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #FFD700</title></rect>
    <text x="58" y="69" font-size="11" fill="#FFD700"><title>list.activeSelectionForeground &#8212; #FFD700</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#8899aa"><title>sideBar.foreground &#8212; #8899aa</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#8899aa"><title>sideBar.foreground &#8212; #8899aa</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#161e28"><title>editor.background &#8212; #161e28</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#1e2a38"><title>editorGroupHeader.tabsBackground &#8212; #1e2a38</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#263040"/>
    <rect x="196" y="28" width="98" height="22" fill="#161e28"><title>tab.activeBackground &#8212; #161e28</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#FFD700"><title>tab.activeBorderTop &#8212; #FFD700</title></rect>
    <text x="210" y="44" font-size="11" fill="#ccdde8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#5a7080"><title>tab.inactiveForeground &#8212; #5a7080</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#334455"><title>editorLineNumber.foreground &#8212; #334455</title>1</text>
    <text x="232" y="73" font-size="11" fill="#FFD700">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#ccdde8">: {</text>
    <text x="216" y="92" font-size="11" fill="#334455">2</text>
    <text x="246" y="92" font-size="11" fill="#FFD700">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#ccdde8">:</text>
    <text x="424" y="92" font-size="11" fill="#FFD700"><title>textLink.foreground &#8212; #FFD700</title>&quot;#232f3e&quot;</text>
    <text x="216" y="111" font-size="11" fill="#334455">3</text>
    <text x="232" y="111" font-size="11" fill="#ccdde8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#111820"><title>panel.background &#8212; #111820</title></rect>
    <rect y="203" width="640" height="1" fill="#263040"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455"><title>panelTitle.inactiveForeground &#8212; #334455</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#ccdde8"><title>panelTitle.activeForeground &#8212; #ccdde8</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#FFD700"><title>panelTitle.activeBorder &#8212; #FFD700</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#ccdde8"><title>terminal.foreground &#8212; #ccdde8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set squidink-yellow</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#0DBC79"><title>terminal.ansiGreen &#8212; #0DBC79</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#ccdde8">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#ccdde8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#FFD700"><title>terminalCursor.foreground &#8212; #FFD700</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#232f3e"><title>statusBar.background &#8212; #232f3e</title></rect>
    <rect y="274" width="640" height="1" fill="#FFD700" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#ccd8e8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#ccd8e8" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `squidink-yellow`  
**Accent:** `#FFD700` &middot; **Background:** `#161e28` &middot; **Title bar:** `#232f3e`

---

### C &mdash; Bedrock teal<!-- omit in toc -->


> Dark teal with cyan-green accents.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Bedrock teal theme preview">
  <defs><clipPath id="cc-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cc-clip)">
    <rect width="640" height="296" fill="#061616"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#0d2b2b"><title>titleBar.activeBackground &#8212; #0d2b2b</title></rect>
    <rect y="26" width="640" height="2" fill="#01A88D"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#3a7070"><title>titleBar.inactiveForeground &#8212; #3a7070</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#081e1e"><title>activityBar.background &#8212; #081e1e</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#01A88D"><title>activityBar.foreground &#8212; #01A88D</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#1a4040" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #1a4040</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#1a4040" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #1a4040</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#0a2020"><title>sideBar.background &#8212; #0a2020</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#0f2a2a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#01A88D"><title>sideBarTitle.foreground &#8212; #01A88D</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#01A88D" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #01A88D</title></rect>
    <text x="58" y="69" font-size="11" fill="#01A88D"><title>list.activeSelectionForeground &#8212; #01A88D</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#5a9090"><title>sideBar.foreground &#8212; #5a9090</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#5a9090"><title>sideBar.foreground &#8212; #5a9090</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#061616"><title>editor.background &#8212; #061616</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#0a2020"><title>editorGroupHeader.tabsBackground &#8212; #0a2020</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#0f2a2a"/>
    <rect x="196" y="28" width="98" height="22" fill="#061616"><title>tab.activeBackground &#8212; #061616</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#01A88D"><title>tab.activeBorderTop &#8212; #01A88D</title></rect>
    <text x="210" y="44" font-size="11" fill="#b8d8d4">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#3a7070"><title>tab.inactiveForeground &#8212; #3a7070</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#1a3838"><title>editorLineNumber.foreground &#8212; #1a3838</title>1</text>
    <text x="232" y="73" font-size="11" fill="#01A88D">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#b8d8d4">: {</text>
    <text x="216" y="92" font-size="11" fill="#1a3838">2</text>
    <text x="246" y="92" font-size="11" fill="#01A88D">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#b8d8d4">:</text>
    <text x="424" y="92" font-size="11" fill="#01A88D"><title>textLink.foreground &#8212; #01A88D</title>&quot;#0d2b2b&quot;</text>
    <text x="216" y="111" font-size="11" fill="#1a3838">3</text>
    <text x="232" y="111" font-size="11" fill="#b8d8d4">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#040e0e"><title>panel.background &#8212; #040e0e</title></rect>
    <rect y="203" width="640" height="1" fill="#0f2a2a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838"><title>panelTitle.inactiveForeground &#8212; #1a3838</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8d8d4"><title>panelTitle.activeForeground &#8212; #b8d8d4</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#01A88D"><title>panelTitle.activeBorder &#8212; #01A88D</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#b8d8d4"><title>terminal.foreground &#8212; #b8d8d4</title>PS C:\experiment\vscode-theme&gt; vscode-theme set bedrock-teal</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#01A88D"><title>terminal.ansiGreen &#8212; #01A88D</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#b8d8d4">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#b8d8d4">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#01A88D"><title>terminalCursor.foreground &#8212; #01A88D</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#0d2b2b"><title>statusBar.background &#8212; #0d2b2b</title></rect>
    <rect y="274" width="640" height="1" fill="#01A88D" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#b8d8d4" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#b8d8d4" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `bedrock-teal`  
**Accent:** `#01A88D` &middot; **Background:** `#061616` &middot; **Title bar:** `#0d2b2b`

---

### D &mdash; Dark + ember red<!-- omit in toc -->


> Very dark background with ember red accents — hard to mistake for any other window.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Dark + ember red theme preview">
  <defs><clipPath id="cd-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cd-clip)">
    <rect width="640" height="296" fill="#100c08"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#1e1410"><title>titleBar.activeBackground &#8212; #1e1410</title></rect>
    <rect y="26" width="640" height="2" fill="#E8441A"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a5040"><title>titleBar.inactiveForeground &#8212; #6a5040</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#140e0a"><title>activityBar.background &#8212; #140e0a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#E8441A"><title>activityBar.foreground &#8212; #E8441A</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#3a2818" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a2818</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#3a2818" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a2818</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#181008"><title>sideBar.background &#8212; #181008</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#241810"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E8441A"><title>sideBarTitle.foreground &#8212; #E8441A</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#E8441A" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #E8441A</title></rect>
    <text x="58" y="69" font-size="11" fill="#E8441A"><title>list.activeSelectionForeground &#8212; #E8441A</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#886655"><title>sideBar.foreground &#8212; #886655</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#886655"><title>sideBar.foreground &#8212; #886655</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#100c08"><title>editor.background &#8212; #100c08</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#181008"><title>editorGroupHeader.tabsBackground &#8212; #181008</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#241810"/>
    <rect x="196" y="28" width="98" height="22" fill="#100c08"><title>tab.activeBackground &#8212; #100c08</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#E8441A"><title>tab.activeBorderTop &#8212; #E8441A</title></rect>
    <text x="210" y="44" font-size="11" fill="#e8d8c8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a5040"><title>tab.inactiveForeground &#8212; #6a5040</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#2a1e14"><title>editorLineNumber.foreground &#8212; #2a1e14</title>1</text>
    <text x="232" y="73" font-size="11" fill="#E8441A">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e8d8c8">: {</text>
    <text x="216" y="92" font-size="11" fill="#2a1e14">2</text>
    <text x="246" y="92" font-size="11" fill="#E8441A">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e8d8c8">:</text>
    <text x="424" y="92" font-size="11" fill="#E8441A"><title>textLink.foreground &#8212; #E8441A</title>&quot;#1e1410&quot;</text>
    <text x="216" y="111" font-size="11" fill="#2a1e14">3</text>
    <text x="232" y="111" font-size="11" fill="#e8d8c8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0c0804"><title>panel.background &#8212; #0c0804</title></rect>
    <rect y="203" width="640" height="1" fill="#241810"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14"><title>panelTitle.inactiveForeground &#8212; #2a1e14</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e8d8c8"><title>panelTitle.activeForeground &#8212; #e8d8c8</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#E8441A"><title>panelTitle.activeBorder &#8212; #E8441A</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e8d8c8"><title>terminal.foreground &#8212; #e8d8c8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set dark-ember</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#0DBC79"><title>terminal.ansiGreen &#8212; #0DBC79</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e8d8c8">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#e8d8c8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#E8441A"><title>terminalCursor.foreground &#8212; #E8441A</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#1e1410"><title>statusBar.background &#8212; #1e1410</title></rect>
    <rect y="274" width="640" height="1" fill="#E8441A" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e8d8c8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e8d8c8" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `dark-ember`  
**Accent:** `#E8441A` &middot; **Background:** `#100c08` &middot; **Title bar:** `#1e1410`

---

### E &mdash; Forest green<!-- omit in toc -->


> Deep woodland background with a vivid spring-green accent.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Forest green theme preview">
  <defs><clipPath id="ce-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ce-clip)">
    <rect width="640" height="296" fill="#0a1a0f"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#14322a"><title>titleBar.activeBackground &#8212; #14322a</title></rect>
    <rect y="26" width="640" height="2" fill="#4ADE80"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a8070"><title>titleBar.inactiveForeground &#8212; #5a8070</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#0d1f18"><title>activityBar.background &#8212; #0d1f18</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#4ADE80"><title>activityBar.foreground &#8212; #4ADE80</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#5a8070" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8070</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#5a8070" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8070</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#0c1d14"><title>sideBar.background &#8212; #0c1d14</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#1a3528"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#4ADE80"><title>sideBarTitle.foreground &#8212; #4ADE80</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#4ADE80" fill-opacity="0.13"><title>list.activeSelectionBackground &#8212; #4ADE80 @ 13%</title></rect>
    <text x="58" y="69" font-size="11" fill="#4ADE80"><title>list.activeSelectionForeground &#8212; #4ADE80</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#c8e8d0"><title>sideBar.foreground &#8212; #c8e8d0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#c8e8d0"><title>sideBar.foreground &#8212; #c8e8d0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a1a0f"><title>editor.background &#8212; #0a1a0f</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#0c1d14"><title>editorGroupHeader.tabsBackground &#8212; #0c1d14</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#1a3528"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a1a0f"><title>tab.activeBackground &#8212; #0a1a0f</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#4ADE80"><title>tab.activeBorderTop &#8212; #4ADE80</title></rect>
    <text x="210" y="44" font-size="11" fill="#c8e8d0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#8abba0"><title>tab.inactiveForeground &#8212; #8abba0</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#456b55"><title>editorLineNumber.foreground &#8212; #456b55</title>1</text>
    <text x="232" y="73" font-size="11" fill="#4ADE80">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c8e8d0">: {</text>
    <text x="216" y="92" font-size="11" fill="#456b55">2</text>
    <text x="246" y="92" font-size="11" fill="#4ADE80">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c8e8d0">:</text>
    <text x="424" y="92" font-size="11" fill="#4ADE80"><title>textLink.foreground &#8212; #4ADE80</title>&quot;#14322a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#456b55">3</text>
    <text x="232" y="111" font-size="11" fill="#c8e8d0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#08150c"><title>panel.background &#8212; #08150c</title></rect>
    <rect y="203" width="640" height="1" fill="#1a3528"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0"><title>panelTitle.inactiveForeground &#8212; #8abba0</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c8e8d0"><title>panelTitle.activeForeground &#8212; #c8e8d0</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#4ADE80"><title>panelTitle.activeBorder &#8212; #4ADE80</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c8e8d0"><title>terminal.foreground &#8212; #c8e8d0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set forest-green</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#4ADE80"><title>terminal.ansiGreen &#8212; #4ADE80</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c8e8d0">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#c8e8d0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#4ADE80"><title>terminalCursor.foreground &#8212; #4ADE80</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#14322a"><title>statusBar.background &#8212; #14322a</title></rect>
    <rect y="274" width="640" height="1" fill="#4ADE80" fill-opacity="0.33"/>
    <text x="10" y="289" font-size="11" fill="#c8e8d0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c8e8d0" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `forest-green`  
**Accent:** `#4ADE80` &middot; **Background:** `#0a1a0f` &middot; **Title bar:** `#14322a`

---

### F &mdash; Royal purple<!-- omit in toc -->


> Dark plum background with a rich violet accent.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Royal purple theme preview">
  <defs><clipPath id="cf-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cf-clip)">
    <rect width="640" height="296" fill="#120a1f"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2a1a4a"><title>titleBar.activeBackground &#8212; #2a1a4a</title></rect>
    <rect y="26" width="640" height="2" fill="#A855F7"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#7a5fa0"><title>titleBar.inactiveForeground &#8212; #7a5fa0</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1a1033"><title>activityBar.background &#8212; #1a1033</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#A855F7"><title>activityBar.foreground &#8212; #A855F7</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7a5fa0" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a5fa0</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7a5fa0" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a5fa0</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#160d2b"><title>sideBar.background &#8212; #160d2b</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#2a1a4a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#A855F7"><title>sideBarTitle.foreground &#8212; #A855F7</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#A855F7" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #A855F7</title></rect>
    <text x="58" y="69" font-size="11" fill="#A855F7"><title>list.activeSelectionForeground &#8212; #A855F7</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#e0d0f5"><title>sideBar.foreground &#8212; #e0d0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#e0d0f5"><title>sideBar.foreground &#8212; #e0d0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#120a1f"><title>editor.background &#8212; #120a1f</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#160d2b"><title>editorGroupHeader.tabsBackground &#8212; #160d2b</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#2a1a4a"/>
    <rect x="196" y="28" width="98" height="22" fill="#120a1f"><title>tab.activeBackground &#8212; #120a1f</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#A855F7"><title>tab.activeBorderTop &#8212; #A855F7</title></rect>
    <text x="210" y="44" font-size="11" fill="#e0d0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a898c8"><title>tab.inactiveForeground &#8212; #a898c8</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a4580"><title>editorLineNumber.foreground &#8212; #5a4580</title>1</text>
    <text x="232" y="73" font-size="11" fill="#A855F7">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e0d0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a4580">2</text>
    <text x="246" y="92" font-size="11" fill="#A855F7">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e0d0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#A855F7"><title>textLink.foreground &#8212; #A855F7</title>&quot;#2a1a4a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a4580">3</text>
    <text x="232" y="111" font-size="11" fill="#e0d0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0e0818"><title>panel.background &#8212; #0e0818</title></rect>
    <rect y="203" width="640" height="1" fill="#2a1a4a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8"><title>panelTitle.inactiveForeground &#8212; #a898c8</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e0d0f5"><title>panelTitle.activeForeground &#8212; #e0d0f5</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#A855F7"><title>panelTitle.activeBorder &#8212; #A855F7</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e0d0f5"><title>terminal.foreground &#8212; #e0d0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set royal-purple</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#86EFAC"><title>terminal.ansiGreen &#8212; #86EFAC</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e0d0f5">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#e0d0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#A855F7"><title>terminalCursor.foreground &#8212; #A855F7</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2a1a4a"><title>statusBar.background &#8212; #2a1a4a</title></rect>
    <rect y="274" width="640" height="1" fill="#A855F7" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e0d0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e0d0f5" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `royal-purple`  
**Accent:** `#A855F7` &middot; **Background:** `#120a1f` &middot; **Title bar:** `#2a1a4a`

---

### G &mdash; Ocean blue<!-- omit in toc -->


> Deep ocean background with a bright sky-cyan accent.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Ocean blue theme preview">
  <defs><clipPath id="cg-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cg-clip)">
    <rect width="640" height="296" fill="#061624"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#0e2a44"><title>titleBar.activeBackground &#8212; #0e2a44</title></rect>
    <rect y="26" width="640" height="2" fill="#38BDF8"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a8098"><title>titleBar.inactiveForeground &#8212; #5a8098</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#091c2e"><title>activityBar.background &#8212; #091c2e</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#38BDF8"><title>activityBar.foreground &#8212; #38BDF8</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#5a8098" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8098</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#5a8098" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8098</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#081e32"><title>sideBar.background &#8212; #081e32</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#14334a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#38BDF8"><title>sideBarTitle.foreground &#8212; #38BDF8</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#38BDF8" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #38BDF8</title></rect>
    <text x="58" y="69" font-size="11" fill="#38BDF8"><title>list.activeSelectionForeground &#8212; #38BDF8</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#c8e0f5"><title>sideBar.foreground &#8212; #c8e0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#c8e0f5"><title>sideBar.foreground &#8212; #c8e0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#061624"><title>editor.background &#8212; #061624</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#081e32"><title>editorGroupHeader.tabsBackground &#8212; #081e32</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#14334a"/>
    <rect x="196" y="28" width="98" height="22" fill="#061624"><title>tab.activeBackground &#8212; #061624</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#38BDF8"><title>tab.activeBorderTop &#8212; #38BDF8</title></rect>
    <text x="210" y="44" font-size="11" fill="#c8e0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#8ab4c8"><title>tab.inactiveForeground &#8212; #8ab4c8</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#456880"><title>editorLineNumber.foreground &#8212; #456880</title>1</text>
    <text x="232" y="73" font-size="11" fill="#38BDF8">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c8e0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#456880">2</text>
    <text x="246" y="92" font-size="11" fill="#38BDF8">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c8e0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#38BDF8"><title>textLink.foreground &#8212; #38BDF8</title>&quot;#0e2a44&quot;</text>
    <text x="216" y="111" font-size="11" fill="#456880">3</text>
    <text x="232" y="111" font-size="11" fill="#c8e0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#04101c"><title>panel.background &#8212; #04101c</title></rect>
    <rect y="203" width="640" height="1" fill="#14334a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8"><title>panelTitle.inactiveForeground &#8212; #8ab4c8</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c8e0f5"><title>panelTitle.activeForeground &#8212; #c8e0f5</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#38BDF8"><title>panelTitle.activeBorder &#8212; #38BDF8</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c8e0f5"><title>terminal.foreground &#8212; #c8e0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set ocean-blue</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#5eead4"><title>terminal.ansiGreen &#8212; #5eead4</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c8e0f5">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#c8e0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#38BDF8"><title>terminalCursor.foreground &#8212; #38BDF8</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#0e2a44"><title>statusBar.background &#8212; #0e2a44</title></rect>
    <rect y="274" width="640" height="1" fill="#38BDF8" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#c8e0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c8e0f5" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `ocean-blue`  
**Accent:** `#38BDF8` &middot; **Background:** `#061624` &middot; **Title bar:** `#0e2a44`

---

### H &mdash; Rose magenta<!-- omit in toc -->


> Dark wine background with a hot-pink magenta accent.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Rose magenta theme preview">
  <defs><clipPath id="ch-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ch-clip)">
    <rect width="640" height="296" fill="#1a0a14"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#3a0f28"><title>titleBar.activeBackground &#8212; #3a0f28</title></rect>
    <rect y="26" width="640" height="2" fill="#EC4899"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#985a78"><title>titleBar.inactiveForeground &#8212; #985a78</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#25091a"><title>activityBar.background &#8212; #25091a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#EC4899"><title>activityBar.foreground &#8212; #EC4899</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#985a78" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #985a78</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#985a78" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #985a78</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#22091a"><title>sideBar.background &#8212; #22091a</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3a0f28"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#EC4899"><title>sideBarTitle.foreground &#8212; #EC4899</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#EC4899" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #EC4899</title></rect>
    <text x="58" y="69" font-size="11" fill="#EC4899"><title>list.activeSelectionForeground &#8212; #EC4899</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#f5d0e0"><title>sideBar.foreground &#8212; #f5d0e0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#f5d0e0"><title>sideBar.foreground &#8212; #f5d0e0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a0a14"><title>editor.background &#8212; #1a0a14</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#22091a"><title>editorGroupHeader.tabsBackground &#8212; #22091a</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3a0f28"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a0a14"><title>tab.activeBackground &#8212; #1a0a14</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#EC4899"><title>tab.activeBorderTop &#8212; #EC4899</title></rect>
    <text x="210" y="44" font-size="11" fill="#f5d0e0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#c898b0"><title>tab.inactiveForeground &#8212; #c898b0</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#70355a"><title>editorLineNumber.foreground &#8212; #70355a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#EC4899">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#f5d0e0">: {</text>
    <text x="216" y="92" font-size="11" fill="#70355a">2</text>
    <text x="246" y="92" font-size="11" fill="#EC4899">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#f5d0e0">:</text>
    <text x="424" y="92" font-size="11" fill="#EC4899"><title>textLink.foreground &#8212; #EC4899</title>&quot;#3a0f28&quot;</text>
    <text x="216" y="111" font-size="11" fill="#70355a">3</text>
    <text x="232" y="111" font-size="11" fill="#f5d0e0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#14070f"><title>panel.background &#8212; #14070f</title></rect>
    <rect y="203" width="640" height="1" fill="#3a0f28"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0"><title>panelTitle.inactiveForeground &#8212; #c898b0</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#f5d0e0"><title>panelTitle.activeForeground &#8212; #f5d0e0</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#EC4899"><title>panelTitle.activeBorder &#8212; #EC4899</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#f5d0e0"><title>terminal.foreground &#8212; #f5d0e0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set rose-magenta</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#86EFAC"><title>terminal.ansiGreen &#8212; #86EFAC</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#f5d0e0">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#f5d0e0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#EC4899"><title>terminalCursor.foreground &#8212; #EC4899</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#3a0f28"><title>statusBar.background &#8212; #3a0f28</title></rect>
    <rect y="274" width="640" height="1" fill="#EC4899" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#f5d0e0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#f5d0e0" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `rose-magenta`  
**Accent:** `#EC4899` &middot; **Background:** `#1a0a14` &middot; **Title bar:** `#3a0f28`

---

### I &mdash; Paper light<!-- omit in toc -->


> Warm cream paper background with a sepia-brown accent. A light theme for daylight coding.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Paper light theme preview">
  <defs><clipPath id="ci-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ci-clip)">
    <rect width="640" height="296" fill="#FAF6EE"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#E8DFCC"><title>titleBar.activeBackground &#8212; #E8DFCC</title></rect>
    <rect y="26" width="640" height="2" fill="#A0522D"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#8a7560"><title>titleBar.inactiveForeground &#8212; #8a7560</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#F0EADC"><title>activityBar.background &#8212; #F0EADC</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#A0522D"><title>activityBar.foreground &#8212; #A0522D</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8a7560" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a7560</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8a7560" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a7560</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#F5F0E2"><title>sideBar.background &#8212; #F5F0E2</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#D8CFB8"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#A0522D"><title>sideBarTitle.foreground &#8212; #A0522D</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#A0522D" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #A0522D</title></rect>
    <text x="58" y="69" font-size="11" fill="#A0522D"><title>list.activeSelectionForeground &#8212; #A0522D</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#3a2818"><title>sideBar.foreground &#8212; #3a2818</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#3a2818"><title>sideBar.foreground &#8212; #3a2818</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#FAF6EE"><title>editor.background &#8212; #FAF6EE</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#ECE4D0"><title>editorGroupHeader.tabsBackground &#8212; #ECE4D0</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#D8CFB8"/>
    <rect x="196" y="28" width="98" height="22" fill="#FAF6EE"><title>tab.activeBackground &#8212; #FAF6EE</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#A0522D"><title>tab.activeBorderTop &#8212; #A0522D</title></rect>
    <text x="210" y="44" font-size="11" fill="#3a2818">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a5240"><title>tab.inactiveForeground &#8212; #6a5240</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#a89a7a"><title>editorLineNumber.foreground &#8212; #a89a7a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#A0522D">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#3a2818">: {</text>
    <text x="216" y="92" font-size="11" fill="#a89a7a">2</text>
    <text x="246" y="92" font-size="11" fill="#A0522D">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#3a2818">:</text>
    <text x="424" y="92" font-size="11" fill="#A0522D"><title>textLink.foreground &#8212; #A0522D</title>&quot;#E8DFCC&quot;</text>
    <text x="216" y="111" font-size="11" fill="#a89a7a">3</text>
    <text x="232" y="111" font-size="11" fill="#3a2818">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#F5F0E2"><title>panel.background &#8212; #F5F0E2</title></rect>
    <rect y="203" width="640" height="1" fill="#D8CFB8"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560"><title>panelTitle.inactiveForeground &#8212; #8a7560</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#3a2818"><title>panelTitle.activeForeground &#8212; #3a2818</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#A0522D"><title>panelTitle.activeBorder &#8212; #A0522D</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#3a2818"><title>terminal.foreground &#8212; #3a2818</title>PS C:\experiment\vscode-theme&gt; vscode-theme set paper-light</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#3D6B2E"><title>terminal.ansiGreen &#8212; #3D6B2E</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#3a2818">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#3a2818">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#A0522D"><title>terminalCursor.foreground &#8212; #A0522D</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#E8DFCC"><title>statusBar.background &#8212; #E8DFCC</title></rect>
    <rect y="274" width="640" height="1" fill="#A0522D" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#3a2818" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#3a2818" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `paper-light`  
**Accent:** `#A0522D` &middot; **Background:** `#FAF6EE` &middot; **Title bar:** `#E8DFCC`

---

### J &mdash; Arctic light<!-- omit in toc -->


> Cool frost-white background with a crisp steel-blue accent. A light theme with quiet contrast.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Arctic light theme preview">
  <defs><clipPath id="cj-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cj-clip)">
    <rect width="640" height="296" fill="#F4F8FC"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#DCE6F2"><title>titleBar.activeBackground &#8212; #DCE6F2</title></rect>
    <rect y="26" width="640" height="2" fill="#2563EB"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6080a5"><title>titleBar.inactiveForeground &#8212; #6080a5</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#E8EEF7"><title>activityBar.background &#8212; #E8EEF7</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#2563EB"><title>activityBar.foreground &#8212; #2563EB</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6080a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6080a5</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6080a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6080a5</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#EEF3FA"><title>sideBar.background &#8212; #EEF3FA</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#CCD8EA"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2563EB"><title>sideBarTitle.foreground &#8212; #2563EB</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#2563EB" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #2563EB</title></rect>
    <text x="58" y="69" font-size="11" fill="#2563EB"><title>list.activeSelectionForeground &#8212; #2563EB</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#1e3a5f"><title>sideBar.foreground &#8212; #1e3a5f</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#1e3a5f"><title>sideBar.foreground &#8212; #1e3a5f</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#F4F8FC"><title>editor.background &#8212; #F4F8FC</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#E0E8F4"><title>editorGroupHeader.tabsBackground &#8212; #E0E8F4</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#CCD8EA"/>
    <rect x="196" y="28" width="98" height="22" fill="#F4F8FC"><title>tab.activeBackground &#8212; #F4F8FC</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#2563EB"><title>tab.activeBorderTop &#8212; #2563EB</title></rect>
    <text x="210" y="44" font-size="11" fill="#1e3a5f">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#4a6580"><title>tab.inactiveForeground &#8212; #4a6580</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#98b0c8"><title>editorLineNumber.foreground &#8212; #98b0c8</title>1</text>
    <text x="232" y="73" font-size="11" fill="#2563EB">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#1e3a5f">: {</text>
    <text x="216" y="92" font-size="11" fill="#98b0c8">2</text>
    <text x="246" y="92" font-size="11" fill="#2563EB">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#1e3a5f">:</text>
    <text x="424" y="92" font-size="11" fill="#2563EB"><title>textLink.foreground &#8212; #2563EB</title>&quot;#DCE6F2&quot;</text>
    <text x="216" y="111" font-size="11" fill="#98b0c8">3</text>
    <text x="232" y="111" font-size="11" fill="#1e3a5f">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#EEF3FA"><title>panel.background &#8212; #EEF3FA</title></rect>
    <rect y="203" width="640" height="1" fill="#CCD8EA"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5"><title>panelTitle.inactiveForeground &#8212; #6080a5</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1e3a5f"><title>panelTitle.activeForeground &#8212; #1e3a5f</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#2563EB"><title>panelTitle.activeBorder &#8212; #2563EB</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#1e3a5f"><title>terminal.foreground &#8212; #1e3a5f</title>PS C:\experiment\vscode-theme&gt; vscode-theme set arctic-light</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#16A34A"><title>terminal.ansiGreen &#8212; #16A34A</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#1e3a5f">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#1e3a5f">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#2563EB"><title>terminalCursor.foreground &#8212; #2563EB</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#DCE6F2"><title>statusBar.background &#8212; #DCE6F2</title></rect>
    <rect y="274" width="640" height="1" fill="#2563EB" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#1e3a5f" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#1e3a5f" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `arctic-light`  
**Accent:** `#2563EB` &middot; **Background:** `#F4F8FC` &middot; **Title bar:** `#DCE6F2`

---

### K &mdash; Frappé teal<!-- omit in toc -->


> Catppuccin Frappé-inspired dark with a vivid teal accent. Designed to pair visually with `dawn-teal` for a matched dark/light set.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Frappé teal theme preview">
  <defs><clipPath id="ck-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ck-clip)">
    <rect width="640" height="296" fill="#303446"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#292c3c"><title>titleBar.activeBackground &#8212; #292c3c</title></rect>
    <rect y="26" width="640" height="2" fill="#11B7C5"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#a5adce"><title>titleBar.inactiveForeground &#8212; #a5adce</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#292c3c"><title>activityBar.background &#8212; #292c3c</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#11B7C5"><title>activityBar.foreground &#8212; #11B7C5</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#737994" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #737994</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#737994" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #737994</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#292c3c"><title>sideBar.background &#8212; #292c3c</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#414559"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#11B7C5"><title>sideBarTitle.foreground &#8212; #11B7C5</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#11B7C5" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #11B7C5</title></rect>
    <text x="58" y="69" font-size="11" fill="#11B7C5"><title>list.activeSelectionForeground &#8212; #11B7C5</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#c6d0f5"><title>sideBar.foreground &#8212; #c6d0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#c6d0f5"><title>sideBar.foreground &#8212; #c6d0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#303446"><title>editor.background &#8212; #303446</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#292c3c"><title>editorGroupHeader.tabsBackground &#8212; #292c3c</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#414559"/>
    <rect x="196" y="28" width="98" height="22" fill="#303446"><title>tab.activeBackground &#8212; #303446</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#11B7C5"><title>tab.activeBorderTop &#8212; #11B7C5</title></rect>
    <text x="210" y="44" font-size="11" fill="#c6d0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a5adce"><title>tab.inactiveForeground &#8212; #a5adce</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#626880"><title>editorLineNumber.foreground &#8212; #626880</title>1</text>
    <text x="232" y="73" font-size="11" fill="#11B7C5">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c6d0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#626880">2</text>
    <text x="246" y="92" font-size="11" fill="#11B7C5">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c6d0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#11B7C5"><title>textLink.foreground &#8212; #11B7C5</title>&quot;#292c3c&quot;</text>
    <text x="216" y="111" font-size="11" fill="#626880">3</text>
    <text x="232" y="111" font-size="11" fill="#c6d0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#232634"><title>panel.background &#8212; #232634</title></rect>
    <rect y="203" width="640" height="1" fill="#414559"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce"><title>panelTitle.inactiveForeground &#8212; #a5adce</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c6d0f5"><title>panelTitle.activeForeground &#8212; #c6d0f5</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#11B7C5"><title>panelTitle.activeBorder &#8212; #11B7C5</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c6d0f5"><title>terminal.foreground &#8212; #c6d0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set frappe-teal</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#a6d189"><title>terminal.ansiGreen &#8212; #a6d189</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c6d0f5">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#c6d0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#11B7C5"><title>terminalCursor.foreground &#8212; #11B7C5</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#292c3c"><title>statusBar.background &#8212; #292c3c</title></rect>
    <rect y="274" width="640" height="1" fill="#11B7C5" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#c6d0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c6d0f5" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `frappe-teal`  
**Accent:** `#11B7C5` &middot; **Background:** `#303446` &middot; **Title bar:** `#292c3c`

---

### L &mdash; Dawn teal<!-- omit in toc -->


> Rosé Pine Dawn-inspired light cream background with a deep teal accent. The light counterpart to `frappe-teal`.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Dawn teal theme preview">
  <defs><clipPath id="cl-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cl-clip)">
    <rect width="640" height="296" fill="#faf4ed"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#f2e9e1"><title>titleBar.activeBackground &#8212; #f2e9e1</title></rect>
    <rect y="26" width="640" height="2" fill="#1A7DA4"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#797593"><title>titleBar.inactiveForeground &#8212; #797593</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#fffaf3"><title>activityBar.background &#8212; #fffaf3</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#1A7DA4"><title>activityBar.foreground &#8212; #1A7DA4</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#9893a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #9893a5</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#9893a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #9893a5</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#fffaf3"><title>sideBar.background &#8212; #fffaf3</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#e8dfd3"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1A7DA4"><title>sideBarTitle.foreground &#8212; #1A7DA4</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#1A7DA4" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #1A7DA4</title></rect>
    <text x="58" y="69" font-size="11" fill="#1A7DA4"><title>list.activeSelectionForeground &#8212; #1A7DA4</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#575279"><title>sideBar.foreground &#8212; #575279</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#575279"><title>sideBar.foreground &#8212; #575279</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#faf4ed"><title>editor.background &#8212; #faf4ed</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#f2e9e1"><title>editorGroupHeader.tabsBackground &#8212; #f2e9e1</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#e8dfd3"/>
    <rect x="196" y="28" width="98" height="22" fill="#faf4ed"><title>tab.activeBackground &#8212; #faf4ed</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#1A7DA4"><title>tab.activeBorderTop &#8212; #1A7DA4</title></rect>
    <text x="210" y="44" font-size="11" fill="#575279">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#797593"><title>tab.inactiveForeground &#8212; #797593</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#c7bfb1"><title>editorLineNumber.foreground &#8212; #c7bfb1</title>1</text>
    <text x="232" y="73" font-size="11" fill="#1A7DA4">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#575279">: {</text>
    <text x="216" y="92" font-size="11" fill="#c7bfb1">2</text>
    <text x="246" y="92" font-size="11" fill="#1A7DA4">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#575279">:</text>
    <text x="424" y="92" font-size="11" fill="#1A7DA4"><title>textLink.foreground &#8212; #1A7DA4</title>&quot;#f2e9e1&quot;</text>
    <text x="216" y="111" font-size="11" fill="#c7bfb1">3</text>
    <text x="232" y="111" font-size="11" fill="#575279">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#fffaf3"><title>panel.background &#8212; #fffaf3</title></rect>
    <rect y="203" width="640" height="1" fill="#e8dfd3"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593"><title>panelTitle.inactiveForeground &#8212; #797593</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#575279"><title>panelTitle.activeForeground &#8212; #575279</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#1A7DA4"><title>panelTitle.activeBorder &#8212; #1A7DA4</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#575279"><title>terminal.foreground &#8212; #575279</title>PS C:\experiment\vscode-theme&gt; vscode-theme set dawn-teal</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#618774"><title>terminal.ansiGreen &#8212; #618774</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#575279">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#575279">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#1A7DA4"><title>terminalCursor.foreground &#8212; #1A7DA4</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#f2e9e1"><title>statusBar.background &#8212; #f2e9e1</title></rect>
    <rect y="274" width="640" height="1" fill="#1A7DA4" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#575279" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#575279" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `dawn-teal`  
**Accent:** `#1A7DA4` &middot; **Background:** `#faf4ed` &middot; **Title bar:** `#f2e9e1`

---

### M &mdash; Leather orange<!-- omit in toc -->


> Rich burnt orange on saddle-leather brown.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Leather orange theme preview">
  <defs><clipPath id="cm-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cm-clip)">
    <rect width="640" height="296" fill="#1a0f05"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2d1b0a"><title>titleBar.activeBackground &#8212; #2d1b0a</title></rect>
    <rect y="26" width="640" height="2" fill="#F67B00"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6b5540"><title>titleBar.inactiveForeground &#8212; #6b5540</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1e130a"><title>activityBar.background &#8212; #1e130a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#F67B00"><title>activityBar.foreground &#8212; #F67B00</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6b5540" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6b5540</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6b5540" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6b5540</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#24180c"><title>sideBar.background &#8212; #24180c</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3d2814"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#F67B00"><title>sideBarTitle.foreground &#8212; #F67B00</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#F67B00" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #F67B00</title></rect>
    <text x="58" y="69" font-size="11" fill="#F67B00"><title>list.activeSelectionForeground &#8212; #F67B00</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#f5e6d0"><title>sideBar.foreground &#8212; #f5e6d0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#f5e6d0"><title>sideBar.foreground &#8212; #f5e6d0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a0f05"><title>editor.background &#8212; #1a0f05</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#24180c"><title>editorGroupHeader.tabsBackground &#8212; #24180c</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3d2814"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a0f05"><title>tab.activeBackground &#8212; #1a0f05</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#F67B00"><title>tab.activeBorderTop &#8212; #F67B00</title></rect>
    <text x="210" y="44" font-size="11" fill="#f5e6d0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#b8997a"><title>tab.inactiveForeground &#8212; #b8997a</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#755a3a"><title>editorLineNumber.foreground &#8212; #755a3a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#F67B00">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#f5e6d0">: {</text>
    <text x="216" y="92" font-size="11" fill="#755a3a">2</text>
    <text x="246" y="92" font-size="11" fill="#F67B00">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#f5e6d0">:</text>
    <text x="424" y="92" font-size="11" fill="#F67B00"><title>textLink.foreground &#8212; #F67B00</title>&quot;#2d1b0a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#755a3a">3</text>
    <text x="232" y="111" font-size="11" fill="#f5e6d0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0f0803"><title>panel.background &#8212; #0f0803</title></rect>
    <rect y="203" width="640" height="1" fill="#3d2814"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a"><title>panelTitle.inactiveForeground &#8212; #b8997a</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#f5e6d0"><title>panelTitle.activeForeground &#8212; #f5e6d0</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#F67B00"><title>panelTitle.activeBorder &#8212; #F67B00</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#f5e6d0"><title>terminal.foreground &#8212; #f5e6d0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set leather-orange</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#94C973"><title>terminal.ansiGreen &#8212; #94C973</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#f5e6d0">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#f5e6d0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#F67B00"><title>terminalCursor.foreground &#8212; #F67B00</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2d1b0a"><title>statusBar.background &#8212; #2d1b0a</title></rect>
    <rect y="274" width="640" height="1" fill="#F67B00" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#f5e6d0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#f5e6d0" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `leather-orange`
**Accent:** `#F67B00` &middot; **Background:** `#1a0f05` &middot; **Title bar:** `#2d1b0a`

---

### N &mdash; Cocoa gold<!-- omit in toc -->


> Warm cocoa brown with antique gold accents.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Cocoa gold theme preview">
  <defs><clipPath id="cn-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cn-clip)">
    <rect width="640" height="296" fill="#1a120a"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2d1f14"><title>titleBar.activeBackground &#8212; #2d1f14</title></rect>
    <rect y="26" width="640" height="2" fill="#C5A260"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#7a6548"><title>titleBar.inactiveForeground &#8212; #7a6548</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#20160d"><title>activityBar.background &#8212; #20160d</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#C5A260"><title>activityBar.foreground &#8212; #C5A260</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7a6548" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a6548</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7a6548" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a6548</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#261a0f"><title>sideBar.background &#8212; #261a0f</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3d2c1c"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#C5A260"><title>sideBarTitle.foreground &#8212; #C5A260</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#C5A260" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #C5A260</title></rect>
    <text x="58" y="69" font-size="11" fill="#C5A260"><title>list.activeSelectionForeground &#8212; #C5A260</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#e8d9bc"><title>sideBar.foreground &#8212; #e8d9bc</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#e8d9bc"><title>sideBar.foreground &#8212; #e8d9bc</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a120a"><title>editor.background &#8212; #1a120a</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#261a0f"><title>editorGroupHeader.tabsBackground &#8212; #261a0f</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3d2c1c"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a120a"><title>tab.activeBackground &#8212; #1a120a</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#C5A260"><title>tab.activeBorderTop &#8212; #C5A260</title></rect>
    <text x="210" y="44" font-size="11" fill="#e8d9bc">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a89074"><title>tab.inactiveForeground &#8212; #a89074</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#746038"><title>editorLineNumber.foreground &#8212; #746038</title>1</text>
    <text x="232" y="73" font-size="11" fill="#C5A260">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e8d9bc">: {</text>
    <text x="216" y="92" font-size="11" fill="#746038">2</text>
    <text x="246" y="92" font-size="11" fill="#C5A260">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e8d9bc">:</text>
    <text x="424" y="92" font-size="11" fill="#C5A260"><title>textLink.foreground &#8212; #C5A260</title>&quot;#2d1f14&quot;</text>
    <text x="216" y="111" font-size="11" fill="#746038">3</text>
    <text x="232" y="111" font-size="11" fill="#e8d9bc">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#100a05"><title>panel.background &#8212; #100a05</title></rect>
    <rect y="203" width="640" height="1" fill="#3d2c1c"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074"><title>panelTitle.inactiveForeground &#8212; #a89074</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e8d9bc"><title>panelTitle.activeForeground &#8212; #e8d9bc</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#C5A260"><title>panelTitle.activeBorder &#8212; #C5A260</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e8d9bc"><title>terminal.foreground &#8212; #e8d9bc</title>PS C:\experiment\vscode-theme&gt; vscode-theme set cocoa-gold</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#9EB773"><title>terminal.ansiGreen &#8212; #9EB773</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e8d9bc">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#e8d9bc">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#C5A260"><title>terminalCursor.foreground &#8212; #C5A260</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2d1f14"><title>statusBar.background &#8212; #2d1f14</title></rect>
    <rect y="274" width="640" height="1" fill="#C5A260" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e8d9bc" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e8d9bc" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `cocoa-gold`
**Accent:** `#C5A260` &middot; **Background:** `#1a120a` &middot; **Title bar:** `#2d1f14`

---

### O &mdash; Espresso green<!-- omit in toc -->


> Deep espresso green accent on warm cream.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Espresso green theme preview">
  <defs><clipPath id="co-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#co-clip)">
    <rect width="640" height="296" fill="#f8f3e8"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#e4dbc4"><title>titleBar.activeBackground &#8212; #e4dbc4</title></rect>
    <rect y="26" width="640" height="2" fill="#00704A"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#8a9085"><title>titleBar.inactiveForeground &#8212; #8a9085</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#ece4cc"><title>activityBar.background &#8212; #ece4cc</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#00704A"><title>activityBar.foreground &#8212; #00704A</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8a9085" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a9085</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8a9085" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a9085</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#f2ebd8"><title>sideBar.background &#8212; #f2ebd8</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#d8ceb4"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#00704A"><title>sideBarTitle.foreground &#8212; #00704A</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#00704A" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #00704A</title></rect>
    <text x="58" y="69" font-size="11" fill="#00704A"><title>list.activeSelectionForeground &#8212; #00704A</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#1e2a1f"><title>sideBar.foreground &#8212; #1e2a1f</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#1e2a1f"><title>sideBar.foreground &#8212; #1e2a1f</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#f8f3e8"><title>editor.background &#8212; #f8f3e8</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#e8e0c8"><title>editorGroupHeader.tabsBackground &#8212; #e8e0c8</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#d8ceb4"/>
    <rect x="196" y="28" width="98" height="22" fill="#f8f3e8"><title>tab.activeBackground &#8212; #f8f3e8</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#00704A"><title>tab.activeBorderTop &#8212; #00704A</title></rect>
    <text x="210" y="44" font-size="11" fill="#1e2a1f">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a7065"><title>tab.inactiveForeground &#8212; #6a7065</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#a8a088"><title>editorLineNumber.foreground &#8212; #a8a088</title>1</text>
    <text x="232" y="73" font-size="11" fill="#00704A">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#1e2a1f">: {</text>
    <text x="216" y="92" font-size="11" fill="#a8a088">2</text>
    <text x="246" y="92" font-size="11" fill="#00704A">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#1e2a1f">:</text>
    <text x="424" y="92" font-size="11" fill="#00704A"><title>textLink.foreground &#8212; #00704A</title>&quot;#e4dbc4&quot;</text>
    <text x="216" y="111" font-size="11" fill="#a8a088">3</text>
    <text x="232" y="111" font-size="11" fill="#1e2a1f">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#f2ebd8"><title>panel.background &#8212; #f2ebd8</title></rect>
    <rect y="203" width="640" height="1" fill="#d8ceb4"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085"><title>panelTitle.inactiveForeground &#8212; #8a9085</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1e2a1f"><title>panelTitle.activeForeground &#8212; #1e2a1f</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#00704A"><title>panelTitle.activeBorder &#8212; #00704A</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#1e2a1f"><title>terminal.foreground &#8212; #1e2a1f</title>PS C:\experiment\vscode-theme&gt; vscode-theme set espresso-green</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#00704A"><title>terminal.ansiGreen &#8212; #00704A</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#1e2a1f">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#1e2a1f">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#00704A"><title>terminalCursor.foreground &#8212; #00704A</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#e4dbc4"><title>statusBar.background &#8212; #e4dbc4</title></rect>
    <rect y="274" width="640" height="1" fill="#00704A" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#1e2a1f" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#1e2a1f" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `espresso-green`
**Accent:** `#00704A` &middot; **Background:** `#f8f3e8` &middot; **Title bar:** `#e4dbc4`

---

### P &mdash; Mountain sunset<!-- omit in toc -->


> Sunset peach over twilight peaks and cerulean sky.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Mountain sunset theme preview">
  <defs><clipPath id="cp-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cp-clip)">
    <rect width="640" height="296" fill="#0a0a14"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#1a1a2e"><title>titleBar.activeBackground &#8212; #1a1a2e</title></rect>
    <rect y="26" width="640" height="2" fill="#F19A4D"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a6080"><title>titleBar.inactiveForeground &#8212; #6a6080</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#12122a"><title>activityBar.background &#8212; #12122a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#F19A4D"><title>activityBar.foreground &#8212; #F19A4D</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a6080</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a6080</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#161628"><title>sideBar.background &#8212; #161628</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#2a2a4a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#F19A4D"><title>sideBarTitle.foreground &#8212; #F19A4D</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#F19A4D" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #F19A4D</title></rect>
    <text x="58" y="69" font-size="11" fill="#F19A4D"><title>list.activeSelectionForeground &#8212; #F19A4D</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#e8d8c4"><title>sideBar.foreground &#8212; #e8d8c4</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#e8d8c4"><title>sideBar.foreground &#8212; #e8d8c4</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a0a14"><title>editor.background &#8212; #0a0a14</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#161628"><title>editorGroupHeader.tabsBackground &#8212; #161628</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#2a2a4a"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a0a14"><title>tab.activeBackground &#8212; #0a0a14</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#F19A4D"><title>tab.activeBorderTop &#8212; #F19A4D</title></rect>
    <text x="210" y="44" font-size="11" fill="#e8d8c4">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#9a8a9a"><title>tab.inactiveForeground &#8212; #9a8a9a</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a5070"><title>editorLineNumber.foreground &#8212; #5a5070</title>1</text>
    <text x="232" y="73" font-size="11" fill="#F19A4D">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e8d8c4">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a5070">2</text>
    <text x="246" y="92" font-size="11" fill="#F19A4D">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e8d8c4">:</text>
    <text x="424" y="92" font-size="11" fill="#F19A4D"><title>textLink.foreground &#8212; #F19A4D</title>&quot;#1a1a2e&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a5070">3</text>
    <text x="232" y="111" font-size="11" fill="#e8d8c4">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#050510"><title>panel.background &#8212; #050510</title></rect>
    <rect y="203" width="640" height="1" fill="#2a2a4a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a"><title>panelTitle.inactiveForeground &#8212; #9a8a9a</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e8d8c4"><title>panelTitle.activeForeground &#8212; #e8d8c4</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#F19A4D"><title>panelTitle.activeBorder &#8212; #F19A4D</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e8d8c4"><title>terminal.foreground &#8212; #e8d8c4</title>PS C:\experiment\vscode-theme&gt; vscode-theme set mountain-sunset</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#8FC9A4"><title>terminal.ansiGreen &#8212; #8FC9A4</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e8d8c4">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#e8d8c4">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#F19A4D"><title>terminalCursor.foreground &#8212; #F19A4D</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#1a1a2e"><title>statusBar.background &#8212; #1a1a2e</title></rect>
    <rect y="274" width="640" height="1" fill="#F19A4D" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e8d8c4" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e8d8c4" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `mountain-sunset`
**Accent:** `#F19A4D` &middot; **Background:** `#0a0a14` &middot; **Title bar:** `#1a1a2e`

---


### T &mdash; Cobalt + crimson<!-- omit in toc -->


> Deep cobalt blue with bright crimson accents &mdash; primary-color, high-contrast identity.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Cobalt + crimson theme preview">
  <defs><clipPath id="ct-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ct-clip)">
    <rect width="640" height="296" fill="#0a1230"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#0057B8"><title>titleBar.activeBackground &#8212; #0057B8</title></rect>
    <rect y="26" width="640" height="2" fill="#E4002B"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#a0a8c0"><title>titleBar.inactiveForeground &#8212; #a0a8c0</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#081028"><title>activityBar.background &#8212; #081028</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#E4002B"><title>activityBar.foreground &#8212; #E4002B</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#5a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a6080</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#5a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a6080</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#122050"><title>sideBar.background &#8212; #122050</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#1a2450"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E4002B"><title>sideBarTitle.foreground &#8212; #E4002B</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#E4002B" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #E4002B</title></rect>
    <text x="58" y="69" font-size="11" fill="#E4002B"><title>list.activeSelectionForeground &#8212; #E4002B</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#F0F0F5"><title>sideBar.foreground &#8212; #F0F0F5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#F0F0F5"><title>sideBar.foreground &#8212; #F0F0F5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a1230"><title>editor.background &#8212; #0a1230</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#122050"><title>editorGroupHeader.tabsBackground &#8212; #122050</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#1a2450"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a1230"><title>tab.activeBackground &#8212; #0a1230</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#E4002B"><title>tab.activeBorderTop &#8212; #E4002B</title></rect>
    <text x="210" y="44" font-size="11" fill="#F0F0F5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a0a8c0"><title>tab.inactiveForeground &#8212; #a0a8c0</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#4a5075"><title>editorLineNumber.foreground &#8212; #4a5075</title>1</text>
    <text x="232" y="73" font-size="11" fill="#E4002B">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#F0F0F5">: {</text>
    <text x="216" y="92" font-size="11" fill="#4a5075">2</text>
    <text x="246" y="92" font-size="11" fill="#E4002B">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#F0F0F5">:</text>
    <text x="424" y="92" font-size="11" fill="#5A9AE8"><title>textLink.foreground &#8212; #5A9AE8</title>&quot;#0057B8&quot;</text>
    <text x="216" y="111" font-size="11" fill="#4a5075">3</text>
    <text x="232" y="111" font-size="11" fill="#F0F0F5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#050a1a"><title>panel.background &#8212; #050a1a</title></rect>
    <rect y="203" width="640" height="1" fill="#1a2450"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0"><title>panelTitle.inactiveForeground &#8212; #a0a8c0</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#F0F0F5"><title>panelTitle.activeForeground &#8212; #F0F0F5</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#E4002B"><title>panelTitle.activeBorder &#8212; #E4002B</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#F0F0F5"><title>terminal.foreground &#8212; #F0F0F5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set cobalt-crimson</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#50C878"><title>terminal.ansiGreen &#8212; #50C878</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#F0F0F5">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#F0F0F5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#E4002B"><title>terminalCursor.foreground &#8212; #E4002B</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#0057B8"><title>statusBar.background &#8212; #0057B8</title></rect>
    <rect y="274" width="640" height="1" fill="#E4002B" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#F0F0F5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#F0F0F5" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `cobalt-crimson`
**Accent:** `#E4002B` &middot; **Background:** `#0a1230` &middot; **Title bar:** `#0057B8`

---


### U &mdash; Canary + red (light)<!-- omit in toc -->


> Canary-yellow light base with racing-red accents and a touch of Italian green.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Canary + red (light) theme preview">
  <defs><clipPath id="cu-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cu-clip)">
    <rect width="640" height="296" fill="#FFF8D6"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#FFDE00"><title>titleBar.activeBackground &#8212; #FFDE00</title></rect>
    <rect y="26" width="640" height="2" fill="#B8001C"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a4a20"><title>titleBar.inactiveForeground &#8212; #6a4a20</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#FFDE00"><title>activityBar.background &#8212; #FFDE00</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#1a1200"><title>activityBar.foreground &#8212; #1a1200</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8a6020" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a6020</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8a6020" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a6020</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#FBEEB0"><title>sideBar.background &#8212; #FBEEB0</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#E5C890"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#B8001C"><title>sideBarTitle.foreground &#8212; #B8001C</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#B8001C" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #B8001C</title></rect>
    <text x="58" y="69" font-size="11" fill="#B8001C"><title>list.activeSelectionForeground &#8212; #B8001C</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#1a1200"><title>sideBar.foreground &#8212; #1a1200</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#1a1200"><title>sideBar.foreground &#8212; #1a1200</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#FFF8D6"><title>editor.background &#8212; #FFF8D6</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#FBEEB0"><title>editorGroupHeader.tabsBackground &#8212; #FBEEB0</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#E5C890"/>
    <rect x="196" y="28" width="98" height="22" fill="#FFF8D6"><title>tab.activeBackground &#8212; #FFF8D6</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#B8001C"><title>tab.activeBorderTop &#8212; #B8001C</title></rect>
    <text x="210" y="44" font-size="11" fill="#1a1200">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a4a20"><title>tab.inactiveForeground &#8212; #6a4a20</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#b89a68"><title>editorLineNumber.foreground &#8212; #b89a68</title>1</text>
    <text x="232" y="73" font-size="11" fill="#B8001C">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#1a1200">: {</text>
    <text x="216" y="92" font-size="11" fill="#b89a68">2</text>
    <text x="246" y="92" font-size="11" fill="#B8001C">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#1a1200">:</text>
    <text x="424" y="92" font-size="11" fill="#B8001C"><title>textLink.foreground &#8212; #B8001C</title>&quot;#FFDE00&quot;</text>
    <text x="216" y="111" font-size="11" fill="#b89a68">3</text>
    <text x="232" y="111" font-size="11" fill="#1a1200">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#F5E280"><title>panel.background &#8212; #F5E280</title></rect>
    <rect y="203" width="640" height="1" fill="#E5C890"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20"><title>panelTitle.inactiveForeground &#8212; #6a4a20</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a1200"><title>panelTitle.activeForeground &#8212; #1a1200</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#B8001C"><title>panelTitle.activeBorder &#8212; #B8001C</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#1a1200"><title>terminal.foreground &#8212; #1a1200</title>PS C:\experiment\vscode-theme&gt; vscode-theme set canary-red</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#008C45"><title>terminal.ansiGreen &#8212; #008C45</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#1a1200">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#1a1200">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#B8001C"><title>terminalCursor.foreground &#8212; #B8001C</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#FFDE00"><title>statusBar.background &#8212; #FFDE00</title></rect>
    <rect y="274" width="640" height="1" fill="#B8001C" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#1a1200" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#1a1200" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `canary-red`
**Accent:** `#B8001C` &middot; **Background:** `#FFF8D6` &middot; **Title bar:** `#FFDE00`

---


### V &mdash; Ember gold<!-- omit in toc -->


> Antique gold over warm charcoal with amber-ember highlights &mdash; muted and glowing.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Ember gold theme preview">
  <defs><clipPath id="cv-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cv-clip)">
    <rect width="640" height="296" fill="#0c0c10"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#18130a"><title>titleBar.activeBackground &#8212; #18130a</title></rect>
    <rect y="26" width="640" height="2" fill="#C9A84E"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a604a"><title>titleBar.inactiveForeground &#8212; #6a604a</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#0e0e14"><title>activityBar.background &#8212; #0e0e14</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#C9A84E"><title>activityBar.foreground &#8212; #C9A84E</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6a604a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a604a</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6a604a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a604a</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#141418"><title>sideBar.background &#8212; #141418</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#2a2520"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#C9A84E"><title>sideBarTitle.foreground &#8212; #C9A84E</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#C9A84E" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #C9A84E</title></rect>
    <text x="58" y="69" font-size="11" fill="#C9A84E"><title>list.activeSelectionForeground &#8212; #C9A84E</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#f0e0b8"><title>sideBar.foreground &#8212; #f0e0b8</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#f0e0b8"><title>sideBar.foreground &#8212; #f0e0b8</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0c0c10"><title>editor.background &#8212; #0c0c10</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#141418"><title>editorGroupHeader.tabsBackground &#8212; #141418</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#2a2520"/>
    <rect x="196" y="28" width="98" height="22" fill="#0c0c10"><title>tab.activeBackground &#8212; #0c0c10</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#C9A84E"><title>tab.activeBorderTop &#8212; #C9A84E</title></rect>
    <text x="210" y="44" font-size="11" fill="#f0e0b8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a09478"><title>tab.inactiveForeground &#8212; #a09478</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a4e3a"><title>editorLineNumber.foreground &#8212; #5a4e3a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#C9A84E">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#f0e0b8">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a4e3a">2</text>
    <text x="246" y="92" font-size="11" fill="#C9A84E">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#f0e0b8">:</text>
    <text x="424" y="92" font-size="11" fill="#D9802F"><title>textLink.foreground &#8212; #D9802F</title>&quot;#18130a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a4e3a">3</text>
    <text x="232" y="111" font-size="11" fill="#f0e0b8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#080810"><title>panel.background &#8212; #080810</title></rect>
    <rect y="203" width="640" height="1" fill="#2a2520"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478"><title>panelTitle.inactiveForeground &#8212; #a09478</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#f0e0b8"><title>panelTitle.activeForeground &#8212; #f0e0b8</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#C9A84E"><title>panelTitle.activeBorder &#8212; #C9A84E</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#f0e0b8"><title>terminal.foreground &#8212; #f0e0b8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set ember-gold</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#8BC078"><title>terminal.ansiGreen &#8212; #8BC078</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#f0e0b8">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#f0e0b8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#C9A84E"><title>terminalCursor.foreground &#8212; #C9A84E</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#18130a"><title>statusBar.background &#8212; #18130a</title></rect>
    <rect y="274" width="640" height="1" fill="#C9A84E" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#f0e0b8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#f0e0b8" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `ember-gold`
**Accent:** `#C9A84E` &middot; **Background:** `#0c0c10` &middot; **Title bar:** `#18130a`

---


### W &mdash; Alpine sunset<!-- omit in toc -->


> Alpine twilight purple with sunset-red accents over mountain indigo.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Alpine sunset theme preview">
  <defs><clipPath id="cw-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cw-clip)">
    <rect width="640" height="296" fill="#1a1438"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2a1a55"><title>titleBar.activeBackground &#8212; #2a1a55</title></rect>
    <rect y="26" width="640" height="2" fill="#E4002B"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#a898c8"><title>titleBar.inactiveForeground &#8212; #a898c8</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1a1030"><title>activityBar.background &#8212; #1a1030</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#E4002B"><title>activityBar.foreground &#8212; #E4002B</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6a5a85" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a5a85</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6a5a85" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a5a85</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#231a48"><title>sideBar.background &#8212; #231a48</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3a2a68"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E4002B"><title>sideBarTitle.foreground &#8212; #E4002B</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#E4002B" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #E4002B</title></rect>
    <text x="58" y="69" font-size="11" fill="#E4002B"><title>list.activeSelectionForeground &#8212; #E4002B</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#ede0f5"><title>sideBar.foreground &#8212; #ede0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#ede0f5"><title>sideBar.foreground &#8212; #ede0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a1438"><title>editor.background &#8212; #1a1438</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#231a48"><title>editorGroupHeader.tabsBackground &#8212; #231a48</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3a2a68"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a1438"><title>tab.activeBackground &#8212; #1a1438</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#E4002B"><title>tab.activeBorderTop &#8212; #E4002B</title></rect>
    <text x="210" y="44" font-size="11" fill="#ede0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a898c8"><title>tab.inactiveForeground &#8212; #a898c8</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a4885"><title>editorLineNumber.foreground &#8212; #5a4885</title>1</text>
    <text x="232" y="73" font-size="11" fill="#E4002B">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#ede0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a4885">2</text>
    <text x="246" y="92" font-size="11" fill="#E4002B">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#ede0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#7088F0"><title>textLink.foreground &#8212; #7088F0</title>&quot;#2a1a55&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a4885">3</text>
    <text x="232" y="111" font-size="11" fill="#ede0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0e0a25"><title>panel.background &#8212; #0e0a25</title></rect>
    <rect y="203" width="640" height="1" fill="#3a2a68"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8"><title>panelTitle.inactiveForeground &#8212; #a898c8</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#ede0f5"><title>panelTitle.activeForeground &#8212; #ede0f5</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#E4002B"><title>panelTitle.activeBorder &#8212; #E4002B</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#ede0f5"><title>terminal.foreground &#8212; #ede0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set alpine-sunset</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#66D090"><title>terminal.ansiGreen &#8212; #66D090</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#ede0f5">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#ede0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#E4002B"><title>terminalCursor.foreground &#8212; #E4002B</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2a1a55"><title>statusBar.background &#8212; #2a1a55</title></rect>
    <rect y="274" width="640" height="1" fill="#E4002B" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#ede0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#ede0f5" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `alpine-sunset`
**Accent:** `#E4002B` &middot; **Background:** `#1a1438` &middot; **Title bar:** `#2a1a55`

---


### X &mdash; Sage paper<!-- omit in toc -->


> Sage green on warm paper cream. Eye-friendly low-blue-light palette for long reading sessions.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Sage paper theme preview">
  <defs><clipPath id="cx-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cx-clip)">
    <rect width="640" height="296" fill="#F5F0E0"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#E5DCC5"><title>titleBar.activeBackground &#8212; #E5DCC5</title></rect>
    <rect y="26" width="640" height="2" fill="#5E8A5E"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6B7A62"><title>titleBar.inactiveForeground &#8212; #6B7A62</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#ECE3CE"><title>activityBar.background &#8212; #ECE3CE</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#5E8A5E"><title>activityBar.foreground &#8212; #5E8A5E</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#839078" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #839078</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#839078" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #839078</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#EFE9D6"><title>sideBar.background &#8212; #EFE9D6</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#D4C9AE"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#5E8A5E"><title>sideBarTitle.foreground &#8212; #5E8A5E</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#5E8A5E" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #5E8A5E</title></rect>
    <text x="58" y="69" font-size="11" fill="#5E8A5E"><title>list.activeSelectionForeground &#8212; #5E8A5E</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#2F3A2A"><title>sideBar.foreground &#8212; #2F3A2A</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#2F3A2A"><title>sideBar.foreground &#8212; #2F3A2A</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#F5F0E0"><title>editor.background &#8212; #F5F0E0</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#E9E1CC"><title>editorGroupHeader.tabsBackground &#8212; #E9E1CC</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#D4C9AE"/>
    <rect x="196" y="28" width="98" height="22" fill="#F5F0E0"><title>tab.activeBackground &#8212; #F5F0E0</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#5E8A5E"><title>tab.activeBorderTop &#8212; #5E8A5E</title></rect>
    <text x="210" y="44" font-size="11" fill="#2F3A2A">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#5D6B52"><title>tab.inactiveForeground &#8212; #5D6B52</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#A09574"><title>editorLineNumber.foreground &#8212; #A09574</title>1</text>
    <text x="232" y="73" font-size="11" fill="#5E8A5E">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#2F3A2A">: {</text>
    <text x="216" y="92" font-size="11" fill="#A09574">2</text>
    <text x="246" y="92" font-size="11" fill="#5E8A5E">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#2F3A2A">:</text>
    <text x="424" y="92" font-size="11" fill="#4A7249"><title>textLink.foreground &#8212; #4A7249</title>&quot;#E5DCC5&quot;</text>
    <text x="216" y="111" font-size="11" fill="#A09574">3</text>
    <text x="232" y="111" font-size="11" fill="#2F3A2A">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#EFE9D6"><title>panel.background &#8212; #EFE9D6</title></rect>
    <rect y="203" width="640" height="1" fill="#D4C9AE"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078"><title>panelTitle.inactiveForeground &#8212; #839078</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2F3A2A"><title>panelTitle.activeForeground &#8212; #2F3A2A</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#5E8A5E"><title>panelTitle.activeBorder &#8212; #5E8A5E</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#2F3A2A"><title>terminal.foreground &#8212; #2F3A2A</title>PS C:\experiment\vscode-theme&gt; vscode-theme set sage-paper</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#4A7249"><title>terminal.ansiGreen &#8212; #4A7249</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#2F3A2A">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#2F3A2A">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#5E8A5E"><title>terminalCursor.foreground &#8212; #5E8A5E</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#E5DCC5"><title>statusBar.background &#8212; #E5DCC5</title></rect>
    <rect y="274" width="640" height="1" fill="#5E8A5E" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#2F3A2A" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#2F3A2A" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `sage-paper`  
**Accent:** `#5E8A5E` &middot; **Background:** `#F5F0E0` &middot; **Title bar:** `#E5DCC5`

---


### Y &mdash; Sage paper dark<!-- omit in toc -->


> Deep warm olive with muted sage accents. Dark counterpart to `sage-paper` — warm undertones reduce blue light for night coding.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Sage paper dark theme preview">
  <defs><clipPath id="cy-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cy-clip)">
    <rect width="640" height="296" fill="#1E241B"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2C3228"><title>titleBar.activeBackground &#8212; #2C3228</title></rect>
    <rect y="26" width="640" height="2" fill="#A3C5A2"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#9AA090"><title>titleBar.inactiveForeground &#8212; #9AA090</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#262C22"><title>activityBar.background &#8212; #262C22</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#A3C5A2"><title>activityBar.foreground &#8212; #A3C5A2</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8A9280" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8A9280</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8A9280" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8A9280</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#262C22"><title>sideBar.background &#8212; #262C22</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3D4538"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#A3C5A2"><title>sideBarTitle.foreground &#8212; #A3C5A2</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#A3C5A2" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #A3C5A2</title></rect>
    <text x="58" y="69" font-size="11" fill="#A3C5A2"><title>list.activeSelectionForeground &#8212; #A3C5A2</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#CFCAB0"><title>sideBar.foreground &#8212; #CFCAB0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#CFCAB0"><title>sideBar.foreground &#8212; #CFCAB0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1E241B"><title>editor.background &#8212; #1E241B</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#2A3026"><title>editorGroupHeader.tabsBackground &#8212; #2A3026</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3D4538"/>
    <rect x="196" y="28" width="98" height="22" fill="#1E241B"><title>tab.activeBackground &#8212; #1E241B</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#A3C5A2"><title>tab.activeBorderTop &#8212; #A3C5A2</title></rect>
    <text x="210" y="44" font-size="11" fill="#CFCAB0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#9AA090"><title>tab.inactiveForeground &#8212; #9AA090</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5E6458"><title>editorLineNumber.foreground &#8212; #5E6458</title>1</text>
    <text x="232" y="73" font-size="11" fill="#A3C5A2">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#CFCAB0">: {</text>
    <text x="216" y="92" font-size="11" fill="#5E6458">2</text>
    <text x="246" y="92" font-size="11" fill="#A3C5A2">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#CFCAB0">:</text>
    <text x="424" y="92" font-size="11" fill="#A3C5A2"><title>textLink.foreground &#8212; #A3C5A2</title>&quot;#2C3228&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5E6458">3</text>
    <text x="232" y="111" font-size="11" fill="#CFCAB0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#262C22"><title>panel.background &#8212; #262C22</title></rect>
    <rect y="203" width="640" height="1" fill="#3D4538"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280"><title>panelTitle.inactiveForeground &#8212; #8A9280</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#CFCAB0"><title>panelTitle.activeForeground &#8212; #CFCAB0</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#A3C5A2"><title>panelTitle.activeBorder &#8212; #A3C5A2</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#CFCAB0"><title>terminal.foreground &#8212; #CFCAB0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set sage-paper-dark</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#7FA77E"><title>terminal.ansiGreen &#8212; #7FA77E</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#CFCAB0">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#CFCAB0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#A3C5A2"><title>terminalCursor.foreground &#8212; #A3C5A2</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2C3228"><title>statusBar.background &#8212; #2C3228</title></rect>
    <rect y="274" width="640" height="1" fill="#A3C5A2" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#CFCAB0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#CFCAB0" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `sage-paper-dark`  
**Accent:** `#A3C5A2` &middot; **Background:** `#1E241B` &middot; **Title bar:** `#2C3228`

---


### Z &mdash; Prism spark<!-- omit in toc -->


> Cool slate base with a four-color gradient palette — cornflower blue, coral, mint, and gold — distributed across UI states and terminal ANSI. Inspired by a 4-pointed prism star.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Prism spark theme preview">
  <defs><clipPath id="cz-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cz-clip)">
    <rect width="640" height="296" fill="#1A1D28"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#262B37"><title>titleBar.activeBackground &#8212; #262B37</title></rect>
    <rect y="26" width="640" height="2" fill="#6495ED"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#9EA3B3"><title>titleBar.inactiveForeground &#8212; #9EA3B3</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#20242F"><title>activityBar.background &#8212; #20242F</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#6495ED"><title>activityBar.foreground &#8212; #6495ED</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7A8094" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8094</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7A8094" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8094</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#20242F"><title>sideBar.background &#8212; #20242F</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#363D4D"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6495ED"><title>sideBarTitle.foreground &#8212; #6495ED</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#6495ED" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #6495ED</title></rect>
    <text x="58" y="69" font-size="11" fill="#6495ED"><title>list.activeSelectionForeground &#8212; #6495ED</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#F4BC42"><title>sideBar.foreground &#8212; #F4BC42</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#70C77F"><title>sideBar.foreground &#8212; #70C77F</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1A1D28"><title>editor.background &#8212; #1A1D28</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#262B37"><title>editorGroupHeader.tabsBackground &#8212; #262B37</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#363D4D"/>
    <rect x="196" y="28" width="98" height="22" fill="#1A1D28"><title>tab.activeBackground &#8212; #1A1D28</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#6495ED"><title>tab.activeBorderTop &#8212; #6495ED</title></rect>
    <text x="210" y="44" font-size="11" fill="#D8DCE8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#9EA3B3"><title>tab.inactiveForeground &#8212; #9EA3B3</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#585F70"><title>editorLineNumber.foreground &#8212; #585F70</title>1</text>
    <text x="232" y="73" font-size="11" fill="#6495ED">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#D8DCE8">: {</text>
    <text x="216" y="92" font-size="11" fill="#585F70">2</text>
    <text x="246" y="92" font-size="11" fill="#6495ED">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#D8DCE8">:</text>
    <text x="424" y="92" font-size="11" fill="#85AFF5"><title>textLink.foreground &#8212; #85AFF5</title>&quot;#262B37&quot;</text>
    <text x="216" y="111" font-size="11" fill="#585F70">3</text>
    <text x="232" y="111" font-size="11" fill="#D8DCE8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#20242F"><title>panel.background &#8212; #20242F</title></rect>
    <rect y="203" width="640" height="1" fill="#363D4D"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094"><title>panelTitle.inactiveForeground &#8212; #7A8094</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#D8DCE8"><title>panelTitle.activeForeground &#8212; #D8DCE8</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#6495ED"><title>panelTitle.activeBorder &#8212; #6495ED</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#D8DCE8"><title>terminal.foreground &#8212; #D8DCE8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set prism-spark</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#70C77F"><title>terminal.ansiGreen &#8212; #70C77F</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#D8DCE8">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#D8DCE8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#6495ED"><title>terminalCursor.foreground &#8212; #6495ED</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#262B37"><title>statusBar.background &#8212; #262B37</title></rect>
    <rect y="274" width="640" height="1" fill="#6495ED" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#D8DCE8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#D8DCE8" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `prism-spark`  
**Accent:** `#6495ED` &middot; **Background:** `#1A1D28` &middot; **Title bar:** `#262B37`

---


### AA &mdash; Prism vivid<!-- omit in toc -->


> Saturated sibling of `prism-spark`. All six palette colors — coral, blue, mint, gold, magenta, cyan — distributed across distinct UI surfaces so every region carries its own identity color.


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Prism vivid theme preview">
  <defs><clipPath id="caa-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#caa-clip)">
    <rect width="640" height="296" fill="#161923"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#241E3A"><title>titleBar.activeBackground &#8212; #241E3A</title></rect>
    <rect y="26" width="640" height="2" fill="#FF7A7A"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#A8AEC2"><title>titleBar.inactiveForeground &#8212; #A8AEC2</title>vacode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1D2030"><title>activityBar.background &#8212; #1D2030</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#5B9DFF"><title>activityBar.foreground &#8212; #5B9DFF</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7A8196" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8196</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7A8196" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8196</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#1D2030"><title>sideBar.background &#8212; #1D2030</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3A3F54"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6EDB8E"><title>sideBarTitle.foreground &#8212; #6EDB8E</title>EXPLORER</text>
    <rect x="36" y="56" width="159" height="18" fill="#D681E8" fill-opacity="0.2"><title>list.activeSelectionBackground &#8212; #D681E8</title></rect>
    <text x="58" y="69" font-size="11" fill="#E8ECF8"><title>list.activeSelectionForeground &#8212; #E8ECF8</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#FFCE5C"><title>sideBar.foreground &#8212; #FFCE5C</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#6EDB8E"><title>sideBar.foreground &#8212; #6EDB8E</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#161923"><title>editor.background &#8212; #161923</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#242839"><title>editorGroupHeader.tabsBackground &#8212; #242839</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3A3F54"/>
    <rect x="196" y="28" width="98" height="22" fill="#161923"><title>tab.activeBackground &#8212; #161923</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#FFCE5C"><title>tab.activeBorderTop &#8212; #FFCE5C</title></rect>
    <text x="210" y="44" font-size="11" fill="#E8ECF8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#A8AEC2"><title>tab.inactiveForeground &#8212; #A8AEC2</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5A6078"><title>editorLineNumber.foreground &#8212; #5A6078</title>1</text>
    <text x="232" y="73" font-size="11" fill="#5B9DFF">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#E8ECF8">: {</text>
    <text x="216" y="92" font-size="11" fill="#5A6078">2</text>
    <text x="246" y="92" font-size="11" fill="#5B9DFF">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#E8ECF8">:</text>
    <text x="424" y="92" font-size="11" fill="#6EDB8E"><title>textLink.foreground &#8212; #6EDB8E</title>&quot;#241E3A&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5A6078">3</text>
    <text x="232" y="111" font-size="11" fill="#E8ECF8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#1D2030"><title>panel.background &#8212; #1D2030</title></rect>
    <rect y="203" width="640" height="1" fill="#3A3F54"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196"><title>panelTitle.inactiveForeground &#8212; #7A8196</title>PROBLEMS</text>
    <text x="78" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196">OUTPUT</text>
    <text x="130" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196">DEBUG CONSOLE</text>
    <text x="226" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E8ECF8"><title>panelTitle.activeForeground &#8212; #E8ECF8</title>TERMINAL</text>
    <rect x="226" y="203" width="56" height="1" fill="#D681E8"><title>panelTitle.activeBorder &#8212; #D681E8</title></rect>
    <text x="290" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196">GITLENS</text>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#E8ECF8"><title>terminal.foreground &#8212; #E8ECF8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set prism-vivid</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#6EDB8E"><title>terminal.ansiGreen &#8212; #6EDB8E</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#E8ECF8">Theme applied to workspace.</text>
    <text x="14" y="257" font-size="11" fill="#E8ECF8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#FF7A7A"><title>terminalCursor.foreground &#8212; #FF7A7A</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2A2046"><title>statusBar.background &#8212; #2A2046</title></rect>
    <rect y="274" width="640" height="1" fill="#4DD8D0" fill-opacity="1.0"/>
    <text x="10" y="289" font-size="11" fill="#E8ECF8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#E8ECF8" opacity="0.85">No problems</text>
  </g>
</svg>
</div>

**Theme name:** `prism-vivid`  
**Accent:** `#5B9DFF` (primary) &middot; **Background:** `#161923` &middot; **Title bar:** `#241E3A`

---


## Using themes as workspace identity markers

Because each theme paints the title bar, activity bar, and status bar with a strong accent, you can use them as *visual environment tags* across VSCode windows — at a glance you always know whether you're looking at prod, staging, or your scratchpad. Apply a theme globally for your default, and override per-workspace with `vscode-theme set <name>` inside any project folder.

One suggested mapping:

| Role                            | Theme                            | Why                                                                            |
| ------------------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| **Production / danger zone**    | `dark-ember`                     | Ember red reads as "be careful here".                                          |
| **Staging / pre-prod**          | `squidink-yellow`                | Gold = caution but not stop.                                                   |
| **Development**                 | `forest-green` or `bedrock-teal` | Green = safe, go.                                                              |
| **Personal / side projects**    | `royal-purple` or `rose-magenta` | Clearly distinct from any work window.                                         |
| **Cloud / infra work**          | `navy-orange` or `ocean-blue`    | Cool tones for long-running infra sessions.                                    |
| **Docs / writing / daylight**   | `paper-light` or `arctic-light`  | Light themes for reading-heavy or bright-room work.                            |
| **Coordinated dark/light pair** | `frappe-teal` + `dawn-teal`      | Shared teal accent — switch by ambient light without changing visual identity. |
| **Long sessions / eye comfort** | `sage-paper` + `sage-paper-dark` | Low-blue-light warm palette for extended work — switch by time of day.         |

This is just a convention — pick whatever color-to-meaning mapping feels right to you. The tool doesn't enforce any of it.

---

## Installation

All theme JSONs live in [.vscode-themes/](.vscode-themes/) in this repo. The switcher looks them up from `~/.vscode-themes/` at runtime, so installation is: copy those JSONs into `~/.vscode-themes/`, then source the script from your shell profile. The scripts in git carry a `__VERSION__` placeholder that the install steps below replace with the current value from [VERSION](VERSION) — see [Version](#version) for why.

**The same block also serves as an update.** The steps are idempotent: `cp` / `Copy-Item` overwrite the theme JSONs and the versioned script in `~/.vscode-themes/`, and the shell-profile-append step is guarded so rerunning never adds a duplicate `source` line. To update after pulling a newer repo (new themes, fixes, or a bumped [VERSION](VERSION)), rerun the whole block — no separate update procedure needed.

Run the commands below from the **repo root**, so `VERSION`, `vscode-theme.sh` / `vscode-theme.ps1`, and `.vscode-themes/` are all in the current directory.

### macOS / Linux (bash / zsh)

```bash
# 1. Create the theme directory
mkdir -p ~/.vscode-themes

# 2. Copy the bundled theme JSONs
cp .vscode-themes/*.json ~/.vscode-themes/

# 3. Bake the current version into vscode-theme.sh, copy it to the install
#    location, then revert the repo copy back to its __VERSION__ placeholder
#    so the working tree stays clean.
VERSION=$(cat VERSION)
sed -i.bak "s/__VERSION__/${VERSION}/" vscode-theme.sh
cp vscode-theme.sh ~/.vscode-themes/vscode-theme.sh
mv vscode-theme.sh.bak vscode-theme.sh   # restore the placeholder in the repo

# 4. Add to shell profile (~/.zshrc or ~/.bashrc) — idempotent: only append
#    if the line isn't already there, so rerunning as an update is safe.
LINE='source ~/.vscode-themes/vscode-theme.sh'
grep -qF "$LINE" ~/.zshrc 2>/dev/null || echo "$LINE" >> ~/.zshrc

# 5. Reload shell
source ~/.zshrc
```

### Windows (PowerShell)

```powershell
# 1. Create the theme directory
New-Item -ItemType Directory -Force "$HOME\.vscode-themes"

# 2. Copy the bundled theme JSONs
Copy-Item .vscode-themes\*.json "$HOME\.vscode-themes\"

# 3. Bake the current version into vscode-theme.ps1, copy it to the install
#    location, then revert the repo copy back to its __VERSION__ placeholder
#    so the working tree stays clean.
$version  = (Get-Content VERSION -Raw).Trim()
$original = Get-Content vscode-theme.ps1 -Raw
($original -replace '__VERSION__', $version) | Set-Content vscode-theme.ps1 -NoNewline
Copy-Item vscode-theme.ps1 "$HOME\.vscode-themes\vscode-theme.ps1"
Set-Content vscode-theme.ps1 -Value $original -NoNewline   # restore placeholder

# 4. Unblock the installed script (required if downloaded from the internet)
Unblock-File "$HOME\.vscode-themes\vscode-theme.ps1"

# 5. Add to PowerShell profile — idempotent: only append if the line isn't
#    already there, so rerunning as an update is safe.
$line = ". `"$HOME\.vscode-themes\vscode-theme.ps1`""
New-Item -ItemType Directory -Force (Split-Path $PROFILE) | Out-Null
New-Item -ItemType File -Force $PROFILE | Out-Null
if (-not ((Get-Content $PROFILE -ErrorAction SilentlyContinue) -contains $line)) {
    Add-Content $PROFILE $line
}

# 6. Reload profile
. $PROFILE
```

---

## Usage

The same subcommands work in both shells. Only the global-scope flag differs in syntax, because each shell has its own parameter convention.

| Action                                   | bash / zsh                                                                          | PowerShell                                                                          |
| ---------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| List available themes                    | `vscode-theme list`                                                                 | `vscode-theme list`                                                                 |
| Show current status (global + workspace) | `vscode-theme status`                                                               | `vscode-theme status`                                                               |
| Pick a theme interactively (workspace)   | `vscode-theme set`                                                                  | `vscode-theme set`                                                                  |
| Pick a theme interactively (global)      | `vscode-theme set --global`<br>`vscode-theme set -g`                                | `vscode-theme set -Global`<br>`vscode-theme set -g`                                 |
| Apply a theme to the current workspace   | `vscode-theme set navy-orange`                                                      | `vscode-theme set navy-orange`                                                      |
| Apply a theme globally                   | `vscode-theme set navy-orange --global`<br>`vscode-theme set navy-orange -g`        | `vscode-theme set navy-orange -Global`<br>`vscode-theme set navy-orange -g`         |
| Reset workspace theme                    | `vscode-theme reset`                                                                | `vscode-theme reset`                                                                |
| Reset global theme                       | `vscode-theme reset --global`<br>`vscode-theme reset -g`                            | `vscode-theme reset -Global`<br>`vscode-theme reset -g`                             |
| Show version                             | `vscode-theme version`<br>`vscode-theme --version`<br>`vscode-theme -v`             | `vscode-theme version`<br>`vscode-theme --version`<br>`vscode-theme -v`             |
| Show help                                | `vscode-theme help`<br>`vscode-theme --help`<br>`vscode-theme -h`<br>`vscode-theme` | `vscode-theme help`<br>`vscode-theme --help`<br>`vscode-theme -h`<br>`vscode-theme` |

**Interactive picker.** `vscode-theme set` with no theme name opens an in-terminal picker that previews each theme live in VSCode as you move through the list.

| Key                      | Action                                                         |
| ------------------------ | -------------------------------------------------------------- |
| `↑` / `↓` (or `k` / `j`) | Move the highlight (the selected theme is applied immediately) |
| `Enter`                  | Keep the currently-highlighted theme                           |
| `Esc` or `q`             | Cancel and revert `settings.json` to its pre-picker state      |
| `Ctrl+C`                 | Same as cancel                                                 |

Cancelling restores the file byte-for-byte: if no `settings.json` existed before, it is removed again; if one existed, its previous contents (including any `__vscode_theme_backup`) are restored untouched.

**Note on the global flag.** PowerShell uses single-dash CamelCase for switches (`-Global`), which is its native convention — `--global` is not valid PowerShell syntax. The bash script accepts `-g` or `--global`; the PowerShell script accepts `-g` or `-Global` (case-insensitive, so `-global` works too). The short form `-g` is identical in both shells.

After applying a theme, reload the VSCode window:  
`Ctrl+Shift+P` (Windows / Linux) or `Cmd+Shift+P` (macOS) → **Reload Window**

---

## How it works

When you run `vscode-theme set <name>`, the tool:

1. Reads the theme JSON from `~/.vscode-themes/<name>.json`
2. Opens (or creates) the target `settings.json`
3. If `workbench.colorCustomizations` already exists and was **not** set by this tool, saves it as `__vscode_theme_backup` inside the same file
4. Writes the new colors and stamps `__vscode_theme_managed` with the theme name

When you run `vscode-theme reset`:

1. If `__vscode_theme_backup` exists → restores it back to `workbench.colorCustomizations`
2. If no backup → removes `workbench.colorCustomizations` entirely
3. If removing leaves the workspace `settings.json` empty, the file itself is deleted
4. All other settings in `settings.json` are untouched throughout

```
settings.json (while theme is active)
├── workbench.colorCustomizations   ← theme colors
├── __vscode_theme_managed          ← "navy-orange"
├── __vscode_theme_backup           ← original colors (if any existed before)
└── ... your other settings ...     ← never touched
```

The bash version uses Python (`python3` or `python`) for JSON merging; make sure one is on your `PATH`. The PowerShell version uses built-in `ConvertFrom-Json` / `ConvertTo-Json` and has no extra dependencies.

---

## Files

| File                                                                                 | Description                                                           |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| [VERSION](VERSION)                                                                   | Single source of truth for the tool's version                         |
| [vscode-theme.sh](vscode-theme.sh)                                                   | Shell function for macOS / Linux (bash / zsh) — carries `__VERSION__` |
| [vscode-theme.ps1](vscode-theme.ps1)                                                 | PowerShell function for Windows — carries `__VERSION__`               |
| [.vscode-themes/navy-orange.json](.vscode-themes/navy-orange.json)                   | Theme A — Navy + orange                                               |
| [.vscode-themes/squidink-yellow.json](.vscode-themes/squidink-yellow.json)           | Theme B — Squid ink + yellow                                          |
| [.vscode-themes/bedrock-teal.json](.vscode-themes/bedrock-teal.json)                 | Theme C — Bedrock teal                                                |
| [.vscode-themes/dark-ember.json](.vscode-themes/dark-ember.json)                     | Theme D — Dark + ember red                                            |
| [.vscode-themes/forest-green.json](.vscode-themes/forest-green.json)                 | Theme E — Forest green                                                |
| [.vscode-themes/royal-purple.json](.vscode-themes/royal-purple.json)                 | Theme F — Royal purple                                                |
| [.vscode-themes/ocean-blue.json](.vscode-themes/ocean-blue.json)                     | Theme G — Ocean blue                                                  |
| [.vscode-themes/rose-magenta.json](.vscode-themes/rose-magenta.json)                 | Theme H — Rose magenta                                                |
| [.vscode-themes/paper-light.json](.vscode-themes/paper-light.json)                   | Theme I — Paper light                                                 |
| [.vscode-themes/arctic-light.json](.vscode-themes/arctic-light.json)                 | Theme J — Arctic light                                                |
| [.vscode-themes/frappe-teal.json](.vscode-themes/frappe-teal.json)                   | Theme K — Frappé teal (Catppuccin-inspired dark)                      |
| [.vscode-themes/dawn-teal.json](.vscode-themes/dawn-teal.json)                       | Theme L — Dawn teal (Rosé Pine Dawn-inspired light)                   |
| [.vscode-themes/leather-orange.json](.vscode-themes/leather-orange.json)             | Theme M — Leather orange                                              |
| [.vscode-themes/cocoa-gold.json](.vscode-themes/cocoa-gold.json)                     | Theme N — Cocoa gold                                                  |
| [.vscode-themes/espresso-green.json](.vscode-themes/espresso-green.json)             | Theme O — Espresso green (light)                                      |
| [.vscode-themes/mountain-sunset.json](.vscode-themes/mountain-sunset.json)           | Theme P — Mountain sunset                                             |
| [.vscode-themes/leather-orange-light.json](.vscode-themes/leather-orange-light.json) | Theme Q — Leather orange (light)                                      |
| [.vscode-themes/cocoa-gold-light.json](.vscode-themes/cocoa-gold-light.json)         | Theme R — Cocoa gold (light)                                          |
| [.vscode-themes/espresso-green-dark.json](.vscode-themes/espresso-green-dark.json)   | Theme S — Espresso green (dark)                                       |
| [.vscode-themes/cobalt-crimson.json](.vscode-themes/cobalt-crimson.json)             | Theme T — Cobalt + crimson                                            |
| [.vscode-themes/canary-red.json](.vscode-themes/canary-red.json)                     | Theme U — Canary + red (light)                                        |
| [.vscode-themes/ember-gold.json](.vscode-themes/ember-gold.json)                     | Theme V — Ember gold                                                  |
| [.vscode-themes/alpine-sunset.json](.vscode-themes/alpine-sunset.json)               | Theme W — Alpine sunset                                               |
| [.vscode-themes/sage-paper.json](.vscode-themes/sage-paper.json)                     | Theme X — Sage paper (light, eye-friendly)                            |
| [.vscode-themes/sage-paper-dark.json](.vscode-themes/sage-paper-dark.json)           | Theme Y — Sage paper dark (dark, eye-friendly)                        |
| [.vscode-themes/prism-spark.json](.vscode-themes/prism-spark.json)                   | Theme Z — Prism spark (four-color gradient, dark)                     |
| [.vscode-themes/prism-vivid.json](.vscode-themes/prism-vivid.json)                   | Theme AA — Prism vivid (six-color multi-surface, dark)                |

---

## Version

The tool's version lives in a single file — [VERSION](VERSION) — at the repo root. That file is the **only** place the version number is ever written.

### How the version flows

Both shell scripts in git carry a literal `__VERSION__` placeholder instead of a hardcoded string:

```sh
# vscode-theme.sh
VSCODE_THEME_VERSION="__VERSION__"
```

```powershell
# vscode-theme.ps1
$script:VT_VERSION = '__VERSION__'
```

The install steps in [Installation](#installation) read `VERSION`, substitute the placeholder in the repo copy, copy the versioned script to `~/.vscode-themes/`, then **revert** the repo copy back to `__VERSION__`. The net effect:

- The installed copy (at `~/.vscode-themes/vscode-theme.{sh,ps1}`) has the real version baked in, so `vscode-theme version` works for end users.
- The repo working tree stays clean — `git status` shows no changes after install.
- There is exactly one place to edit when bumping: [VERSION](VERSION). Rerun the install steps and the new version is picked up automatically; no code changes, no drift between the scripts and the README.
