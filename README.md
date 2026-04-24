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


<div class="vsc-card" style="--hvr-bg:#FF990022;--hvr-fg:#8aa4c8;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #1a2d4a" style="background:#1a2d4a;color:#c8d8f0;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #FF9900;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #5a7a9a" style="flex:1;text-align:center;font-size:11px;color:#5a7a9a;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #0f1e33" style="background:#0f1e33;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #FF9900" style="width:18px;height:18px;background:#FF9900;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #3a5a7a" style="width:18px;height:18px;background:#3a5a7a;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #3a5a7a" style="width:18px;height:18px;background:#3a5a7a;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #0d1b2e" style="background:#0d1b2e;width:160px;padding:8px 0;border-right:1px solid #1e3050;">
      <div title="sideBarTitle.foreground &mdash; #FF9900" style="color:#FF9900;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #FF9900" style="color:#FF9900;font-size:11px;padding:3px 10px 3px 22px;background:#FF990022;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #8aa4c8" style="color:#8aa4c8;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #8aa4c8" style="color:#8aa4c8;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#0a1628;">
      <div title="editorGroupHeader.tabsBackground &mdash; #0d1b2e" style="background:#0d1b2e;display:flex;border-bottom:1px solid #1e3050;">
        <span title="tab.activeBackground &mdash; #0a1628" style="padding:5px 14px;font-size:11px;color:#c8d8f0;border-top:2px solid #FF9900;background:#0a1628;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #5a7a9a" style="padding:5px 14px;font-size:11px;color:#5a7a9a;background:#0d1b2e;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #0a1628" style="flex:1;padding:10px 14px;color:#c8d8f0;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #2a3f5a" style="color:#2a3f5a;margin-right:10px;">1</span><span title="accent &mdash; #FF9900" style="color:#FF9900;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #2a3f5a" style="color:#2a3f5a;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #FF9900" style="color:#FF9900;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #FF9900" style="color:#FF9900;">"#1a2d4a"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #2a3f5a" style="color:#2a3f5a;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #080f1e" style="background:#080f1e;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #1e3050;">
      <span title="panelTitle.inactiveForeground &mdash; #2a3f5a" style="color:#2a3f5a;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #2a3f5a" style="color:#2a3f5a;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #2a3f5a" style="color:#2a3f5a;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #c8d8f0" style="color:#c8d8f0;padding:0 0 5px;line-height:1;border-bottom:1px solid #FF9900;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #2a3f5a" style="color:#2a3f5a;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #080f1e" style="background:#080f1e;padding:10px 14px;color:#c8d8f0;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #c8d8f0" style="color:#c8d8f0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #c8d8f0" style="color:#c8d8f0;">vscode-theme set navy-orange</span></div>
      <div><span title="VSCode default ansi green (theme has no terminal.ansiGreen) &mdash; #0DBC79" style="color:#0DBC79;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #c8d8f0" style="color:#c8d8f0;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #c8d8f0" style="color:#c8d8f0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #FF9900" style="display:inline-block;width:7px;height:12px;background:#FF9900;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #1a2d4a" style="background:#1a2d4a;color:#c8d8f0;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #FF990055;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `navy-orange`  
**Accent:** `#FF9900` &middot; **Background:** `#0a1628` &middot; **Title bar:** `#1a2d4a`

---

### B &mdash; Squid ink + yellow<!-- omit in toc -->


> Deep squid-ink background with gold yellow accents.


<div class="vsc-card" style="--hvr-bg:#FFD70022;--hvr-fg:#8899aa;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #232f3e" style="background:#232f3e;color:#ccd8e8;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #FFD700;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #5a7080" style="flex:1;text-align:center;font-size:11px;color:#5a7080;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #1a2330" style="background:#1a2330;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #FFD700" style="width:18px;height:18px;background:#FFD700;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #445566" style="width:18px;height:18px;background:#445566;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #445566" style="width:18px;height:18px;background:#445566;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #1e2a38" style="background:#1e2a38;width:160px;padding:8px 0;border-right:1px solid #263040;">
      <div title="sideBarTitle.foreground &mdash; #FFD700" style="color:#FFD700;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #FFD700" style="color:#FFD700;font-size:11px;padding:3px 10px 3px 22px;background:#FFD70022;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #8899aa" style="color:#8899aa;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #8899aa" style="color:#8899aa;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#161e28;">
      <div title="editorGroupHeader.tabsBackground &mdash; #1e2a38" style="background:#1e2a38;display:flex;border-bottom:1px solid #263040;">
        <span title="tab.activeBackground &mdash; #161e28" style="padding:5px 14px;font-size:11px;color:#ccdde8;border-top:2px solid #FFD700;background:#161e28;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #5a7080" style="padding:5px 14px;font-size:11px;color:#5a7080;background:#1e2a38;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #161e28" style="flex:1;padding:10px 14px;color:#ccdde8;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #334455" style="color:#334455;margin-right:10px;">1</span><span title="accent &mdash; #FFD700" style="color:#FFD700;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #334455" style="color:#334455;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #FFD700" style="color:#FFD700;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #FFD700" style="color:#FFD700;">"#232f3e"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #334455" style="color:#334455;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #111820" style="background:#111820;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #263040;">
      <span title="panelTitle.inactiveForeground &mdash; #334455" style="color:#334455;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #334455" style="color:#334455;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #334455" style="color:#334455;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #ccdde8" style="color:#ccdde8;padding:0 0 5px;line-height:1;border-bottom:1px solid #FFD700;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #334455" style="color:#334455;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #111820" style="background:#111820;padding:10px 14px;color:#ccdde8;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #ccdde8" style="color:#ccdde8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #ccdde8" style="color:#ccdde8;">vscode-theme set squidink-yellow</span></div>
      <div><span title="VSCode default ansi green (theme has no terminal.ansiGreen) &mdash; #0DBC79" style="color:#0DBC79;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #ccdde8" style="color:#ccdde8;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #ccdde8" style="color:#ccdde8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #FFD700" style="display:inline-block;width:7px;height:12px;background:#FFD700;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #232f3e" style="background:#232f3e;color:#ccd8e8;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #FFD70055;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `squidink-yellow`  
**Accent:** `#FFD700` &middot; **Background:** `#161e28` &middot; **Title bar:** `#232f3e`

---

### C &mdash; Bedrock teal<!-- omit in toc -->


> Dark teal with cyan-green accents.


<div class="vsc-card" style="--hvr-bg:#01A88D22;--hvr-fg:#5a9090;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #0d2b2b" style="background:#0d2b2b;color:#b8d8d4;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #01A88D;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #3a7070" style="flex:1;text-align:center;font-size:11px;color:#3a7070;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #081e1e" style="background:#081e1e;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #01A88D" style="width:18px;height:18px;background:#01A88D;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #1a4040" style="width:18px;height:18px;background:#1a4040;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #1a4040" style="width:18px;height:18px;background:#1a4040;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #0a2020" style="background:#0a2020;width:160px;padding:8px 0;border-right:1px solid #0f2a2a;">
      <div title="sideBarTitle.foreground &mdash; #01A88D" style="color:#01A88D;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #01A88D" style="color:#01A88D;font-size:11px;padding:3px 10px 3px 22px;background:#01A88D22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #5a9090" style="color:#5a9090;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #5a9090" style="color:#5a9090;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#061616;">
      <div title="editorGroupHeader.tabsBackground &mdash; #0a2020" style="background:#0a2020;display:flex;border-bottom:1px solid #0f2a2a;">
        <span title="tab.activeBackground &mdash; #061616" style="padding:5px 14px;font-size:11px;color:#b8d8d4;border-top:2px solid #01A88D;background:#061616;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #3a7070" style="padding:5px 14px;font-size:11px;color:#3a7070;background:#0a2020;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #061616" style="flex:1;padding:10px 14px;color:#b8d8d4;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #1a3838" style="color:#1a3838;margin-right:10px;">1</span><span title="accent &mdash; #01A88D" style="color:#01A88D;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #1a3838" style="color:#1a3838;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #01A88D" style="color:#01A88D;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #01A88D" style="color:#01A88D;">"#0d2b2b"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #1a3838" style="color:#1a3838;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #040e0e" style="background:#040e0e;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #0f2a2a;">
      <span title="panelTitle.inactiveForeground &mdash; #1a3838" style="color:#1a3838;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #1a3838" style="color:#1a3838;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #1a3838" style="color:#1a3838;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #b8d8d4" style="color:#b8d8d4;padding:0 0 5px;line-height:1;border-bottom:1px solid #01A88D;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #1a3838" style="color:#1a3838;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #040e0e" style="background:#040e0e;padding:10px 14px;color:#b8d8d4;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #b8d8d4" style="color:#b8d8d4;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #b8d8d4" style="color:#b8d8d4;">vscode-theme set bedrock-teal</span></div>
      <div><span title="terminal.ansiGreen &mdash; #01A88D" style="color:#01A88D;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #b8d8d4" style="color:#b8d8d4;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #b8d8d4" style="color:#b8d8d4;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #01A88D" style="display:inline-block;width:7px;height:12px;background:#01A88D;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #0d2b2b" style="background:#0d2b2b;color:#b8d8d4;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #01A88D55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `bedrock-teal`  
**Accent:** `#01A88D` &middot; **Background:** `#061616` &middot; **Title bar:** `#0d2b2b`

---

### D &mdash; Dark + ember red<!-- omit in toc -->


> Very dark background with ember red accents — hard to mistake for any other window.


<div class="vsc-card" style="--hvr-bg:#E8441A22;--hvr-fg:#886655;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #1e1410" style="background:#1e1410;color:#e8d8c8;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #E8441A;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #6a5040" style="flex:1;text-align:center;font-size:11px;color:#6a5040;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #140e0a" style="background:#140e0a;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #E8441A" style="width:18px;height:18px;background:#E8441A;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #3a2818" style="width:18px;height:18px;background:#3a2818;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #3a2818" style="width:18px;height:18px;background:#3a2818;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #181008" style="background:#181008;width:160px;padding:8px 0;border-right:1px solid #241810;">
      <div title="sideBarTitle.foreground &mdash; #E8441A" style="color:#E8441A;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #E8441A" style="color:#E8441A;font-size:11px;padding:3px 10px 3px 22px;background:#E8441A22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #886655" style="color:#886655;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #886655" style="color:#886655;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#100c08;">
      <div title="editorGroupHeader.tabsBackground &mdash; #181008" style="background:#181008;display:flex;border-bottom:1px solid #241810;">
        <span title="tab.activeBackground &mdash; #100c08" style="padding:5px 14px;font-size:11px;color:#e8d8c8;border-top:2px solid #E8441A;background:#100c08;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #6a5040" style="padding:5px 14px;font-size:11px;color:#6a5040;background:#181008;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #100c08" style="flex:1;padding:10px 14px;color:#e8d8c8;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #2a1e14" style="color:#2a1e14;margin-right:10px;">1</span><span title="accent &mdash; #E8441A" style="color:#E8441A;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #2a1e14" style="color:#2a1e14;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #E8441A" style="color:#E8441A;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #E8441A" style="color:#E8441A;">"#1e1410"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #2a1e14" style="color:#2a1e14;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #0c0804" style="background:#0c0804;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #241810;">
      <span title="panelTitle.inactiveForeground &mdash; #2a1e14" style="color:#2a1e14;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #2a1e14" style="color:#2a1e14;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #2a1e14" style="color:#2a1e14;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #e8d8c8" style="color:#e8d8c8;padding:0 0 5px;line-height:1;border-bottom:1px solid #E8441A;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #2a1e14" style="color:#2a1e14;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #0c0804" style="background:#0c0804;padding:10px 14px;color:#e8d8c8;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #e8d8c8" style="color:#e8d8c8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #e8d8c8" style="color:#e8d8c8;">vscode-theme set dark-ember</span></div>
      <div><span title="VSCode default ansi green (theme has no terminal.ansiGreen) &mdash; #0DBC79" style="color:#0DBC79;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #e8d8c8" style="color:#e8d8c8;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #e8d8c8" style="color:#e8d8c8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #E8441A" style="display:inline-block;width:7px;height:12px;background:#E8441A;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #1e1410" style="background:#1e1410;color:#e8d8c8;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #E8441A55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `dark-ember`  
**Accent:** `#E8441A` &middot; **Background:** `#100c08` &middot; **Title bar:** `#1e1410`

---

### E &mdash; Forest green<!-- omit in toc -->


> Deep woodland background with a vivid spring-green accent.


<div class="vsc-card" style="--hvr-bg:#4ADE8014;--hvr-fg:#c8e8d0;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #14322a" style="background:#14322a;color:#c8e8d0;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #4ADE80;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #5a8070" style="flex:1;text-align:center;font-size:11px;color:#5a8070;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #0d1f18" style="background:#0d1f18;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #4ADE80" style="width:18px;height:18px;background:#4ADE80;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #5a8070" style="width:18px;height:18px;background:#5a8070;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #5a8070" style="width:18px;height:18px;background:#5a8070;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #0c1d14" style="background:#0c1d14;width:160px;padding:8px 0;border-right:1px solid #1a3528;">
      <div title="sideBarTitle.foreground &mdash; #4ADE80" style="color:#4ADE80;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #4ADE80" style="color:#4ADE80;font-size:11px;padding:3px 10px 3px 22px;background:#4ADE8022;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #c8e8d0" style="color:#c8e8d0;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #c8e8d0" style="color:#c8e8d0;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#0a1a0f;">
      <div title="editorGroupHeader.tabsBackground &mdash; #0c1d14" style="background:#0c1d14;display:flex;border-bottom:1px solid #1a3528;">
        <span title="tab.activeBackground &mdash; #0a1a0f" style="padding:5px 14px;font-size:11px;color:#c8e8d0;border-top:2px solid #4ADE80;background:#0a1a0f;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #8abba0" style="padding:5px 14px;font-size:11px;color:#8abba0;background:#0c1d14;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #0a1a0f" style="flex:1;padding:10px 14px;color:#c8e8d0;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #456b55" style="color:#456b55;margin-right:10px;">1</span><span title="accent &mdash; #4ADE80" style="color:#4ADE80;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #456b55" style="color:#456b55;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #4ADE80" style="color:#4ADE80;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #4ADE80" style="color:#4ADE80;">"#14322a"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #456b55" style="color:#456b55;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #08150c" style="background:#08150c;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #1a3528;">
      <span title="panelTitle.inactiveForeground &mdash; #8abba0" style="color:#8abba0;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #8abba0" style="color:#8abba0;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #8abba0" style="color:#8abba0;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #c8e8d0" style="color:#c8e8d0;padding:0 0 5px;line-height:1;border-bottom:1px solid #4ADE80;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #8abba0" style="color:#8abba0;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #08150c" style="background:#08150c;padding:10px 14px;color:#c8e8d0;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #c8e8d0" style="color:#c8e8d0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #c8e8d0" style="color:#c8e8d0;">vscode-theme set forest-green</span></div>
      <div><span title="terminal.ansiGreen &mdash; #4ADE80" style="color:#4ADE80;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #c8e8d0" style="color:#c8e8d0;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #c8e8d0" style="color:#c8e8d0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #4ADE80" style="display:inline-block;width:7px;height:12px;background:#4ADE80;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #14322a" style="background:#14322a;color:#c8e8d0;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #4ADE8055;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `forest-green`  
**Accent:** `#4ADE80` &middot; **Background:** `#0a1a0f` &middot; **Title bar:** `#14322a`

---

### F &mdash; Royal purple<!-- omit in toc -->


> Dark plum background with a rich violet accent.


<div class="vsc-card" style="--hvr-bg:#A855F714;--hvr-fg:#e0d0f5;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #2a1a4a" style="background:#2a1a4a;color:#e0d0f5;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #A855F7;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #7a5fa0" style="flex:1;text-align:center;font-size:11px;color:#7a5fa0;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #1a1033" style="background:#1a1033;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #A855F7" style="width:18px;height:18px;background:#A855F7;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #7a5fa0" style="width:18px;height:18px;background:#7a5fa0;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #7a5fa0" style="width:18px;height:18px;background:#7a5fa0;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #160d2b" style="background:#160d2b;width:160px;padding:8px 0;border-right:1px solid #2a1a4a;">
      <div title="sideBarTitle.foreground &mdash; #A855F7" style="color:#A855F7;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #A855F7" style="color:#A855F7;font-size:11px;padding:3px 10px 3px 22px;background:#A855F722;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #e0d0f5" style="color:#e0d0f5;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #e0d0f5" style="color:#e0d0f5;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#120a1f;">
      <div title="editorGroupHeader.tabsBackground &mdash; #160d2b" style="background:#160d2b;display:flex;border-bottom:1px solid #2a1a4a;">
        <span title="tab.activeBackground &mdash; #120a1f" style="padding:5px 14px;font-size:11px;color:#e0d0f5;border-top:2px solid #A855F7;background:#120a1f;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #a898c8" style="padding:5px 14px;font-size:11px;color:#a898c8;background:#160d2b;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #120a1f" style="flex:1;padding:10px 14px;color:#e0d0f5;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4580" style="color:#5a4580;margin-right:10px;">1</span><span title="accent &mdash; #A855F7" style="color:#A855F7;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4580" style="color:#5a4580;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #A855F7" style="color:#A855F7;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #A855F7" style="color:#A855F7;">"#2a1a4a"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4580" style="color:#5a4580;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #0e0818" style="background:#0e0818;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #2a1a4a;">
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #e0d0f5" style="color:#e0d0f5;padding:0 0 5px;line-height:1;border-bottom:1px solid #A855F7;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #0e0818" style="background:#0e0818;padding:10px 14px;color:#e0d0f5;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #e0d0f5" style="color:#e0d0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #e0d0f5" style="color:#e0d0f5;">vscode-theme set royal-purple</span></div>
      <div><span title="terminal.ansiGreen &mdash; #86EFAC" style="color:#86EFAC;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #e0d0f5" style="color:#e0d0f5;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #e0d0f5" style="color:#e0d0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #A855F7" style="display:inline-block;width:7px;height:12px;background:#A855F7;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #2a1a4a" style="background:#2a1a4a;color:#e0d0f5;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #A855F755;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `royal-purple`  
**Accent:** `#A855F7` &middot; **Background:** `#120a1f` &middot; **Title bar:** `#2a1a4a`

---

### G &mdash; Ocean blue<!-- omit in toc -->


> Deep ocean background with a bright sky-cyan accent.


<div class="vsc-card" style="--hvr-bg:#38BDF814;--hvr-fg:#c8e0f5;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #0e2a44" style="background:#0e2a44;color:#c8e0f5;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #38BDF8;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #5a8098" style="flex:1;text-align:center;font-size:11px;color:#5a8098;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #091c2e" style="background:#091c2e;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #38BDF8" style="width:18px;height:18px;background:#38BDF8;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #5a8098" style="width:18px;height:18px;background:#5a8098;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #5a8098" style="width:18px;height:18px;background:#5a8098;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #081e32" style="background:#081e32;width:160px;padding:8px 0;border-right:1px solid #14334a;">
      <div title="sideBarTitle.foreground &mdash; #38BDF8" style="color:#38BDF8;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #38BDF8" style="color:#38BDF8;font-size:11px;padding:3px 10px 3px 22px;background:#38BDF822;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #c8e0f5" style="color:#c8e0f5;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #c8e0f5" style="color:#c8e0f5;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#061624;">
      <div title="editorGroupHeader.tabsBackground &mdash; #081e32" style="background:#081e32;display:flex;border-bottom:1px solid #14334a;">
        <span title="tab.activeBackground &mdash; #061624" style="padding:5px 14px;font-size:11px;color:#c8e0f5;border-top:2px solid #38BDF8;background:#061624;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #8ab4c8" style="padding:5px 14px;font-size:11px;color:#8ab4c8;background:#081e32;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #061624" style="flex:1;padding:10px 14px;color:#c8e0f5;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #456880" style="color:#456880;margin-right:10px;">1</span><span title="accent &mdash; #38BDF8" style="color:#38BDF8;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #456880" style="color:#456880;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #38BDF8" style="color:#38BDF8;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #38BDF8" style="color:#38BDF8;">"#0e2a44"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #456880" style="color:#456880;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #04101c" style="background:#04101c;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #14334a;">
      <span title="panelTitle.inactiveForeground &mdash; #8ab4c8" style="color:#8ab4c8;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #8ab4c8" style="color:#8ab4c8;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #8ab4c8" style="color:#8ab4c8;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #c8e0f5" style="color:#c8e0f5;padding:0 0 5px;line-height:1;border-bottom:1px solid #38BDF8;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #8ab4c8" style="color:#8ab4c8;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #04101c" style="background:#04101c;padding:10px 14px;color:#c8e0f5;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #c8e0f5" style="color:#c8e0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #c8e0f5" style="color:#c8e0f5;">vscode-theme set ocean-blue</span></div>
      <div><span title="terminal.ansiGreen &mdash; #5eead4" style="color:#5eead4;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #c8e0f5" style="color:#c8e0f5;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #c8e0f5" style="color:#c8e0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #38BDF8" style="display:inline-block;width:7px;height:12px;background:#38BDF8;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #0e2a44" style="background:#0e2a44;color:#c8e0f5;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #38BDF855;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `ocean-blue`  
**Accent:** `#38BDF8` &middot; **Background:** `#061624` &middot; **Title bar:** `#0e2a44`

---

### H &mdash; Rose magenta<!-- omit in toc -->


> Dark wine background with a hot-pink magenta accent.


<div class="vsc-card" style="--hvr-bg:#EC489914;--hvr-fg:#f5d0e0;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #3a0f28" style="background:#3a0f28;color:#f5d0e0;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #EC4899;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #985a78" style="flex:1;text-align:center;font-size:11px;color:#985a78;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #25091a" style="background:#25091a;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #EC4899" style="width:18px;height:18px;background:#EC4899;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #985a78" style="width:18px;height:18px;background:#985a78;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #985a78" style="width:18px;height:18px;background:#985a78;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #22091a" style="background:#22091a;width:160px;padding:8px 0;border-right:1px solid #3a0f28;">
      <div title="sideBarTitle.foreground &mdash; #EC4899" style="color:#EC4899;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #EC4899" style="color:#EC4899;font-size:11px;padding:3px 10px 3px 22px;background:#EC489922;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #f5d0e0" style="color:#f5d0e0;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #f5d0e0" style="color:#f5d0e0;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#1a0a14;">
      <div title="editorGroupHeader.tabsBackground &mdash; #22091a" style="background:#22091a;display:flex;border-bottom:1px solid #3a0f28;">
        <span title="tab.activeBackground &mdash; #1a0a14" style="padding:5px 14px;font-size:11px;color:#f5d0e0;border-top:2px solid #EC4899;background:#1a0a14;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #c898b0" style="padding:5px 14px;font-size:11px;color:#c898b0;background:#22091a;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #1a0a14" style="flex:1;padding:10px 14px;color:#f5d0e0;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #70355a" style="color:#70355a;margin-right:10px;">1</span><span title="accent &mdash; #EC4899" style="color:#EC4899;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #70355a" style="color:#70355a;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #EC4899" style="color:#EC4899;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #EC4899" style="color:#EC4899;">"#3a0f28"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #70355a" style="color:#70355a;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #14070f" style="background:#14070f;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #3a0f28;">
      <span title="panelTitle.inactiveForeground &mdash; #c898b0" style="color:#c898b0;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #c898b0" style="color:#c898b0;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #c898b0" style="color:#c898b0;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #f5d0e0" style="color:#f5d0e0;padding:0 0 5px;line-height:1;border-bottom:1px solid #EC4899;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #c898b0" style="color:#c898b0;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #14070f" style="background:#14070f;padding:10px 14px;color:#f5d0e0;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #f5d0e0" style="color:#f5d0e0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #f5d0e0" style="color:#f5d0e0;">vscode-theme set rose-magenta</span></div>
      <div><span title="terminal.ansiGreen &mdash; #86EFAC" style="color:#86EFAC;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #f5d0e0" style="color:#f5d0e0;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #f5d0e0" style="color:#f5d0e0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #EC4899" style="display:inline-block;width:7px;height:12px;background:#EC4899;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #3a0f28" style="background:#3a0f28;color:#f5d0e0;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #EC489955;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `rose-magenta`  
**Accent:** `#EC4899` &middot; **Background:** `#1a0a14` &middot; **Title bar:** `#3a0f28`

---

### I &mdash; Paper light<!-- omit in toc -->


> Warm cream paper background with a sepia-brown accent. A light theme for daylight coding.


<div class="vsc-card" style="--hvr-bg:#A0522D14;--hvr-fg:#3a2818;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;border:1px solid #D8CFB8;">
  <div title="titleBar.activeBackground &mdash; #E8DFCC" style="background:#E8DFCC;color:#3a2818;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #A0522D;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #8a7560" style="flex:1;text-align:center;font-size:11px;color:#8a7560;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #F0EADC" style="background:#F0EADC;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #A0522D" style="width:18px;height:18px;background:#A0522D;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8a7560" style="width:18px;height:18px;background:#8a7560;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8a7560" style="width:18px;height:18px;background:#8a7560;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #F5F0E2" style="background:#F5F0E2;width:160px;padding:8px 0;border-right:1px solid #D8CFB8;">
      <div title="sideBarTitle.foreground &mdash; #A0522D" style="color:#A0522D;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #A0522D" style="color:#A0522D;font-size:11px;padding:3px 10px 3px 22px;background:#A0522D22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #3a2818" style="color:#3a2818;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #3a2818" style="color:#3a2818;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#FAF6EE;">
      <div title="editorGroupHeader.tabsBackground &mdash; #ECE4D0" style="background:#ECE4D0;display:flex;border-bottom:1px solid #D8CFB8;">
        <span title="tab.activeBackground &mdash; #FAF6EE" style="padding:5px 14px;font-size:11px;color:#3a2818;border-top:2px solid #A0522D;background:#FAF6EE;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #6a5240" style="padding:5px 14px;font-size:11px;color:#6a5240;background:#ECE4D0;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #FAF6EE" style="flex:1;padding:10px 14px;color:#3a2818;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #a89a7a" style="color:#a89a7a;margin-right:10px;">1</span><span title="accent &mdash; #A0522D" style="color:#A0522D;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #a89a7a" style="color:#a89a7a;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #A0522D" style="color:#A0522D;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #A0522D" style="color:#A0522D;">"#E8DFCC"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #a89a7a" style="color:#a89a7a;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #F5F0E2" style="background:#F5F0E2;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #D8CFB8;">
      <span title="panelTitle.inactiveForeground &mdash; #8a7560" style="color:#8a7560;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #8a7560" style="color:#8a7560;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #8a7560" style="color:#8a7560;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #3a2818" style="color:#3a2818;padding:0 0 5px;line-height:1;border-bottom:1px solid #A0522D;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #8a7560" style="color:#8a7560;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #F5F0E2" style="background:#F5F0E2;padding:10px 14px;color:#3a2818;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #3a2818" style="color:#3a2818;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #3a2818" style="color:#3a2818;">vscode-theme set paper-light</span></div>
      <div><span title="terminal.ansiGreen &mdash; #3D6B2E" style="color:#3D6B2E;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #3a2818" style="color:#3a2818;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #3a2818" style="color:#3a2818;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #A0522D" style="display:inline-block;width:7px;height:12px;background:#A0522D;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #E8DFCC" style="background:#E8DFCC;color:#3a2818;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #A0522D55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `paper-light`  
**Accent:** `#A0522D` &middot; **Background:** `#FAF6EE` &middot; **Title bar:** `#E8DFCC`

---

### J &mdash; Arctic light<!-- omit in toc -->


> Cool frost-white background with a crisp steel-blue accent. A light theme with quiet contrast.


<div class="vsc-card" style="--hvr-bg:#2563EB14;--hvr-fg:#1e3a5f;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;border:1px solid #CCD8EA;">
  <div title="titleBar.activeBackground &mdash; #DCE6F2" style="background:#DCE6F2;color:#1e3a5f;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #2563EB;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #6080a5" style="flex:1;text-align:center;font-size:11px;color:#6080a5;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #E8EEF7" style="background:#E8EEF7;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #2563EB" style="width:18px;height:18px;background:#2563EB;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6080a5" style="width:18px;height:18px;background:#6080a5;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6080a5" style="width:18px;height:18px;background:#6080a5;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #EEF3FA" style="background:#EEF3FA;width:160px;padding:8px 0;border-right:1px solid #CCD8EA;">
      <div title="sideBarTitle.foreground &mdash; #2563EB" style="color:#2563EB;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #2563EB" style="color:#2563EB;font-size:11px;padding:3px 10px 3px 22px;background:#2563EB22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #1e3a5f" style="color:#1e3a5f;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #1e3a5f" style="color:#1e3a5f;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#F4F8FC;">
      <div title="editorGroupHeader.tabsBackground &mdash; #E0E8F4" style="background:#E0E8F4;display:flex;border-bottom:1px solid #CCD8EA;">
        <span title="tab.activeBackground &mdash; #F4F8FC" style="padding:5px 14px;font-size:11px;color:#1e3a5f;border-top:2px solid #2563EB;background:#F4F8FC;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #4a6580" style="padding:5px 14px;font-size:11px;color:#4a6580;background:#E0E8F4;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #F4F8FC" style="flex:1;padding:10px 14px;color:#1e3a5f;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #98b0c8" style="color:#98b0c8;margin-right:10px;">1</span><span title="accent &mdash; #2563EB" style="color:#2563EB;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #98b0c8" style="color:#98b0c8;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #2563EB" style="color:#2563EB;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #2563EB" style="color:#2563EB;">"#DCE6F2"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #98b0c8" style="color:#98b0c8;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #EEF3FA" style="background:#EEF3FA;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #CCD8EA;">
      <span title="panelTitle.inactiveForeground &mdash; #6080a5" style="color:#6080a5;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #6080a5" style="color:#6080a5;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #6080a5" style="color:#6080a5;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #1e3a5f" style="color:#1e3a5f;padding:0 0 5px;line-height:1;border-bottom:1px solid #2563EB;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #6080a5" style="color:#6080a5;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #EEF3FA" style="background:#EEF3FA;padding:10px 14px;color:#1e3a5f;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #1e3a5f" style="color:#1e3a5f;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #1e3a5f" style="color:#1e3a5f;">vscode-theme set arctic-light</span></div>
      <div><span title="terminal.ansiGreen &mdash; #16A34A" style="color:#16A34A;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #1e3a5f" style="color:#1e3a5f;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #1e3a5f" style="color:#1e3a5f;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #2563EB" style="display:inline-block;width:7px;height:12px;background:#2563EB;ertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #DCE6F2" style="background:#DCE6F2;color:#1e3a5f;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #2563EB55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `arctic-light`  
**Accent:** `#2563EB` &middot; **Background:** `#F4F8FC` &middot; **Title bar:** `#DCE6F2`

---

### K &mdash; Frappé teal<!-- omit in toc -->


> Catppuccin Frappé-inspired dark with a vivid teal accent. Designed to pair visually with `dawn-teal` for a matched dark/light set.


<div class="vsc-card" style="--hvr-bg:#11B7C514;--hvr-fg:#c6d0f5;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;border:1px solid #414559;">
  <div title="titleBar.activeBackground &mdash; #292c3c" style="background:#292c3c;color:#c6d0f5;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #11B7C5;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #a5adce" style="flex:1;text-align:center;font-size:11px;color:#a5adce;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #292c3c" style="background:#292c3c;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #11B7C5" style="width:18px;height:18px;background:#11B7C5;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #737994" style="width:18px;height:18px;background:#737994;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #737994" style="width:18px;height:18px;background:#737994;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #292c3c" style="background:#292c3c;width:160px;padding:8px 0;border-right:1px solid #414559;">
      <div title="sideBarTitle.foreground &mdash; #11B7C5" style="color:#11B7C5;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #11B7C5" style="color:#11B7C5;font-size:11px;padding:3px 10px 3px 22px;background:#11B7C522;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #c6d0f5" style="color:#c6d0f5;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #c6d0f5" style="color:#c6d0f5;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#303446;">
      <div title="editorGroupHeader.tabsBackground &mdash; #292c3c" style="background:#292c3c;display:flex;border-bottom:1px solid #414559;">
        <span title="tab.activeBackground &mdash; #303446" style="padding:5px 14px;font-size:11px;color:#c6d0f5;border-top:2px solid #11B7C5;background:#303446;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #a5adce" style="padding:5px 14px;font-size:11px;color:#a5adce;background:#292c3c;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #303446" style="flex:1;padding:10px 14px;color:#c6d0f5;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #626880" style="color:#626880;margin-right:10px;">1</span><span title="accent &mdash; #11B7C5" style="color:#11B7C5;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #626880" style="color:#626880;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #11B7C5" style="color:#11B7C5;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #11B7C5" style="color:#11B7C5;">"#292c3c"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #626880" style="color:#626880;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #232634" style="background:#232634;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #414559;">
      <span title="panelTitle.inactiveForeground &mdash; #a5adce" style="color:#a5adce;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #a5adce" style="color:#a5adce;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #a5adce" style="color:#a5adce;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #c6d0f5" style="color:#c6d0f5;padding:0 0 5px;line-height:1;border-bottom:1px solid #11B7C5;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #a5adce" style="color:#a5adce;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #232634" style="background:#232634;padding:10px 14px;color:#c6d0f5;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #c6d0f5" style="color:#c6d0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #c6d0f5" style="color:#c6d0f5;">vscode-theme set frappe-teal</span></div>
      <div><span title="terminal.ansiGreen &mdash; #a6d189" style="color:#a6d189;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #c6d0f5" style="color:#c6d0f5;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #c6d0f5" style="color:#c6d0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #11B7C5" style="display:inline-block;width:7px;height:12px;background:#11B7C5;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #292c3c" style="background:#292c3c;color:#c6d0f5;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #11B7C555;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `frappe-teal`  
**Accent:** `#11B7C5` &middot; **Background:** `#303446` &middot; **Title bar:** `#292c3c`

---

### L &mdash; Dawn teal<!-- omit in toc -->


> Rosé Pine Dawn-inspired light cream background with a deep teal accent. The light counterpart to `frappe-teal`.


<div class="vsc-card" style="--hvr-bg:#1A7DA414;--hvr-fg:#575279;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;border:1px solid #e8dfd3;">
  <div title="titleBar.activeBackground &mdash; #f2e9e1" style="background:#f2e9e1;color:#575279;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #1A7DA4;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #797593" style="flex:1;text-align:center;font-size:11px;color:#797593;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #fffaf3" style="background:#fffaf3;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #1A7DA4" style="width:18px;height:18px;background:#1A7DA4;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #9893a5" style="width:18px;height:18px;background:#9893a5;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #9893a5" style="width:18px;height:18px;background:#9893a5;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #fffaf3" style="background:#fffaf3;width:160px;padding:8px 0;border-right:1px solid #e8dfd3;">
      <div title="sideBarTitle.foreground &mdash; #1A7DA4" style="color:#1A7DA4;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #1A7DA4" style="color:#1A7DA4;font-size:11px;padding:3px 10px 3px 22px;background:#1A7DA422;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #575279" style="color:#575279;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #575279" style="color:#575279;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#faf4ed;">
      <div title="editorGroupHeader.tabsBackground &mdash; #f2e9e1" style="background:#f2e9e1;display:flex;border-bottom:1px solid #e8dfd3;">
        <span title="tab.activeBackground &mdash; #faf4ed" style="padding:5px 14px;font-size:11px;color:#575279;border-top:2px solid #1A7DA4;background:#faf4ed;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #797593" style="padding:5px 14px;font-size:11px;color:#797593;background:#f2e9e1;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #faf4ed" style="flex:1;padding:10px 14px;color:#575279;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #c7bfb1" style="color:#c7bfb1;margin-right:10px;">1</span><span title="accent &mdash; #1A7DA4" style="color:#1A7DA4;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #c7bfb1" style="color:#c7bfb1;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #1A7DA4" style="color:#1A7DA4;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #1A7DA4" style="color:#1A7DA4;">"#f2e9e1"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #c7bfb1" style="color:#c7bfb1;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #fffaf3" style="background:#fffaf3;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #e8dfd3;">
      <span title="panelTitle.inactiveForeground &mdash; #797593" style="color:#797593;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #797593" style="color:#797593;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #797593" style="color:#797593;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #575279" style="color:#575279;padding:0 0 5px;line-height:1;border-bottom:1px solid #1A7DA4;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #797593" style="color:#797593;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #fffaf3" style="background:#fffaf3;padding:10px 14px;color:#575279;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #575279" style="color:#575279;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #575279" style="color:#575279;">vscode-theme set dawn-teal</span></div>
      <div><span title="terminal.ansiGreen &mdash; #618774" style="color:#618774;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #575279" style="color:#575279;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #575279" style="color:#575279;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #1A7DA4" style="display:inline-block;width:7px;height:12px;background:#1A7DA4;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #f2e9e1" style="background:#f2e9e1;color:#575279;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #1A7DA455;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `dawn-teal`  
**Accent:** `#1A7DA4` &middot; **Background:** `#faf4ed` &middot; **Title bar:** `#f2e9e1`

---

### M &mdash; Leather orange<!-- omit in toc -->


> Rich burnt orange on saddle-leather brown.


<div class="vsc-card" style="--hvr-bg:#F67B0014;--hvr-fg:#f5e6d0;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #2d1b0a" style="background:#2d1b0a;color:#f5e6d0;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #F67B00;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #6b5540" style="flex:1;text-align:center;font-size:11px;color:#6b5540;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #1e130a" style="background:#1e130a;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #F67B00" style="width:18px;height:18px;background:#F67B00;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6b5540" style="width:18px;height:18px;background:#6b5540;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6b5540" style="width:18px;height:18px;background:#6b5540;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #24180c" style="background:#24180c;width:160px;padding:8px 0;border-right:1px solid #3d2814;">
      <div title="sideBarTitle.foreground &mdash; #F67B00" style="color:#F67B00;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #F67B00" style="color:#F67B00;font-size:11px;padding:3px 10px 3px 22px;background:#F67B0022;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #f5e6d0" style="color:#f5e6d0;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #f5e6d0" style="color:#f5e6d0;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#1a0f05;">
      <div title="editorGroupHeader.tabsBackground &mdash; #24180c" style="background:#24180c;display:flex;border-bottom:1px solid #3d2814;">
        <span title="tab.activeBackground &mdash; #1a0f05" style="padding:5px 14px;font-size:11px;color:#f5e6d0;border-top:2px solid #F67B00;background:#1a0f05;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #b8997a" style="padding:5px 14px;font-size:11px;color:#b8997a;background:#24180c;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #1a0f05" style="flex:1;padding:10px 14px;color:#f5e6d0;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #755a3a" style="color:#755a3a;margin-right:10px;">1</span><span title="accent &mdash; #F67B00" style="color:#F67B00;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #755a3a" style="color:#755a3a;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #F67B00" style="color:#F67B00;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #F67B00" style="color:#F67B00;">"#2d1b0a"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #755a3a" style="color:#755a3a;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #0f0803" style="background:#0f0803;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #3d2814;">
      <span title="panelTitle.inactiveForeground &mdash; #b8997a" style="color:#b8997a;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #b8997a" style="color:#b8997a;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #b8997a" style="color:#b8997a;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #f5e6d0" style="color:#f5e6d0;padding:0 0 5px;line-height:1;border-bottom:1px solid #F67B00;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #b8997a" style="color:#b8997a;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #0f0803" style="background:#0f0803;padding:10px 14px;color:#f5e6d0;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #f5e6d0" style="color:#f5e6d0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #f5e6d0" style="color:#f5e6d0;">vscode-theme set leather-orange</span></div>
      <div><span title="terminal.ansiGreen &mdash; #94C973" style="color:#94C973;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #f5e6d0" style="color:#f5e6d0;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #f5e6d0" style="color:#f5e6d0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #F67B00" style="display:inline-block;width:7px;height:12px;background:#F67B00;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #2d1b0a" style="background:#2d1b0a;color:#f5e6d0;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #F67B0055;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `leather-orange`
**Accent:** `#F67B00` &middot; **Background:** `#1a0f05` &middot; **Title bar:** `#2d1b0a`

---

### N &mdash; Cocoa gold<!-- omit in toc -->


> Warm cocoa brown with antique gold accents.


<div class="vsc-card" style="--hvr-bg:#C5A26014;--hvr-fg:#e8d9bc;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #2d1f14" style="background:#2d1f14;color:#e8d9bc;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #C5A260;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #7a6548" style="flex:1;text-align:center;font-size:11px;color:#7a6548;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #20160d" style="background:#20160d;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #C5A260" style="width:18px;height:18px;background:#C5A260;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #7a6548" style="width:18px;height:18px;background:#7a6548;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #7a6548" style="width:18px;height:18px;background:#7a6548;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #261a0f" style="background:#261a0f;width:160px;padding:8px 0;border-right:1px solid #3d2c1c;">
      <div title="sideBarTitle.foreground &mdash; #C5A260" style="color:#C5A260;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #C5A260" style="color:#C5A260;font-size:11px;padding:3px 10px 3px 22px;background:#C5A26022;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #e8d9bc" style="color:#e8d9bc;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #e8d9bc" style="color:#e8d9bc;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#1a120a;">
      <div title="editorGroupHeader.tabsBackground &mdash; #261a0f" style="background:#261a0f;display:flex;border-bottom:1px solid #3d2c1c;">
        <span title="tab.activeBackground &mdash; #1a120a" style="padding:5px 14px;font-size:11px;color:#e8d9bc;border-top:2px solid #C5A260;background:#1a120a;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #a89074" style="padding:5px 14px;font-size:11px;color:#a89074;background:#261a0f;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #1a120a" style="flex:1;padding:10px 14px;color:#e8d9bc;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #746038" style="color:#746038;margin-right:10px;">1</span><span title="accent &mdash; #C5A260" style="color:#C5A260;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #746038" style="color:#746038;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #C5A260" style="color:#C5A260;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #C5A260" style="color:#C5A260;">"#2d1f14"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #746038" style="color:#746038;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #100a05" style="background:#100a05;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #3d2c1c;">
      <span title="panelTitle.inactiveForeground &mdash; #a89074" style="color:#a89074;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #a89074" style="color:#a89074;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #a89074" style="color:#a89074;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #e8d9bc" style="color:#e8d9bc;padding:0 0 5px;line-height:1;border-bottom:1px solid #C5A260;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #a89074" style="color:#a89074;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #100a05" style="background:#100a05;padding:10px 14px;color:#e8d9bc;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #e8d9bc" style="color:#e8d9bc;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #e8d9bc" style="color:#e8d9bc;">vscode-theme set cocoa-gold</span></div>
      <div><span title="terminal.ansiGreen &mdash; #9EB773" style="color:#9EB773;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #e8d9bc" style="color:#e8d9bc;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #e8d9bc" style="color:#e8d9bc;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #C5A260" style="display:inline-block;width:7px;height:12px;background:#C5A260;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #2d1f14" style="background:#2d1f14;color:#e8d9bc;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #C5A26055;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `cocoa-gold`
**Accent:** `#C5A260` &middot; **Background:** `#1a120a` &middot; **Title bar:** `#2d1f14`

---

### O &mdash; Espresso green<!-- omit in toc -->


> Deep espresso green accent on warm cream.


<div class="vsc-card" style="--hvr-bg:#00704A14;--hvr-fg:#1e2a1f;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;border:1px solid #d8ceb4;">
  <div title="titleBar.activeBackground &mdash; #e4dbc4" style="background:#e4dbc4;color:#1e2a1f;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #00704A;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #8a9085" style="flex:1;text-align:center;font-size:11px;color:#8a9085;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #ece4cc" style="background:#ece4cc;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #00704A" style="width:18px;height:18px;background:#00704A;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8a9085" style="width:18px;height:18px;background:#8a9085;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8a9085" style="width:18px;height:18px;background:#8a9085;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #f2ebd8" style="background:#f2ebd8;width:160px;padding:8px 0;border-right:1px solid #d8ceb4;">
      <div title="sideBarTitle.foreground &mdash; #00704A" style="color:#00704A;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #00704A" style="color:#00704A;font-size:11px;padding:3px 10px 3px 22px;background:#00704A22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #1e2a1f" style="color:#1e2a1f;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #1e2a1f" style="color:#1e2a1f;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#f8f3e8;">
      <div title="editorGroupHeader.tabsBackground &mdash; #e8e0c8" style="background:#e8e0c8;display:flex;border-bottom:1px solid #d8ceb4;">
        <span title="tab.activeBackground &mdash; #f8f3e8" style="padding:5px 14px;font-size:11px;color:#1e2a1f;border-top:2px solid #00704A;background:#f8f3e8;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #6a7065" style="padding:5px 14px;font-size:11px;color:#6a7065;background:#e8e0c8;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #f8f3e8" style="flex:1;padding:10px 14px;color:#1e2a1f;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #a8a088" style="color:#a8a088;margin-right:10px;">1</span><span title="accent &mdash; #00704A" style="color:#00704A;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #a8a088" style="color:#a8a088;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #00704A" style="color:#00704A;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #00704A" style="color:#00704A;">"#e4dbc4"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #a8a088" style="color:#a8a088;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #f2ebd8" style="background:#f2ebd8;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #d8ceb4;">
      <span title="panelTitle.inactiveForeground &mdash; #8a9085" style="color:#8a9085;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #8a9085" style="color:#8a9085;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #8a9085" style="color:#8a9085;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #1e2a1f" style="color:#1e2a1f;padding:0 0 5px;line-height:1;border-bottom:1px solid #00704A;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #8a9085" style="color:#8a9085;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #f2ebd8" style="background:#f2ebd8;padding:10px 14px;color:#1e2a1f;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #1e2a1f" style="color:#1e2a1f;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #1e2a1f" style="color:#1e2a1f;">vscode-theme set espresso-green</span></div>
      <div><span title="terminal.ansiGreen &mdash; #00704A" style="color:#00704A;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #1e2a1f" style="color:#1e2a1f;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #1e2a1f" style="color:#1e2a1f;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #00704A" style="display:inline-block;width:7px;height:12px;background:#00704A;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #e4dbc4" style="background:#e4dbc4;color:#1e2a1f;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #00704A55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `espresso-green`
**Accent:** `#00704A` &middot; **Background:** `#f8f3e8` &middot; **Title bar:** `#e4dbc4`

---

### P &mdash; Mountain sunset<!-- omit in toc -->


> Sunset peach over twilight peaks and cerulean sky.


<div class="vsc-card" style="--hvr-bg:#F19A4D14;--hvr-fg:#e8d8c4;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #1a1a2e" style="background:#1a1a2e;color:#e8d8c4;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #F19A4D;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #6a6080" style="flex:1;text-align:center;font-size:11px;color:#6a6080;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #12122a" style="background:#12122a;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #F19A4D" style="width:18px;height:18px;background:#F19A4D;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6a6080" style="width:18px;height:18px;background:#6a6080;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6a6080" style="width:18px;height:18px;background:#6a6080;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #161628" style="background:#161628;width:160px;padding:8px 0;border-right:1px solid #2a2a4a;">
      <div title="sideBarTitle.foreground &mdash; #F19A4D" style="color:#F19A4D;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #F19A4D" style="color:#F19A4D;font-size:11px;padding:3px 10px 3px 22px;background:#F19A4D22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #e8d8c4" style="color:#e8d8c4;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #e8d8c4" style="color:#e8d8c4;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#0a0a14;">
      <div title="editorGroupHeader.tabsBackground &mdash; #161628" style="background:#161628;display:flex;border-bottom:1px solid #2a2a4a;">
        <span title="tab.activeBackground &mdash; #0a0a14" style="padding:5px 14px;font-size:11px;color:#e8d8c4;border-top:2px solid #F19A4D;background:#0a0a14;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #9a8a9a" style="padding:5px 14px;font-size:11px;color:#9a8a9a;background:#161628;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #0a0a14" style="flex:1;padding:10px 14px;color:#e8d8c4;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a5070" style="color:#5a5070;margin-right:10px;">1</span><span title="accent &mdash; #F19A4D" style="color:#F19A4D;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a5070" style="color:#5a5070;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #F19A4D" style="color:#F19A4D;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #F19A4D" style="color:#F19A4D;">"#1a1a2e"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a5070" style="color:#5a5070;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #050510" style="background:#050510;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #2a2a4a;">
      <span title="panelTitle.inactiveForeground &mdash; #9a8a9a" style="color:#9a8a9a;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #9a8a9a" style="color:#9a8a9a;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #9a8a9a" style="color:#9a8a9a;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #e8d8c4" style="color:#e8d8c4;padding:0 0 5px;line-height:1;border-bottom:1px solid #F19A4D;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #9a8a9a" style="color:#9a8a9a;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #050510" style="background:#050510;padding:10px 14px;color:#e8d8c4;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #e8d8c4" style="color:#e8d8c4;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #e8d8c4" style="color:#e8d8c4;">vscode-theme set mountain-sunset</span></div>
      <div><span title="terminal.ansiGreen &mdash; #8FC9A4" style="color:#8FC9A4;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #e8d8c4" style="color:#e8d8c4;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #e8d8c4" style="color:#e8d8c4;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #F19A4D" style="display:inline-block;width:7px;height:12px;background:#F19A4D;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #1a1a2e" style="background:#1a1a2e;color:#e8d8c4;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #F19A4D55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `mountain-sunset`
**Accent:** `#F19A4D` &middot; **Background:** `#0a0a14` &middot; **Title bar:** `#1a1a2e`

---


### T &mdash; Cobalt + crimson<!-- omit in toc -->


> Deep cobalt blue with bright crimson accents &mdash; primary-color, high-contrast identity.


<div class="vsc-card" style="--hvr-bg:#E4002B14;--hvr-fg:#F0F0F5;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #0057B8" style="background:#0057B8;color:#F0F0F5;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #E4002B;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #a0a8c0" style="flex:1;text-align:center;font-size:11px;color:#a0a8c0;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #081028" style="background:#081028;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #E4002B" style="width:18px;height:18px;background:#E4002B;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #5a6080" style="width:18px;height:18px;background:#5a6080;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #5a6080" style="width:18px;height:18px;background:#5a6080;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #122050" style="background:#122050;width:160px;padding:8px 0;border-right:1px solid #1a2450;">
      <div title="sideBarTitle.foreground &mdash; #E4002B" style="color:#E4002B;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #E4002B" style="color:#E4002B;font-size:11px;padding:3px 10px 3px 22px;background:#E4002B22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #F0F0F5" style="color:#F0F0F5;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #F0F0F5" style="color:#F0F0F5;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#0a1230;">
      <div title="editorGroupHeader.tabsBackground &mdash; #122050" style="background:#122050;display:flex;border-bottom:1px solid #1a2450;">
        <span title="tab.activeBackground &mdash; #0a1230" style="padding:5px 14px;font-size:11px;color:#F0F0F5;border-top:2px solid #E4002B;background:#0a1230;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #a0a8c0" style="padding:5px 14px;font-size:11px;color:#a0a8c0;background:#122050;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #0a1230" style="flex:1;padding:10px 14px;color:#F0F0F5;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #4a5075" style="color:#4a5075;margin-right:10px;">1</span><span title="accent &mdash; #E4002B" style="color:#E4002B;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #4a5075" style="color:#4a5075;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #E4002B" style="color:#E4002B;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #5A9AE8" style="color:#5A9AE8;">"#0057B8"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #4a5075" style="color:#4a5075;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #050a1a" style="background:#050a1a;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #1a2450;">
      <span title="panelTitle.inactiveForeground &mdash; #a0a8c0" style="color:#a0a8c0;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #a0a8c0" style="color:#a0a8c0;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #a0a8c0" style="color:#a0a8c0;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #F0F0F5" style="color:#F0F0F5;padding:0 0 5px;line-height:1;border-bottom:1px solid #E4002B;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #a0a8c0" style="color:#a0a8c0;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #050a1a" style="background:#050a1a;padding:10px 14px;color:#F0F0F5;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #F0F0F5" style="color:#F0F0F5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #F0F0F5" style="color:#F0F0F5;">vscode-theme set cobalt-crimson</span></div>
      <div><span title="terminal.ansiGreen &mdash; #50C878" style="color:#50C878;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #F0F0F5" style="color:#F0F0F5;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #F0F0F5" style="color:#F0F0F5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #E4002B" style="display:inline-block;width:7px;height:12px;background:#E4002B;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #0057B8" style="background:#0057B8;color:#F0F0F5;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #E4002B55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `cobalt-crimson`
**Accent:** `#E4002B` &middot; **Background:** `#0a1230` &middot; **Title bar:** `#0057B8`

---


### U &mdash; Canary + red (light)<!-- omit in toc -->


> Canary-yellow light base with racing-red accents and a touch of Italian green.


<div class="vsc-card" style="--hvr-bg:#B8001C14;--hvr-fg:#1a1200;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #FFDE00" style="background:#FFDE00;color:#1a1200;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #B8001C;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #6a4a20" style="flex:1;text-align:center;font-size:11px;color:#6a4a20;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #FFDE00" style="background:#FFDE00;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #1a1200" style="width:18px;height:18px;background:#1a1200;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8a6020" style="width:18px;height:18px;background:#8a6020;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8a6020" style="width:18px;height:18px;background:#8a6020;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #FBEEB0" style="background:#FBEEB0;width:160px;padding:8px 0;border-right:1px solid #E5C890;">
      <div title="sideBarTitle.foreground &mdash; #B8001C" style="color:#B8001C;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #B8001C" style="color:#B8001C;font-size:11px;padding:3px 10px 3px 22px;background:#B8001C22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #1a1200" style="color:#1a1200;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #1a1200" style="color:#1a1200;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#FFF8D6;">
      <div title="editorGroupHeader.tabsBackground &mdash; #FBEEB0" style="background:#FBEEB0;display:flex;border-bottom:1px solid #E5C890;">
        <span title="tab.activeBackground &mdash; #FFF8D6" style="padding:5px 14px;font-size:11px;color:#1a1200;border-top:2px solid #B8001C;background:#FFF8D6;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #6a4a20" style="padding:5px 14px;font-size:11px;color:#6a4a20;background:#FBEEB0;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #FFF8D6" style="flex:1;padding:10px 14px;color:#1a1200;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #b89a68" style="color:#b89a68;margin-right:10px;">1</span><span title="accent &mdash; #B8001C" style="color:#B8001C;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #b89a68" style="color:#b89a68;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #B8001C" style="color:#B8001C;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #B8001C" style="color:#B8001C;">"#FFDE00"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #b89a68" style="color:#b89a68;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #F5E280" style="background:#F5E280;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #E5C890;">
      <span title="panelTitle.inactiveForeground &mdash; #6a4a20" style="color:#6a4a20;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #6a4a20" style="color:#6a4a20;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #6a4a20" style="color:#6a4a20;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #1a1200" style="color:#1a1200;padding:0 0 5px;line-height:1;border-bottom:1px solid #B8001C;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #6a4a20" style="color:#6a4a20;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #F5E280" style="background:#F5E280;padding:10px 14px;color:#1a1200;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #1a1200" style="color:#1a1200;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #1a1200" style="color:#1a1200;">vscode-theme set canary-red</span></div>
      <div><span title="terminal.ansiGreen &mdash; #008C45" style="color:#008C45;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #1a1200" style="color:#1a1200;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #1a1200" style="color:#1a1200;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #B8001C" style="display:inline-block;width:7px;height:12px;background:#B8001C;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #FFDE00" style="background:#FFDE00;color:#1a1200;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #B8001C55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `canary-red`
**Accent:** `#B8001C` &middot; **Background:** `#FFF8D6` &middot; **Title bar:** `#FFDE00`

---


### V &mdash; Ember gold<!-- omit in toc -->


> Antique gold over warm charcoal with amber-ember highlights &mdash; muted and glowing.


<div class="vsc-card" style="--hvr-bg:#C9A84E14;--hvr-fg:#f0e0b8;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #18130a" style="background:#18130a;color:#f0e0b8;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #C9A84E;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #6a604a" style="flex:1;text-align:center;font-size:11px;color:#6a604a;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #0e0e14" style="background:#0e0e14;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #C9A84E" style="width:18px;height:18px;background:#C9A84E;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6a604a" style="width:18px;height:18px;background:#6a604a;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6a604a" style="width:18px;height:18px;background:#6a604a;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #141418" style="background:#141418;width:160px;padding:8px 0;border-right:1px solid #2a2520;">
      <div title="sideBarTitle.foreground &mdash; #C9A84E" style="color:#C9A84E;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #C9A84E" style="color:#C9A84E;font-size:11px;padding:3px 10px 3px 22px;background:#C9A84E22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #f0e0b8" style="color:#f0e0b8;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #f0e0b8" style="color:#f0e0b8;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#0c0c10;">
      <div title="editorGroupHeader.tabsBackground &mdash; #141418" style="background:#141418;display:flex;border-bottom:1px solid #2a2520;">
        <span title="tab.activeBackground &mdash; #0c0c10" style="padding:5px 14px;font-size:11px;color:#f0e0b8;border-top:2px solid #C9A84E;background:#0c0c10;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #a09478" style="padding:5px 14px;font-size:11px;color:#a09478;background:#141418;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #0c0c10" style="flex:1;padding:10px 14px;color:#f0e0b8;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4e3a" style="color:#5a4e3a;margin-right:10px;">1</span><span title="accent &mdash; #C9A84E" style="color:#C9A84E;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4e3a" style="color:#5a4e3a;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #C9A84E" style="color:#C9A84E;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #D9802F" style="color:#D9802F;">"#18130a"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4e3a" style="color:#5a4e3a;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #080810" style="background:#080810;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #2a2520;">
      <span title="panelTitle.inactiveForeground &mdash; #a09478" style="color:#a09478;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #a09478" style="color:#a09478;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #a09478" style="color:#a09478;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #f0e0b8" style="color:#f0e0b8;padding:0 0 5px;line-height:1;border-bottom:1px solid #C9A84E;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #a09478" style="color:#a09478;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #080810" style="background:#080810;padding:10px 14px;color:#f0e0b8;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #f0e0b8" style="color:#f0e0b8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #f0e0b8" style="color:#f0e0b8;">vscode-theme set ember-gold</span></div>
      <div><span title="terminal.ansiGreen &mdash; #8BC078" style="color:#8BC078;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #f0e0b8" style="color:#f0e0b8;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #f0e0b8" style="color:#f0e0b8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #C9A84E" style="display:inline-block;width:7px;height:12px;background:#C9A84E;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #18130a" style="background:#18130a;color:#f0e0b8;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #C9A84E55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `ember-gold`
**Accent:** `#C9A84E` &middot; **Background:** `#0c0c10` &middot; **Title bar:** `#18130a`

---


### W &mdash; Alpine sunset<!-- omit in toc -->


> Alpine twilight purple with sunset-red accents over mountain indigo.


<div class="vsc-card" style="--hvr-bg:#E4002B14;--hvr-fg:#ede0f5;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #2a1a55" style="background:#2a1a55;color:#ede0f5;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #E4002B;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #a898c8" style="flex:1;text-align:center;font-size:11px;color:#a898c8;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #1a1030" style="background:#1a1030;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #E4002B" style="width:18px;height:18px;background:#E4002B;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6a5a85" style="width:18px;height:18px;background:#6a5a85;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #6a5a85" style="width:18px;height:18px;background:#6a5a85;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #231a48" style="background:#231a48;width:160px;padding:8px 0;border-right:1px solid #3a2a68;">
      <div title="sideBarTitle.foreground &mdash; #E4002B" style="color:#E4002B;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #E4002B" style="color:#E4002B;font-size:11px;padding:3px 10px 3px 22px;background:#E4002B22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #ede0f5" style="color:#ede0f5;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #ede0f5" style="color:#ede0f5;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#1a1438;">
      <div title="editorGroupHeader.tabsBackground &mdash; #231a48" style="background:#231a48;display:flex;border-bottom:1px solid #3a2a68;">
        <span title="tab.activeBackground &mdash; #1a1438" style="padding:5px 14px;font-size:11px;color:#ede0f5;border-top:2px solid #E4002B;background:#1a1438;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #a898c8" style="padding:5px 14px;font-size:11px;color:#a898c8;background:#231a48;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #1a1438" style="flex:1;padding:10px 14px;color:#ede0f5;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4885" style="color:#5a4885;margin-right:10px;">1</span><span title="accent &mdash; #E4002B" style="color:#E4002B;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4885" style="color:#5a4885;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #E4002B" style="color:#E4002B;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #7088F0" style="color:#7088F0;">"#2a1a55"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5a4885" style="color:#5a4885;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #0e0a25" style="background:#0e0a25;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #3a2a68;">
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #ede0f5" style="color:#ede0f5;padding:0 0 5px;line-height:1;border-bottom:1px solid #E4002B;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #a898c8" style="color:#a898c8;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #0e0a25" style="background:#0e0a25;padding:10px 14px;color:#ede0f5;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #ede0f5" style="color:#ede0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #ede0f5" style="color:#ede0f5;">vscode-theme set alpine-sunset</span></div>
      <div><span title="terminal.ansiGreen &mdash; #66D090" style="color:#66D090;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #ede0f5" style="color:#ede0f5;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #ede0f5" style="color:#ede0f5;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #E4002B" style="display:inline-block;width:7px;height:12px;background:#E4002B;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #2a1a55" style="background:#2a1a55;color:#ede0f5;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #E4002B55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `alpine-sunset`
**Accent:** `#E4002B` &middot; **Background:** `#1a1438` &middot; **Title bar:** `#2a1a55`

---


### X &mdash; Sage paper<!-- omit in toc -->


> Sage green on warm paper cream. Eye-friendly low-blue-light palette for long reading sessions.


<div class="vsc-card" style="--hvr-bg:#5E8A5E14;--hvr-fg:#2F3A2A;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #E5DCC5" style="background:#E5DCC5;color:#2F3A2A;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #5E8A5E;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #6B7A62" style="flex:1;text-align:center;font-size:11px;color:#6B7A62;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #ECE3CE" style="background:#ECE3CE;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #5E8A5E" style="width:18px;height:18px;background:#5E8A5E;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #839078" style="width:18px;height:18px;background:#839078;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #839078" style="width:18px;height:18px;background:#839078;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #EFE9D6" style="background:#EFE9D6;width:160px;padding:8px 0;border-right:1px solid #D4C9AE;">
      <div title="sideBarTitle.foreground &mdash; #5E8A5E" style="color:#5E8A5E;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #5E8A5E" style="color:#5E8A5E;font-size:11px;padding:3px 10px 3px 22px;background:#5E8A5E22;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #2F3A2A" style="color:#2F3A2A;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #2F3A2A" style="color:#2F3A2A;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#F5F0E0;">
      <div title="editorGroupHeader.tabsBackground &mdash; #E9E1CC" style="background:#E9E1CC;display:flex;border-bottom:1px solid #D4C9AE;">
        <span title="tab.activeBackground &mdash; #F5F0E0" style="padding:5px 14px;font-size:11px;color:#2F3A2A;border-top:2px solid #5E8A5E;background:#F5F0E0;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #5D6B52" style="padding:5px 14px;font-size:11px;color:#5D6B52;background:#E9E1CC;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #F5F0E0" style="flex:1;padding:10px 14px;color:#2F3A2A;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #A09574" style="color:#A09574;margin-right:10px;">1</span><span title="accent &mdash; #5E8A5E" style="color:#5E8A5E;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #A09574" style="color:#A09574;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #5E8A5E" style="color:#5E8A5E;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #4A7249" style="color:#4A7249;">"#E5DCC5"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #A09574" style="color:#A09574;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #EFE9D6" style="background:#EFE9D6;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #D4C9AE;">
      <span title="panelTitle.inactiveForeground &mdash; #839078" style="color:#839078;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #839078" style="color:#839078;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #839078" style="color:#839078;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #2F3A2A" style="color:#2F3A2A;padding:0 0 5px;line-height:1;border-bottom:1px solid #5E8A5E;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #839078" style="color:#839078;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #EFE9D6" style="background:#EFE9D6;padding:10px 14px;color:#2F3A2A;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #2F3A2A" style="color:#2F3A2A;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #2F3A2A" style="color:#2F3A2A;">vscode-theme set sage-paper</span></div>
      <div><span title="terminal.ansiGreen &mdash; #4A7249" style="color:#4A7249;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #2F3A2A" style="color:#2F3A2A;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #2F3A2A" style="color:#2F3A2A;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #5E8A5E" style="display:inline-block;width:7px;height:12px;background:#5E8A5E;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #E5DCC5" style="background:#E5DCC5;color:#2F3A2A;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #5E8A5E55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `sage-paper`  
**Accent:** `#5E8A5E` &middot; **Background:** `#F5F0E0` &middot; **Title bar:** `#E5DCC5`

---


### Y &mdash; Sage paper dark<!-- omit in toc -->


> Deep warm olive with muted sage accents. Dark counterpart to `sage-paper` — warm undertones reduce blue light for night coding.


<div class="vsc-card" style="--hvr-bg:#A3C5A214;--hvr-fg:#CFCAB0;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #2C3228" style="background:#2C3228;color:#CFCAB0;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #A3C5A2;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #9AA090" style="flex:1;text-align:center;font-size:11px;color:#9AA090;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #262C22" style="background:#262C22;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #A3C5A2" style="width:18px;height:18px;background:#A3C5A2;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8A9280" style="width:18px;height:18px;background:#8A9280;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #8A9280" style="width:18px;height:18px;background:#8A9280;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #262C22" style="background:#262C22;width:160px;padding:8px 0;border-right:1px solid #3D4538;">
      <div title="sideBarTitle.foreground &mdash; #A3C5A2" style="color:#A3C5A2;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #A3C5A2" style="color:#A3C5A2;font-size:11px;padding:3px 10px 3px 22px;background:#A3C5A222;">settings.json</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #CFCAB0" style="color:#CFCAB0;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="sideBar.foreground &mdash; #CFCAB0" style="color:#CFCAB0;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#1E241B;">
      <div title="editorGroupHeader.tabsBackground &mdash; #2A3026" style="background:#2A3026;display:flex;border-bottom:1px solid #3D4538;">
        <span title="tab.activeBackground &mdash; #1E241B" style="padding:5px 14px;font-size:11px;color:#CFCAB0;border-top:2px solid #A3C5A2;background:#1E241B;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #9AA090" style="padding:5px 14px;font-size:11px;color:#9AA090;background:#2A3026;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #1E241B" style="flex:1;padding:10px 14px;color:#CFCAB0;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5E6458" style="color:#5E6458;margin-right:10px;">1</span><span title="accent &mdash; #A3C5A2" style="color:#A3C5A2;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5E6458" style="color:#5E6458;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #A3C5A2" style="color:#A3C5A2;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #A3C5A2" style="color:#A3C5A2;">"#2C3228"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #5E6458" style="color:#5E6458;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #262C22" style="background:#262C22;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #3D4538;">
      <span title="panelTitle.inactiveForeground &mdash; #8A9280" style="color:#8A9280;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #8A9280" style="color:#8A9280;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #8A9280" style="color:#8A9280;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #CFCAB0" style="color:#CFCAB0;padding:0 0 5px;line-height:1;border-bottom:1px solid #A3C5A2;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #8A9280" style="color:#8A9280;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #262C22" style="background:#262C22;padding:10px 14px;color:#CFCAB0;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #CFCAB0" style="color:#CFCAB0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #CFCAB0" style="color:#CFCAB0;">vscode-theme set sage-paper-dark</span></div>
      <div><span title="terminal.ansiGreen &mdash; #7FA77E" style="color:#7FA77E;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #CFCAB0" style="color:#CFCAB0;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #CFCAB0" style="color:#CFCAB0;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #A3C5A2" style="display:inline-block;width:7px;height:12px;background:#A3C5A2;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #2C3228" style="background:#2C3228;color:#CFCAB0;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #A3C5A255;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `sage-paper-dark`  
**Accent:** `#A3C5A2` &middot; **Background:** `#1E241B` &middot; **Title bar:** `#2C3228`

---


### Z &mdash; Prism spark<!-- omit in toc -->


> Cool slate base with a four-color gradient palette — cornflower blue, coral, mint, and gold — distributed across UI states and terminal ANSI. Inspired by a 4-pointed prism star.


<div class="vsc-card" style="--hvr-bg:#6495ED14;--hvr-fg:#D8DCE8;font-family:Menlo,Consolas,monospace;font-size:12px;border-radius:10px;overflow:hidden;max-width:640px;">
  <div title="titleBar.activeBackground &mdash; #262B37" style="background:#262B37;color:#D8DCE8;padding:7px 14px;display:flex;align-items:center;gap:8px;border-bottom:2px solid #6495ED;">
    <span style="display:flex;gap:5px;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span><span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span></span>
    <span title="titleBar.inactiveForeground &mdash; #9EA3B3" style="flex:1;text-align:center;font-size:11px;color:#9EA3B3;">vacode-theme &mdash; VS Code</span>
  </div>
  <div style="display:flex;height:150px;">
    <div title="activityBar.background &mdash; #20242F" style="background:#20242F;width:36px;display:flex;flex-direction:column;align-items:center;padding:8px 0;gap:10px;">
      <span title="activityBar.foreground &mdash; #6495ED" style="width:18px;height:18px;background:#6495ED;border-radius:3px;display:block;"></span>
      <span title="activityBar.inactiveForeground &mdash; #7A8094" style="width:18px;height:18px;background:#7A8094;border-radius:3px;display:block;opacity:.55;"></span>
      <span title="activityBar.inactiveForeground &mdash; #7A8094" style="width:18px;height:18px;background:#7A8094;border-radius:3px;display:block;opacity:.55;"></span>
    </div>
    <div title="sideBar.background &mdash; #20242F" style="background:#20242F;width:160px;padding:8px 0;border-right:1px solid #363D4D;">
      <div title="sideBarTitle.foreground &mdash; #6495ED" style="color:#6495ED;font-size:10px;font-weight:700;padding:0 10px 6px;letter-spacing:.08em;">EXPLORER</div>
      <div class="sb-item sb-active" title="list.activeSelectionForeground (accent) &mdash; #6495ED" style="color:#6495ED;font-size:11px;padding:3px 10px 3px 22px;background:#6495ED22;">settings.json</div>
      <div class="sb-item" title="gitDecoration.modifiedResourceForeground &mdash; #F4BC42" style="color:#F4BC42;font-size:11px;padding:3px 10px 3px 22px;">src/index.ts</div>
      <div class="sb-item" title="gitDecoration.untrackedResourceForeground &mdash; #70C77F" style="color:#70C77F;font-size:11px;padding:3px 10px 3px 22px;">package.json</div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;background:#1A1D28;">
      <div title="editorGroupHeader.tabsBackground &mdash; #262B37" style="background:#262B37;display:flex;border-bottom:1px solid #363D4D;">
        <span title="tab.activeBackground &mdash; #1A1D28" style="padding:5px 14px;font-size:11px;color:#D8DCE8;border-top:2px solid #6495ED;background:#1A1D28;">settings.json</span>
        <span class="tab-inactive" title="tab.inactiveForeground &mdash; #9EA3B3" style="padding:5px 14px;font-size:11px;color:#9EA3B3;background:#262B37;">index.ts</span>
      </div>
      <div title="editor.background &mdash; #1A1D28" style="flex:1;padding:10px 14px;color:#D8DCE8;line-height:1.7;">
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #585F70" style="color:#585F70;margin-right:10px;">1</span><span title="accent &mdash; #6495ED" style="color:#6495ED;">"workbench.colorCustomizations"</span>: {</div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #585F70" style="color:#585F70;margin-right:10px;">2</span>&nbsp;&nbsp;<span title="accent &mdash; #6495ED" style="color:#6495ED;">"titleBar.activeBackground"</span>: <span title="textLink.foreground &mdash; #85AFF5" style="color:#85AFF5;">"#262B37"</span></div>
        <div style="font-size:11px;"><span title="editorLineNumber.foreground &mdash; #585F70" style="color:#585F70;margin-right:10px;">3</span>}</div>
      </div>
    </div>
  </div>
  <div title="panel.background &mdash; #20242F" style="background:#20242F;">
    <div style="display:flex;align-items:flex-end;gap:16px;padding:8px 14px 0;font-size:10px;font-weight:700;letter-spacing:.08em;border-bottom:1px solid #363D4D;">
      <span title="panelTitle.inactiveForeground &mdash; #7A8094" style="color:#7A8094;padding:0 0 6px;line-height:1;">PROBLEMS</span>
      <span title="panelTitle.inactiveForeground &mdash; #7A8094" style="color:#7A8094;padding:0 0 6px;line-height:1;">OUTPUT</span>
      <span title="panelTitle.inactiveForeground &mdash; #7A8094" style="color:#7A8094;padding:0 0 6px;line-height:1;">DEBUG CONSOLE</span>
      <span title="panelTitle.activeForeground &mdash; #D8DCE8" style="color:#D8DCE8;padding:0 0 5px;line-height:1;border-bottom:1px solid #6495ED;margin-bottom:-1px;">TERMINAL</span>
      <span title="panelTitle.inactiveForeground &mdash; #7A8094" style="color:#7A8094;padding:0 0 6px;line-height:1;">GITLENS</span>
    </div>
    <div title="terminal.background &mdash; #20242F" style="background:#20242F;padding:10px 14px;color:#D8DCE8;font-size:11px;line-height:1.5;">
      <div><span title="terminal.foreground &mdash; #D8DCE8" style="color:#D8DCE8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminal.foreground &mdash; #D8DCE8" style="color:#D8DCE8;">vscode-theme set prism-spark</span></div>
      <div><span title="terminal.ansiGreen &mdash; #70C77F" style="color:#70C77F;font-weight:700;">&check;</span> <span title="terminal.foreground &mdash; #D8DCE8" style="color:#D8DCE8;">Theme applied to workspace.</span></div>
      <div><span title="terminal.foreground &mdash; #D8DCE8" style="color:#D8DCE8;">PS C:\experiment\vscode-theme&gt;</span> <span title="terminalCursor.foreground &mdash; #6495ED" style="display:inline-block;width:7px;height:12px;background:#6495ED;vertical-align:text-bottom;"></span></div>
    </div>
  </div>
  <div title="statusBar.background &mdash; #262B37" style="background:#262B37;color:#D8DCE8;height:22px;display:flex;align-items:center;padding:0 10px;gap:12px;font-size:11px;border-top:1px solid #6495ED55;">
    <span style="opacity:.85;">main</span>
    <span style="opacity:.85;">No problems</span>
  </div>
</div>

**Theme name:** `prism-spark`  
**Accent:** `#6495ED` &middot; **Background:** `#1A1D28` &middot; **Title bar:** `#262B37`

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
| Apply a theme to the current workspace   | `vscode-theme set navy-orange`                                                      | `vscode-theme set navy-orange`                                                      |
| Apply a theme globally                   | `vscode-theme set navy-orange --global`<br>`vscode-theme set navy-orange -g`        | `vscode-theme set navy-orange -Global`<br>`vscode-theme set navy-orange -g`         |
| Reset workspace theme                    | `vscode-theme reset`                                                                | `vscode-theme reset`                                                                |
| Reset global theme                       | `vscode-theme reset --global`<br>`vscode-theme reset -g`                            | `vscode-theme reset -Global`<br>`vscode-theme reset -g`                             |
| Show version                             | `vscode-theme version`<br>`vscode-theme --version`<br>`vscode-theme -v`             | `vscode-theme version`<br>`vscode-theme --version`<br>`vscode-theme -v`             |
| Show help                                | `vscode-theme help`<br>`vscode-theme --help`<br>`vscode-theme -h`<br>`vscode-theme` | `vscode-theme help`<br>`vscode-theme --help`<br>`vscode-theme -h`<br>`vscode-theme` |

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

| File                                                                       | Description                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [VERSION](VERSION)                                                         | Single source of truth for the tool's version                         |
| [vscode-theme.sh](vscode-theme.sh)                                         | Shell function for macOS / Linux (bash / zsh) — carries `__VERSION__` |
| [vscode-theme.ps1](vscode-theme.ps1)                                       | PowerShell function for Windows — carries `__VERSION__`               |
| [.vscode-themes/navy-orange.json](.vscode-themes/navy-orange.json)         | Theme A — Navy + orange                                               |
| [.vscode-themes/squidink-yellow.json](.vscode-themes/squidink-yellow.json) | Theme B — Squid ink + yellow                                          |
| [.vscode-themes/bedrock-teal.json](.vscode-themes/bedrock-teal.json)       | Theme C — Bedrock teal                                                |
| [.vscode-themes/dark-ember.json](.vscode-themes/dark-ember.json)           | Theme D — Dark + ember red                                            |
| [.vscode-themes/forest-green.json](.vscode-themes/forest-green.json)       | Theme E — Forest green                                                |
| [.vscode-themes/royal-purple.json](.vscode-themes/royal-purple.json)       | Theme F — Royal purple                                                |
| [.vscode-themes/ocean-blue.json](.vscode-themes/ocean-blue.json)           | Theme G — Ocean blue                                                  |
| [.vscode-themes/rose-magenta.json](.vscode-themes/rose-magenta.json)       | Theme H — Rose magenta                                                |
| [.vscode-themes/paper-light.json](.vscode-themes/paper-light.json)         | Theme I — Paper light                                                 |
| [.vscode-themes/arctic-light.json](.vscode-themes/arctic-light.json)       | Theme J — Arctic light                                                |
| [.vscode-themes/frappe-teal.json](.vscode-themes/frappe-teal.json)         | Theme K — Frappé teal (Catppuccin-inspired dark)                      |
| [.vscode-themes/dawn-teal.json](.vscode-themes/dawn-teal.json)             | Theme L — Dawn teal (Rosé Pine Dawn-inspired light)                   |
| [.vscode-themes/leather-orange.json](.vscode-themes/leather-orange.json)   | Theme M — Leather orange                                              |
| [.vscode-themes/cocoa-gold.json](.vscode-themes/cocoa-gold.json)           | Theme N — Cocoa gold                                                  |
| [.vscode-themes/espresso-green.json](.vscode-themes/espresso-green.json)   | Theme O — Espresso green (light)                                      |
| [.vscode-themes/mountain-sunset.json](.vscode-themes/mountain-sunset.json) | Theme P — Mountain sunset                                             |
| [.vscode-themes/leather-orange-light.json](.vscode-themes/leather-orange-light.json) | Theme Q — Leather orange (light)                              |
| [.vscode-themes/cocoa-gold-light.json](.vscode-themes/cocoa-gold-light.json) | Theme R — Cocoa gold (light)                                          |
| [.vscode-themes/espresso-green-dark.json](.vscode-themes/espresso-green-dark.json) | Theme S — Espresso green (dark)                                 |
| [.vscode-themes/cobalt-crimson.json](.vscode-themes/cobalt-crimson.json) | Theme T — Cobalt + crimson                                            |
| [.vscode-themes/canary-red.json](.vscode-themes/canary-red.json)         | Theme U — Canary + red (light)                                        |
| [.vscode-themes/ember-gold.json](.vscode-themes/ember-gold.json)         | Theme V — Ember gold                                                  |
| [.vscode-themes/alpine-sunset.json](.vscode-themes/alpine-sunset.json)   | Theme W — Alpine sunset                                               |
| [.vscode-themes/sage-paper.json](.vscode-themes/sage-paper.json)         | Theme X — Sage paper (light, eye-friendly)                            |
| [.vscode-themes/sage-paper-dark.json](.vscode-themes/sage-paper-dark.json) | Theme Y — Sage paper dark (dark, eye-friendly)                       |
| [.vscode-themes/prism-spark.json](.vscode-themes/prism-spark.json)       | Theme Z — Prism spark (four-color gradient, dark)                     |

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
